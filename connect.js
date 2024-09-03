/*//ESSA BASE FOI CONSTRUÍDA, NO INTUITO DE OBTER A MELHOR PERFORMANCE DE SEUS BOT, NÃO UMA BASE PÚBLICA ENTT NAO VAZEM E NEM VENDAM SEM A MINHA AUTORIZAÇÃO
 ® COPYRIGHT BY YURI MODZ*/

const {
  default: makeWASocket,
  useMultiFileAuthState,
  makeInMemoryStore,
  DisconnectReason,
  WAGroupMetadata,
  relayWAMessage,
  MediaPathMap,
  mentionedJid,
  processTime,
  MediaType,
  MessageType,
  Presence,
  Mimetype,
  Browsers,
  delay,
  fetchLatestBaileysVersion,
  MessageRetryMap,
  extractGroupMetadata,
  generateWAMessageFromContent,
  proto,
  otherOpts,
  makeCacheableSignalKeyStore,
  PHONENUMBER_MCC,
} = require("@whiskeysockets/baileys");

const {
  fs,
  readline,
  LoggerB,
  Boom,
  axios,
  util,
  moment,
  time,
  date,
  getBuffer,
  banner2,
  banner3,
  colors,
  getGroupAdmins,
  mess,
  getRandom,
  NodeCache,
  getName,
  nescessario,
  setting,
  extractDDD,
  extractStateFromNumber,
  extractStateFromDDD,
} = require("./exports.js");

var { prefix, CREDENTIALS_USER } = require("./settings/settings.json");
var { fundo1, fundo2 } = require("./settings/links_img.json");

function DLT_FL(file) {
  try {
    fs.unlinkSync(file);
  } catch (error) {}
}

const logger = LoggerB.child({});
logger.level = "silent";

var qrcode = "./database/qr-code";
const usePairingCode = process.argv.includes("sim");

if (!usePairingCode && !fs.existsSync(`${qrcode}/creds.json`))
  console.log(
    colors.yellow(
      "- Aviso: Se você não estiver outro aparelho em mãos para realizar a leitura do qr-code, você usar a 2° opção seria ela ( sh start.sh sim ), sem os parenteses e você conectará com código de emparelhamento.\n"
    ) + "–"
  );
const useMobile = process.argv.includes("--mobile");

function collectNumbers(inputString) {
  return inputString.replace(/\D/g, "");
}

const originalConsoleInfo = console.info;

console.info = function () {
  const message = util.format(...arguments);
  const forbiddenStrings = [
    "Closing session: SessionEntry",
    "Removing old closed session: SessionEntry {",
    "Another forbidden string",
    "Closing stale open session for new outgoing prekey bundle",
  ];
  if (forbiddenStrings.some((msg) => message.includes(msg))) {
    return;
  }
  originalConsoleInfo.apply(console, arguments);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

const msgRetryCounterCache = new NodeCache();

async function startConnect() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const { state, saveCreds } = await useMultiFileAuthState(qrcode);
  const { version, isLatest } = await fetchLatestBaileysVersion();

  async function getMessage(key) {
    if (store) {
      try {
        const msg = await store.loadMessage(key.remoteJid, key.id);
        return msg?.message || undefined;
      } catch (error) {
        console.error("Erro ao carregar a mensagem:", error);
        return undefined;
      }
    }
    return Promise.resolve({});
  }

  const akame = makeWASocket({
    version,
    logger,
    printQRInTerminal: !usePairingCode,
    mobile: useMobile,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger),
    },
    browser: ["Ubuntu", "Edge", "110.0.1587.56"],
    msgRetryCounterCache,
    generateHighQualityLinkPreview: true,
    patchMessageBeforeSending: (message) => {
      const requiresPatch = !!message?.interactiveMessage;
      if (requiresPatch) {
        message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadataVersion: 2,
                deviceListMetadata: {},
              },
              ...message,
            },
          },
        };
      }
      return message;
    },
    getMessage,
  });

  if (usePairingCode && !akame.authState.creds.registered) {
    if (useMobile) {
      throw new Error(
        "Não é possível usar código de emparelhamento com API móvel."
      );
    }

    const phoneNumber = await question(
      `${colors.gray("- Exemplo do número para realizar a conexão do bot: +55 65 9999-9999. Coloque do jeito que está no WhatsApp!")}\n–\n${colors.cyan("• Insira no parâmetro abaixo o número de telefone que você deseja conectar o bot no WhatsApp:\n")}`
    );
    let numerosColetados = collectNumbers(phoneNumber);
    const code = await akame.requestPairingCode(numerosColetados);
    console.log(
      `${colors.cyan("• Código para conectar o bot e desfrutar de suas imensas funcionalidades:")} ${colors.white(code)}\n–\n${colors.yellow("• Tutorial: Entre no WhatsApp que será o bot e vá em aparelhos conectado, e clique em “Conectar um aparelho”, e lá na parte inferior, clique em “Conectar com número de telefone” e digite o código gerado acima...")}`
    );
  }

  if (useMobile && !akame.authState.creds.registered) {
    const { registration } = akame.authState.creds || { registration: {} };
    if (!registration.phoneNumber) {
      registration.phoneNumber = await question(
        `${colors.cyan("Por favor, insira o seu número abaixo! Obs: Digite do jeito que está no WhatsApp senhor(a), não faça nenhuma modificação, pode ocorrer algum erro na conexão...\n")}`
      );
    }

    const libPhonenumber = await require("libphonenumber-js");
    const phoneNumber = libPhonenumber.parsePhoneNumber(
      registration.phoneNumber
    );
    if (!phoneNumber?.isValid()) {
      throw new Error(
        "Número de telefone inválido: " + registration.phoneNumber
      );
    }
    registration.phoneNumber = phoneNumber.format("E.164");
    registration.phoneNumberCountryCode = phoneNumber.countryCallingCode;
    registration.phoneNumberNationalNumber = phoneNumber.nationalNumber;
    const mcc = PHONENUMBER_MCC[phoneNumber.countryCallingCode];
    if (!mcc) {
      throw new Error(
        `Não foi possível encontrar MCC para o número de telefone: ${registration.phoneNumber}. Especifique o MCC manualmente!`
      );
    }
    registration.phoneNumberMobileCountryCode = mcc;
    async function enterCode() {
      try {
        const code = await question("Digite o código único:\n");
        const response = await akame.register(
          code.replace(/["']/g, "").trim().toLowerCase()
        );
        console.log("Seu número de telefone foi registrado com sucesso.");
        console.log(response);
        rl.close();
      } catch (error) {
        console.error(
          "Falha ao registrar seu número de telefone. Por favor, tente novamente.\n",
          error
        );
        await askForOTP();
      }
    }

    async function askForOTP() {
      let code = await question(
        'Como você gostaria de receber o código único para registro? "sms" ou "voz"\n'
      );
      code = code.replace(/["']/g, "").trim().toLowerCase();
      if (code !== "sms" && code !== "voice") {
        return await askForOTP();
      }
      registration.method = code;
      try {
        await akame.requestRegistrationCode(registration);
        await enterCode();
      } catch (error) {
        console.error(
          "Falha ao solicitar o código de registro. Por favor, tente novamente.\n",
          error
        );
        await askForOTP();
      }
    }
    askForOTP();
  }

  akame.ev.process(async (events) => {
    if (events["group-participants.update"]) {
      try {
        var naga2 = events["group-participants.update"];
        if (!fs.existsSync(`./database/grupos/activation_gp/${naga2.id}.json`))
          return;
        var jsonGp = JSON.parse(
          fs.readFileSync(`./database/grupos/activation_gp/${naga2.id}.json`)
        );

        if (naga2.participants[0].startsWith(akame.user.id.split(":")[0]))
          return;

        try {
          var grpmdt = await akame.groupMetadata(naga2.id);
        } catch (e) {
          return;
        }

        const isGroup2 = grpmdt.id.endsWith("@g.us");

        try {
          var GroupMetadata_ = isGroup2
            ? await akame.groupMetadata(naga2.id)
            : "";
        } catch (e) {
          return;
        }

        const membros_ = isGroup2 ? GroupMetadata_.participants : "";
        const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : "";

        if (naga2.action == "add") {
          num = naga2.participants[0];
          if (nescessario.listanegraG.includes(num)) {
            akame.sendMessage(GroupMetadata_.id, {
              text: mess.blackList(GroupMetadata_, naga2),
              mentions: naga2.participants,
            });
            akame.groupParticipantsUpdate(
              GroupMetadata_.id,
              [naga2.participants[0]],
              "remove"
            );
            return;
          }
        }
        if (naga2.action == "remove") {
          num = naga2.participants[0];
        }
        if (
          naga2.action == "add" &&
          jsonGp[0].listanegra.includes(naga2.participants[0])
        ) {
          await akame.sendMessage(GroupMetadata_.id, {
            text: mess.blackList(GroupMetadata_, naga2),
            mentions: naga2.participants,
          });
          akame.groupParticipantsUpdate(
            GroupMetadata_.id,
            [naga2.participants[0]],
            "remove"
          );
        }
        if (
          jsonGp[0].antifake &&
          naga2.action === "add" &&
          !naga2.participants[0].startsWith(55)
        ) {
          if (jsonGp[0].legenda_estrangeiro != "0") {
            await akame.sendMessage(GroupMetadata_.id, {
              text: jsonGp[0].legenda_estrangeiro,
            });
          }
          setTimeout(async () => {
            akame.groupParticipantsUpdate(
              GroupMetadata_.id,
              [naga2.participants[0]],
              "remove"
            );
          }, 1000);
        }
        if (
          jsonGp[0].ANTI_DDD.active &&
          naga2.action == "add" &&
          jsonGp[0].ANTI_DDD.listaProibidos.includes(
            extractDDD(naga2.participants[0].split("@")[0])
          )
        ) {
          akame.sendMessage(GroupMetadata_.id, {
            text: mess.forbiddenStateFromDDD(
              naga2.participants[0],
              extractStateFromDDD,
              extractDDD
            ),
            mentions: naga2.participants,
          });
          setTimeout(async () => {
            akame.groupParticipantsUpdate(
              GroupMetadata_.id,
              [naga2.participants[0]],
              "remove"
            );
          }, 1000);
        }
        if (
          !jsonGp[0].wellcome[1].bemvindo2 &&
          !jsonGp[0].wellcome[0].bemvindo1
        )
          return;
        try {
          var mdata_2 = isGroup2 ? await akame.groupMetadata(naga2.id) : "";
        } catch (e) {
          return;
        }
        const isWelcomed =
          jsonGp[0].wellcome[0].legendabv != null ? true : false;
        const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
        const isWelcomed2 =
          jsonGp[0].wellcome[1].legendabv != null ? true : false;
        const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
        const groupDesc = await mdata_2.desc;
        if (jsonGp[0].antifake == true && !naga2.participants[0].startsWith(55))
          return;
        if (jsonGp[0].wellcome[0].bemvindo1 == true) {
          try {
            ppimg = await akame.profilePictureUrl(naga2.participants[0]);
          } catch (e) {
            ppimg = "https://telegra.ph/file/24fa902ead26340f3df2c.png";
          }
          try {
            ppgp = await akame.profilePictureUrl(mdata_2.id);
          } catch (e) {
            ppgp = "https://telegra.ph/file/24fa902ead26340f3df2c.png";
          }
          shortpc = await axios.get(
            `https://tinyurl.com/api-create.php?url=${ppimg}`
          );

          if (naga2.action === "add") {
            if (isWelcomed) {
              teks = jsonGp[0].wellcome[0].legendabv
                .replace("#hora#", time)
                .replace("#nomedogp#", mdata_2.subject)
                .replace(
                  "#numerodele#",
                  "@" + naga2.participants[0].split("@")[0]
                )
                .replace("#numerobot#", akame.user.id)
                .replace(
                  "#prefixo#",
                  jsonGp[0].multiprefix == true
                    ? jsonGp[0].prefixos[0]
                    : setting.prefix
                )
                .replace("#descrição#", groupDesc)
                .replace(
                  "#estado#",
                  extractStateFromNumber(naga2.participants[0].split("@")[0])
                );
            } else {
              teks = welcome(
                naga2.participants[0].split("@")[0],
                mdata_2.subject
              );
            }
            let buff = await getBuffer(ppimg);
            ran = getRandom(".jpg");
            await fs.writeFileSync(ran, buff);
            akame.sendMessage(mdata_2.id, {
              image: {
                url:
                  CREDENTIALS_USER.API_URL +
                  `/api/canvas/welcome?titulo=Bem-vindo(a)!&perfil=${shortpc.data}&fundo=${fundo1}&desc=${mess.phrasesWelcome(mdata_2, getName, naga2, encodeURIComponent)}`,
              },
              mentions: naga2.participants,
              caption: teks,
            });
            DLT_FL(ran);
          } else if (naga2.action === "remove") {
            mem = naga2.participants[0];
            try {
              ppimg = await akame.profilePictureUrl(
                `${mem.split("@")[0]}@c.us`
              );
            } catch (e) {
              ppimg = "https://telegra.ph/file/24fa902ead26340f3df2c.png";
            }
            if (isByed) {
              teks = jsonGp[0].wellcome[0].legendasaiu
                .replace("#hora#", time)
                .replace("#nomedogp#", mdata_2.subject)
                .replace("#numerodele#", naga2.participants[0].split("@")[0])
                .replace("#numerobot#", akame.user.id)
                .replace(
                  "#prefixo#",
                  jsonGp[0].multiprefix == true
                    ? jsonGp[0].prefixos[0]
                    : setting.prefix
                )
                .replace("#descrição#", groupDesc)
                .replace(
                  "#estado#",
                  extractStateFromNumber(naga2.participants[0].split("@")[0])
                );
            } else {
              teks = bye(naga2.participants[0].split("@")[0]);
            }
            let buff = await getBuffer(ppimg);
            ran = getRandom(".jpg");
            fs.writeFileSync(ran, buff);
            akame.sendMessage(mdata_2.id, {
              image: {
                url:
                  CREDENTIALS_USER.API_URL +
                  `/api/canvas/welcome?titulo=Adeus!&perfil=${shortpc.data}&fundo=${fundo2}&desc=${mess.phrasesLeft(getName, naga2, encodeURIComponent)}`,
              },
              caption: teks,
              mentions: naga2.participants,
            });
            DLT_FL(ran);
          }
        }

        if (jsonGp[0].wellcome[1].bemvindo2 == true) {
          if (naga2.action === "add") {
            if (isWelcomed2) {
              teks = jsonGp[0].wellcome[1].legendabv
                .replace("#hora#", time)
                .replace("#nomedogp#", mdata_2.subject)
                .replace("#numerodele#", naga2.participants[0].split("@")[0])
                .replace("#numerobot#", akame.user.id)
                .replace(
                  "#prefixo#",
                  jsonGp[0].multiprefix == true
                    ? jsonGp[0].prefixos[0]
                    : setting.prefix
                )
                .replace("#descrição#", groupDesc)
                .replace(
                  "#estado#",
                  extractStateFromNumber(naga2.participants[0].split("@")[0])
                );
            } else {
              teks = welcome2(
                naga2.participants[0].split("@")[0],
                mdata_2.subject
              );
            }
            akame.sendMessage(mdata_2.id, {
              text: teks,
              mentions: naga2.participants,
            });
          } else if (naga2.action === "remove") {
            var mem = naga2.participants[0];
            if (isByed2) {
              teks = jsonGp[0].wellcome[1].legendasaiu
                .replace("#hora#", time)
                .replace("#nomedogp#", mdata_2.subject)
                .replace("#numerodele#", mem.split("@")[0])
                .replace("#numerobot#", akame.user.id)
                .replace(
                  "#prefixo#",
                  jsonGp[0].multiprefix == true
                    ? jsonGp[0].prefixos[0]
                    : setting.prefix
                )
                .replace("#descrição#", groupDesc)
                .replace(
                  "#estado#",
                  extractStateFromNumber(naga2.participants[0].split("@")[0])
                );
            } else {
              teks = bye2(mem.split("@")[0]);
            }
            akame.sendMessage(mdata_2.id, {
              text: teks,
              mentions: naga2.participants,
            });
          }
        }
      } catch (e) {
        console.log(e);
      }
    }

    if (events["connection.update"]) {
      const update = events["connection.update"];
      var { connection, lastDisconnect } = update;
      const shouldReconnect = new Boom(lastDisconnect?.error)?.output
        .statusCode;

      switch (connection) {
        case "close":
          if (shouldReconnect) {
            if (shouldReconnect == 401) {
              console.log(colors.red(mess.ErrorBaileys_401()));
            } else if (shouldReconnect == 408) {
              console.log(colors.yellow(mess.ErrorBaileys_408()));
            } else if (shouldReconnect == 411) {
              console.log(colors.yellow(mess.ErrorBaileys_411()));
            } else if (shouldReconnect == 428) {
              console.log(colors.yellow(mess.ErrorBaileys_428()));
            } else if (shouldReconnect == 440) {
              console.log(colors.gray(mess.ErrorBaileys_440()));
            } else if (shouldReconnect == 500) {
              console.log(colors.gray(mess.ErrorBaileys_500()));
            } else if (shouldReconnect == 503) {
              console.log(
                colors.gray("Ocorreu um erro desconhecido! Error: 503.")
              );
            } else if (shouldReconnect == 515) {
              console.log(colors.gray(mess.ErrorBaileys_515()));
            } else {
              console.log(
                `${colors.red("[CONNECTION CLOSED]")} Conexão fechada por motivo do erro: ${lastDisconnect?.error}`
              );
            }
            startConnect();
          }
          break;

        case "connecting":
          console.log(
            `${colors.white("×")} [${colors.red(date, time)}] - ${colors.yellow(mess.connecting())}`
          );
          break;

        case "open":
          console.log(banner3.string);
          console.log(banner2.string);
          console.log(
            `${colors.yellow("✓")} [${colors.green("akame-BOT 5.0.0")}] - ${colors.green(mess.open())}`
          );
          rl.close();
          await akame.sendPresenceUpdate("available");
          break;

        default:
          break;
      }
    }

    if (events["messages.upsert"]) {
      var upsert = events["messages.upsert"];

      const startakame = require("./index.js");
      startakame(upsert, akame, qrcode)
        .then(() => {})
        .catch((error) => {
          console.log(String(error));
        });
    }

    if (events["creds.update"]) {
      await saveCreds();
    }
  });
}

startConnect().catch(async (error) => {
  return console.log(
    colors.red("Ocorreu um erro ao inicializar o bot: " + error)
  );
});
