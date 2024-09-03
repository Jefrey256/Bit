const {
  downloadContentFromMessage,
  relayWAMessage,
  mentionedJid,
  processTime,
  MediaType,
  Browser,
  MessageType,
  Presence,
  Mimetype,
  Browsers,
  delay,
  getLastMessageInChat,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  logger,
  makeInMemoryStore,
  getContentType,
  INativeFlowMessage,
  prepareWAMessageMedia,
} = require("@whiskeysockets/baileys");

const {
  fs,
  Boom,
  axios,
  crypto,
  util,
  P,
  linkfy,
  request,
  cheerio,
  ms,
  ffmpeg,
  qrterminal,
  exec,
  spawn,
  execSync,
  moment,
  color,
  time,
  hora,
  date,
  getBuffer,
  convertSticker,
  recognize,
  fetchJson,
  fetchText,
  fetch,
  getBase64,
  createExif,
  writeExifImg,
  upload,
  nit,
  addBanned,
  unBanned,
  BannedExpired,
  cekBannedUser,
  validmove,
  setGame,
  addComandosId,
  deleteComandos,
  getComandoBlock,
  getComandos,
  addComandos,
  palavrasANA,
  quizanimais,
  garticArchives,
  whatMusicAr,
  enigmaArchive,
  quizFutebol,
  getpc,
  supre,
  wait,
  getExtension,
  generateMessageID,
  vyroEngine,
  getGroupAdmins,
  getMembros,
  emoji,
  sendPoll,
  getRandom,
  banner2,
  banner3,
  temporizador,
  chyt,
  kyun,
  TimeCount,
  simih,
  botoff,
  colors,
  os,
  arcloud,
  addFilter,
  isFiltered,
  ytdl,
  psycatgames,
  MultiDownload,
  AssemblyAI,
  obeso,
  countDays,
  timeDate,
  Limit_CMD,
  capitalizeFirstLetter,
  shuffle,
  pushnames,
  formatNumber,
  formatNumberDecimal,
  awaitMessage,
  listCommands,
  extractMetadata,
  extractDDD,
  extractStateFromNumber,
  extractStateFromDDD,
} = require("./exports.js");

const {
  linguagem,
  mess,
  getInfo,
  destrava,
  destrava2,
  tabela,
  namoro1,
  namoro2,
  tools,
  advices,
  ban,
  joguinhodavelhajs,
  joguinhodavelhajs2,
  nescessario,
  setting,
  logoslink,
  ftmenu,
  vip,
  rgtake,
  muted,
  countMessage,
  sendVideoAsSticker,
  sendImageAsSticker,
  sendVideoAsSticker2,
  sendImageAsSticker2,
  sotoy,
  daily,
  comandos,
  limitefll,
  antispam,
  anotar,
  enviarfiguUrl,
  getFileBuffer,
  DLT_FL,
  sleep,
  ANT_LTR_MD_EMJ,
  packname,
  getName,
  level2,
  chaves,
  grupos,
  aluguel,
} = require("./exports.js");

const {
  antipv,
  antipv2,
  antipv3,
  visualizarmsg,
  numero_dono1,
  numero_dono2,
  numero_dono3,
  numero_dono4,
  numero_dono5,
  numero_dono6,
  msgantipv1,
  msgantipv2,
  API_KEY_INVERTEXTO,
} = require("./settings/nescessario.json");

const {
  NomeDoBot,
  ownerName,
  prefix,
  channel,
  group,
  CREDENTIALS_USER,
} = require("./settings/settings.json");

const {
  audio_menu,
  bom_dia,
  boa_tarde,
  boa_noite,
  corno,
  qviado,
} = require("./settings/media/audios.json");

const {
  fundo1,
  fundolevel,
  fundo2,
  imgnazista,
  imggay,
  imgcorno,
  imggostosa,
  imggostoso,
  imgfeio,
  imgvesgo,
  imgbebado,
  imggado,
  matarcmd,
  deathcmd,
  beijocmd,
  chutecmd,
  tapacmd,
  rnkgay,
  rnkgado,
  rnkcorno,
  rnkgostoso,
  rnkgostosa,
  rnknazista,
  rnkotaku,
  rnkpau,
  suruba,
  minado_bomb,
  thumbnail,
  imgsigma,
  imgbeta,
  imgbaiano,
  imgbaiana,
  imgcarioca,
  imglouco,
  imglouca,
  imgsafada,
  imgsafado,
  imgmacaco,
  imgmacaca,
  imgputa,
  rnksigma,
  rnkbeta,
  rnkbaiano,
  rnkbaiana,
  rnkcarioca,
  rnklouco,
  rnklouca,
  rnksafada,
  rnksafado,
  rnkmacaco,
  rnkmacaca,
  rnkputa,
} = require("./settings/links_img.json");

const II = "```";

var numerodono_ofc = setting.ownerNumber.replace(
  new RegExp("[()+-/ +/]", "gi"),
  ""
);

process.on("uncaughtException", function (err) {
  console.error(new Date().toUTCString() + " uncaughtException:", err.message);
  console.error(err.stack);
});

const API_KEY_AKAME = CREDENTIALS_USER.API_KEY_AKAME || "SemApikey";
const API_URL = CREDENTIALS_USER.API_URL || "https://api.minhabucetinha.com.br";

// ABAIXO: INÍCIO DE CONEXÃO

async function startakame() {
  module.exports = akame = async (upsert, akame, qrcode) => {
    async function startFunctionNaga() {
      const nmrdn_dono2 =
        setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "") +
        "@s.whatsapp.net";

      for (const info of upsert?.messages || []) {
        const from = info.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const isStatus = from.endsWith("@broadcast");

        const VRF_JSON_GRUPO = fs.existsSync(
          `./database/grupos/activation_gp/${from}.json`
        )
          ? true
          : false;

        if (VRF_JSON_GRUPO) {
          var jsonGp = JSON.parse(
            fs.readFileSync(`./database/grupos/activation_gp/${from}.json`)
          );
        }

        if (VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType) {
          switch (info.messageStubType) {
            case 29:
              await delay(1000);
              await akame.sendMessage(info.key.remoteJid, {
                text: `*@${info.messageStubParameters[0].split("@")[0]}* foi promovido(a) ao cargo de adminstrador do grupo por: *@${info.participant.split("@")[0]}*.`,
                contextInfo: {
                  forwardingScore: 50000,
                  isForwarded: true,
                  mentionedJid: [
                    info.messageStubParameters[0],
                    info.participant,
                  ],
                  remoteJid: info.key.remoteJid,
                },
              });
              break;

            case 30:
              await delay(1000);
              await akame.sendMessage(info.key.remoteJid, {
                text: `O(a) adminstrador(a) *@${info.messageStubParameters[0].split("@")[0]}* foi rebaixado(a) à membro comum por: *@${info.participant.split("@")[0]}*.`,
                contextInfo: {
                  forwardingScore: 50000,
                  isForwarded: true,
                  mentionedJid: [
                    info.messageStubParameters[0],
                    info.participant,
                  ],
                  remoteJid: info.key.remoteJid,
                },
              });
              break;
          }
        }

        if (!info.message) return;
        if (upsert.type == "append") return;
        const baileys = require("@whiskeysockets/baileys");
        const type = baileys.getContentType(info.message);
        const content = JSON.stringify(info.message);
        const pushname = info.pushName ? info.pushName : "";

        if (visualizarmsg) {
          await akame.readMessages([info.key]);
        } else {
          if (from == "status@broadcast") return;
        }

        global.prefix;
        global.blocked;

        //==============(BODY)================\\

        const body =
          info.message?.conversation ||
          info.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
          info.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
          info.message?.imageMessage?.caption ||
          info.message?.videoMessage?.caption ||
          info.message?.extendedTextMessage?.text ||
          info.message?.viewOnceMessage?.message?.videoMessage?.caption ||
          info.message?.viewOnceMessage?.message?.imageMessage?.caption ||
          info.message?.documentWithCaptionMessage?.message?.documentMessage
            ?.caption ||
          info.message?.buttonsMessage?.imageMessage?.caption ||
          info.message?.buttonsResponseMessage?.selectedButtonId ||
          info.message?.templateButtonReplyMessage?.selectedId ||
          info?.text ||
          info.message?.editedMessage?.message?.protocolMessage?.editedMessage
            ?.extendedTextMessage?.text ||
          info.message?.editedMessage?.message?.protocolMessage?.editedMessage
            ?.imageMessage?.caption ||
          info.message.interactiveMessage?.body ||
          JSON.parse(
            info.message.interactiveResponseMessage.nativeFlowResponseMessage
              .paramsJson
          ).id ||
          "" ||
          "";

        var Procurar_String =
          info.message?.conversation ||
          info.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
          info.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
          info.message?.imageMessage?.caption ||
          info.message?.videoMessage?.caption ||
          info.message?.extendedTextMessage?.text ||
          info.message?.viewOnceMessage?.message?.videoMessage?.caption ||
          info.message?.viewOnceMessage?.message?.imageMessage?.caption ||
          info.message?.documentWithCaptionMessage?.message?.documentMessage
            ?.caption ||
          info.message?.buttonsMessage?.imageMessage?.caption ||
          "";

        const args = body.trim().split(/ +/).slice(1);

        const budy2 = body
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        if (
          isGroup &&
          fs.existsSync(`./database/grupos/activation_gp/${from}.json`) &&
          jsonGp[0].multiprefix
        ) {
          var prefix =
            jsonGp[0]?.prefixos[
              jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))
            ] || jsonGp[0].prefixos[0];
        }

        if (
          isGroup &&
          fs.existsSync(`./database/grupos/activation_gp/${from}.json`) &&
          !jsonGp[0].multiprefix
        ) {
          var prefix = setting.prefix;
        } else if (!isGroup) {
          var prefix = setting.prefix;
        }

        var isCmd = body.trim().startsWith(prefix);

        const command = isCmd
          ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase()
          : null;

        const q_2 = budy2.trim().split(/ +/).slice(1).join(" ");

        const q = args.join(" ");

        var budy =
          type === "conversation"
            ? info.message?.conversation
            : type === "extendedTextMessage"
              ? info.message?.extendedTextMessage?.text
              : "";

        var budy3 = budy
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        var PR_String = Procurar_String.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");

        //======================================\\

        try {
          var groupMetadata = isGroup ? await akame.groupMetadata(from) : "";
        } catch {
          return;
        }

        const groupName = isGroup ? groupMetadata.subject : "";

        const sender = isGroup
          ? info.key.participant.includes(":")
            ? info.key.participant.split(":")[0] + "@s.whatsapp.net"
            : info.key.participant
          : info.key.remoteJid;

        const messagesC = PR_String.slice(0)
          .trim()
          .split(/ +/)
          .shift()
          .toLowerCase();

        const arg = body.substring(body.indexOf(" ") + 1);

        const botNumber =
          (await akame.user.id.split(":")[0]) + "@s.whatsapp.net";
        const argss = body.split(/ +/g);
        const testat = body;
        const ants = body;

        const groupDesc = isGroup ? groupMetadata.desc : "";

        const groupMembers = isGroup ? groupMetadata.participants : "";

        const isnit = nit.includes(sender);

        const issupre = supre.includes(sender);

        const ischyt = chyt.includes(sender);

        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";

        const somembros = isGroup ? getMembros(groupMembers) : "";

        //======================================\\

        const nmrdn =
          setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "") +
            `@s.whatsapp.net` || isnit;

        const numerodono = [
          `${nmrdn}`,
          `${numero_dono1}@s.whatsapp.net`,
          `${numero_dono2}@s.whatsapp.net`,
          `${numero_dono3}@s.whatsapp.net`,
          `${numero_dono4}@s.whatsapp.net`,
          `${numero_dono5}@s.whatsapp.net`,
          `${numero_dono6}@s.whatsapp.net`,
        ];

        //=====================================\\

        //=================> Funções de Grupo 🥋

        const dirGroup = `./database/grupos/activation_gp/${from}.json`;

        const nescj = "./settings/nescessario.json";

        if (isGroup && !fs.existsSync(dirGroup)) {
          var data = [
            {
              name: groupName,
              groupId: from,
              x9: false,
              antiimg: false,
              antivideo: false,
              antiaudio: false,
              antisticker: false,
              antidoc: false,
              antictt: false,
              antiloc: false,
              antilinkgp: false,
              antilinkhard: false,
              antilinkeasy: false,
              antifake: false,
              antiporn: false,
              Odelete: false,
              antispam: false,
              antinotas: false,
              anticatalogo: false,
              visuUnica: false,
              registrarFIGUS: false,
              soadm: false,
              listanegra: [],
              advertir: [],
              prefixos: [`${setting.prefix}`],
              advertir2: [],
              legenda_estrangeiro: "0",
              legenda_documento: "0",
              legenda_video: "0",
              legenda_imagem: "0",
              multiprefix: false,
              ausentes: [],
              ANTI_DDD: {
                active: false,
                listaProibidos: [],
              },
              antipalavrao: {
                active: false,
                palavras: [],
              },
              limitec: {
                active: false,
                quantidade: null,
              },
              wellcome: [
                {
                  bemvindo1: false,
                  legendabv:
                    "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
                  legendasaiu: 0,
                },
                {
                  bemvindo2: false,
                  legendabv:
                    "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
                  legendasaiu: 0,
                },
              ],
              simi1: false,
              autosticker: false,
              autoresposta: false,
              jogos: false,
              level: false,
              bangp: false,
              modo_rpg: false,
            },
          ];
          fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + "\n");
        }

        const dataGp = isGroup
          ? JSON.parse(fs.readFileSync(dirGroup))
          : undefined;

        var DFNMULTIP = `./database/func/prefixo/multip_${from}.json`;

        function setGp(index) {
          fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + "\n");
        }

        function setNes(index) {
          fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + "\n");
        }

        //=====(ADMS/DONO/ETC..CONST)=======\\

        const adivinha =
          info.key.id.length > 21
            ? "Android"
            : info.key.id.substring(0, 2) == "3A"
              ? "iPhone"
              : "WhatsApp Web";

        const quoted = info.quoted ? info.quoted : info;

        const isBot = info.key.fromMe ? true : false;

        const SoDono =
          numerodono.includes(sender) || isBot || isnit || issupre || ischyt;

        dfndofc = setting.ownerNumber + "@s.whatsapp.net";

        const DonoOficial = dfndofc.includes(sender);

        const isVip = vip.map((i) => i.id).includes(sender) || SoDono;

        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;

        const isGroupAdmins =
          groupAdmins.includes(sender) || false || DonoOficial;

        const isListaBrancaG = nescessario.listabrancaG.includes(sender);

        const isBanned = ban.includes(sender);

        const isVisualizar = nescessario.visualizarmsg;

        const isVerificado = nescessario.verificado;

        const isWelcomePrivate = nescessario.welcomepv;

        const isAudioMenu = nescessario.menu_audio;

        const isAntiPv = nescessario.antipv;

        const isAntiPv2 = nescessario.antipv2;

        const isAntiPv3 = nescessario.antipv3;

        const isBotoff = nescessario.botoff;

        const listanegraG = nescessario.listanegraG;

        const listabrancaG = nescessario.listabrancaG;

        const isAnticall = nescessario.anticall;

        const TOKEN_GPT = nescessario.TOKEN_GPT;

        const isCmdVip = nescessario.cmd_vip;

        const isBlockCmdG = nescessario.blockCmdG;

        const isCargo = SoDono
          ? "Meu Mestre."
          : isGroupAdmins
            ? "Adminstrador."
            : "Membro Comum.";

        const isChVip = isVip ? "✓" : "✕";

        //============(FUNÇÕES)============\\

        const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false;

        const isAntiImg = isGroup ? dataGp[0].antiimg : undefined;

        const isLimitCmd = isGroup ? dataGp[0]?.Limitar_CMD : undefined;

        const isAntiVid = isGroup ? dataGp[0].antivideo : undefined;

        const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined;

        const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined;

        const Antidoc = isGroup ? dataGp[0].antidoc : undefined;

        const isAntiCtt = isGroup ? dataGp[0].antictt : undefined;

        const Antiloc = isGroup ? dataGp[0].antiloc : undefined;

        const isAntiDDD = isGroup ? dataGp[0].ANTI_DDD.active : undefined;

        const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined;

        const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined;

        const isAntiLinkEasy = isGroup ? dataGp[0].antilinkeasy : undefined;

        const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined;

        const isAntifake = isGroup ? dataGp[0].antifake : undefined;

        const IS_DELETE = nescessario.Odelete;

        const So_Adm = isGroup ? dataGp[0].soadm : undefined;

        const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined;

        const ADVT = isGroup ? dataGp[0].advertir : undefined;

        const ADVT2 = isGroup ? dataGp[0].advertir2 : undefined;

        const isx9 = isGroup ? dataGp[0].x9 : undefined;

        const isMultiP = isGroup ? dataGp[0].multiprefix : undefined;

        const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined;

        const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined;

        const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined;

        const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined;

        const isSimi = isGroup ? dataGp[0].simi1 : undefined;

        const isAutofigu = isGroup ? dataGp[0].autosticker : undefined;

        const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined;

        const isModobn = isGroup ? dataGp[0].jogos : undefined;

        const isLevelingOn = isGroup ? dataGp[0].level : undefined;

        const isBanchat = isGroup ? dataGp[0].bangp : undefined;

        const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined;

        const isPalavras = isGroup
          ? dataGp[0].antipalavrao.palavras
          : undefined;

        const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined;

        const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined;

        const isModoAluguel = nescessario.modo_aluguel;

        const isModoRPG = isGroup ? dataGp[0].modo_rpg : undefined;

        //============(VERIFICADOS)============\\

        const AkamLive = {
          key: { participant: "0@s.whatsapp.net" },
          message: { liveLocationMessage: { caption: `Usuário: ${pushname}` } },
        };

        const AkamPhoto = {
          key: { participant: "0@s.whatsapp.net" },
          message: { imageMessage: { caption: pushname } },
        };

        const AkamVideo = {
          key: { participant: "0@s.whatsapp.net" },
          message: { videoMessage: { caption: pushname } },
        };

        const AkamContact = {
          key: { participant: "0@s.whatsapp.net" },
          message: { contactMessage: { displayName: `${pushname}` } },
        };

        const AkamDocument = {
          key: { participant: "0@s.whatsapp.net" },
          message: { documentMessage: { caption: pushname } },
        };

        if (!isVerificado) {
          var selo = AkamLive;
        } else {
          var selo = info;
        }

        // FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

        const menc_prt =
          info.message?.extendedTextMessage?.contextInfo?.participant;

        const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net";

        const menc_jid2 =
          info.message?.extendedTextMessage?.contextInfo?.mentionedJid;

        const sender_ou_n = q.includes("@") ? menc_jid : sender;

        const mrc_ou_numero =
          q.length > 6 && !q.includes("@")
            ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
            : menc_prt;
        const menc_os2 = q.includes("@") ? menc_jid : menc_prt;

        const marc_tds = q.includes("@")
          ? menc_jid
          : q.length > 6 && !q.includes("@")
            ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
            : menc_prt;

        const menc_prt_nmr =
          q.length > 12
            ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
            : menc_prt;

        ////////////////////////////////////////////

        var isUrl = (url) => {
          if (linkfy.find(url)[0]) return true;
          return false;
        };

        //
        const time2 = moment().tz("America/Sao_Paulo").format("HH:mm:ss");

        if (time2 > "00:00:00" && time2 < "05:00:00") {
          var tempo = "Boa noite";
          var tempo2 = "𝐁𝐨𝐚 𝐧𝐨𝐢𝐭𝐞";
        }
        if (time2 > "05:00:00" && time2 < "12:00:00") {
          var tempo = "Bom dia";
          var tempo2 = "𝐁𝐨𝐦 𝐝𝐢𝐚";
        }
        if (time2 > "12:00:00" && time2 < "18:00:00") {
          var tempo = "Boa tarde";
          var tempo2 = "𝐁𝐨𝐚 𝐭𝐚𝐫𝐝𝐞";
        }
        if (time2 > "18:00:00") {
          var tempo = "Boa noite";
          var tempo2 = "𝐁𝐨𝐚 𝐧𝐨𝐢𝐭𝐞";
        }

        if (!isCmd && info.key.fromMe) return;

        async function reply(content, type, options = {}) {
          const isFullUrl = (url) =>
            new RegExp(
              /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
              "gi"
            ).test(url);
          const mediaKeys = [
            "image",
            "video",
            "sticker",
            "audio",
            "document",
            "history",
            "md-app-state",
          ];
          options[type || "text"] =
            isFullUrl(content) && mediaKeys.includes(type)
              ? { url: content }
              : content;
          await akame
            .sendMessage(from, options, { quoted: selo })
            .catch(async (error) => {
              await akame.sendMessage(
                from,
                {
                  text: "Ocorreu um erro ao encaminhar a mensagem pré-definida na função.",
                },
                { quoted: selo }
              );
            });
        }

        async function sendUrlText(
          id,
          textCaption,
          title,
          desc,
          imageUrl,
          linkAcess,
          quotedThis
        ) {
          await akame.sendMessage(
            id,
            {
              text: textCaption,
              contextInfo: {
                externalAdReply: {
                  title: title,
                  body: desc,
                  thumbnail: await getBuffer(imageUrl),
                  mediaType: 1,
                  sourceUrl: linkAcess,
                },
              },
            },
            { quoted: quotedThis }
          );
        }

        async function replyWithNewsletter(
          text,
          options = {},
          quotedThis = info
        ) {
          await akame
            .sendMessage(
              from,
              { text: text, contextInfo: options },
              { quoted: quotedThis }
            )
            .catch(async (error) => {
              await akame.sendMessage(
                from,
                {
                  text: "Ocorreu um erro ao encaminhar a mensagem pré-definida na função.",
                },
                { quoted: selo }
              );
            });
        }

        async function replyWithReaction(
          text,
          options = {},
          quotedThis = info
        ) {
          await akame.sendMessage(from, options);
          await akame
            .sendMessage(from, { text: text }, { quoted: quotedThis })
            .catch(async (error) => {
              await akame.sendMessage(
                from,
                {
                  text: "Ocorreu um erro ao encaminhar a mensagem pré-definida na função.",
                },
                { quoted: selo }
              );
            });
        }

        const sendSticker = async (ChatID, FileN, quotedThis) => {
          await akame
            .sendMessage(ChatID, { sticker: { url: FileN } }, { quoted: selo })
            .catch(async (error) => {
              await akame.sendMessage(
                from,
                { text: "Ocorreu um erro ao enviar o sticker." },
                { quoted: selo }
              );
            });
        };

        const sendImage = async (ChatID, FileN) => {
          await akame
            .sendMessage(ChatID, { image: { url: FileN } }, { quoted: selo })
            .catch(async (error) => {
              await akame.sendMessage(
                from,
                { text: "Ocorreu um erro ao enviar a imagem." },
                { quoted: selo }
              );
            });
        };

        const sendText = async (ChatID, texto) => {
          await akame
            .sendMessage(ChatID, { text: texto })
            .catch(async (error) => {
              await akame.sendMessage(
                from,
                {
                  text: "Ocorreu um erro ao encaminhar o texto pré-definido na função.",
                },
                { quoted: selo }
              );
            });
        };

        const sendMentions = async (local, teks) => {
          memberr = [];
          vy = teks.includes("\n") ? teks.split("\n") : [teks];
          for (vz of vy) {
            for (zn of vz.split(" ")) {
              if (zn.includes("@"))
                memberr.push(parseInt(zn.split("@")[1]) + "@s.whatsapp.net");
            }
          }
          await akame
            .sendMessage(
              local,
              { text: teks.trim(), mentions: memberr },
              { quoted: selo }
            )
            .catch(async (e) => {
              await akame.sendMessage(
                from,
                {
                  text: "Ocorreu um erro ao encaminhar a mensagem pré-definida na função.",
                },
                { quoted: selo }
              );
            });
        };

        const mentions = async (teks = "", mb, id) => {
          id == null || id == undefined || id == false
            ? await akame.sendMessage(from, { text: teks.trim(), mentions: mb })
            : await akame.sendMessage(
                from,
                { text: teks.trim(), mentions: mb },
                { quoted: selo }
              );
        };

        const mention = async (teks = "", ms = info) => {
          memberr = [];
          vy = teks.includes("\n") ? teks.split("\n") : [teks];
          for (vz of vy) {
            for (zn of vz.split(" ")) {
              if (zn.includes("@"))
                memberr.push(parseInt(zn.split("@")[1]) + "@s.whatsapp.net");
            }
          }
          await akame
            .sendMessage(
              from,
              { text: teks.trim(), mentions: memberr },
              { quoted: ms }
            )
            .catch(async (e) => {
              await akame.sendMessage(
                from,
                {
                  text: "Ocorreu um erro ao encaminhar a mensagem pré-definida na função.",
                },
                { quoted: selo }
              );
            });
        };

        const mentionSemQuoted = async (teks) => {
          memberr = [];
          vy = teks.includes("\n") ? teks.split("\n") : [teks];
          for (vz of vy) {
            for (zn of vz.split(" ")) {
              if (zn.includes("@"))
                memberr.push(parseInt(zn.split("@")[1]) + "@s.whatsapp.net");
            }
          }
          await akame
            .sendMessage(from, { text: teks.trim(), mentions: memberr })
            .catch(async (e) => {
              await akame.sendMessage(
                from,
                {
                  text: "Ocorreu um erro ao encaminhar a mensagem pré-definida na função.",
                },
                { quoted: selo }
              );
            });
        };

        const mencionarIMG = async (teks = "", FileN, thisQuoted = info) => {
          memberr = [];
          vy = teks.includes("\n") ? teks.split("\n") : [teks];
          for (vz of vy) {
            for (zn of vz.split(" ")) {
              if (zn.includes("@"))
                memberr.push(parseInt(zn.split("@")[1]) + "@s.whatsapp.net");
            }
          }
          await akame
            .sendMessage(
              from,
              {
                image: { url: FileN },
                caption: teks.trim(),
                mentions: memberr,
              },
              { quoted: thisQuoted }
            )
            .catch(async (error) => {
              await akame.sendMessage(
                from,
                {
                  text: "Ocorreu um erro ao encaminhar a imagem e o texto pré-definidos na função.",
                },
                { quoted: selo }
              );
            });
        };

        const reagir = async (idgp, emj) => {
          await akame.sendMessage(idgp, {
            react: { text: emj, key: info.key },
          });
        };

        const verificarN = async (sla) => {
          const [result] = await akame.onWhatsApp(sla);
          if (result == undefined) {
            reply("Este usuário não é existente no WhatsApp");
          } else {
            reply(
              `${sla} Número inserido é existente no WhatsApp com o id: ${result.jid}`
            );
          }
        };

        if (
          isGroup &&
          isBotGroupAdmins &&
          !isGroupAdmins &&
          !SoDono &&
          !info.key.fromMe
        ) {
          if (menc_jid2?.length >= groupMembers.length - 1) {
            await akame.sendMessage(
              from,
              { text: mess.markingAllMember() },
              { quoted: selo }
            );
            if (IS_DELETE) {
              setTimeout(async () => {
                await akame.sendMessage(from, {
                  delete: {
                    remoteJid: from,
                    fromMe: false,
                    id: info.key.id,
                    participant: sender,
                  },
                });
              }, 500);
            }
            akame.groupParticipantsUpdate(from, [sender], "remove");
          }
        }

        if (isAutofigu && isGroup) {
          async function autofiguf() {
            setTimeout(async () => {
              if (
                budy.includes(`${prefix}sticker`) ||
                budy.includes(`${prefix}s`) ||
                budy.includes(`${prefix}stk`) ||
                budy.includes(`${prefix}st`) ||
                budy.includes(`${prefix}fsticker`) ||
                budy.includes(`${prefix}f`) ||
                budy.includes(`${prefix}fstiker`)
              )
                return;
              if (type == "imageMessage") {
                var pack = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${ownerName}`;
                var author2 = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ ❪☁️ฺ࣭࣪͘ꕸ▸ 𝐆𝐫𝐮𝐩𝐨:\n• ↳ ${groupName}`;
                owgi = await getFileBuffer(info.message.imageMessage, "image");
                let encmediaa = await sendImageAsSticker2(
                  akame,
                  from,
                  owgi,
                  info,
                  { packname: pack, author: author2 }
                );
                DLT_FL(encmediaa);
              }
              if (type == "videoMessage") {
                if (isMedia && info.message.videoMessage.seconds < 10) {
                  var pack = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${ownerName}`;
                  var author2 = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ ❪☁️ฺ࣭࣪͘ꕸ▸ 𝐆𝐫𝐮𝐩𝐨:\n• ↳ ${groupName}`;
                  owgi = await getFileBuffer(
                    info.message.videoMessage,
                    "video"
                  );
                  let encmedia = await sendVideoAsSticker2(
                    akame,
                    from,
                    owgi,
                    info,
                    { packname: pack, author: author2 }
                  );
                  DLT_FL(encmedia);
                }
              }
            }, 1000);
          }
          autofiguf().catch((error) => {
            console.log(error);
          });
        }

        var nmrdnofc1 = setting.ownerNumber.replace(
          new RegExp("[()+-/ +/]", "gi"),
          ""
        );

        if (
          isGroup &&
          fs.existsSync(`./database/func/afk/afk-@${nmrdnofc1}.json`)
        ) {
          if (budy.indexOf(`@${nmrdnofc1}`) >= 0) {
            const tabelin = JSON.parse(
              fs.readFileSync(`./database/func/afk/afk-@${nmrdnofc1}.json`)
            );
            await akame.sendMessage(
              from,
              { text: mess.absenceRecordOwner(ownerName, tabelin) },
              { quoted: selo }
            );
          }
        }

        if (
          isGroup &&
          dataGp[0].ausentes?.length > 0 &&
          menc_jid2?.length > 0 &&
          JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)
        ) {
          blue = [];
          for (i of menc_jid2) {
            if (groupAdmins.indexOf(String(i)) != -1)
              blue.push(groupAdmins.indexOf(String(i)));
          }
          if (blue.length == 0) return;
          big = [];
          for (i of blue) {
            big.push(groupAdmins[i]);
          }
          blr = [];
          for (i = 0; i < big.length; i++) {
            blr.push(
              dataGp[0].ausentes[
                dataGp[0].ausentes.map((i) => i.id).indexOf(big[i])
              ]
            );
          }
          for (i of blr) {
            var blak = i;
          }
          await mention(mess.absenceRecordAdmin(blak));
        }

        if (isBotGroupAdmins && isGroupAdmins && body === "apaga") {
          if (!menc_prt) return;
          await akame.sendMessage(from, {
            delete: {
              remoteJid: from,
              fromMe: false,
              id: info.message.extendedTextMessage.contextInfo.stanzaId,
              participant: menc_prt,
            },
          });
        }

        if (!isVip && nescessario.cmd_vip.includes(command))
          return reply(mess.onlyVipUser());

        //========================================\\

        //BAN GRUPO & BOT OFF
        if (isGroup && isCmd && isBanchat && !SoDono) return;

        if (isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return;

        if (isBotoff && !SoDono) return;

        //=======================================\\

        const sendStickerFromUrl = async (to, url) => {
          try {
            var names = Date.now() / 10000;
            var download = function (uri, filename, callback) {
              request.head(uri, function (err, res, body) {
                request(uri)
                  .pipe(fs.createWriteStream(filename))
                  .on("close", callback);
              });
            };
            download(url, "./sticker" + names + ".png", async function () {
              let filess = "./sticker" + names + ".png";
              let asw = "./sticker" + names + ".webp";
              exec(
                `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`,
                async (err) => {
                  let media = fs.readFileSync(asw);
                  await akame
                    .sendMessage(
                      to,
                      { sticker: media },
                      {
                        sendEphemeral: true,
                        contextInfo: { forwardingScore: 50, isForwarded: true },
                        quoted: selo,
                      }
                    )
                    .catch(async (error) => {
                      return reply(mess.error());
                    });
                  DLT_FL(filess);
                  DLT_FL(asw);
                }
              );
            });
          } catch {
            return reply(mess.error());
          }
        };

        //=========(isQuoted/consts)=============\\

        const isImage = type == "imageMessage";
        const isVideo = type == "videoMessage";
        const isVisuU2 = type == "viewOnceMessageV2";
        const isAudio = type == "audioMessage";
        const isSticker = type == "stickerMessage";
        const isContact = type == "contactMessage";
        const isLocation = type == "locationMessage";
        const isProduct = type == "productMessage";
        const isMedia =
          type === "imageMessage" ||
          type === "videoMessage" ||
          type === "audioMessage" ||
          type == "viewOnceMessage" ||
          type == "viewOnceMessageV2";
        typeMessage = body.substr(0, 50).replace(/\n/g, "");
        if (isImage) typeMessage = "Image";
        else if (isVideo) typeMessage = "Video";
        else if (isAudio) typeMessage = "Audio";
        else if (isSticker) typeMessage = "Sticker";
        else if (isContact) typeMessage = "Contact";
        else if (isLocation) typeMessage = "Location";
        else if (isProduct) typeMessage = "Product";

        const isQuotedMsg =
          type === "extendedTextMessage" && content.includes("conversation");

        const isQuotedMsg2 =
          type === "extendedTextMessage" && content.includes("text");

        const isQuotedImage =
          type === "extendedTextMessage" && content.includes("imageMessage");

        const isQuotedVisuU =
          type === "extendedTextMessage" && content.includes("viewOnceMessage");

        const isQuotedVisuU2 =
          type === "extendedTextMessage" &&
          content.includes("viewOnceMessageV2");

        const isQuotedVideo =
          type === "extendedTextMessage" && content.includes("videoMessage");

        const isQuotedDocument =
          type === "extendedTextMessage" && content.includes("documentMessage");

        const isQuotedDocW =
          type === "extendedTextMessage" &&
          content.includes("documentWithCaptionMessage");

        const isQuotedAudio =
          type === "extendedTextMessage" && content.includes("audioMessage");

        const isQuotedSticker =
          type === "extendedTextMessage" && content.includes("stickerMessage");

        const isQuotedContact =
          type === "extendedTextMessage" && content.includes("contactMessage");

        const isQuotedLocation =
          type === "extendedTextMessage" && content.includes("locationMessage");

        const isQuotedProduct =
          type === "extendedTextMessage" && content.includes("productMessage");

        // ANTI DDD - LISTA COMPLETA DE DDDs EXISTENTES NO BRASIL!
        const arrayDDDs = [
          11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33,
          34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55,
          61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82,
          83, 84, 85, 86, 87, 88, 89, 91, 93, 94, 95, 96, 97, 98, 99,
        ];

        //////BLOCK CMD///////
        //(CREDITOS AO KAUAN GAY)\\
        if (isGroup) {
          const checar = getComandos(from);
          if (checar === undefined) addComandosId(from);
        }
        if (
          isGroup &&
          isCmd &&
          !SoDono &&
          !isnit &&
          getComandoBlock(from).includes(command)
        )
          return reply(
            "O comando foi bloqueado, entre em contato com a administração."
          );

        ///BLOCK CMD GLOBAL///
        ///(CRÉDITOS AO @VictorGabriel)///
        if (isBlockCmdG.includes(command) && !SoDono)
          return reply(
            "Olá, o comando está bloqueado para *uso global*, ou seja, todos os usuários estão impossibilitados de usar ele.\n–\n• Entre em contato com meu proprietário para saber o motivo."
          );

        ////FIMMMMMMMMM/////

        ///// FIMMMMMMMMMMMMM /////

        const dattofc = moment.tz("America/Sao_Paulo").format("DD/MM/YYYY");
        const hourofc = moment.tz("America/Sao_Paulo").format("HH:mm:ss");

        const MessageType =
          type == "audioMessage"
            ? "Áudio"
            : type == "stickerMessage"
              ? "Figurinha"
              : type == "imageMessage"
                ? "Imagem"
                : type == "videoMessage"
                  ? "Vídeo"
                  : type == "documentMessage"
                    ? "Documento"
                    : type == "contactMessage"
                      ? "Contato"
                      : type == "locationMessage"
                        ? "Localização"
                        : info.message?.reactionMessage?.text
                          ? `Reação '${info.message.reactionMessage.text}'`
                          : "Texto";

        if (!isGroup && isCmd)
          console.log(
            "[" + colors.yellow("COMANDO NO PRIVADO") + "]",
            colors.cyan(prefix + command || prefix),
            "→",
            "Nome:",
            colors.cyan(pushname),
            "ID:",
            colors.cyan(sender.split("@")[0]),
            "Data & Hora:",
            colors.cyan(hourofc, dattofc)
          );

        if (!isGroup && !isCmd && !info.key.fromMe)
          console.log(
            "[" + colors.yellow("MENSAGEM NO PRIVADO") + "]",
            colors.cyan(MessageType),
            "→",
            "Nome:",
            colors.cyan(pushname),
            "ID:",
            colors.cyan(sender.split("@")[0]),
            "Data & Hora:",
            colors.cyan(hourofc, dattofc)
          );

        if (!isCmd && isGroup && !info.key.fromMe)
          console.log(
            "[" + colors.yellow("MENSAGEM EM GRUPO") + "]",
            colors.cyan(MessageType),
            "→",
            "Nome:",
            colors.cyan(pushname),
            "Grupo:",
            colors.cyan(groupName),
            "Data & Hora:",
            colors.cyan(hourofc, dattofc)
          );

        if (isCmd && isGroup)
          console.log(
            "[" + colors.yellow("COMANDO EM GRUPO") + "]",
            colors.cyan(prefix + command || prefix),
            "→",
            "Nome:",
            colors.cyan(pushname),
            "Grupo:",
            colors.cyan(groupName),
            "Data & Hora:",
            colors.cyan(hourofc, dattofc)
          );

        // ========= || Jogo da Velha || ======== \\
        async function startJogoDaVelha() {
          if (
            joguinhodavelhajs2.includes(from) ||
            joguinhodavelhajs.includes(sender)
          ) {
            const cmde = budy.toLowerCase().split(" ")[0] || "";
            let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            if (fs.existsSync(`./arquivos/tictactoe/db/${from}.json`)) {
              const boardnow = setGame(`${from}`);
              if (budy == "Cex") return reply("why");
              if (
                budy.toLowerCase() == "s" ||
                budy.toLowerCase() == "sim" ||
                budy.toLowerCase() == "ok"
              ) {
                if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                  if (boardnow.status) return;
                  const matrix = boardnow._matrix;
                  boardnow.status = true;
                  fs.writeFileSync(
                    `./arquivos/tictactoe/db/${from}.json`,
                    JSON.stringify(boardnow, null, 2)
                  );
                  const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n—\n🚨 Explicação: _O(a) jogador '@${boardnow.X}' está denominada com emoji 'X', já o 2° jogador(a) que seria o(a) '@${boardnow.O}' está denominado(a) o emoji de círculo._\n• Começou a disputa! Quem irá decidir a primeira jogada é você: *'@${boardnow.turn == "X" ? boardnow.X : boardnow.O}*'\n—\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
                  mention(chatAccept);
                }
              } else if (
                budy.toLowerCase() == "n" ||
                budy.toLowerCase() == "não" ||
                budy.toLowerCase() == "no"
              ) {
                if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                  if (boardnow.status)
                    return reply(
                      `O jogo começou ou já existe uma partida aberta neste grupo! Por favor, caso ninguém esteja jogando ou houve um erro desconhecido na função, entre em contato com o criador ou solicite à um adm para usar o  comando '${prefix}resetvelha' no grupo.`
                    );
                  DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
                  mention(
                    `Nossa @${boardnow.X}, infelizmente o seu oponente não aceitou seu desafio!, ❌😕`
                  );
                  joguinhodavelhajs.splice([]);
                  fs.writeFileSync(
                    "./database/usuarios/joguinhodavelha.json",
                    JSON.stringify(joguinhodavelhajs)
                  );
                  joguinhodavelhajs2.splice([]);
                  fs.writeFileSync(
                    "./database/usuarios/joguinhodavelha2.json",
                    JSON.stringify(joguinhodavelhajs2)
                  );
                }
              }
            }

            if (arrNum.includes(cmde)) {
              const boardnow = setGame(`${from}`);
              if (!boardnow.status)
                return reply(
                  `Parece que seu oponente não aceitou o desafio ainda.`
                );
              if (
                (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
                sender.replace("@s.whatsapp.net", "")
              )
                return;
              const moving = validmove(Number(budy), `${from}`);
              const matrix = moving._matrix;
              if (moving.isWin) {
                if (moving.winner == "SERI") {
                  reply(
                    `Ocorreu um empate! 😨 Os dois ganharam, meus parabéns! Porque vocês não iniciam outra partida para tirar a limpo, quem é o melhor?`
                  );
                  DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
                  joguinhodavelhajs.splice([]);
                  fs.writeFileSync(
                    "./database/usuarios/joguinhodavelha.json",
                    JSON.stringify(joguinhodavelhajs)
                  );
                  joguinhodavelhajs2.splice([]);
                  fs.writeFileSync(
                    "./database/usuarios/joguinhodavelha2.json",
                    JSON.stringify(joguinhodavelhajs2)
                  );
                  return;
                }
                const abt = Math.ceil(Math.random() + 4000);
                const winnerJID = moving.winner == "O" ? moving.O : moving.X;
                const looseJID = moving.winner == "O" ? moving.X : moving.O;
                setTimeout(() => {
                  if (
                    fs.existsSync("./arquivos/tictactoe/db/" + from + ".json")
                  ) {
                    DLT_FL("./arquivos/tictactoe/db/" + from + ".json");
                    reply(
                      `O *jogo da velha* foi cancelado por falta de movimentação no tabuleiro ou o desafiado não aceitou no prazo de 5 minutos.`
                    );
                  } else {
                    console.log(
                      colors.red(time),
                      colors.magenta("[ EXPIRADO ]"),
                      colors.red("Jogo da velha espirado..")
                    );
                  }
                  joguinhodavelhajs.splice([]);
                  fs.writeFileSync(
                    "./database/usuarios/joguinhodavelha.json",
                    JSON.stringify(joguinhodavelhajs)
                  );
                  joguinhodavelhajs2.splice([]);
                  fs.writeFileSync(
                    "./database/usuarios/joguinhodavelha2.json",
                    JSON.stringify(joguinhodavelhajs2)
                  );
                }, 300000); //5 minutos
                await mention(
                  `Parabéns *@${winnerJID}*, você ganhou a partida do jogo da velha! 😍 Mas, parabéns aos ambos jogadores, vocês foram bem, mas perder não é o fim, perder é um começo de uma vitória em sua vida.. Não desista por uma pequena derrota! 💜🎯`
                );
                DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
                joguinhodavelhajs.splice([]);
                fs.writeFileSync(
                  "./database/usuarios/joguinhodavelha.json",
                  JSON.stringify(joguinhodavelhajs)
                );
                joguinhodavelhajs2.splice([]);
                fs.writeFileSync(
                  "./database/usuarios/joguinhodavelha2.json",
                  JSON.stringify(joguinhodavelhajs2)
                );
              } else {
                mention(
                  `*『 🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️ 』*\n—\n*@${boardnow.X}* VS @${boardnow.O}\n• Agora é a vez do jogador(a): @${moving.turn == "X" ? moving.X : moving.O}\n—\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`
                );
              }
            }
          }
        }

        // LOADING
        async function loading() {
          txt1 = `_🔥⃟᮪〭۬̇〬⃟˖ꪶ𝙾𝚋𝚝𝚎𝚗𝚍𝚘 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜ꦽꦼ̷১_\n_『ʟᴏᴀᴅɪɴɢ』:`;
          var carre = [
            `${txt1}〘█▒▒▒▒▒▒▒▒▒▒▒〙10%_`,
            `${txt1}〘████▒▒▒▒▒▒▒▒〙30%_`,
            `${txt1}〘███████▒▒▒▒▒〙50%_`,
            `${txt1}〘█████████▒▒▒〙70%_`,
            `${txt1}〘███████████▒〙90%_`,
            `${txt1}〘████████████〙100%_`,
            `_᭥ꩌ゚໋ @${sender.split("@")[0]}_\n_• Pesquisa realizada, Aguarde um pouco para ser enviado.._`,
          ];
          let { key } = await akame.sendMessage(
            from,
            {
              text: `_᭥ꩌ゚໋ Ok @${sender.split("@")[0]}_\n_• Obtendo os resultados de sua pesquisa.._`,
              mentions: [sender],
            },
            { quoted: selo }
          );
          for (let i = 0; i < carre.length; i++) {
            await akame.sendMessage(from, {
              text: carre[i],
              mentions: [sender],
              edit: key,
            });
          }
        }

        // NAMORO
        if (budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
          if (
            JSON.stringify(namoro2).includes(sender) &&
            namoro2[namoro2.map((i) => i.id).indexOf(sender)].idgp == from &&
            isGroup
          ) {
            C14 = namoro2.map((i) => i.id).indexOf(sender);
            C12 = namoro1
              .map((i) => i.usu1)
              .indexOf(namoro2[C14].pedido + "@s.whatsapp.net");
            namoro1[C12].namorados = true;
            fs.writeFileSync(
              "./database/func/namoro1.json",
              JSON.stringify(namoro1, null, 2)
            );
            namoro1.push({
              usu1: sender,
              usu2: namoro2[C14].pedido,
              namorados: true,
              idgp: from,
              hora: hourofc,
              data: dattofc,
            });
            fs.writeFileSync(
              "./database/func/namoro1.json",
              JSON.stringify(namoro1, null, 2)
            );
            namoro2.splice(C14, 1);
            fs.writeFileSync(
              "./database/func/namoro2.json",
              JSON.stringify(namoro2)
            );
            mention(
              `🥳 Felicitações @${namoro1[C12].usu1.split("@")[0]}! O (a) seu grande amor, @${sender.split("@")[0]}, aceitou o seu pedido de namoro.\nSeu par pode ser consultado no comando: ${prefix}minhadupla`
            );
          }
        }

        if (
          budy2.toLowerCase() === "n" ||
          budy2.toLowerCase().replace("ã", "a") === "nao"
        ) {
          if (
            JSON.stringify(namoro2).includes(sender) &&
            namoro2[namoro2.map((i) => i.id).indexOf(sender)].idgp == from &&
            isGroup
          ) {
            C14 = namoro2.map((i) => i.id).indexOf(sender);
            C12 = namoro1
              .map((i) => i.usu1)
              .indexOf(`${namoro2[C14].pedido}@s.whatsapp.net`);
            mention(
              `Sinto muito @${namoro1[C12].usu1.split("@")[0]}! O (a) @${sender.split("@")[0]} não te ama, deve está confuso(a) ou não preparado(a) e por isso não aceitou o seu pedido de namoro. 😦`
            );
            namoro1.splice(C12, 1);
            fs.writeFileSync(
              "./database/func/namoro1.json",
              JSON.stringify(namoro1, null, 2)
            );
            namoro2.splice(C14, 1);
            fs.writeFileSync(
              "./database/func/namoro2.json",
              JSON.stringify(namoro2)
            );
          }
        }

        startJogoDaVelha();

        if (isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
          if (Procurar_String.includes("chat.whatsapp.com/")) {
            if (isBot) return;
            link_dgp = await akame.groupInviteCode(from);
            if (Procurar_String.match(link_dgp))
              return reply("Link do nosso grupo, não irei remover.. ");
            if (IS_DELETE) {
              setTimeout(() => {
                akame.sendMessage(from, {
                  delete: {
                    remoteJid: from,
                    fromMe: false,
                    id: info.key.id,
                    participant: sender,
                  },
                });
              }, 500);
            }
            if (!JSON.stringify(groupMembers).includes(sender)) return;
            akame.groupParticipantsUpdate(from, [sender], "remove");
          }
        }

        const groupIdscount = [];
        for (let obj of countMessage) {
          groupIdscount.push(obj.groupId);
        }

        // MUTAR USUÁRIO
        if (!muted.some((i) => i.grupo === from) && isGroup) {
          muted.push({ grupo: from, usus: [] });
          fs.writeFileSync(
            "./database/grupos/muted.json",
            JSON.stringify(muted, null, 2)
          );
        }

        if (
          isGroup &&
          muted[muted.map((i) => i.grupo).indexOf(from)].usus.includes(sender)
        ) {
          await akame.sendMessage(
            from,
            {
              text: `🤫 Hmm @${sender.split("@")[0]}, achou que ia passar despercebido? Achou errado lindo(a)! Você está sendo removido por enviar mensagem, sendo que você está mutado neste grupo.`,
              mentions: [sender],
            },
            { quoted: selo }
          );
          await akame.sendMessage(from, {
            delete: {
              remoteJid: from,
              fromMe: false,
              id: info.key.id,
              participant: sender,
            },
          });
          await akame.groupParticipantsUpdate(from, [sender], "remove");
          // Após a remoção do participante mutado, automaticamente ele vai ser removido da lista de usuários mutados do grupo. 🌟
          muted[muted.map((i) => i.grupo).indexOf(from)].usus.splice(sender);
          fs.writeFileSync(
            "./database/grupos/muted.json",
            JSON.stringify(muted, null, 2)
          );
        }

        //====(CONTADOR-DE-MENSAGENS)=======\\
        var numbersIds = [];
        if (isGroup && groupIdscount.indexOf(from) >= 0) {
          var ind = groupIdscount.indexOf(from);
          for (let obj of countMessage[ind].numbers) {
            numbersIds.push(obj.id);
          }
          if (numbersIds.indexOf(sender) >= 0) {
            var indnum = numbersIds.indexOf(sender);
            var RSM_CN = countMessage[ind].numbers[indnum];
            type == "stickerMessage" ? "" : (RSM_CN.messages += isCmd ? 0 : 1);
            type == "stickerMessage"
              ? ""
              : (RSM_CN.cmd_messages += isCmd ? 1 : 0);
            type == "stickerMessage" ? "" : (RSM_CN.aparelho = adivinha);
            RSM_CN.figus += type == "stickerMessage" ? 1 : 0;
            fs.writeFileSync(
              "./settings/media/countmsg.json",
              JSON.stringify(countMessage, null, 2) + "\n"
            );
          } else {
            const messages = isCmd ? 0 : 1;
            const cmd_messages = isCmd ? 1 : 0;
            var figus = type == "stickerMessage" ? 1 : 0;
            countMessage[ind].numbers.push({
              id: sender,
              messages: messages,
              cmd_messages: cmd_messages,
              aparelho: adivinha,
              figus: figus,
            });
            fs.writeFileSync(
              "./settings/media/countmsg.json",
              JSON.stringify(countMessage, null, 2) + "\n"
            );
          }
        } else if (isGroup) {
          countMessage.push({
            groupId: from,
            numbers: [
              {
                id: sender,
                messages: 2,
                figus: 0,
                cmd_messages: isCmd ? 1 : 0,
                aparelho: adivinha,
              },
            ],
          });
          fs.writeFileSync(
            "./settings/media/countmsg.json",
            JSON.stringify(countMessage, null, 2) + "\n"
          );
        }

        // PARA LIMPAR OS DADOS DOS USUÁRIOS QUE JÁ SAIU DO GRUPO...
        async function ClearMembersInactive() {
          var RD_CNT =
            countMessage[countMessage.map((i) => i.groupId).indexOf(from)]
              .numbers;
          CNT1 = [];
          for (i of groupMembers) {
            CNT1.push(i.id);
          }
          CNT = [];
          for (i of RD_CNT) {
            if (!CNT1.includes(i.id)) CNT.push(i);
          }
          for (i of CNT) {
            RD_CNT.splice(RD_CNT.map((i) => i.id).indexOf(i.id), 1);
          }
          fs.writeFileSync(
            "./settings/media/countmsg.json",
            JSON.stringify(countMessage, null, 2)
          );
        }

        const pickRandom = (arr) => {
          return arr[Math.floor(Math.random() * arr.length)];
        };

        if (body.startsWith("$")) {
          if (info.key.fromMe) return;
          if (!SoDono && !isnit) return;
          exec(q, (err, stdout) => {
            if (err) return reply(`${err}`);
            if (stdout) {
              reply(stdout);
            }
          });
        }

        if (body != undefined) {
          /* Créditos: @Matheus */
          if (!JSON.stringify(pushnames).includes(botNumber)) {
            pushnames.push({ id: botNumber, nick: NomeDoBot });
            fs.writeFileSync(
              "./database/usuarios/users.json",
              JSON.stringify(pushnames, null, 2)
            );
          }
          if (!JSON.stringify(pushnames).includes(sender)) {
            pushnames.push({ id: sender, nick: pushname });
            fs.writeFileSync(
              "./database/usuarios/users.json",
              JSON.stringify(pushnames, null, 2)
            );
          } else {
            pushnames[pushnames.map((i) => i.id).indexOf(sender)].nick =
              pushname;
            fs.writeFileSync(
              "./database/usuarios/users.json",
              JSON.stringify(pushnames, null, 2)
            );
          }
        }

        //======================================\\

        //======(ANTI-IMAGEM)========\\
        if (isAntiImg && isBotGroupAdmins && type == "imageMessage") {
          if (info.key.fromMe) return;
          if (isGroupAdmins)
            return await akame.sendMessage(
              from,
              { text: mess.messageProhibitedDetAdmin() },
              { quoted: selo }
            );
          if (dataGp[0].legenda_imagem != "0") {
            await akame.sendMessage(
              from,
              { text: dataGp[0].legenda_imagem },
              { quoted: selo }
            );
          }
          if (IS_DELETE) {
            setTimeout(async () => {
              await akame.sendMessage(from, {
                delete: {
                  remoteJid: from,
                  fromMe: false,
                  id: info.key.id,
                  participant: sender,
                },
              });
            }, 500);
          }
          if (!JSON.stringify(groupMembers).includes(sender)) return;
          await akame.groupParticipantsUpdate(from, [sender], "remove");
        }

        //======(ANTI-STICKER)========\\
        if (isAntiSticker && isBotGroupAdmins && type == "stickerMessage") {
          if (info.key.fromMe) return;
          if (isGroupAdmins)
            return await akame.sendMessage(
              from,
              { text: mess.messageProhibitedDetAdmin() },
              { quoted: selo }
            );
          await akame.sendMessage(
            from,
            { text: mess.messageProhibitedDetUser() },
            { quoted: selo }
          );
          if (IS_DELETE) {
            setTimeout(async () => {
              await akame.sendMessage(from, {
                delete: {
                  remoteJid: from,
                  fromMe: false,
                  id: info.key.id,
                  participant: sender,
                },
              });
            }, 500);
          }
          if (!JSON.stringify(groupMembers).includes(sender)) return;
          await akame.groupParticipantsUpdate(from, [sender], "remove");
        }

        if (Antidoc && isBotGroupAdmins && type == "documentMessage") {
          if (info.key.fromMe) return;
          if (isGroupAdmins)
            return await akame.sendMessage(
              from,
              { text: mess.messageProhibitedDetAdmin() },
              { quoted: selo }
            );
          if (dataGp[0].legenda_documento != "0") {
            await akame.sendMessage(
              from,
              { text: dataGp[0].legenda_documento },
              { quoted: selo }
            );
          }
          if (IS_DELETE) {
            setTimeout(async () => {
              await akame.sendMessage(from, {
                delete: {
                  remoteJid: from,
                  fromMe: false,
                  id: info.key.id,
                  participant: sender,
                },
              });
            }, 500);
          }
          if (!JSON.stringify(groupMembers).includes(sender)) return;
          await akame.groupParticipantsUpdate(from, [sender], "remove");
        }

        let isTrueFalse = Array(
          "tiktok",
          "facebook",
          "instagram",
          "twitter",
          "ytmp3",
          "ytmp4",
          "play",
          "kwai",
          "playdoc",
          "playvid"
        ).some((item) => item === command);

        if (
          isUrl(PR_String) &&
          isAntiLinkHard &&
          !isGroupAdmins &&
          !isListaBrancaG &&
          isBotGroupAdmins &&
          !info.key.fromMe
        ) {
          if (Procurar_String.includes("chat.whatsapp.com")) {
            link_dgp = await akame.groupInviteCode(from);
            if (Procurar_String.match(link_dgp))
              return reply("Link do nosso grupo, não irei remover..");
          }
          if (isCmd && isTrueFalse) return;
          if (IS_DELETE) {
            setTimeout(async () => {
              await akame.sendMessage(from, {
                delete: {
                  remoteJid: from,
                  fromMe: false,
                  id: info.key.id,
                  participant: sender,
                },
              });
            }, 500);
          }
          await akame.groupSettingUpdate(from, "announcement");
          setTimeout(async () => {
            await akame.groupSettingUpdate(from, "not_announcement");
          }, 1200);
          if (!JSON.stringify(groupMembers).includes(sender)) return;
          await akame.groupParticipantsUpdate(from, [sender], "remove");
        }

        if (
          isUrl(PR_String) &&
          isAntiLinkEasy &&
          !isGroupAdmins &&
          !isListaBrancaG &&
          isBotGroupAdmins &&
          !info.key.fromMe
        ) {
          if (Procurar_String.includes("chat.whatsapp.com")) {
            link_dgp = await akame.groupInviteCode(from);
            if (Procurar_String.match(link_dgp))
              return reply("Link do nosso grupo, não irei deletar..");
          }
          if (isCmd && isTrueFalse) return;
          if (IS_DELETE) {
            setTimeout(async () => {
              await akame.sendMessage(from, {
                delete: {
                  remoteJid: from,
                  fromMe: false,
                  id: info.key.id,
                  participant: sender,
                },
              });
            }, 500);
          }
        }

        // ANTI NOTAS FAKES ==================>
        if (
          isAntiNotas &&
          budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) &&
          isBotGroupAdmins &&
          !isGroupAdmins &&
          !SoDono &&
          !info.message?.reactionMessage?.text &&
          budy2.length > 20
        ) {
          let verificar = budy2
            .toString()
            .match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi);
          if (verificar && budy.length < 100) return;
          if (IS_DELETE) {
            setTimeout(async () => {
              await akame.sendMessage(from, {
                delete: {
                  remoteJid: from,
                  fromMe: false,
                  id: info.key.id,
                  participant: sender,
                },
              });
            }, 500);
          }
          if (!JSON.stringify(groupMembers).includes(sender)) return;
          await akame.groupParticipantsUpdate(from, [sender], "remove");
        }

        //FINALZIN ===========================>

        //======(ANTI-VIDEO)========\\
        if (isAntiVid && isBotGroupAdmins && type == "videoMessage") {
          if (isGroupAdmins)
            return await akame.sendMessage(
              from,
              { text: mess.messageProhibitedDetAdmin() },
              { quoted: selo }
            );
          if (dataGp[0].legenda_video == "0") {
            await akame.sendMessage(
              from,
              { text: mess.messageProhibitedDetUser() },
              { quoted: selo }
            );
          } else {
            await akame.sendMessage(
              from,
              { text: dataGp[0].legenda_video },
              { quoted: selo }
            );
          }
          if (IS_DELETE) {
            setTimeout(async () => {
              await akame.sendMessage(from, {
                delete: {
                  remoteJid: from,
                  fromMe: false,
                  id: info.key.id,
                  participant: sender,
                },
              });
            }, 500);
          }
          if (!JSON.stringify(groupMembers).includes(sender)) return;
          await akame.groupParticipantsUpdate(from, [sender], "remove");
        }

        //======(ANTI-AUDIO)=======\\
        if (isAntiAudio && isBotGroupAdmins && type == "audioMessage") {
          if (isGroupAdmins)
            return await akame.sendMessage(
              from,
              { text: mess.messageProhibitedDetAdmin() },
              { quoted: selo }
            );
          await akame.sendMessage(
            from,
            { text: mess.messageProhibitedDetUser() },
            { quoted: selo }
          );
          if (IS_DELETE) {
            setTimeout(async () => {
              await akame.sendMessage(from, {
                delete: {
                  remoteJid: from,
                  fromMe: false,
                  id: info.key.id,
                  participant: sender,
                },
              });
            }, 500);
          }
          if (!JSON.stringify(groupMembers).includes(sender)) return;
          await akame.groupParticipantsUpdate(from, [sender], "remove");
        }

        //========(ANTI_LIGAR)========\\
        if (!isGroup && isAnticall) {
          akame.ws.on("CB:call", async (B) => {
            var msgcallblock = `./database/func/call-msg_block-${sender}.json`;
            if (!fs.existsSync(msgcallblock)) {
              fs.writeFileSync(
                msgcallblock,
                JSON.stringify(mess.antiCalls(), null, 2)
              );
              var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock));
              if (B.content[0].tag == "offer") {
                await akame
                  .sendMessage(B.content[0].attrs["call-creator"], {
                    text: msgcallbl,
                  })
                  .then(async () => {
                    await akame.updateBlockStatus(
                      B.content[0].attrs["call-creator"],
                      "block"
                    );
                    DLT_FL(msgcallblock);
                  });
              }
            }
          });
        }

        /* ANTIPV1 - Este anti pv bloqueia aqueles que encaminham mensagem no pv do bot.. */
        var USUARIOS_BLOQ = [];
        if (isAntiPv && !USUARIOS_BLOQ.includes(sender)) {
          if (!isGroup && !SoDono && !isnit && !isVip) {
            await sleep(2500);
            reply(msgantipv1.replace("#nome#", pushname));
            setTimeout(async () => {
              await akame.updateBlockStatus(sender, "block");
            }, 2000);
          }
          USUARIOS_BLOQ.push(sender);
        }

        /* ANTIPV2 - Vai floodar o privado do usuário que encaminhar a mensagem no privado.. */
        var MSG_ANTPV2_ENC = [];
        if (
          !isGroup &&
          !isVip &&
          !SoDono &&
          !isnit &&
          !issupre &&
          !ischyt &&
          !info.key.fromMe &&
          isAntiPv2 &&
          !MSG_ANTPV2_ENC.includes(sender)
        ) {
          MSG_ANTPV2_ENC.push(sender);
          return reply(msgantipv2);
        }

        /* ANTIPV3 - Ignora todos os que falam ou usam os comandos no privado, exceto user vip e o proprietário atual do bot. */
        if (!isGroup && !isVip && !SoDono && !info.key.fromMe && isAntiPv3)
          return;

        //====================================\\
        var i9 = countMessage.map((i) => i.groupId).indexOf(from);
        var idgrupo = groupIdscount.indexOf(from);

        var idusu = numbersIds?.indexOf(sender);

        if (
          body != undefined &&
          !info.message?.reactionMessage?.text &&
          !JSON.stringify(level2).includes(sender) &&
          isGroup
        ) {
          level2.push({
            id: sender,
            nick: pushname,
            level: 1,
            contador: 0,
            block: false,
          });
          fs.writeFileSync(
            "./database/usuarios/leveling.json",
            JSON.stringify(level2)
          );
        }

        if (
          body != undefined &&
          !info.message?.reactionMessage?.text &&
          JSON.stringify(level2).includes(sender) &&
          level2[level2.map((i) => i.id).indexOf(sender)].block == false &&
          isGroup &&
          isLevelingOn
        ) {
          AB = level2.map((i) => i.id).indexOf(sender);
          level2[AB].contador += 1;
          level2[AB].nick = pushname;
          fs.writeFileSync(
            "./database/usuarios/leveling.json",
            JSON.stringify(level2)
          );
          switch (level2[AB].contador) {
            case 100:
            case 200:
            case 300:
            case 400:
            case 500:
            case 600:
            case 700:
            case 800:
            case 900:
            case 1200:
            case 1500:
            case 1800:
            case 2100:
            case 2700:
            case 3300:
            case 3900:
            case 4500:
            case 5000:
            case 5500:
            case 6500:
            case 7500:
            case 9000:
            case 10500:
            case 12000:
            case 13500:
            case 15000:
            case 20000:
            case 25000:
            case 30000:
            case 35000:
            case 40000:
            case 50000:
            case 60000:
            case 70000:
            case 80000:
            case 90000:
            case 100000:
            case 150000:
            case 200000:
            case 300000:
            case 400000:
            case 500000:
            case 1000000:
            case 1500000:
            case 2000000:
            case 5000000:
              var newlevel = level2[AB].contador + 1;
              if (newlevel < 100) newpatente = "Bronze I";
              if (newlevel >= 100 && newlevel < 200) newpatente = "Bronze II";
              if (newlevel >= 200 && newlevel < 300) newpatente = "Bronze III";
              if (newlevel >= 300 && newlevel < 400) newpatente = "Prata I";
              if (newlevel >= 400 && newlevel < 500) newpatente = "Prata II";
              if (newlevel >= 500 && newlevel < 600) newpatente = "Prata III";
              if (newlevel >= 600 && newlevel < 700) newpatente = "Ouro I";
              if (newlevel >= 700 && newlevel < 800) newpatente = "Ouro II";
              if (newlevel >= 800 && newlevel < 900) newpatente = "Ouro III";
              if (newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV";
              if (newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I";
              if (newlevel >= 1500 && newlevel < 1800)
                newpatente = "Platina II";
              if (newlevel >= 1800 && newlevel < 2100)
                newpatente = "Platina III";
              if (newlevel >= 2100 && newlevel < 2700)
                newpatente = "Platina IV";
              if (newlevel >= 2700 && newlevel < 3300)
                newpatente = "Diamante I";
              if (newlevel >= 3300 && newlevel < 3900)
                newpatente = "Diamante II";
              if (newlevel >= 3900 && newlevel < 4500)
                newpatente = "Diamante III";
              if (newlevel >= 4500 && newlevel < 5000)
                newpatente = "Diamante IV";
              if (newlevel >= 5000 && newlevel < 5500)
                newpatente = "Paladino I";
              if (newlevel >= 5500 && newlevel < 6500)
                newpatente = "Paladino II";
              if (newlevel >= 6500 && newlevel < 7500)
                newpatente = "Paladino III";
              if (newlevel >= 7500 && newlevel < 9000)
                newpatente = "Paladino IV";
              if (newlevel >= 9000 && newlevel < 10500)
                newpatente = "Mestre I️";
              if (newlevel >= 10500 && newlevel < 12000)
                newpatente = "Mestre II";
              if (newlevel >= 12000 && newlevel < 13500)
                newpatente = "Mestre III️";
              if (newlevel >= 13500 && newlevel < 15000)
                newpatente = "Mestre IV️";
              if (newlevel >= 15000 && newlevel < 20000)
                newpatente = "Mestre V️";
              if (newlevel >= 20000 && newlevel < 25000)
                newpatente = "Desafiante I";
              if (newlevel >= 25000 && newlevel < 30000)
                newpatente = "Desafiante II";
              if (newlevel >= 30000 && newlevel < 35000)
                newpatente = "Desafiante III";
              if (newlevel >= 35000 && newlevel < 40000)
                newpatente = "Desafiante IV";
              if (newlevel >= 40000 && newlevel < 50000)
                newpatente = "Desafiante V";
              if (newlevel >= 50000 && newlevel < 60000)
                newpatente = "Usuário Superior I";
              if (newlevel >= 60000 && newlevel < 70000)
                newpatente = "Usuário Superior II";
              if (newlevel >= 70000 && newlevel < 80000)
                newpatente = "Mestre Supremo I";
              if (newlevel >= 80000 && newlevel < 90000)
                newpatente = "Mestre Supremo II";
              if (newlevel >= 90000 && newlevel < 100000)
                newpatente = "Mestre Supremo III";
              if (newlevel >= 100000 && newlevel < 150000)
                newpatente = "Conquistador I️";
              if (newlevel >= 150000 && newlevel < 200000)
                newpatente = "Conquistador II️";
              if (newlevel >= 200000 && newlevel < 300000)
                newpatente = "Conquistador III️";
              if (newlevel >= 300000 && newlevel < 400000)
                newpatente = "Desbravador I️";
              if (newlevel >= 400000 && newlevel < 500000)
                newpatente = "Desbravador II️";
              if (newlevel >= 500000 && newlevel < 1000000)
                newpatente = "Desbravador III️";
              if (newlevel >= 1000000 && newlevel < 1500000)
                newpatente = "Grande Mestre I";
              if (newlevel >= 1500000 && newlevel < 2000000)
                newpatente = "Grande Mestre II";
              if (newlevel >= 2000000 && newlevel < 5000000)
                newpatente = "Grande Mestre III";
              if (newlevel >= 5000000 && newlevel < 10000000)
                newpatente = "Supremacy X";
              if (newlevel >= 10000000) newpatente = "Veterano";
              level2[AB].level += 1;
              fs.writeFileSync(
                "./database/usuarios/leveling.json",
                JSON.stringify(level2)
              );
              try {
                u = await akame.profilePictureUrl(sender);
              } catch (erro) {
                u = "https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg";
              }
              gerarBuffer = await getBuffer(u);
              photoUser = await upload(gerarBuffer);
              await akame.sendMessage(
                from,
                {
                  image: {
                    url:
                      API_URL +
                      `/api/canvas/levelup?foto=${photoUser}&nome=${getName(sender) || "Usuário(a)"}&lvb=${level2[level2.map((i) => i.id).indexOf(sender)].level - 1}&lva=${level2[level2.map((i) => i.id).indexOf(sender)].level}&fundo=${fundolevel}`,
                  },
                  caption: `🎉 Parabéns *@${sender.split("@")[0]}*, você acaba de subir de level.\n• Novo level foi alcançado por completar *${level2[AB].contador} XP.*\nNova patente desbloqueada, você agora é *${newpatente}*`,
                  mentions: [sender],
                },
                { quoted: selo }
              );
              break;
            case 10000000:
              BC = level2.map((i) => i.id).indexOf(sender);
              level2[BC].level += 1;
              fs.writeFileSync(
                "./database/usuarios/leveling.json",
                JSON.stringify(level2)
              );
              try {
                u2 = await akame.profilePictureUrl(sender);
              } catch (erro) {
                u2 = "https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg";
              }
              gerarBuffer2 = await getBuffer(u2);
              photoUser2 = await upload(gerarBuffer2);
              await akame.sendMessage(
                from,
                {
                  image: {
                    url:
                      API_URL +
                      `/api/canvas/levelup?foto=${photoUser2}&nome=${getName(sender)}&lvb=${level2[level2.map((i) => i.id).indexOf(sender)].level - 1}&lva=${level2[level2.map((i) => i.id).indexOf(sender)].level}&fundo=${fundolevel}`,
                  },
                  caption: `🎉 Parabéns *@${sender.split("@")[0]}*, você completou com sucesso 10M de XP, possuindo assim o título de *Veterano 🎩*\n–\n• Todos os níveis daqui pra frente serão contados a cada 1M de XP... Nossa equipe se orgulha de coroar você, depois de tanto esforço e desempenho, após muito tempo de uso de nosso sistemas. ${tempo}!`,
                  mentions: [sender],
                },
                { quoted: selo }
              );
              break;
            case 10000000:
            case 11000000:
            case 12000000:
            case 13000000:
            case 14000000:
            case 15000000:
            case 16000000:
            case 17000000:
            case 18000000:
            case 19000000:
            case 20000000:
            case 21000000:
            case 22000000:
            case 23000000:
            case 24000000:
            case 25000000:
            case 26000000:
            case 27000000:
            case 28000000:
            case 29000000:
            case 30000000:
              CD = level2.map((i) => i.id).indexOf(sender);
              level2[CD].level += 1;
              fs.writeFileSync(
                "./database/usuarios/leveling.json",
                JSON.stringify(level2)
              );
              try {
                u3 = await akame.profilePictureUrl(sender);
              } catch (erro) {
                u3 = "https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg";
              }
              gerarBuffer3 = await getBuffer(u3);
              photoUser3 = await upload(gerarBuffer3);
              await akame.sendMessage(
                from,
                {
                  image: {
                    url:
                      API_URL +
                      `/api/canvas/levelup?foto=${photoUser3}&nome=${getName(sender)}&lvb=${level2[level2.map((i) => i.id).indexOf(sender)].level - 1}&lva=${level2[level2.map((i) => i.id).indexOf(sender)].level}&fundo=${fundolevel}`,
                  },
                  caption: `*🎉 SUPREME LEVEL UP! 🎖️*\nMeus parabéns querido usuário veterano *@${sender.split("@")[0]}*.\n• Sua experiência acaba de levar a quantidade total de XP à triplicar. Agora você tem *${level2[CD].contador} XP*\n–\n*Obs:* Sua patente atual continua sendo a mesma, pois você chegou à maior.`,
                  mentions: [sender],
                },
                { quoted: selo }
              );
              break;
          }
        }

        const VerificarJSON = (json, value) => {
          if (JSON.stringify(json).includes(value)) return true;
          return false;
        };

        const RG_SCOINS = JSON.parse(
          fs.readFileSync("./database/func/coins.json")
        );

        const isModoCoins = isGroup ? dataGp[0].isModoCoins : undefined;

        const ID_G_COINS = RG_SCOINS.findIndex((i) => i.grupo === from);
        const ID_USU_COINS = RG_SCOINS[ID_G_COINS]?.usus?.findIndex(
          (i) => i.id === sender
        );

        function CoinsUpdate(index) {
          fs.writeFileSync(
            "./database/func/coins.json",
            JSON.stringify(index, null, 2) + "\n"
          );
        }

        const SYSTEM_COIN = {
          AdicionarCoins: async function (user, quant) {
            CoinsUser_ = RG_SCOINS[ID_G_COINS].usus.find((i) => i.id === user);
            if (!CoinsUser_)
              return reply(
                "O(a) usuário(a) nunca enviou uma mensagem neste grupo! Então não é possível adicionar ou transferir coins à um membro que não possuí registro!"
              );
            CoinsUser_["coins"] += quant;
            CoinsUpdate(RG_SCOINS);
          },

          transferCoins: async function (transferidor, recebidor, quantidade) {
            DM_ = RG_SCOINS[ID_G_COINS].usus.find((i) => i.id === transferidor);
            DM_2 = RG_SCOINS[ID_G_COINS].usus.find((i) => i.id === recebidor);
            if ((DM_?.coins || 0) < quantidade)
              return mention(
                `A quantidade que você tem é inferior a que você deseja transferir ao usuário: @${recebidor.split("@")[0]}`
              );
            if (!DM_2)
              return mention(
                `O(a) usuário(a) '@${recebidor.split("@")[0]}' nunca enviou uma mensagem neste grupo! Então não é possível adicionar ou transferir coins à um usuário não registrado no meu sistema!`
              );
            DM_["coins"] -= quantidade;
            DM_2["coins"] += quantidade;
            CoinsUpdate(RG_SCOINS);
          },

          Adicionar_2: async function (A, Q, X, X2) {
            DM_ = RG_SCOINS[ID_G_COINS].usus.find((i) => i.id === A);
            if (!DM_)
              return reply(
                "O(a) usuário(a) nunca enviou uma mensagem neste grupo! Então não é possível atualizar a carteira!"
              );
            DM_["coins"] += Q;
            DM_[X] = X2;
            CoinsUpdate(RG_SCOINS);
          },

          RemoverCoins: async function (user, quant) {
            CoinsUser = RG_SCOINS[ID_G_COINS].usus.find((i) => i.id === user);
            if (!CoinsUser)
              return reply(
                "O(a) usuário(a) nunca enviou uma mensagem neste grupo! Então não é possível remover coins de membro inativo que não possuí registro!"
              );
            if ((CoinsUser?.coins || 0) < quant)
              return reply(
                `O usuário possuí '${CoinsUser?.coins} N-Coins', este valor não é suficiente para realizar a transação de remoção de ${quant}.`
              );
            CoinsUser["coins"] -= quant;
            CoinsUpdate(RG_SCOINS);
          },

          VerificarCampo: function (user, parameter) {
            return (
              RG_SCOINS[ID_G_COINS].usus.find((i) => i.id === user)[
                parameter
              ] || null
            );
          },
        };

        if (
          isModoCoins &&
          isGroup &&
          isBotGroupAdmins &&
          VRF_JSON_GRUPO &&
          !info.key.fromMe
        ) {
          if (!RG_SCOINS.some((i) => i.grupo === from)) {
            RG_SCOINS.push({
              grupo: from,
              usus: [
                {
                  id: sender,
                  coins: 0,
                  data: 0,
                  chances: { cassino: 0, minerar: 0 },
                },
              ],
            });
            CoinsUpdate(RG_SCOINS);
          } else if (
            RG_SCOINS.some((i) => i.grupo === from) &&
            !RG_SCOINS[ID_G_COINS]?.usus?.some((i) => i?.id === sender)
          ) {
            RG_SCOINS[ID_G_COINS].usus.push({
              id: sender,
              coins: 0,
              data: 0,
              chances: { cassino: 0, minerar: 0 },
            });
            CoinsUpdate(RG_SCOINS);
          }

          if (
            isCmd &&
            !info.message?.reactionMessage?.text &&
            dattofc != SYSTEM_COIN.VerificarCampo(sender, "data")
          ) {
            await mention(
              `${tempo}, usuário(a): @${sender.split("@")[0]}! Você ganhou *35 N-Coins* com a sua primeira interação do dia comigo! Você tem diversas chances de se divertir no grupo. 🌟💰`
            );
            SYSTEM_COIN.Adicionar_2(sender, 35, "data", dattofc);
            RG_US = RG_SCOINS[ID_G_COINS].usus.find((i) => i.id === sender);
            Object.assign(RG_US.chances, { cassino: 0, minerar: 0 });
            CoinsUpdate(RG_SCOINS);
          }
        }

        if (
          isGroup &&
          fs.existsSync(`./database/grupos/games/anagrama/${from}.json`)
        ) {
          let dataA = JSON.parse(
            fs.readFileSync(`./database/grupos/games/anagrama/${from}.json`)
          );
          if (
            budy.slice(0, 4).toUpperCase() ==
              dataA.palavraOriginal.slice(0, 4).toUpperCase() &&
            budy.toUpperCase() != dataA.palavraOriginal
          )
            return reply("Está perto...");
          if (budy.toUpperCase() == dataA.palavraOriginal) {
            await akame.sendMessage(
              from,
              {
                text: `🎉 Parabéns *${pushname}*, você acertou o anagrama apresentado, como recompensa você acaba de ganhar 5 N-Coins.\nA palavra original era: *${dataA.resposta}*. Estou iniciando o próximo jogo em 5s!`,
              },
              { mentionedJid: [sender] },
              { quoted: selo }
            );
            await SYSTEM_COIN.AdicionarCoins(sender, 5);
            fs.unlinkSync(`./database/grupos/games/anagrama/${from}.json`);
            setTimeout(async () => {
              fs.writeFileSync(
                `./database/grupos/games/anagrama/${from}.json`,
                `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`
              );
              dataAB = JSON.parse(
                fs.readFileSync(`./database/grupos/games/anagrama/${from}.json`)
              );
              akame.sendMessage(
                from,
                {
                  text: `🌟😲 Decifre a palavra embaralhada abaixo, qual será a ordem correta?\n—\n• Anagrama: *${shuffle(dataAB.palavraOriginal)}*\n• Dica: ${dataAB.dica}`,
                },
                { quoted: selo }
              );
            }, 5000);
          }
        }

        if (
          isGroup &&
          fs.existsSync(`./database/grupos/games/quiz-animais/${from}.json`)
        ) {
          let dQ = JSON.parse(
            fs.readFileSync(`./database/grupos/games/quiz-animais/${from}.json`)
          );
          if (
            budy.slice(0, 4).toUpperCase() ==
              dQ.original.slice(0, 4).toUpperCase() &&
            budy.toUpperCase() != dQ.original
          )
            return reply("está perto");
          if (budy.toUpperCase() == dQ.original) {
            await akame.sendMessage(
              from,
              {
                text: `🎉 Parabéns *${pushname}*, você acertou, como recompensa você acaba de ganhar 5 N-Coins! O animal era: *${dQ.resposta}*.\n• Estou iniciando o próximo jogo em 5s!`,
              },
              { mentionedJid: [sender] },
              { quoted: selo }
            );
            await SYSTEM_COIN.AdicionarCoins(sender, 5);
            fs.unlinkSync(`./database/grupos/games/quiz-animais/${from}.json`);
            setTimeout(async () => {
              fs.writeFileSync(
                `./database/grupos/games/quiz-animais/${from}.json`,
                `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`
              );
              dataQA = JSON.parse(
                fs.readFileSync(
                  `./database/grupos/games/quiz-animais/${from}.json`
                )
              );
              wew = await getBuffer(dataQA.foto);
              await akame.sendMessage(
                from,
                { image: wew, caption: `🤔 Pergunta: ${dataQA.question}` },
                { quoted: selo }
              );
            }, 5000);
          }
        }

        if (
          isGroup &&
          fs.existsSync(`./database/grupos/games/quiz-futebol/${from}.json`)
        ) {
          let dQF = JSON.parse(
            fs.readFileSync(`./database/grupos/games/quiz-futebol/${from}.json`)
          );
          if (
            budy.slice(0, 4).toUpperCase() ==
              dQF.resposta.slice(0, 4).toUpperCase() &&
            budy.toUpperCase() != dQF.resposta
          )
            return reply("está perto");
          if (budy.toUpperCase() == dQF.resposta) {
            await akame.sendMessage(
              from,
              {
                text: `🎉 Parabéns *${pushname}*, você acertou, como recompensa você acaba de ganhar 5 N-Coins! O time era: *${dQF.resposta}*.\n• Estou iniciando o próximo jogo em 5s!`,
              },
              { mentionedJid: [sender] },
              { quoted: selo }
            );
            await SYSTEM_COIN.AdicionarCoins(sender, 5);
            fs.unlinkSync(`./database/grupos/games/quiz-futebol/${from}.json`);
            setTimeout(async () => {
              fs.writeFileSync(
                `./database/grupos/games/quiz-futebol/${from}.json`,
                `${JSON.stringify(quizFutebol[Math.floor(Math.random() * quizFutebol.length)])}`
              );
              dataQF = JSON.parse(
                fs.readFileSync(
                  `./database/grupos/games/quiz-futebol/${from}.json`
                )
              );
              await akame.sendMessage(
                from,
                {
                  text: `💫⚽ 𝐐𝐔𝐈𝐙 𝐅𝐔𝐓𝐄𝐁𝐎𝐋 ⚽💫\n–\n*🗣️| Responda a pergunta mostrada abaixo:*\n• _${dataQF.pergunta}_`,
                },
                { quoted: selo }
              );
            }, 5000);
          }
        }

        if (
          isGroup &&
          fs.existsSync(`./database/grupos/games/gartic/${from}.json`)
        ) {
          let perg_gartic = JSON.parse(
            fs.readFileSync(`./database/grupos/games/gartic/${from}.json`)
          );
          if (
            budy.slice(0, 4).toUpperCase() ==
              perg_gartic.resposta.slice(0, 4).toUpperCase() &&
            budy.toUpperCase() != perg_gartic.resposta
          )
            return reply("Está perto!");
          if (budy.toUpperCase() == perg_gartic.resposta) {
            await akame.sendMessage(
              from,
              {
                text: `*DESCOBERTO!* Parabéns ${pushname} como recompensa você acaba de ganhar 5 N-Coins. Iniciando o próximo jogo em 5 segundos.`,
              },
              { mentionedJid: [sender] },
              { quoted: selo }
            );
            await SYSTEM_COIN.AdicionarCoins(sender, 5);
            fs.unlinkSync(`./database/grupos/games/gartic/${from}.json`);
            setTimeout(async () => {
              fs.writeFileSync(
                `./database/grupos/games/gartic/${from}.json`,
                `${JSON.stringify(garticArchives[Math.floor(Math.random() * garticArchives.length)])}`
              );
              let dataGartic2 = JSON.parse(
                fs.readFileSync(`./database/grupos/games/gartic/${from}.json`)
              );
              garticText = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}\n📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"\n🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`;
              wew = await getBuffer(`${dataGartic2.imagem}`);
              await akame.sendMessage(
                from,
                { image: wew, caption: garticText },
                { quoted: selo }
              );
            }, 5000);
          }
        }

        if (
          isGroup &&
          fs.existsSync(`./database/grupos/games/enigma/${from}.json`)
        ) {
          let enigmaData = JSON.parse(
            fs.readFileSync(`./database/grupos/games/enigma/${from}.json`)
          );
          if (
            budy.slice(0, 4).toUpperCase() ==
              enigmaData.respostaEne.slice(0, 4).toUpperCase() &&
            budy.toUpperCase() != enigmaData.respostaEne
          )
            return reply("Está perto!");
          if (budy.toUpperCase() == enigmaData.respostaEne) {
            akame.sendMessage(
              from,
              {
                text: `*ENIGMA RESOLVIDO!* Parabéns ${pushname}, como recompensa você acaba de ganhar 5 N-Coins.Iniciando o próximo jogo em 5 segundos.`,
              },
              { mentionedJid: [sender] },
              { quoted: selo }
            );
            await SYSTEM_COIN.AdicionarCoins(sender, 5);
            fs.unlinkSync(`./database/grupos/games/enigma/${from}.json`);
            setTimeout(async () => {
              fs.writeFileSync(
                `./database/grupos/games/enigma/${from}.json`,
                `${JSON.stringify(enigmaArchive[Math.floor(Math.random() * enigmaArchive.length)])}`
              );
              enigmaD = JSON.parse(
                fs.readFileSync(`./database/grupos/games/enigma/${from}.json`)
              );
              enigmaTezt = `📜 - Resolva o seguinte enigma abaixo:\n–\n${enigmaD.charada}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`;
              wew = await getBuffer(
                `https://telegra.ph/file/15be608763684b3e3af38.jpg`
              );
              await akame.sendMessage(
                from,
                { image: wew, caption: enigmaTezt },
                { quoted: selo }
              );
            }, 5000);
          }
        }

        if (
          isGroup &&
          fs.existsSync(`./database/grupos/games/wmusic/${from}.json`)
        ) {
          whatMusic = JSON.parse(
            fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`)
          );
          if (
            budy.slice(0, 4).toUpperCase() ==
              whatMusic.resposta.slice(0, 4).toUpperCase() &&
            budy.toUpperCase() != whatMusic.resposta
          )
            return reply("Tá perto hein! Tente novamente...");
          if (budy.toUpperCase() == whatMusic.resposta) {
            akame.sendMessage(
              from,
              {
                text: `• Resposta Correta: *${whatMusic.resposta}*\nParabéns ${pushname}, como recompensa você acaba de ganhar 5 N-Coins. Iniciando o próximo jogo em 5 segundos!`,
              },
              { mentionedJid: [sender] },
              { quoted: selo }
            );
            fs.unlinkSync(`./database/grupos/games/wmusic/${from}.json`);
            setTimeout(async () => {
              fs.writeFileSync(
                `./database/grupos/games/wmusic/${from}.json`,
                `${JSON.stringify(whatMusicAr[Math.floor(Math.random() * whatMusicAr.length)])}`
              );
              wmusic = JSON.parse(
                fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`)
              );
              textM = `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡\n–\n${wmusic.trechoMusic}\n–\n🤔😱 Qual música pertence o trecho apresentado acima?\n• ${II}Dica:${II} ${wmusic.dica}`;
              await akame.sendMessage(from, { text: textM }, { quoted: selo });
            }, 5000);
          }
        }

        if (isX9VisuUnica) {
          if (info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
            if (JSON.stringify(info).includes("videoMessage")) {
              var px =
                info.message?.viewOnceMessageV2?.message?.videoMessage ||
                info.message?.viewOnceMessage?.message?.videoMessage;
              px.viewOnce = false;
              px.video = { url: px.url };
              px.caption +=
                "\n\nRevelando o vídeo na visualização única enviada..";
              await akame.sendMessage(from, px);
            } else {
              var px =
                info.message?.viewOnceMessageV2?.message?.imageMessage ||
                info.message?.viewOnceMessage?.message?.imageMessage;
              px.viewOnce = false;
              px.image = { url: px.url };
              px.caption +=
                "\n\nRevelando a imagem na visualização única enviada...";
              await akame.sendMessage(from, px);
            }
          }
        }

        if (isx9 && type === "pinInChatMessage") {
          duration =
            info.message?.messageContextInfo?.messageAddOnDurationInSecs;
          fixedTime = (duration) =>
            duration === 0
              ? "0"
              : duration >= 30 * 24 * 60 * 60
                ? "30d"
                : duration >= 7 * 24 * 60 * 60
                  ? "7d"
                  : duration >= 24 * 60 * 60
                    ? "24h"
                    : duration;
          action =
            fixedTime(duration) === "0"
              ? "desfixar uma mensagem"
              : `fixar uma mensagem por *${fixedTime(duration)}*`;
          await akame.sendMessage(from, {
            text: `O admin *@${sender.split("@")[0]}* acabou de ${action}.`,
            mentions: [sender],
          });
        }

        /////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

        if (isCmd && isBanned) return reply(mess.bannedUser());

        const totalhit = JSON.parse(
          fs.readFileSync("./database/data/totalcmd.json")
        );
        const CmdUsedBOT = () => {
          totalhit[0].totalcmd += 1;
          fs.writeFileSync(
            "./database/data/totalcmd.json",
            JSON.stringify(totalhit)
          );
        };
        if (isCmd) CmdUsedBOT();

        const reqcmd = JSON.parse(
          fs.readFileSync("./database/data/totalcmd.json")
        );

        if (
          isGroup &&
          isCmd &&
          !isGroupAdmins &&
          !SoDono &&
          !isVip &&
          dataGp[0]?.Limitar_CMD
        ) {
          var TEMPO_A = Math.floor(Date.now() / 1000);
          var ID_G = Limit_CMD.findIndex((i) => i.idgp === from);
          var ID_U = Limit_CMD[ID_G]?.ids.findIndex((i) => i.id === sender);
          if (
            !JSON.stringify(Limit_CMD).includes(from) ||
            (ID_G < 0 && ID_U < 0)
          ) {
            Limit_CMD.push({
              idgp: from,
              ids: [{ id: sender, tempo: TEMPO_A }],
            });
            fs.writeFileSync(
              "./database/func/limitarcmd.json",
              JSON.stringify(Limit_CMD, null, 2)
            );
          } else if (ID_G >= 0 && ID_U < 0) {
            Limit_CMD[ID_G].ids.push({ id: sender, tempo: TEMPO_A });
            fs.writeFileSync(
              "./database/func/limitarcmd.json",
              JSON.stringify(Limit_CMD, null, 2)
            );
          }

          if (ID_G >= 0 && ID_U >= 0) {
            var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;
            var TEMPO_M = TEMPO_A - TEMPO_D;
            var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60;
            if (TEMPO_M < TEMPO_D2) {
              return reply(
                nescessario.TEMPO_DE_CMD.replaceAll(
                  "#tempocmd#",
                  TimeCount(TEMPO_M)
                ).replaceAll("#tempo#", TEMPO_D2)
              );
            } else {
              Limit_CMD[ID_G].ids[ID_U].tempo = TEMPO_A;
              fs.writeFileSync(
                "./database/func/limitarcmd.json",
                JSON.stringify(Limit_CMD, null, 2)
              );
            }
          }
        }

        akame.sendImageAsSticker = async (jid, path, options = {}) => {
          let buff = Buffer.isBuffer(path)
            ? path
            : /^data:.*?\/.*?;base64,/i.test(path)
              ? Buffer.from(path.split`,`[1], "base64")
              : /^https?:\/\//.test(path)
                ? await await getBuffer(path)
                : fs.existsSync(path)
                  ? fs.readFileSync(path)
                  : Buffer.alloc(0);
          let buffer;
          if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options);
          } else {
            buffer = await imageToWebp(buff);
          }
          await akame.sendMessage(jid, {
            sticker: { url: buffer },
            ...options,
          });
          return buffer;
        };

        akame.sendInteractiveTXT = async (
          idChat,
          mainText = "",
          footerText = "",
          quotedMessage = {},
          buttonsParams = {}
        ) => {
          try {
            await akame.relayMessage(
              idChat,
              {
                interactiveMessage: {
                  body: { text: mainText },
                  footer: { text: footerText },
                  contextInfo: quotedMessage,
                  nativeFlowMessage: buttonsParams,
                },
              },
              {}
            );
          } catch (errorMessage) {
            await reply(String(errorMessage));
          }
        };

        akame.sendInteractiveIMG = async (
          imageDir,
          ChatID,
          definedText = "",
          footer = "",
          contextMessageInfo = {},
          buttonsParams = {}
        ) => {
          try {
            create = await prepareWAMessageMedia(
              { image: fs.readFileSync(imageDir) },
              { upload: akame.waUploadToServer }
            );
            imageCreate = create.imageMessage;
            await akame.relayMessage(
              ChatID,
              {
                interactiveMessage: {
                  header: {
                    hasMediaAttachment: true,
                    imageMessage: imageCreate,
                  },
                  headerType: "IMAGE",
                  body: { text: definedText },
                  footer: { text: footer },
                  contextInfo: contextMessageInfo,
                  nativeFlowMessage: buttonsParams,
                },
              },
              {}
            );
          } catch (errorMessage) {
            return reply(String(errorMessage));
          }
        };

        let isCodeKey = Array(
          "aluguel",
          "alugueis",
          "alugar",
          "alugarbot",
          "loja",
          "dono"
        ).some((i) => i === command);

        if (isGroup && isModoAluguel && isCmd && !SoDono && !isCodeKey) {
          if (!JSON.stringify(grupos).includes("akame-bot-oficial")) {
            grupos.push({ id: "akame-bot-oficial", gps: [] });
            fs.writeFileSync(
              "./database/grupos/aluguel/grupos.json",
              JSON.stringify(grupos, null, 2)
            );
          }
          if (!JSON.stringify(grupos).includes(from)) {
            grupos.push({ id: from, limite: 5, validado: false });
            fs.writeFileSync(
              "./database/grupos/aluguel/grupos.json",
              JSON.stringify(grupos, null, 2)
            );
          }
          AB = grupos.map((i) => i.id).indexOf(from);
          if (grupos[AB].validado == false) {
            if (grupos[AB].limite <= 1) {
              grupos.splice(AB, 1);
              fs.writeFileSync(
                "./database/grupos/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
              reply(
                `⏰️🌟 *O tempo de espera acabou!* Visto que o(s) senhor(es) não desejam comprar uma chave, estou saindo do grupo...`
              );
              await sleep(3000);
              return await akame.groupLeave(from);
            } else {
              grupos[AB].limite -= 1;
              fs.writeFileSync(
                "./database/grupos/aluguel/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
              return await mention(
                `💫🗣️ Não encontrei o grupo em meus registros! Por favor, caso esteja alugado ou deseja adquirir uma chave de ativação, entre em contato com o meu dono: *@${nmrdn.split("@")[0]}*`
              );
            }
          }
        }

        if (chaves.length > 0) {
          caixa = [];
          for (k of chaves) {
            if (budy2.toUpperCase() === k.key) {
              caixa.push(k.key);
            }
          }
          if (VerificarJSON(chaves, caixa[0])) {
            AD = chaves.map((i) => i.key).indexOf(caixa[0]);
            timeday = chaves[AD].dias;
            pessoa = chaves[AD].cliente;
            infinity = chaves[AD].dias > 0 ? false : true;
            if (!VerificarJSON(grupos, "akame-bot-oficial")) {
              grupos.push({ id: "akame-bot-oficial", gps: [] });
              fs.writeFileSync(
                "./database/grupos/aluguel/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
            }
            if (!VerificarJSON(grupos, from)) {
              grupos.push({ id: from, limite: 5, validado: true });
              fs.writeFileSync(
                "./database/grupos/aluguel/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
            } else {
              GP = grupos.map((i) => i.id).indexOf(from);
              grupos[GP].validado = true;
              fs.writeFileSync(
                "./database/grupos/aluguel/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
            }
            if (infinity == false) {
              if (chaves[AD].tipo == 1 && isGroup) {
                if (!VerificarJSON(aluguel, from)) {
                  aluguel.push({
                    id: from,
                    nome: groupName,
                    tempo: timeday,
                    totalRent: timeday,
                    cliente: pessoa,
                    save: Number(moment.tz("America/Sao_Paulo").format("DD")),
                    cortesia: false,
                  });
                  fs.writeFileSync(
                    "./database/grupos/aluguel/aluguel.json",
                    JSON.stringify(aluguel, null, 2)
                  );
                  chaves.splice(AD, 1);
                  fs.writeFileSync(
                    "./database/grupos/aluguel/chaves.json",
                    JSON.stringify(chaves, null, 2)
                  );
                  reply(
                    `🌟🛒 O grupo foi registrado com sucesso ao aluguel! *Qualquer dúvida entre em contato com meu dono.*`
                  );
                  await sleep(2000);
                  await akame.sendMessage(nmrdn, {
                    text: `⚠️🛒 Código de aluguel foi validado no grupo com sucesso! Registrado no nome de *@${pessoa.split("@")[0]}*\n• Grupo registrado: *${groupName}*`,
                    mentions: [pessoa],
                  });
                } else {
                  AB = aluguel.map((i) => i.id).indexOf(from);
                  aluguel[AB].cortesia = false;
                  aluguel[AB].nome = groupName;
                  aluguel[AB].totalRent = aluguel[AB].tempo + timeday;
                  aluguel[AB].tempo += timeday;
                  fs.writeFileSync(
                    "./database/grupos/aluguel/aluguel.json",
                    JSON.stringify(aluguel, null, 2)
                  );
                  chaves.splice(AD, 1);
                  fs.writeFileSync(
                    "./database/grupos/aluguel/chaves.json",
                    JSON.stringify(chaves, null, 2)
                  );
                  reply(
                    `+${timeday} dia${Number(timeday) > 1 ? "s" : ""} adicionado${Number(timeday) > 1 ? "s" : ""} para o grupo em meu banco de dados.`
                  );
                  await sleep(2000);
                  await akame.sendMessage(nmrdn, {
                    text: `⚠️🛒 Código de aluguel foi validado no grupo com sucesso! Registrado no nome de *@${pessoa.split("@")[0]}*\n• Grupo registrado: *${groupName}*`,
                    mentions: [pessoa],
                  });
                }
              }

              if (chaves[AD].tipo == 2 && isGroup) {
                CD = grupos.map((i) => i.id).indexOf("akame-bot-oficial");
                if (!VerificarJSON(grupos[CD].gps, from)) {
                  if (!VerificarJSON(aluguel, from)) {
                    grupos[CD].gps.push({ id: from });
                    fs.writeFileSync(
                      "./database/grupos/aluguel/grupos.json",
                      JSON.stringify(grupos, null, 2)
                    );
                    aluguel.push({
                      id: from,
                      nome: groupName,
                      tempo: 24,
                      totalRent: 24,
                      cliente: sender,
                      save: Number(moment.tz("America/Sao_Paulo").format("mm")),
                      cortesia: true,
                    });
                    fs.writeFileSync(
                      "./database/grupos/aluguel/aluguel.json",
                      JSON.stringify(aluguel, null, 2)
                    );
                    reply(
                      `✅️🌟 Código Card Cortesia validado com sucesso! 24h liberadas neste grupo contando a partir de agora.`
                    );
                    await sleep(2000);
                    await akame.sendMessage(nmrdn, {
                      text: `⚠️🌟️ Código *Card Cortesia* foi validado no grupo, registrado no nome de *@${pessoa.split("@")[0]}*.\n• Grupo registrado: *${groupName}*`,
                      mentions: [pessoa],
                    });
                  } else
                    reply(
                      "[!] Este grupo já está registrado em meu banco de dados."
                    );
                } else
                  reply(
                    "[!] Já foi validado neste mês uma cortesia neste grupo."
                  );
              }
            } else {
              if (chaves[AD].tipo == 1 && isGroup) {
                chaves.splice(AD, 1);
                fs.writeFileSync(
                  "./database/grupos/aluguel/chaves.json",
                  JSON.stringify(chaves, null, 2)
                );
                reply(
                  `[!] O grupo foi salvo no meu banco de dados com sucesso!`
                );
              }
            }
          }
        }

        // ÍNICIO: CASES / COMANDOS COM PREFIXO:
        switch (command) {
          case "stickerinfo":
          case "stmetadata":
            if (!isQuotedSticker)
              return reply(
                "Por favor, é nescessário mencionar um sticker para obter sucesso à execução do comando."
              );
            try {
              extractBuffer = await getFileBuffer(
                info.message.extendedTextMessage.contextInfo.quotedMessage
                  .stickerMessage,
                "sticker"
              );
              stickerMetadata = await extractMetadata(extractBuffer);
              await akame.sendMessage(
                from,
                {
                  image: extractBuffer,
                  caption: `• Emojis: *${stickerMetadata?.emojis?.join(" ") || "❌"}*\n• ID do Pacote: *${stickerMetadata["sticker-pack-id"] || "❌"}*\n• Nome do Pacote: *${stickerMetadata["sticker-pack-name"] || "❌"}*\n• Autor do Pacote:  *${stickerMetadata["sticker-pack-publisher"] || stickerMetadata["sticker-author-name"] || "❌"}*\n• Sticker Maker _(Android)_: *${stickerMetadata["android-app-store-link"] || "❌"}*\n• Sticker Maker _(iOS)_: *${stickerMetadata["ios-app-store-link"] || "❌"}*`,
                },
                { quoted: selo }
              );
            } catch (error) {
              return reply(
                "[#] Ocorreu um erro ao obter a metadata do sticker, tente com outro..."
              );
            }
            break;

          case "savegp":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isGroup) return reply(mess.onlyGroup());
            if (!VerificarJSON(grupos, from)) {
              grupos.push({ id: from, limite: 5, validado: true });
              fs.writeFileSync(
                "./database/grupos/aluguel/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
              reply(
                `Grupo *"${groupName}"* acaba de ser salvo em meu banco de dados...`
              );
            } else {
              GP = grupos.map((i) => i.id).indexOf(from);
              grupos[GP].validado = true;
              fs.writeFileSync(
                "./database/grupos/aluguel/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
              reply(
                `Grupo *"${groupName}"* já foi salvo em meu banco de dados, então só irei ativar o recurso de validado senhor(a)...️`
              );
            }
            break;

          case "addrent":
          case "rgrent":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isGroup) return reply(mess.onlyGroup());
            if (!VerificarJSON(grupos, from)) {
              grupos.push({ id: from, limite: 5, validado: true });
              fs.writeFileSync(
                "./database/grupos/aluguel/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
            } else {
              GP = grupos.map((i) => i.id).indexOf(from);
              grupos[GP].validado = true;
              fs.writeFileSync(
                "./database/grupos/aluguel/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
            }
            if (!JSON.stringify(aluguel).includes(from)) {
              if (!q.includes("/"))
                return reply(
                  `Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo.\n- Ex: ${prefix + command} ${nmrdn.split("@")[0]}/30`
                );
              barra = q
                .replace(" /", "/")
                .replace("/ ", "/")
                .replace(" / ", "/");
              var [nmr, dias] = barra.split("/");
              if (!Number(dias)) return reply(`Apenas números pfvr`);
              matheuzinho = nmr.includes("@")
                ? nmr
                    .split("@")[1]
                    .replace(new RegExp("[()+-/ +/]", "gi"), "") +
                  "@s.whatsapp.net"
                : nmr.replace(new RegExp("[()+-/ +/]", "gi"), "") +
                  "@s.whatsapp.net";
              const [checkwpp] = await akame.onWhatsApp(
                matheuzinho.split("@")[0]
              );
              if (checkwpp == undefined) {
                return reply(
                  `O número ${matheuzinho.split("@")[0]} não é válido no whatsapp...`
                );
              }
              if (Number(dias) <= 0)
                return reply(`É necessário ao menos 1 dia de aluguel né.`);
              if (dias.includes(".")) return reply("Não use números decimais.");
              aluguel.push({
                id: from,
                nome: groupName,
                tempo: Number(dias) + 1,
                totalRent: Number(dias) + 1,
                cliente: matheuzinho,
                save: Number(moment.tz("America/Sao_Paulo").format("DD")),
                cortesia: false,
              });
              fs.writeFileSync(
                "./database/grupos/aluguel/aluguel.json",
                JSON.stringify(aluguel, null, 2)
              );
              reply(`Grupo adicionado ao aluguel com sucesso.`);
            } else {
              if (!Number(args[0]))
                return reply(
                  `Coloque quantos dias mais serão adicionados ao aluguel deste grupo!`
                );
              hehe = Number(args[0]);
              AB = aluguel.map((i) => i.id).indexOf(from);
              aluguel[AB].cortesia = false;
              aluguel[AB].nome = groupName;
              aluguel[AB].totalRent = aluguel[AB].tempo + hehe;
              aluguel[AB].tempo += hehe;
              fs.writeFileSync(
                "./database/grupos/aluguel/aluguel.json",
                JSON.stringify(aluguel, null, 2)
              );
              reply(
                `+${args[0]} dia${Number(args[0]) > 1 ? "s" : ""} adicionado${Number(args[0]) > 1 ? "s" : ""} para este grupo.`
              );
            }
            break;

          case "tirarrent":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isGroup) return reply(mess.onlyGroup());
            if (!Number(args[0])) return reply("Apenas números.");
            if (!JSON.stringify(aluguel).includes(from))
              return reply("ID inexistente.");
            AB = aluguel.map((i) => i.id).indexOf(from);
            aluguel[AB].cortesia = false;
            aluguel[AB].nome = groupName;
            aluguel[AB].tempo -= Number(args[0]);
            fs.writeFileSync(
              "./database/grupos/aluguel/aluguel.json",
              JSON.stringify(aluguel, null, 2)
            );
            reply(
              `${args[0]} dia${Number(args[0]) > 1 ? "s" : ""} fo${Number(args[0]) > 1 ? "ram" : "i"} retirado${Number(args[0]) > 1 ? "s" : ""} deste grupo.`
            );
            break;

          case "delrent":
          case "rmrent":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isGroup) return reply(mess.onlyGroup());
            if (!q) {
              if (!JSON.stringify(aluguel).includes(from))
                return reply(`ID inexistente`);
              GP = grupos.map((i) => i.id).indexOf(from);
              grupos.splice(GP, 1);
              fs.writeFileSync(
                "./database/grupos/aluguel/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
              AB = aluguel.map((i) => i.id).indexOf(from);
              aluguel.splice(AB, 1);
              fs.writeFileSync(
                "./database/grupos/aluguel/aluguel.json",
                JSON.stringify(aluguel, null, 2)
              );
              reply(
                `O registro desse grupo foi deletado com sucesso do meu banco de dados.`
              );
            } else {
              if (
                !Number(args[0]) ||
                Number(args[0]) < 0 ||
                Number(args[0]) > Number(aluguel.length + 1)
              )
                return reply(
                  `Retorne um número válido... Olhe na ${prefix}listrent e veja o número`
                );
              BC = Number(args[0]) - 1;
              GP = grupos.map((i) => i.id).indexOf(aluguel[BC].id);
              grupos.splice(GP, 1);
              fs.writeFileSync(
                "./database/grupos/aluguel/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
              aluguel.splice(BC, 1);
              fs.writeFileSync(
                "./database/grupos/aluguel/aluguel.json",
                JSON.stringify(aluguel, null, 2)
              );
              reply(
                `O registro desse grupo foi deletado com sucesso do meu banco de dados.`
              );
            }
            break;

          case "cortesia24":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isGroup) return reply(mess.onlyGroup());
            if (JSON.stringify(aluguel).includes(from))
              return reply(`Grupo já registrado...`);
            if (!JSON.stringify(grupos).includes(from)) {
              grupos.push({ id: from, limite: 5, validado: true });
              fs.writeFileSync(
                "./database/grupos/aluguel/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
            }
            aluguel.push({
              id: from,
              nome: groupName,
              tempo: 24,
              totalRent: 24,
              cliente: nmrdn,
              save: Number(moment.tz("America/Sao_Paulo").format("mm")),
              cortesia: true,
            });
            fs.writeFileSync(
              "./database/grupos/aluguel/aluguel.json",
              JSON.stringify(aluguel, null, 2)
            );
            reply(
              `💳 Cartão verde validado! 24h liberadas neste grupo contando a partir de agora.`
            );
            break;

          case "listrent":
          case "lista-aluguel":
            if (!SoDono) return reply(mess.onlyGroup());
            if (aluguel.length > 0) {
              var getGroups = await akame.groupFetchAllParticipating();
              var groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
              var ingfoo = groups.map((v) => v);
              ingfoo.sort((a, b) => a[0] < b.length);
              for (g = 0; g < ingfoo.length; g++) {
                if (JSON.stringify(aluguel).includes(ingfoo[g].id)) {
                  matheuzinho = aluguel.map((m) => m.id).indexOf(ingfoo[g].id);
                  aluguel[matheuzinho].nome = ingfoo[g].subject;
                  fs.writeFileSync(
                    "./database/grupos/aluguel/aluguel.json",
                    JSON.stringify(aluguel, null, 2)
                  );
                }
              }
              txt = `[Total: *${aluguel.length}*] - Lista dos grupos alugados:\n—\n`;
              for (i = 0; i < aluguel.length; i++) {
                hmm = aluguel[i].tempo;
                txt += `*[${i + 1}]* Grupo: *${aluguel[i].nome}*\n`;
                if (aluguel[i].cortesia == false) {
                  txt += `• Tempo Restante: *${hmm} dia${hmm > 1 ? "s" : ""}*\n• Cliente: *wa.me/${aluguel[i].cliente.split("@")[0]}*\n—\n`;
                } else {
                  txt += `_O grupo está usando o cartão cortesia, ou seja, 24h de uso foram liberadas._\n—\n`;
                }
              }
              reply(txt);
            } else {
              reply(`Não existe nenhum grupo registrado em aluguel senhor(a).`);
            }
            break;

          case "lastrent":
            if (!SoDono) return reply(mess.onlyOwner());
            if (aluguel.length > 0) {
              matheuzinho = aluguel.map((i) => i);
              rank = matheuzinho.sort((a, b) => (a.tempo < b.tempo ? -1 : 0));
              txt = "• Top 3 grupos com o aluguel mais próximo de acabar:\n—\n";
              for (i = 0; i < 3; i++) {
                if (rank[i].cortesia == false) {
                  hmm = rank[i].tempo;
                  txt += `*[${i + 1}]* Grupo: *${rank[i].nome}*\n• Tempo Restante: ${hmm} dia${hmm > 1 ? "s" : ""}\n• Cliente: *wa.me/${rank[i].cliente.split("@")[0]}*\n—\n`;
                }
              }
              reply(txt);
            } else {
              reply(`Não existe nenhum grupo registrado em aluguel senhor(a).`);
            }
            break;

          case "calendario":
          case "dados":
            setTimeout(() => {
              reagir(from, "📅");
            }, 300);
            var getGroups = await akame.groupFetchAllParticipating();
            var groups = Object.entries(getGroups)
              .slice(0)
              .map((entry) => entry[1]);
            var ingfoo = groups.map((v) => v);
            ingfoo.sort((a, b) => a[0] < b.length);
            hora16 = moment.tz("America/Sao_Paulo").format("HH:MM:SS");
            date16 = moment.tz("America/Sao_Paulo").format("DD/MM/YYYY");
            day = `${tempo}, ${pushname}!\n• Grupo: *${isGroup ? groupName : "Privado"}*\n• Data & Hora: *${date16} ${hora16}*\n• Nome do Bot: *${NomeDoBot}*\n• Proprietário: *${ownerName}*\n• Estou operando atualmente em *${ingfoo.length}* grupos.`;
            if (JSON.stringify(aluguel).includes(from)) {
              AB = aluguel.map((i) => i.id).indexOf(from);
              numsei = (aluguel[AB].tempo / aluguel[AB].totalRent) * 100;
              if (numsei < 10)
                matheuzinho = `${numsei.toFixed(0)}%〘▒▒▒▒▒▒▒▒▒▒〙`;
              if (numsei >= 10)
                matheuzinho = `${numsei.toFixed(0)}%〘█▒▒▒▒▒▒▒▒▒〙`;
              if (numsei >= 20)
                matheuzinho = `${numsei.toFixed(0)}%〘██▒▒▒▒▒▒▒▒〙`;
              if (numsei >= 30)
                matheuzinho = `${numsei.toFixed(0)}%〘███▒▒▒▒▒▒▒〙`;
              if (numsei >= 40)
                matheuzinho = `${numsei.toFixed(0)}%〘████▒▒▒▒▒▒〙`;
              if (numsei >= 50)
                matheuzinho = `${numsei.toFixed(0)}%〘█████▒▒▒▒▒〙`;
              if (numsei >= 60)
                matheuzinho = `${numsei.toFixed(0)}%〘██████▒▒▒▒〙`;
              if (numsei >= 70)
                matheuzinho = `${numsei.toFixed(0)}%〘███████▒▒▒〙`;
              if (numsei >= 80)
                matheuzinho = `${numsei.toFixed(0)}%〘████████▒▒〙`;
              if (numsei >= 90)
                matheuzinho = `${numsei.toFixed(0)}%〘█████████▒〙`;
              if (numsei >= 95)
                matheuzinho = `${numsei.toFixed(0)}%〘██████████〙`;
              hmm = aluguel[AB].tempo;
              if (aluguel[AB].cliente == sender || SoDono) {
                matheusSabe = `• `;
                if (aluguel[AB].cortesia == false) {
                  matheusSabe += `${hmm} dia${hmm > 1 ? "s" : ""} restantes`;
                } else {
                  matheusSabe += hmm > 1 ? `${hmm} horas` : `Alguns minutos`;
                }
                matheusSabe += ` até o fim do contrato.`;
              } else {
                matheusSabe = ``;
              }
              day += `\n——\n🔋 *Bateria restante para uso:*\n${matheuzinho} ${matheusSabe}`;
            }
            reply(`${day}`);
            break;

          case "aluguel":
          case "alugueis":
          case "alugar":
          case "alugarbot":
          case "loja":
            await reagir(from, "🛒");
            reply(
              `Digite *${prefix}dono* para entrar em contato com meu proprietário e liberar o acesso em seu grupo.\n• Os valores são passados por ele, não tenho nenhuma informação registrada sobre isso.`
            );
            break;

          case "mycoderent": //by matheuzinho
            txt = `🔑 Suas chaves de ativação:\n—\n`;
            nmr = 0;
            for (i of chaves) {
              if (i.cliente == sender) {
                txt += `\n• ${i.key}`;
                nmr += 1;
              }
            }
            if (nmr <= 0)
              return reply("Você não possui nenhuma chave de ativação.");
            reply(
              isGroup
                ? "Por segurança lhe enviei em seu privado o que foi solicitado."
                : "Aguarde, estou enviando o que foi solicitado..."
            );
            await sendText(sender, txt);
            break;

          case "codelistrent": //by matheuzinho
            if (!SoDono) return reply(mess.onlyOwner());
            txt = `[Total: *${i.chaves}*] - Lista de Códigos registrado(s) para aluguel:`;
            caixa = [];
            for (i of chaves) {
              txt += `\n—\n• Chave: *${i.key}*\n• Cliente que realizou a solicitação: *@${i.cliente.split("@")[0]}*\n• Expiração: ${nmr > 0 ? `${i.dias} dia${i.dias > 1 ? "s" : ""}` : `Não contém dias para a expiração, é infinito.`}`;
              caixa.push(i.cliente);
            }
            if (caixa <= 0)
              return reply(
                "Não existe nenhuma chave registrada em meu banco de dados."
              );
            reply(
              isGroup
                ? "Por motivos de segurança, enviei em seu privado..."
                : "Aguarde, estou enviando o que foi solicitado!"
            );
            await akame.sendMessage(sender, { text: txt, mentions: caixa });
            break;

          case "gerarcoderent":
            if (!SoDono) return reply(mess.onlyOwner());
            barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/");
            var [v1, v2] = barra.split("/");
            if (!q.includes("/"))
              return reply(
                `Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo.\n• Exemplo: *${prefix + command} ${nmrdn.split("@")[0]}/30*`
              );
            matheuzinho =
              v1.toLowerCase() == "me"
                ? sender
                : v1.includes("@")
                  ? v1
                      .split("@")[1]
                      .replace(new RegExp("[()+-/ +/]", "gi"), "") +
                    "@s.whatsapp.net"
                  : v1.replace(new RegExp("[()+-/ +/]", "gi"), "") +
                    "@s.whatsapp.net";
            const [checkkeygp] = await akame.onWhatsApp(
              matheuzinho.split("@")[0]
            );
            if (checkkeygp == undefined) {
              return reply(
                `O número *${matheuzinho.split("@")[0]}* não é válido no whatsapp.`
              );
            }
            nmr = Number(v2) > 0 ? Number(v2) : 0;
            idks = `G${v2}-`;
            idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(matheuzinho.slice(2, 8))}`;
            idks += `M${nmr}H-${Number(moment.tz("America/Sao_Paulo").format("DDMMYY")) + Number(moment.tz("America/Sao_Paulo").format("HHmmss"))}B`;
            chaves.push({
              key: idks,
              tipo: 1,
              dias: nmr,
              cliente: matheuzinho,
              valor: 0,
            }); //tipo 1 = aluguel de grupo
            fs.writeFileSync(
              "./database/grupos/aluguel/chaves.json",
              JSON.stringify(chaves, null, 2)
            );
            await mention(
              `🔑🌟 Código de ativação do serviço gerado com sucesso! Segue abaixo a chave:\n-> *${idks}*\n——\n• Quantidade de dias: *${nmr > 0 ? `${nmr} dia${nmr > 1 ? "s" : ""}` : `∞ INFINITO`}*\n• Usuário(a) que alugou: *@${matheuzinho.split("@")[0]}*`
            );
            break;

          case "gerarcodecort": //by matheuzinho
            if (!SoDono) return reply(mess.onlyOwner());
            reagir(from, "😀");
            cort = 24;
            idks = `G${cort}-`;
            idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(sender.slice(2, 8))}`;
            idks += `E${Number(cort / 2).toFixed(0)}R-${Number(moment.tz("America/Sao_Paulo").format("DDMMYY")) + Number(moment.tz("America/Sao_Paulo").format("HHmmss"))}A`;
            chaves.push({
              key: idks,
              tipo: 2,
              dias: 24,
              cliente: sender,
              valor: 0,
            }); //tipo 3 = cortesia
            fs.writeFileSync(
              "./database/grupos/aluguel/chaves.json",
              JSON.stringify(chaves, null, 2)
            );
            reply(
              `🛒🌟 O código cortesia foi gerado com sucesso! Segue abaixo a chave de ativação do mesmo:\n-> *${idks}*`
            );
            break;

          case "delcoderent":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!JSON.stringify(chaves).includes("akame-bot-oficial"))
              return reply(`Não há chaves registradas.`);
            if (!q)
              return reply(`Cadê o código de aluguel que você deseja apagar?`);
            if (!JSON.stringify(chaves).includes(q))
              return reply(
                "O código não foi encontrado em nosso banco de dados, é inexistente!"
              );
            AD = chaves.map((i) => i.key).indexOf(q);
            chaves.splice(AD, 1);
            fs.writeFileSync(
              "./database/grupos/aluguel/chaves.json",
              JSON.stringify(chaves, null, 2)
            );
            reply(`[!] O código *${q}* foi deletado do sistema com sucesso.`);
            break;

          case "iddogrupo":
            if (!SoDono) return reply(mess.onlyOwner());
            reply(from);
            break;

          //=========== [ ÍNICIO JOGOS ] ========= //

          case "quando":
            if (args.length < 1) return reply("Digite a pergunta!");
            const meupirul = [
              "Hoje",
              "Amanhã",
              "Nunca",
              "dia",
              "semana",
              "mês",
              "ano",
            ];
            const meupirul2 = ["dias", "semanas", "meses", "anos"];
            randomm = meupirul[Math.floor(Math.random() * meupirul.length)];
            random2 = `${Math.floor(Math.random() * 11) + 1}`;
            if (
              randomm == "Hoje" ||
              randomm == "Amanhã" ||
              randomm == "Nunca"
            ) {
              texto = `Pergunta: ${body.slice(1)}\nResposta: ${randomm}`;
            } else if (random2 == 1) {
              texto = `Pergunta: ${body.slice(1)}\nResposta:  1 ${randomm}`;
            } else {
              random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)];
              texto = `Pergunta: ${body.slice(1)}\nResposta: ${random2} ${random3}`;
            }
            reply(texto);
            break;

          //=========== [ FINAL JOGOS ] ========= //

          case "listaddi":
          case "ddilist":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (q.length < 1)
              return reply(
                `Fale o código de um país, por exemplo: *${prefix}listaddi 55*`
              );
            if (isNaN(q))
              return reply(
                `Fale o código de um país, por exemplo: *${prefix}listaddi 55*`
              );
            teks = `• Número com código de país +${args[0]} registrados no grupo:\n–\n`;
            men = [];
            for (let mem of groupMembers) {
              if (mem.id.startsWith(q)) {
                teks += `⇒ @${mem.id.split("@")[0]}\n`;
                men.push(mem.id);
              }
            }
            if (teks.indexOf("⇒") < 0)
              return reply(
                `Nenhum número com o DDI *+${args[0]}* foi encontrado.`
              );
            await akame
              .sendMessage(
                from,
                { text: teks, mentions: men },
                { quoted: selo }
              )
              .catch(async (error) => {
                reply(mess.error());
              });
            break;

          case "listaddd":
          case "dddlist":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (q.length < 1)
              return reply(
                `Fale o código do estado, por exemplo: *${prefix}listaddd 82*`
              );
            if (isNaN(q))
              return reply(
                `Fale o código de um estado(ddd), por exemplo: *${prefix}listaddd 82*`
              );
            teks = `• Lista de números brasileiros com o DDD *${q}* presentes neste grupo:\n–\n`;
            men = [];
            for (let mem of groupMembers) {
              if (mem.id.startsWith(55 + q)) {
                teks += `⇒ @${mem.id.split("@")[0]}\n`;
                men.push(mem.id);
              }
            }
            if (teks.indexOf("⇒") < 0)
              return reply(
                "Nenhum *número brasileiro* com DDD fornecido foi encontrado no grupo."
              );
            await akame
              .sendMessage(
                from,
                { text: teks, mentions: men },
                { quoted: selo }
              )
              .catch(async (error) => {
                reply(mess.error());
              });
            break;

          case "limpar_mortos-cnt":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isGroup) return reply(mess.onlyOwner());
            bla = [];
            var CNT_RS =
              countMessage[countMessage.map((i) => i.groupId).indexOf(from)]
                .numbers;
            for (i = 0; i < CNT_RS.map((i) => i.id).length; i++) {
              bla.push(CNT_RS.map((i) => i.id)[i]);
            }
            for (i of groupMembers) {
              bla.splice(bla.indexOf(i.id), 1);
            }
            for (i of bla) {
              CNT_RS.splice(CNT_RS.indexOf(i), 1);
            }
            fs.writeFileSync(
              "./settings/media/countmsg.json",
              JSON.stringify(countMessage)
            );
            reply(
              "Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens.."
            );
            break;

          case "tirar_docnt":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isGroup) return reply(mess.onlyGroup());
            var i2 = countMessage.map((i) => i.groupId).indexOf(from);
            var i = countMessage[i2].numbers
              .map((i) => i.id)
              .indexOf(q.trim() + "@s.whatsapp.net");
            countMessage[i2].numbers.splice(i, 1);
            fs.writeFileSync(
              "./settings/media/countmsg.json",
              JSON.stringify(countMessage)
            );
            reply("Usuário tirado do contador de mensagens com sucesso...");
            break;

          case "anotar":
          case "tirar_nota":
          case "rmnota":
            if (!isGroup)
              return reply(`Só em grupo pode utilizar este comando.`);
            if (!isGroupAdmins)
              return reply(`Só adm pode utilizar este tipo de comando.`);
            if (command == "anotar") {
              var [q5, q10] = q.trim().split("|");
              if (!q5 || !q10 || !q.includes("|"))
                return reply(
                  `Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Cachorro|Cachorros são bom pra comer na Venezuela...`
                );
              if (JSON.stringify(anotar).includes(from)) {
                var i2 = anotar.map((i) => i.grupo).indexOf(from);
                if (JSON.stringify(anotar[i2].puxar).includes(q5)) {
                  var i3 = anotar[i2].puxar.map((i) => i.nota).indexOf(q5);
                  if (anotar[i2].puxar[i3].nota == q5)
                    return reply(
                      `Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`
                    );
                }
              }
              if (!JSON.stringify(anotar).includes(from)) {
                anotar.push({
                  grupo: from,
                  puxar: [{ nota: q5, anotacao: q10 }],
                });
                fs.writeFileSync(
                  "./database/func/anotar.json",
                  JSON.stringify(anotar)
                );
                reply("Anotação registrada com sucesso...");
              } else {
                anotar[i2].puxar.push({ nota: q5, anotacao: q10 });
                fs.writeFileSync(
                  "./database/func/anotar.json",
                  JSON.stringify(anotar)
                );
                reply("Anotação registrada com sucesso...");
              }
            } else {
              if (!q)
                return reply("Digite qual anotação deseja tirar pelo título..");
              if (JSON.stringify(anotar).includes(from)) {
                var i2 = anotar.map((i) => i.grupo).indexOf(from);
                if (JSON.stringify(anotar[i2].puxar).includes(q)) {
                  var i3 = anotar[i2].puxar.map((i) => i.nota).indexOf(q);
                }
              }
              if (0 > anotar[i2].puxar.map((i) => i.nota).indexOf(q))
                return reply(
                  "Esta nota não está inclusa, verifique com atenção..."
                );
              anotar[i2].puxar.splice(i3, 1);
              fs.writeFileSync(
                "./database/func/anotar.json",
                JSON.stringify(anotar)
              );
              reply(`Anotação ${q} tirada com sucesso...`);
            }
            break;

          case "anotacao":
          case "anotacoes":
          case "nota":
          case "notas":
            if (!isGroup)
              return reply(`Só em grupo pode utilizar este comando.`);
            if (command == "anotacao" || command == "nota") {
              if (!q)
                return reply("Digite o título da anotação que deseja puxar..");
              if (!JSON.stringify(anotar).includes(from))
                return reply("Este grupo não tem nenhuma anotação...");
              var i2 = anotar.map((i) => i.grupo).indexOf(from);
              if (!JSON.stringify(anotar[i2].puxar).includes(q))
                return reply("Não contém nenhuma anotação com este título.");
              var i3 = anotar[i2].puxar.map((i) => i.nota).indexOf(q);
              mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`);
            } else {
              var i2 = anotar.map((i) => i.grupo).indexOf(from);
              if (anotar[i2].puxar.length == 0)
                return reply("Este grupo não tem nenhuma anotação...");
              var i2 = anotar.map((i) => i.grupo).indexOf(from);
              var antr = anotar[i2].puxar;
              txtin = `Aqui está todas as anotações registradas em minha database do grupo: *[ ${groupName} ]*\n`;
              for (i = 0; i < antr.length; i++) {
                txtin += `\n↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`;
              }
              txtin += "";
              reply(txtin);
            }
            break;

          case "download-link":
            if (q.includes("video") || q.includes("mp4")) {
              await akame
                .sendMessage(
                  from,
                  { video: { url: q }, mimetype: "video/mp4" },
                  { quoted: selo }
                )
                .catch(async (e) => {
                  reply("Erro, visualize se este link é válido...");
                });
            } else if (q.includes("webp") || q.includes("jpg")) {
              await akame
                .sendMessage(from, { image: { url: q } }, { quoted: selo })
                .catch(async (e) => {
                  reply("Erro, visualize se este link é válido...");
                });
            }
            break;

          case "signo":
            try {
              if (!q)
                return reply(
                  `Digite seu signo, exemplo: ${prefix + command} Virgem`
                );
              signos = [
                "Áries",
                "Touro",
                "Gêmeos",
                "Câncer",
                "Leão",
                "Virgem",
                "Libra",
                "Escorpião",
                "Sagitário",
                "Capricórnio",
                "Aquário",
                "Peixes",
                "aries",
                "touro",
                "gemeos",
                "cancer",
                "leao",
                "virgem",
                "libra",
                "escorpiao",
                "sagitario",
                "capricornio",
                "aquario",
                "peixes",
              ];
              if (!signos.includes(q_2))
                return reply("Este signo não existe...");
              ABC = await fetchJson(
                API_URL +
                  `/api/pesquisa/horoscopo?signo=${q}&apikey=` +
                  API_KEY_AKAME
              );
              await akame
                .sendMessage(from, {
                  image: { url: ABC.resultado.imagem },
                  caption: mess.horoscopo(q, ABC),
                })
                .catch(async (error) => {
                  return reply(mess.error());
                });
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "verificado-global":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isVerificado) {
              nescessario.verificado = true;
              setNes(nescessario);
              reply(
                "O verificado foi desativado com sucesso, ou seja, o selo foi retirado de todos os meus comandos! *Para reativar é só digitar o comando novamente.*"
              );
            } else if (isVerificado) {
              nescessario.verificado = false;
              setNes(nescessario);
              reply(
                `O verificado foi ativado, ou seja, o selo foi colocado em todos os meus comandos! *Para remover o verificado dos comandos, use o comando novamente.*`
              );
            }
            break;

          case "audio-menu":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isAudioMenu) {
              nescessario.menu_audio = true;
              setNes(nescessario);
              reply(
                `O áudio foi ativado para o menu com sucesso, se quiser desativar é só digitar o comando novamente...`
              );
            } else if (isAudioMenu) {
              nescessario.menu_audio = false;
              setNes(nescessario);
              reply(
                `O áudio foi desativado para o menu com sucesso, se quiser ativar é só digitar o comando novamente...`
              );
            }
            break;

          case "menub":
            await reagir(from, "🩸");
            if (isAudioMenu) {
              audiomenu = await fetch(audio_menu).then((v) => v.buffer());
              await akame.sendMessage(
                from,
                { audio: audiomenu, mimetype: "audio/mpeg", ptt: true },
                { quoted: selo }
              );
            }
            await akame.sendMessage(
              from,
              {
                text: linguagem.menu(prefix),
                contextInfo: {
                  externalAdReply: {
                    title: `〘🩸〙${NomeDoBot}〘🩸〙\n⿻ꦿꦂ𝐔𝐬𝐮𝐚𝐫𝐢𝐨: ${pushname}`,
                    body: `Ⓘ Esse é o melhor bot do momento s꯭꯭꯭a꯭꯭i꯭b꯭꯭a꯭ ꯭꯭m꯭꯭꯭a꯭꯭꯭i꯭꯭꯭꯭s`,
                    thumbnail: await getBuffer(`${ftmenu.logo}`),
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true,
                    sourceUrl: group,
                  },
                },
              },
              { quoted: selo }
            );
            break;

          case "menu":
          case "menulist":
            await reagir(from, "🩸");
            Lrows = [];
            Lrows.push(
              {
                title: `「 🩸 」𝐌𝐄𝐍𝐔 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋「 🩸 」`,
                description: ` ${NomeDoBot} `,
                id: `${prefix}menub`,
              },
              {
                title: `「 🩸 」𝐌𝐄𝐍𝐔 𝐀𝐃𝐌「 🩸 」`,
                description: ` ${NomeDoBot} `,
                id: `${prefix}menuadm`,
              },
              {
                title: `「 🩸 」𝐌𝐄𝐍𝐔 𝐕𝐈𝐏「 🩸 」`,
                description: ` ${NomeDoBot} `,
                id: `${prefix}menuvip`,
              },
              {
                title: `「 🩸 」𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎「 🩸 」`,
                description: ` ${NomeDoBot} `,
                id: `${prefix}menudono`,
              },
              {
                title: `「 🩸 」𝐈𝐍𝐅𝐎 𝐃𝐎𝐍𝐎「 🩸 」`,
                description: ` ${NomeDoBot} `,
                id: `${prefix}infodono`,
              },
              {
                title: `「 🩸 」𝐌𝐄𝐍𝐔 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒「 🩸 」`,
                description: ` ${NomeDoBot} `,
                id: `${prefix}brincadeiras`,
              },
              {
                title: `「 🩸 」𝐌𝐄𝐍𝐔 𝐂𝐎𝐈𝐍𝐒「 🩸 」`,
                description: ` ${NomeDoBot} `,
                id: `${prefix}menucoins`,
              },
              {
                title: `「 🩸 」𝐌𝐄𝐍𝐔 𝐋𝐎𝐆𝐎𝐒「 🩸 」`,
                description: ` ${NomeDoBot} `,
                id: `${prefix}menulogos`,
              },
              {
                title: `「 🩸 」𝐌𝐄𝐍𝐔 𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒「 🩸 」`,
                description: ` ${NomeDoBot} `,
                id: `${prefix}alteradores`,
              },
              {
                title: `「 🩸 」𝐌𝐄𝐍𝐔 𝐄𝐅𝐄𝐈𝐓𝐎𝐒「 🩸 」`,
                description: ` ${NomeDoBot} `,
                id: `${prefix}efeitos`,
              }
            );
            akame.sendInteractiveIMG(
              "./database/data/media/images/menulist-image.jpg",
              from,
              `❪⛩️ꦿ𝙼𝙴𝙽𝚄 𝙻𝙸𝚂𝚃ꯧ⸼❫\n్మాై𝚄𝚂𝚄𝙰𝚁𝙸𝙾: ${pushname}\n్మాై𝙲𝙰𝚁𝙶𝙾: ${isCargo}\n్మాై𝙲𝙾𝙽𝚃𝙴𝙼 𝚅𝙸𝙿: ${isChVip}`,
              "Iza_bot",
              { participant: sender, quotedMessage: info.message },
              {
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                      title: "「 🩸 」𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓 「 🩸 」",
                      sections: [
                        {
                          title: `RIQUE O LENDARIO OFICIAL `,
                          highlight_label: "STATUS: ON✅",
                          rows: Lrows,
                        },
                      ],
                    }),
                  },
                ],
              }
            );
            break;

          case "logos":
          case "menulogo":
          case "menulogos":
            await reagir(from, "🍃");
            await akame.sendMessage(
              from,
              {
                text: linguagem.menulogos(prefix),
                contextInfo: {
                  externalAdReply: {
                    title: `〘🩸〙${NomeDoBot}〘🩸〙\n⿻ꦿꦂ𝐔𝐬𝐮𝐚𝐫𝐢𝐨: ${pushname}`,
                    body: `Ⓘ Esse é o melhor bot do momento s꯭꯭꯭a꯭꯭i꯭b꯭꯭a꯭ ꯭꯭m꯭꯭꯭a꯭꯭꯭i꯭꯭꯭꯭s`,
                    thumbnail: await getBuffer(`${ftmenu.logo}`),
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true,
                    sourceUrl: group,
                  },
                },
              },
              { quoted: selo }
            );
            break;

          case "menuadm":
          case "menuadms":
          case "adm":
            await reagir(from, "👑");
            await akame.sendMessage(
              from,
              {
                text: linguagem.adms(prefix),
                contextInfo: {
                  externalAdReply: {
                    title: `〘🩸〙${NomeDoBot}〘🩸〙\n⿻ꦿꦂ𝐔𝐬𝐮𝐚𝐫𝐢𝐨: ${pushname}`,
                    body: `Ⓘ Esse é o melhor bot do momento s꯭꯭꯭a꯭꯭i꯭b꯭꯭a꯭ ꯭꯭m꯭꯭꯭a꯭꯭꯭i꯭꯭꯭꯭s`,
                    thumbnail: await getBuffer(`${ftmenu.logo}`),
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true,
                    sourceUrl: group,
                  },
                },
              },
              { quoted: selo }
            );
            break;

          case "menudono":
          case "donomenu":
            await reagir(from, "👨🏻‍💻");
            await akame.sendMessage(
              from,
              {
                text: linguagem.menudono(prefix),
                contextInfo: {
                  externalAdReply: {
                    title: `〘🩸〙${NomeDoBot}〘🩸〙\n⿻ꦿꦂ𝐔𝐬𝐮𝐚𝐫𝐢𝐨: ${pushname}`,
                    body: `Ⓘ Esse é o melhor bot do momento s꯭꯭꯭a꯭꯭i꯭b꯭꯭a꯭ ꯭꯭m꯭꯭꯭a꯭꯭꯭i꯭꯭꯭꯭s`,
                    thumbnail: await getBuffer(`${ftmenu.logo}`),
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true,
                    sourceUrl: group,
                  },
                },
              },
              { quoted: selo }
            );
            break;

          case "efeitosimg":
          case "efeitos":
          case "efeitoimg":
          case "efeitosmarcar":
            await reagir(from, "✨");
            await akame.sendMessage(
              from,
              {
                text: linguagem.efeitos(prefix),
                contextInfo: {
                  externalAdReply: {
                    title: `〘🩸〙${NomeDoBot}〘🩸〙\n⿻ꦿꦂ𝐔𝐬𝐮𝐚𝐫𝐢𝐨: ${pushname}`,
                    body: `Ⓘ Esse é o melhor bot do momento s꯭꯭꯭a꯭꯭i꯭b꯭꯭a꯭ ꯭꯭m꯭꯭꯭a꯭꯭꯭i꯭꯭꯭꯭s`,
                    thumbnail: await getBuffer(`${ftmenu.logo}`),
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true,
                    sourceUrl: group,
                  },
                },
              },
              { quoted: selo }
            );
            break;

          case "alteradores":
            await reagir(from, "🪄");
            await akame.sendMessage(
              from,
              {
                text: linguagem.alteradores(prefix),
                contextInfo: {
                  externalAdReply: {
                    title: `〘🩸〙${NomeDoBot}〘🩸〙\n⿻ꦿꦂ𝐔𝐬𝐮𝐚𝐫𝐢𝐨: ${pushname}`,
                    body: `Ⓘ Esse é o melhor bot do momento s꯭꯭꯭a꯭꯭i꯭b꯭꯭a꯭ ꯭꯭m꯭꯭꯭a꯭꯭꯭i꯭꯭꯭꯭s`,
                    thumbnail: await getBuffer(`${ftmenu.logo}`),
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true,
                    sourceUrl: group,
                  },
                },
              },
              { quoted: selo }
            );
            break;

          case "brincadeiras":
          case "brincadeira":
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await reagir(from, "😹");
            await akame.sendMessage(
              from,
              {
                text: linguagem.brincadeiras(prefix),
                contextInfo: {
                  externalAdReply: {
                    title: `〘🩸〙${NomeDoBot}〘🩸〙\n⿻ꦿꦂ𝐔𝐬𝐮𝐚𝐫𝐢𝐨: ${pushname}`,
                    body: `Ⓘ Esse é o melhor bot do momento s꯭꯭꯭a꯭꯭i꯭b꯭꯭a꯭ ꯭꯭m꯭꯭꯭a꯭꯭꯭i꯭꯭꯭꯭s`,
                    thumbnail: await getBuffer(`${ftmenu.logo}`),
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true,
                    sourceUrl: group,
                  },
                },
              },
              { quoted: selo }
            );
            break;

          case "menuvip":
            if (isCmdVip.length == 0)
              return reply(
                `Atualmente meu/minha dono(a), não adicionou nenhum comando à este menu.\n- Caso você seja o(a) dono(a), visualize o comando: ${prefix}infocmdvip, para entender como funciona esta nova funcionalidade do bot.`
              );
            await reagir(from, "💫");
            await akame.sendMessage(
              from,
              {
                text: linguagem.menuvip(
                  isCmdVip,
                  prefix,
                  capitalizeFirstLetter
                ),
                contextInfo: {
                  externalAdReply: {
                    title: `〘🩸〙${NomeDoBot}〘🩸〙\n⿻ꦿꦂ𝐔𝐬𝐮𝐚𝐫𝐢𝐨: ${pushname}`,
                    body: `Ⓘ Esse é o melhor bot do momento s꯭꯭꯭a꯭꯭i꯭b꯭꯭a꯭ ꯭꯭m꯭꯭꯭a꯭꯭꯭i꯭꯭꯭꯭s`,
                    thumbnail: await getBuffer(`${ftmenu.logo}`),
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true,
                    sourceUrl: group,
                  },
                },
              },
              { quoted: selo }
            );
            break;

          case "owner":
          case "odono":
          case "dono":
          case "infodono":
            await reagir(from, "👨🏻‍💻");
            numerodn = numerodono_ofc;
            await akame.sendMessage(
              from,
              {
                image: { url: ftmenu.logo },
                caption: getInfo.infoOwner(
                  prefix,
                  ownerName,
                  numerodn,
                  NomeDoBot,
                  sender
                ),
                mentions: [sender],
              },
              { quoted: selo }
            );
            break;

          case "criador":
          case "suporte-dono":
            reply(
              `O contato dele caso você use imune: https://wa.me/554891828991`
            );
            break;

          case "configurar-bot":
            await akame.sendMessage(
              from,
              { text: getInfo.configbot(prefix) },
              { quoted: selo }
            );
            break;

          case "infoaluguel":
          case "inforent":
          case "info_aluguel":
            await akame.sendMessage(
              from,
              { text: getInfo.infoRent(prefix) },
              { quoted: selo }
            );
            break;

          case "infovip":
          case "info_vip":
            await akame.sendMessage(
              from,
              { text: getInfo.infoVip(prefix) },
              { quoted: selo }
            );
            break;

          case "infocmdvip":
          case "infocmdvip":
            await akame.sendMessage(
              from,
              { text: getInfo.infoCmdVip(prefix) },
              { quoted: selo }
            );
            break;

          case "idiomas":
          case "idioma":
            await akame.sendMessage(
              from,
              { text: getInfo.listLanguages(prefix) },
              { quoted: selo }
            );
            break;

          case "infobv":
          case "infowelcome":
          case "infobemvindo":
            await akame.sendMessage(
              from,
              { text: getInfo.bemvindo(prefix) },
              { quoted: selo }
            );
            break;
          case "destrava":
            await akame.sendMessage(
              from,
              { text: destrava(prefix) },
              { quoted: selo }
            );
            break;

          case "perfil":
            try {
              ppimg = await akame.profilePictureUrl(
                `${sender.split("@")[0]}@c.us`,
                "image"
              );
            } catch {
              ppimg = "https://telegra.ph/file/24fa902ead26340f3df2c.png";
            }
            try {
              var status = (await akame.fetchStatus(sender)).status;
            } catch {
              var status = "Não foi possível obter a biografia.";
            }
            var conselho =
              advices.commonAdvices[
                Math.floor(Math.random() * advices.commonAdvices.length)
              ];
            const nivelgado = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            const nivelgado2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            const nivelgador =
              nivelgado[Math.floor(Math.random() * nivelgado.length)];
            const nivelgado2r =
              nivelgado2[Math.floor(Math.random() * nivelgado2.length)];
            const puta = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            const puta2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            const putar = puta[Math.floor(Math.random() * puta.length)];
            const putar2 = puta2[Math.floor(Math.random() * puta2.length)];
            const gostosura = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            const gostosura2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            const gostosurar =
              gostosura[Math.floor(Math.random() * gostosura.length)];
            const gostosurar2 =
              gostosura2[Math.floor(Math.random() * gostosura2.length)];
            gadop = `${Math.floor(Math.random() * 100)}`;
            const programa = Math.ceil(Math.random() * 10000);
            await akame.sendMessage(
              from,
              {
                text: mess.profileInformation(
                  pushname,
                  sender,
                  info,
                  isCargo,
                  isChVip,
                  putar,
                  putar2,
                  gostosurar,
                  gostosurar2,
                  nivelgador,
                  nivelgado2r,
                  programa,
                  status,
                  conselho
                ),
                contextInfo: {
                  externalAdReply: {
                    title: `〘👤〙𝐒𝐄𝐔 𝐏𝐄𝐑𝐅𝐈𝐋〘🗯️〙`,
                    body: `• Confira algumas informações sobre seu perfil..`,
                    thumbnail: await getBuffer(ppimg),
                    mediaType: 2,
                    sourceUrl: `https://wa.me/${sender.split("@")[0]}`,
                  },
                },
              },
              { quoted: selo }
            );
            break;

          case "tabela":
            await akame.sendMessage(
              from,
              { text: tabela(prefix, NomeDoBot) },
              { quoted: selo }
            );
            break;

          case "destrava2":
            await akame.sendMessage(
              from,
              { text: destrava2(prefix) },
              { quoted: selo }
            );
            break;

          case "tradutor":
          case "traduzir":
            if (!q) return reply(`Exemplo: ${prefix}tradutor pt|Dog`);
            try {
              txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|");
              var [idioma, texto] = txt.split("|");
              if (!q.includes("|"))
                return reply(
                  `Está faltando a |, *use como exemplo:* ${prefix}tradutor pt|Dog`
                );
              bla = await fetchJson(
                API_URL +
                  `/api/outros/translate?texto=${encodeURI(texto)}&ling=${encodeURI(idioma)}&apikey=` +
                  API_KEY_AKAME
              );
              reply(mess.translator(bla)).catch(async (error) => {
                reply(mess.error());
              });
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "getquoted":
          case "getinfo":
          case "get":
          case "mek":
            reply(JSON.stringify(info, null, 3));
            break;

          case "get-txt":
            reply(
              JSON.stringify(
                info.message.extendedTextMessage.contextInfo.quotedMessage
                  .conversation,
                null,
                2
              )
            );
            break;

          case "gerarcpf":
            cp1 = `${Math.floor(Math.random() * 300) + 600}`;
            cp2 = `${Math.floor(Math.random() * 300) + 600}`;
            cp3 = `${Math.floor(Math.random() * 300) + 600}`;
            cp4 = `${Math.floor(Math.random() * 30) + 60}`;
            cpf = `${cp1}.${cp2}.${cp3}-${cp4}`;
            await akame.sendMessage(
              from,
              { text: `CPF gerado com sucesso: ${cpf}` },
              { quoted: selo }
            );
            break;

          case "ddd":
            if (args.length < 1) return reply(`Use ${prefix + command} 81`);
            ddd = body.slice(5);
            ddds = await axios.get(
              `https://brasilapi.com.br/api/ddd/v1/${ddd}`
            );
            dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`;
            for (let i = 0; i < ddds.data.cities.length; i++) {
              dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n`;
            }
            await akame.sendMessage(from, { text: dddlist }, { quoted: selo });
            break;

          case "gethtml":
            if (!q || !isUrl(args[0]))
              return reply(`Modo de uso: ${prefix + command} link do site`);
            try {
              await replyWithReaction(`❪👩🏽‍💻ꦿ𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚎𝚖 𝚜𝚎𝚞 𝚙𝚛𝚒𝚟𝚊𝚍𝚘ེ≭•۟.❫`, {
                react: { text: "✅", key: info.key },
              });
              axios
                .get(args[0], {
                  headers: {
                    "user-agent":
                      "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Mobile Safari/537.36",
                  },
                })
                .then(async (res) => {
                  let htmlData =
                    typeof res.data === "object"
                      ? JSON.stringify(res.data, null, 2)
                      : res.data;
                  htmlData = htmlData
                    .replace(/    /g, "")
                    .replace(/></g, ">\n<")
                    .replace(/> </g, ">\n<");
                  await akame.sendMessage(
                    sender,
                    {
                      document: Buffer.from(htmlData),
                      fileName: q + `.html`,
                      mimetype: "text/html",
                    },
                    { quoted: selo }
                  );
                })
                .catch((e) => {
                  return reply(mess.error());
                });
            } catch (e) {
              console.log(e);
              reply(mess.error());
            }
            break;

          case "rvisu":
          case "open":
            if (!isQuotedVisuU)
              return reply(
                "Por favor, *mencione uma imagem ou video em visualização única* para executar o comando."
              );
            await reagir(from, "👀");
            if (
              info.message.extendedTextMessage.contextInfo.quotedMessage
                .viewOnceMessageV2 ||
              type == "viewOnceMessage"
            ) {
              if (JSON.stringify(info).includes("videoMessage")) {
                var px =
                  info.message.extendedTextMessage.contextInfo.quotedMessage
                    .viewOnceMessageV2?.message?.videoMessage ||
                  info.message?.viewOnceMessage?.message?.videoMessage;
                px.viewOnce = false;
                px.video = { url: px.url };
                px.caption +=
                  "\n\nO vídeo em visualização única foi revelado..";
                await akame.sendMessage(from, px);
              } else {
                var px =
                  info.message.extendedTextMessage.contextInfo.quotedMessage
                    .viewOnceMessageV2?.message?.imageMessage ||
                  info.message?.viewOnceMessage?.message?.imageMessage;
                px.viewOnce = false;
                px.image = { url: px.url };
                px.caption +=
                  "\n\nA imagem em visualização única foi revelada..";
                await akame.sendMessage(from, px);
              }
            }
            break;

          //===========(ADMS-FUNÇÕES-AKI)=========\\

          case "nomegp":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            blat = args.join(" ");
            await akame.groupUpdateSubject(from, `${blat}`);
            await akame.sendMessage(
              from,
              { text: "Sucesso, alterou o nome do grupo." },
              { quoted: selo }
            );
            break;

          case "descgp":
          case "descriçãogp":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyAdmins());
            blabla = args.join(" ");
            await akame.groupUpdateDescription(from, `${blabla}`);
            await akame.sendMessage(
              from,
              { text: "Sucesso, alterou a descrição do grupo" },
              { quoted: selo }
            );
            break;

          case "setfotogp":
          case "fotogp":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (!isQuotedImage)
              return reply(`Use: ${prefix + command} <Marque uma foto>`);
            ftgp = isQuotedImage
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .imageMessage
              : info.message.imageMessage;
            rane = getRandom("." + (await getExtension(ftgp.mimetype)));
            buffimg = await getFileBuffer(ftgp, "image");
            fs.writeFileSync(rane, buffimg);
            medipp = rane;
            akame.updateProfilePicture(from, { url: medipp });
            reply(`Foto do grupo alterada com sucesso`);
            break;

          case "linkgp":
          case "linkgroup":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            linkgc = await akame.groupInviteCode(from);
            reply("https://chat.whatsapp.com/" + linkgc);
            break;

          case "revlinkgp":
          case "revlinkgroup":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            await akame.groupRevokeInvite(from);
            reply(`Link de convite do grupo foi revogado com êxito!`);
            break;

          case "recrutar":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (!q)
              return reply(
                "Cadê o número do usuário que você deseja convidar."
              );
            try {
              photoG = await akame.profilePictureUrl(from, "image"); // Pegar a foto do grupo aonde foi solicitado o comando de recrutamento.
            } catch {
              photoG = thumbnail; // Vai colocar a img que está na definição, caso esteja sem foto.
            }
            rcrt =
              q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`;
            linkgc = await akame.groupInviteCode(from);
            await akame.sendMessage(rcrt, {
              text: "*Olá, tudo bem?* Você foi convidado(a) pelo(a) adminstrador(a) do grupo.\nPara entrar no grupo, clique acima!",
              contextInfo: {
                externalAdReply: {
                  title: "Clique aqui para participar do grupo.",
                  thumbnail: await getBuffer(photoG),
                  mediaType: 1,
                  sourceUrl: "https://chat.whatsapp.com/" + linkgc,
                },
              },
            });
            reply(
              "Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso..."
            );
            break;

          case "listatm":
            if (!SoDono) return reply(mess.onlyOwner());
            rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"));
            if (rgp.length == 0)
              return reply(
                `Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`
              );
            bl = "";
            for (i = 0; i < rgp.length; i++) {
              bl += `( ${i + 1} ) - ID: ${rgp[i].id}\n• Nome do Usuário(a) ou Grupo: ${rgp[i].infonome}\n-\n`;
            }
            reply(bl);
            break;

          case "rgtm":
            if (!SoDono) return reply(mess.onlyOwner());
            rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"));
            if (JSON.stringify(rgp).includes(from))
              return reply(
                "Este grupo/usuário já está registrado na lista de transmissão"
              );
            rgp.push({
              id: from,
              infonome: `${isGroup ? groupName : pushname}`,
            });
            fs.writeFileSync(
              "./database/func/tmgroup.json",
              JSON.stringify(rgp)
            );
            reply(
              "Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista."
            );
            break;

          case "tirardatm":
            if (!SoDono) return reply(mess.onlyOwner());
            rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"));
            if (!JSON.stringify(rgp).includes(from))
              return reply(
                "Este grupo/usuário não está registrado para ser tirado da lista de transmissão"
              );
            if (q.trim().length > 4) {
              var ustm = rgp.map((i) => i.id).indexOf(q.trim());
            } else {
              var ustm = rgp.map((i) => i.id).indexOf(from);
            }
            rgp.splice(ustm, 1);
            fs.writeFileSync(
              "./database/func/tmgroup.json",
              JSON.stringify(rgp)
            );
            reply("Grupo/Usuário tirado da lista de transmissão com sucesso");
            break;

          case "fazertm":
            if (!SoDono) return reply(mess.onlyOwner());
            var rgp = JSON.parse(
              fs.readFileSync("./database/func/tmgroup.json")
            );
            if (rgp.lengh == 0)
              return reply(
                "Não contém nenhum grupo registrado para realizar transmissão"
              );
            await sleep(1000);
            var DFC = "";
            var rsm =
              info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
            var pink = isQuotedImage
              ? rsm?.imageMessage
              : info.message?.imageMessage;
            var blue = isQuotedVideo
              ? rsm?.videoMessage
              : info.message?.videoMessage;
            var red = isQuotedMsg
              ? rsm?.textMessage
              : info.message?.textMessage;
            var purple = isQuotedDocument
              ? rsm?.documentMessage
              : info.message?.documentMessage;
            var yellow = isQuotedDocW
              ? rsm?.documentWithCaptionMessage?.message?.documentMessage
              : info.message?.documentWithCaptionMessage?.message
                  ?.documentMessage;
            var aud_d = isQuotedAudio ? rsm.audioMessage : "";
            var figu_d = isQuotedSticker ? rsm.stickerMessage : "";
            var red =
              isQuotedMsg &&
              !aud_d &&
              !figu_d &&
              !pink &&
              !blue &&
              !purple &&
              !yellow
                ? "Transmissão do Proprietário: " + rsm.conversation
                : info.message?.conversation;
            var green =
              isQuotedMsg2 &&
              !aud_d &&
              !figu_d &&
              !red &&
              !pink &&
              !blue &&
              !purple &&
              !yellow
                ? "Transmissão do Proprietário: " +
                  rsm.extendedTextMessage?.text
                : info?.message?.extendedTextMessage?.text;
            if (pink) {
              var DFC = pink;
              pink.caption =
                q.length > 1
                  ? "Transmissão do Proprietário: " + q
                  : pink.caption.replace(
                      new RegExp(prefix + command, "gi"),
                      `Transmissão do Proprietário: ${ownerName}\n\n`
                    );
              pink.image = { url: pink.url };
            } else if (blue) {
              var DFC = blue;
              blue.caption =
                q.length > 1
                  ? "Transmissão do Proprietário: " + q
                  : blue.caption.replace(
                      new RegExp(prefix + command, "gi"),
                      `Transmissão do Proprietário: ${ownerName}\n\n`
                    );
              blue.video = { url: blue.url };
            } else if (red) {
              black = {};
              black.text = red.replace(
                new RegExp(prefix + command, "gi"),
                `Transmissão do Proprietário: ${ownerName}\n\n`
              );
              var DFC = black;
            } else if (!aud_d && !figu_d && green) {
              brown = {};
              brown.text = green.replace(
                new RegExp(prefix + command, "gi"),
                `Transmissão do Proprietário: ${ownerName}\n\n`
              );
              var DFC = brown;
            } else if (purple) {
              var DFC = purple;
              purple.document = { url: purple.url };
            } else if (yellow) {
              var DFC = yellow;
              yellow.caption =
                q.length > 1
                  ? "Transmissão do Proprietário: " + q
                  : yellow.caption.replace(
                      new RegExp(prefix + command, "gi"),
                      `Transmissão do Proprietário: ${ownerName}\n\n`
                    );
              yellow.document = { url: yellow.url };
            } else if (figu_d) {
              var DFC = figu_d;
              figu_d.sticker = { url: figu_d.url };
            } else if (aud_d) {
              var DFC = aud_d;
              aud_d.audio = { url: aud_d.url };
            }
            for (i = 0; i < rgp.length; i++) {
              await akame.sendMessage(rgp[i].id, DFC);
            }
            break;

          case "grupo":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}grupo *--help*_`
              );
            groupI = await akame.groupMetadata(from);
            if (args[0] === "--help")
              return await mention(mess.helpGroupSettings(prefix, sender));
            if (args[0] === "-open" || args[0] === "a") {
              if (groupI.announce == false)
                return reply(
                  "O grupo já está aberto, não é possível solicitar para abrir o que já aberto..."
                );
              reply(`Como pedido senhor(a), o grupo foi aberto com sucesso...`);
              await akame.groupSettingUpdate(from, "not_announcement");
            } else if (args[0] === "-close" || args[0] === "f") {
              if (groupI.announce == true)
                return reply(
                  "O grupo já está fechado, não é possível solicitar para fechar o que já se encontra fechado..."
                );
              reply(
                "Como pedido senhor(a), o grupo foi fechado com sucesso..."
              );
              await akame.groupSettingUpdate(from, "announcement");
            } else if (args[0] === "-livre") {
              if (groupI.restrict == false)
                return reply(
                  "O grupo não possuí nenhuma restrição de alteração nos dados, ou seja, todos podem alterar."
                );
              reply(
                "Como pedido senhor(a), todos os membros tem a permissão de editar as configurações do grupo."
              );
              await akame.groupSettingUpdate(from, "unlocked");
            } else if (args[0] === "-private") {
              if (groupI.restrict == true)
                return reply(
                  "O grupo já possuí a restrição aos administradores! Então, não tem como ativar duas vezes."
                );
              reply(
                "Como pedido senhor(a), somente os administradores tem a permissão de editar os configurações do grupo."
              );
              await akame.groupSettingUpdate(from, "locked");
            } else {
              reply(
                `🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}grupo *--help*_`
              );
            }
            break;

          case "grupoinfo":
          case "infogrupo":
          case "infogp":
          case "gpinfo":
          case "regras":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            try {
              var ppUrl = await akame.profilePictureUrl(from, "image");
            } catch {
              var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`;
            }
            var puxarInfo = await akame.groupMetadata(from);
            var ANC_INFO = puxarInfo.announce;
            var returnAnnounce =
              ANC_INFO === false
                ? "Não."
                : ANC_INFO === true
                  ? "Sim."
                  : undefined;
            var RST_INFO = puxarInfo.restrict;
            var returnRestrict =
              RST_INFO === false
                ? "Sim."
                : RST_INFO === true
                  ? "Não."
                  : undefined;
            var infoCreator = puxarInfo.subjectOwner || "Não Encontrado";
            infoGroup = `• Nome do Grupo: *${puxarInfo.subject}*\n• ID: *${puxarInfo.id}*\n-\n• Este grupo foi criado por: *@${infoCreator.replace("@s.whatsapp.net", "")}*\n• Data/hora de criação do grupo: *${moment(
              `${puxarInfo.creation}` * 1000
            )
              .tz("America/Sao_Paulo")
              .format(
                "DD/MM/YYYY HH:mm:ss"
              )}*\n• Horário e data da última alteração no grupo: *${moment(`${puxarInfo.subjectTime}` * 1000).format("DD/MM/YYYY HH:mm:ss")}*\n-\n• Quantidade de adminstradores: *${groupAdmins.length}*\n• Quantidade de membros: *${somembros.length}*\n• Soma total de membros e admins do grupo: *${puxarInfo.participants.length} participantes*\n-\n• Este grupo está fechado no momento? *${returnAnnounce}*\n• As informações do grupo podem ser alteradas por membros? *${returnRestrict}*\n-\n• Para ver as atividades dos participantes, use: *${prefix}atividade*\n• Para ver os membros inativos no grupo, use: *${prefix}inativos [quantidade de mensagens]*, ex: ${prefix}inativos 10`;
            await akame.sendMessage(
              from,
              {
                image: { url: ppUrl },
                caption: infoGroup,
                mentions: [infoCreator],
              },
              { quoted: selo }
            );
            break;

          case "totag":
          case "cita":
          case "hidetag":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            var DFC = "";
            var rsm =
              info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
            var pink = isQuotedImage
              ? rsm?.imageMessage
              : info.message?.imageMessage;
            var blue = isQuotedVideo
              ? rsm?.videoMessage
              : info.message?.videoMessage;
            var purple = isQuotedDocument
              ? rsm?.documentMessage
              : info.message?.documentMessage;
            var yellow = isQuotedDocW
              ? rsm?.documentWithCaptionMessage?.message?.documentMessage
              : info.message?.documentWithCaptionMessage?.message
                  ?.documentMessage;
            var aud_d = isQuotedAudio ? rsm.audioMessage : "";
            var figu_d = isQuotedSticker ? rsm.stickerMessage : "";
            var red =
              isQuotedMsg &&
              !aud_d &&
              !figu_d &&
              !pink &&
              !blue &&
              !purple &&
              !yellow
                ? rsm.conversation
                : info.message?.conversation;
            var green =
              rsm?.extendedTextMessage?.text ||
              info?.message?.extendedTextMessage?.text;
            var MRC_TD = groupMembers.map((i) => i.id);
            if (pink && !aud_d && !purple) {
              var DFC = pink;
              pink.caption =
                q.length > 1
                  ? "❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* " + q
                  : pink.caption.replace(
                      new RegExp(prefix + command, "gi"),
                      `❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* ${pushname}\n\n`
                    );
              pink.image = { url: pink.url };
              pink.mentions = MRC_TD;
            } else if (blue && !aud_d && !purple) {
              var DFC = blue;
              blue.caption =
                q.length > 1
                  ? "❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* " + q.trim()
                  : blue.caption
                      .replace(
                        new RegExp(prefix + command, "gi"),
                        `❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* ${pushname}\n\n`
                      )
                      .trim();
              blue.video = { url: blue.url };
              blue.mentions = MRC_TD;
            } else if (red && !aud_d && !purple) {
              black = {};
              black.text = red
                .replace(
                  new RegExp(prefix + command, "gi"),
                  `❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* ${pushname}\n\n`
                )
                .trim();
              black.mentions = MRC_TD;
              var DFC = black;
            } else if (!aud_d && !figu_d && green && !purple && !purple) {
              brown = {};
              brown.text = green
                .replace(
                  new RegExp(prefix + command, "gi"),
                  `❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* ${pushname}\n\n`
                )
                .trim();
              brown.mentions = MRC_TD;
              var DFC = brown;
            } else if (purple) {
              var DFC = purple;
              purple.document = { url: purple.url };
              purple.mentions = MRC_TD;
            } else if (yellow && !aud_d) {
              var DFC = yellow;
              yellow.caption =
                q.length > 1
                  ? "❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* " + q.trim()
                  : yellow.caption
                      .replace(
                        new RegExp(prefix + command, "gi"),
                        `❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* ${pushname}\n\n`
                      )
                      .trim();
              yellow.document = { url: yellow.url };
              yellow.mentions = MRC_TD;
            } else if (figu_d && !aud_d) {
              var DFC = figu_d;
              figu_d.sticker = { url: figu_d.url };
              figu_d.mentions = MRC_TD;
            } else if (aud_d) {
              var DFC = aud_d;
              aud_d.audio = { url: aud_d.url };
              aud_d.mentions = MRC_TD;
              aud_d.ptt = true;
            }
            await akame.sendMessage(from, DFC).catch((error) => {});
            break;

          case "marcar":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            async function marcac() {
              bla = [];
              blad = `• Mencionando os membros comuns do grupo ou de uma comunidade. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`;
              for (let i of somembros) {
                blad += `» @${i.split("@")[0]}\n`;
                bla.push(i);
              }
              blam = JSON.stringify(somembros);
              if (blam.length == 2)
                return reply(
                  `❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `
                );
              await mentions(blad, bla, true);
            }
            marcac().catch((error) => {
              console.log(error);
            });
            break;

          case "marcar2":
            try {
              if (!isGroup) return reply(mess.onlyGroup());
              if (!isGroupAdmins) return reply(mess.onlyAdmins());
              if (q.includes(`${prefix}`))
                return reply("Não pode utilizar comandos nesse comando.");
              members_id = [];
              teks = args.length > 1 ? body.slice(8).trim() : "";
              teks += "";
              for (let mem of groupMembers) {
                teks += `╠➥ @${mem.id.split("@")[0]}\n`;
                members_id.push(mem.id);
              }
              reply(teks);
            } catch {
              reply("Erro ao mencionar.");
            }
            break;

          case "marcarwa":
            try {
              if (!isGroup) return reply(mess.onlyGroup());
              if (!isGroupAdmins) return reply(mess.onlyAdmins());
              if (q.includes(`${prefix}`))
                return reply("Não pode utilizar comandos nesse comando");
              members_id = [];
              teks = args.length > 1 ? body.slice(10).trim() : "";
              teks += "";
              for (let mem of groupMembers) {
                teks += `╠➥ https://wa.me/${mem.id.split("@")[0]}\n`;
                members_id.push(mem.id);
              }
              await akame.sendMessage(from, { text: teks }, { quoted: selo });
            } catch {
              reply("Erro ao mencionar.");
            }
            break;

          case "reviverqr":
            if (!SoDono) return reply(mess.onlyOwner());
            exec(`cd ${qrcode} && rm -rf pre-key* sender* session*`);
            setTimeout(async () => {
              await reply("Reiniciando...");
              setTimeout(async () => {
                process.exit();
              }, 1200);
            }, 1000);
            break;

          case "ptvmsg":
            if (!isQuotedVideo && !info.message.videoMessage)
              return reply(
                "Marque um vídeo/gif que você deseja converter para mensagem de vídeo."
              );
            await akame.relayMessage(
              from,
              {
                ptvMessage: isQuotedVideo
                  ? info.message.extendedTextMessage.contextInfo.quotedMessage
                      .videoMessage
                  : info.message.videoMessage,
              },
              {}
            );
            break;

          case "reviver":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (
              info.message.extendedTextMessage === undefined ||
              info.message.extendedTextMessage === null
            )
              return reply("Marque uma mensagem do alvo!");
            await sleep(5000);
            response2 = await akame.groupParticipantsUpdate(
              from,
              [menc_prt],
              "add"
            );
            reply("Usuario adicionado de volta ao grupo.");
            break;

          case "sairgp":
            if (isGroup && !SoDono && !info.key.fromMe)
              return reply("Este comando só o bot ou o dono pode executar..");
            try {
              await akame.groupLeave(from);
            } catch (erro) {
              reply(String(erro));
            }
            break;

          case "seradm":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            await mentions(
              `@${sender.split("@")[0]} Pronto - Agora você é um administrador..`,
              [sender],
              true
            );
            await akame.groupParticipantsUpdate(from, [sender], "promote");
            break;

          case "sermembro":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            await mentions(
              `@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`,
              [sender],
              true
            );
            await akame.groupParticipantsUpdate(from, [sender], "demote");
            break;

          case "advertir":
          case "adverter":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (menc_os2 == botNumber)
              return reply("Não pode advertir o próprio bot.");
            if (menc_os2 == nmrdn)
              return reply("Não pode advertir o próprio dono do bot.");
            if (groupAdmins.includes(menc_os2))
              return reply("Não é possível advertir adminstrador do grupo.");
            if (!JSON.stringify(groupMembers).includes(menc_os2))
              return reply(
                "Não tem como advertir um usuário que não se encontra mais no grupo."
              );
            ADVT.push(menc_os2);
            setGp(dataGp);
            setTimeout(async () => {
              var dfqn = ADVT.filter((x) => x == menc_os2).length;
              var dfntxt = mess.warningAdvertencia(menc_os2, dfqn);
              if (!dfntxt.includes("3/3")) {
                if (!JSON.stringify(ADVT).includes(sender)) {
                  await sleep(1500);
                  await mentions(dfntxt, [menc_os2]);
                } else if (dfqn == 2) {
                  await sleep(1500);
                  await mentions(dfntxt, [menc_os2]);
                }
              } else {
                await akame.sendMessage(
                  from,
                  {
                    text: mess.finishAdvertencia(menc_os2),
                    mentions: [menc_os2],
                  },
                  { quoted: selo }
                );
                await sleep(1500);
                await akame.groupParticipantsUpdate(from, [menc_os2], "remove");
                var i = ADVT.indexOf(menc_os2);
                ADVT.splice(i, 3);
                setGp(dataGp);
              }
            }, 3000);
            break;

          case "rmadv":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!marc_tds)
              return reply("Você esqueceu de mencionar o alvo após o comando.");
            adv = dataGp[0].advertir.map((i) => i).indexOf(marc_tds);
            if (adv < 0)
              return reply(
                "Este usuário não contém nenhuma advertência no grupo."
              );
            dataGp[0].advertir.splice(adv, 1);
            setGp(dataGp);
            reply(
              "A advertência do usuário neste grupo foi retirada com sucesso!"
            );
            break;

          //======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

          case "sairdogp":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!q)
              return reply(
                `Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`
              );
            var getGroups = await akame.groupFetchAllParticipating();
            var groups = Object.entries(getGroups)
              .slice(0)
              .map((entry) => entry[1]);
            var ingfoo = groups.map((v) => v);
            try {
              await akame.sendMessage(ingfoo[q].id, {
                text: "Irei sair do grupo, por ordem do meu dono, adeus...",
              });
              setTimeout(async () => {
                await akame.groupLeave(ingfoo[q].id);
              }, 5000);
            } catch (erro) {
              reply(String(erro));
            }
            reply(
              "Pronto meu dono, sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar.."
            );
            break;

          case "listagp":
            if (!SoDono && !isnit && !info.key.fromMe)
              return reply(mess.onlyOwner());
            var getGroups = await akame.groupFetchAllParticipating();
            var groups = Object.entries(getGroups)
              .slice(0)
              .map((entry) => entry[1]);
            var ingfoo = groups.map((v) => v);
            ingfoo.sort((a, b) => a[0] < b.length);
            teks1 = `[Total: *${ingfoo.length}*] - Lista de Grupos e comunidades que estou atualmente:\n—\n`;
            for (let i = 0; i < ingfoo.length; i++) {
              var metadt = await akame.groupMetadata(ingfoo[i].id);
              try {
                var linkdogp = await akame.groupInviteCode(ingfoo[i].id);
              } catch {
                var linkdogp = "Não foi possivel puxar o link.";
              }
              teks1 += `( ${i + 1} ) - Nome do Grupo: ${ingfoo[i].subject}\nID: ${ingfoo[i].id}\nLink do Grupo: https://chat.whatsapp.com/${linkdogp}\nCriado por: ${metadt.subjectOwner}\nCriado em: ${moment(
                `${ingfoo[i].creation}` * 1000
              )
                .tz("America/Sao_Paulo")
                .format(
                  "DD/MM/YYYY HH:mm:ss"
                )}\nTotal de Participantes: ${ingfoo[i].participants.length}\n—\n`;
            }
            reply(teks1);
            break;

          case "atividade":
          case "atividades":
            try {
              if (!isGroupAdmins && !issupre && !ischyt)
                return reply(mess.onlyAdmins());
              if (isGroup && JSON.stringify(countMessage).includes(from)) {
                var i6 = countMessage.map((i) => i.groupId).indexOf(from);
                if (countMessage[i6].numbers.length == 0) return;
                teks = `*Atividade dos membros do grupo:*\n–\n`;
                for (i = 0; i < countMessage[i6].numbers.length; i++) {
                  var i8 = countMessage[i6].numbers
                    .map((i) => i.id)
                    .indexOf(countMessage[i6].numbers[i].id);
                  var uscnt = countMessage[i6].numbers[i];
                  teks += `• Participante: *@${uscnt.id.split("@")[0]}*\n• Quantidade de comandos usados pelo(a) participante no grupo: *${uscnt.cmd_messages}*\n• Quantidade de mensagens enviadas pelo(a) participante: *${uscnt.messages}*\n• O participante no momento está conectado em: *${uscnt.aparelho}*\n• Quantidade de figurinhas enviadas no grupo: *${uscnt.figus}*\n–\n`;
                }
                await mention(teks);
              } else return reply("*Nada foi encontrado*");
            } catch (error) {
              console.log(error);
            }
            break;

          case "inativos":
          case "inativo":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (q.match(/[a-z]/i) || !q)
              return reply(
                `Exemplo: ${prefix + command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`
              );
            await ClearMembersInactive();
            var i2 = countMessage?.map((x) => x.groupId)?.indexOf(from);
            blue = [];
            for (i of countMessage[i2].numbers) {
              if (i.messages <= q.trim())
                if (i.figus <= q.trim())
                  if (i.cmd_messages <= q.trim())
                    if (!groupAdmins.includes(i.id))
                      if (!numerodono.includes(i.id))
                        if (i.id != botNumber)
                          if (groupMembers.map((i) => i.id).includes(i.id))
                            blue.push(i.id);
            }
            for (i of countMessage[i2].numbers) {
              if (!groupMembers.map((i) => i.id).includes(i.id))
                if (i.id.length > 5) blue.push(i.id);
            }
            if (blue.length == 0)
              return reply(`Não tem pessoas com ${q} mensagens..`);
            bli = `Usuários com *${q.trim()}* mensagem(ns) pra baixo estão listados abaixo, verifique:\n–\n`;
            for (ac = 0; ac < blue.length; ac++) {
              bli += `*${ac + 1}.* @${blue[ac].split("@")[0]}\n`;
            }
            await mention(bli);
            break;

          case "banghost":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!SoDono) return reply(mess.onlyOwner());
            if (q.match(/[a-z]/i) || !q || q.length > 3)
              return reply(
                `Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${prefix + command} 0`
              );
            var i2 = countMessage?.map((x) => x.groupId)?.indexOf(from);
            blue = [];
            for (i of countMessage[i2].numbers) {
              if (i.messages <= Number(q.trim()))
                if (i.figus <= Number(q.trim()))
                  if (i.cmd_messages <= Number(q.trim()))
                    if (!groupAdmins.includes(i.id))
                      if (!numerodono.includes(i.id))
                        if (i.id != botNumber)
                          if (groupMembers.map((i) => i.id).includes(i.id))
                            blue.push(i.id);
            }
            for (i of countMessage[i2].numbers) {
              if (!groupMembers.map((i) => i.id).includes(i.id))
                if (i.id.length > 5) blue.push(i.id);
            }
            if (blue.length == 0)
              return reply(
                `Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`
              );
            for (i = 0; i < blue.length; i++) {
              await sleep(1000);
              await akame.groupParticipantsUpdate(from, [blue[i]], "remove");
            }
            break;

          case "correio":
            txt = args.join(" ");
            if (!txt) return reply(mess.syntaxAnonymousMail(prefix));
            let txt1 = txt.split("/")[0].replace(/\D/g, "");
            let txt2 = txt.split("/")[1];
            if (!txt1) return reply("*Cadê o número do destinatário?*");
            if (!txt2)
              return reply(
                "*Cadê a mensagem para ser enviada ao destinatário?*"
              );
            let [result] = await akame.onWhatsApp(txt1);
            if (!result)
              return reply(
                `O número fornecido está indisponível no WhatsApp! Verifique por favor.`
              );
            await reagir(from, "💌️");
            reply(mess.sucessAnonymousMail());
            await akame
              .sendMessage(result.jid, { text: mess.anonymousMail(txt2) })
              .catch(async (error) => {
                return reply(
                  "Error ao encaminhar a mensagem, tente novamente mais tarde!"
                );
              });
            break;

          case "nome-bot":
            if (!SoDono && !isnit && !info.key.fromMe)
              return reply(mess.onlyOwner());
            setting.NomeDoBot = q.trim();
            fs.writeFileSync(
              "./settings/settings.json",
              JSON.stringify(setting, null, 2)
            );
            reply(
              `O nome do bot foi alterado com sucesso para: ${setting.NomeDoBot}`
            );
            break;

          case "nick-dono":
            if (!SoDono && !isnit && !info.key.fromMe)
              return reply(mess.onlyOwner());
            setting.ownerName = q.trim();
            fs.writeFileSync(
              "./settings/settings.json",
              JSON.stringify(setting, null, 2)
            );
            reply(`O nick do dono foi configurado para: ${setting.ownerName}`);
            break;

          case "numero-dono":
            if (!SoDono && !isnit && !info.key.fromMe)
              return reply(mess.onlyOwner());
            if (q.match(/[a-z]/i)) return reply("É apenas números..");
            setting.ownerNumber = q
              .trim()
              .replace(new RegExp("[()+-/ +/]", "gi"), "");
            fs.writeFileSync(
              "./settings/settings.json",
              JSON.stringify(setting, null, 2)
            );
            reply(`O número dono foi configurado com sucesso para: ${q}`);
            break;

          case "prefixo-bot":
          case "setprefix":
            if (args.length < 1) return;
            if (!SoDono && !isnit && !info.key.fromMe)
              return reply(mess.onlyOwner());
            setting.prefix = q.trim();
            fs.writeFileSync(
              "./settings/settings.json",
              JSON.stringify(setting, null, 2)
            );
            reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`);
            break;

          case "fotomenu":
          case "fundomenu":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isQuotedImage) return reply("Marque uma imagem");
            if (
              ((isMedia && !info.message.videoMessage) || isQuotedImage) &&
              !q.length <= 1
            ) {
              reply(
                `Calma ae amigo(a), já estou trocando a foto do menu para você..`
              );
              boij = isQuotedImage
                ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                    .message.extendedTextMessage.contextInfo.message
                    .imageMessage
                : info.message.imageMessage;
              owgi = await getFileBuffer(boij, "image");
              res = await upload(owgi);
              ftmenu.logo.splice([]);
              fs.writeFileSync(
                "./settings/logos.json",
                JSON.stringify(ftmenu, null, 2)
              );
              setTimeout(async () => {
                ftmenu.logo.push(res);
                fs.writeFileSync(
                  "./settings/logos.json",
                  JSON.stringify(ftmenu, null, 2)
                );
                reply(
                  `A foto do menu foi alterada com sucesso para: *${ftmenu.logo}*`
                );
              }, 1200);
            } else {
              reply(
                `Mande uma imagem com o comando ${prefix + command} para trocar a foto de todos menu..`
              );
            }
            break;

          case "setprefix":
            if (args.length < 1) return;
            if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
              return reply(mess.onlyOwner());
            setting.prefix = q;
            fs.writeFileSync(
              "./settings/settings.json",
              JSON.stringify(setting, null, 2)
            );
            reply(`O prefixo foi alterado com sucesso para: ${q}`);
            break;

          case "wprivacyph":
            if (!SoDono) return reply(mess.onlyOwner());
            if (args.length < 1)
              return reply(
                `🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyph *--help*_`
              );
            if (args[0] === "--help")
              return await mention(mess.helpPhotoPrivacy(prefix, sender));
            if (args[0] === "-all") {
              reply(`A minha foto do perfil agora está visível à todos.`);
              await akame.updateProfilePicturePrivacy("all");
            } else if (args[0] === "-cntt") {
              reply(
                `A minha foto do perfil agora está visível somente aos meus contatos.`
              );
              await akame.updateProfilePicturePrivacy("contacts");
            } else if (args[0] === "-noall") {
              reply(
                `A foto do meu perfil está privada a todos, até mesmo ao senhor mestre.`
              );
              await akame.updateProfilePicturePrivacy("none");
            } else {
              reply(
                `🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyph *--help*_`
              );
            }
            break;

          case "wprivacygp":
            if (!SoDono) return reply(mess.onlyOwner());
            if (args.length < 1)
              return reply(
                `🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacygp *--help*_`
              );
            if (args[0] === "--help")
              return await mention(mess.helpGroupPrivacy(prefix, sender));
            if (args[0] === "-all") {
              reply(
                `Pronto, agora todos pode me adicionar em grupo normalmente.`
              );
              await akame.updateGroupsAddPrivacy(`all`);
            } else if (args[0] === "-cntt") {
              reply(`Agora somente meus contatos, pode me adicionar em grupo.`);
              await akame.updateGroupsAddPrivacy(`contacts`);
            } else if (args[0] === "-noall") {
              reply(
                `Agora ninguém pode ousar me adicionar em grupo, pois será negado.`
              );
              await akame.updateGroupsAddPrivacy("none");
            } else {
              reply(
                `🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacygp *--help*_`
              );
            }
            break;

          case "nomegp":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            await akame.groupUpdateSubject(from, `${body.slice(9)}`);
            await akame.sendMessage(
              from,
              { text: "Sucesso, alterou o nome do grupo." },
              { quoted: selo }
            );
            break;

          case "envmsg":
            if (!SoDono && !isnit) return reply(mess.onlyOwner());
            var [tx1, tx2] = q.split("/");
            await akame.sendMessage(tx1, { text: tx2 });
            break;

          case "dono1":
            if (args.length < 1) return;
            if (!SoDono && !isnit && !issupre && !ischyt)
              return reply(mess.onlyOwner());
            nescessario.numero_dono1 = q.trim();
            setNes(nescessario);
            reply(
              `Agora contem um segundo dono(a) alterado com sucesso para: ${q}`
            );
            break;

          case "dono2":
            if (args.length < 1) return;
            if (!SoDono && !isnit && !issupre && !ischyt)
              return reply(mess.onlyOwner());
            nescessario.numero_dono2 = q.trim();
            setNes(nescessario);
            reply(
              `Agora contem um segundo dono(a) alterado com sucesso para: ${q}`
            );
            break;

          case "dono3":
            if (args.length < 1) return;
            if (!SoDono && !isnit && !issupre && !ischyt)
              return reply(mess.onlyOwner());
            nescessario.numero_dono3 = q.trim();
            setNes(nescessario);
            reply(
              `Agora contem um terceiro dono(a) alterado com sucesso para: ${q}`
            );
            break;

          case "dono4":
            if (args.length < 1) return;
            if (!SoDono && !isnit && !issupre && !ischyt)
              return reply(mess.onlyOwner());
            nescessario.numero_dono4 = q.trim();
            setNes(nescessario);
            reply(
              `Agora contem um quarto dono(a) alterado com sucesso para: ${q}`
            );
            break;

          case "dono5":
            if (args.length < 1) return;
            if (!SoDono && !isnit && !issupre && !ischyt)
              return reply(mess.onlyOwner());
            nescessario.numero_dono5 = q.trim();
            setNes(nescessario);
            reply(
              `Agora contem um quinto dono(a) alterado com sucesso para: ${q}`
            );
            break;

          case "dono6":
            if (args.length < 1) return;
            if (!SoDono && !isnit && !issupre && !ischyt)
              return reply(mess.onlyOwner());
            nescessario.numero_dono6 = q.trim();
            setNes(nescessario);
            reply(
              `Agora contem um quinto dono(a) alterado com sucesso para: ${q}`
            );
            break;

          case "getquoted":
            reply(
              JSON.stringify(
                info.message.extendedTextMessage.contextInfo,
                null,
                3
              )
            );
            break;

          case "donos":
            reply(
              mess.ownersList(
                NomeDoBot,
                numerodono_ofc,
                numero_dono1,
                numero_dono2,
                numero_dono3,
                numero_dono4,
                numero_dono5,
                numero_dono6
              )
            );
            break;

          case "admins":
          case "listadmins":
          case "listaadmins":
            if (!isGroup) return reply(mess.onlyGroup());
            ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`;
            no = 0;
            for (let admon of groupAdmins) {
              no += 1;
              ytb += `( ${no.toString()} ) - @${admon.split("@")[0]}\n`;
            }
            await mentions(ytb, groupAdmins, true);
            break;

          case "ativo":
          case "on":
          case "voltei":
            if (!isGroupAdmins && !SoDono)
              return reply("Só adm ou dono pode utilizar este comando.");
            if (DonoOficial) {
              if (
                fs.existsSync(
                  "./database/func/afk/afk-@" + numerodono_ofc + ".json"
                )
              ) {
                DLT_FL("./database/func/afk/afk-@" + numerodono_ofc + ".json");
                reply("Bem vindo de volta, agora você está online 🙂");
              } else {
                reply("Você não registrou nenhuma mensagem de ausência...");
              }
            } else if (isGroupAdmins) {
              if (!JSON.stringify(dataGp[0].ausentes).includes(sender))
                return reply("Não há nenhum registro de ausência sua..");
              dataGp[0].ausentes.splice(
                dataGp[0].ausentes.map((x) => x.id).indexOf(sender),
                1
              );
              setGp(dataGp);
              reply("Registro de ausência tirada com sucesso...");
            }
            break;

          case "ausente":
          case "off":
          case "afk":
            if (!isGroupAdmins && !SoDono)
              return reply("Só adm ou dono pode utilizar este comando.");
            if (DonoOficial) {
              msgtmp = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
              fs.writeFileSync(
                `./database/func/afk/afk-@${setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
                JSON.stringify(
                  { Ausente_Desde: msgtmp, Motivo_Da_Ausência: q },
                  null,
                  2
                )
              );
              reply(`Mensagem de ausência criada com sucesso...`);
            } else if (isGroupAdmins) {
              if (!q.trim())
                return reply(
                  `Digite a mensagem de ausência, Exemplo: ${prefix + command} Estou tomando banho`
                );
              if (!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
                dataGp[0].ausentes.push({ id: sender, msg: q.trim() });
                setGp(dataGp);
                reply(
                  "Mensagem de ausência criada com sucesso..\nSe deseja desativar a mensagem de ausência use o comando ativo"
                );
              } else {
                dataGp[0].ausentes[
                  dataGp[0].ausentes.map((i) => i.id).indexOf(sender)
                ].msg = q.trim();
                setGp(dataGp);
                reply(
                  "Mensagem de ausência alterada com sucesso..\nSe deseja desativar a mensagem de ausência use o comando ativo"
                );
              }
            } else {
              return reply(
                "Comando apenas para administradores e dono do bot.."
              );
            }
            break;

          case "addvip":
            if (!SoDono) return reply(mess.onlyOwner());
            barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/");
            var [nmr, tempo50] = barra.split("/");
            if (!nmr || !tempo50)
              return await mention(
                `Você esqueceu de colocar o número do indivíduo e a quantidade de dias que o(a) usuário(a) como vip.\n• Segue o exemplo de uso correto do comando: *${prefix + command} @${nmrdn.split("@")[0]}/30*\n–––\n• Para colocar o usuário sem duração de expiração do vip, você usa o *0* como quantidade de dias.`
              );
            usur = nmr.includes("@")
              ? nmr.split("@")[1] + "@s.whatsapp.net"
              : nmr + "@s.whatsapp.net";
            mega = Number(tempo50) > 0 ? false : true;
            dvip = moment.tz("America/Sao_Paulo").format("DD");
            bla = JSON.stringify(vip).includes(usur);
            if (bla) {
              AB = vip.map((i) => i.id).indexOf(usur);
              if (vip[AB].infinito == true)
                return reply(
                  `Não é possível adicionar + dias ao usuário, por motivos que ele contém o vip infinito.`
                );
              vip[AB].dias += Number(tempo50);
              fs.writeFileSync(
                "./database/usuarios/vip.json",
                JSON.stringify(vip)
              );
              await akame.sendMessage(
                from,
                {
                  text: `${tempo50} dia${Number(tempo50) > 1 ? `s` : ``} fo${Number(tempo50) > 1 ? `ram` : `i`} adicionado${Number(tempo50) > 1 ? `s` : ``} ao usuário @${usur.split("@")[0]}`,
                  mentions: [usur],
                },
                { quoted: selo }
              );
            } else {
              vip.push({
                id: usur,
                dias: Number(tempo50),
                save: Number(dvip),
                infinito: mega,
              });
              fs.writeFileSync(
                "./database/usuarios/vip.json",
                JSON.stringify(vip)
              );
              await akame.sendMessage(
                from,
                {
                  text: `${Number(tempo50) > 0 ? `@${usur.split("@")[0]} foi adicionado à lista vip com sucesso!` : `@${usur.split("@")[0]} foi agraciado com o benefício do vip infinito!`}`,
                  mentions: [usur],
                },
                { quoted: selo }
              );
            }
            break;

          case "delvip":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!marc_tds)
              return reply(
                `Marque o usuário que deseja remover da lista vip.️`
              );
            if (!JSON.stringify(vip).includes(marc_tds))
              return reply(
                "Este número não está incluso atualmente na lista de usuários vip(s).."
              );
            AB = vip.map((i) => i.id).indexOf(marc_tds);
            vip.splice(AB, 1);
            fs.writeFileSync(
              "./database/usuarios/vip.json",
              JSON.stringify(vip)
            );
            await akame.sendMessage(
              from,
              {
                text: `@${marc_tds.split("@")[0]} foi removido da lista vip com sucesso!`,
                mentions: [marc_tds],
              },
              { quoted: selo }
            );
            break;

          case "consultar_vip":
            if (!JSON.stringify(vip).includes(sender))
              return reply(
                "Você não está incluso atualmente na lista de usuários vip(s).."
              );
            AB = vip.map((i) => i.id).indexOf(sender);
            await mention(
              `Usuário: @${vip[AB].id.split("@")[0]}\n• Expiração: ${vip[AAB].infinito == false ? `*Seu vip irá expirar em ${vip[AB].dias} dia${vip[AB].dias > 1 ? `s` : ``}.*` : `*Não existe um dia de expiração do seu vip.*`}`
            );
            break;

          case "viplist":
            if (vip.length == 0)
              return reply(
                `Existe *0* user(s) vip(s), ou seja, não existe ninguém.`
              );
            tkks = `[Total: *${vip.length}*] - Lista de usuário(s) vip temporário(s)/infinito(s):\n–\n`;
            tkks += vip
              .map(
                (v, index) =>
                  `*[${index + 1}]* - Usuário: @${v.id.split("@")[0]}\n• Expiração: ${v.infinito == false ? `*O vip do usuário expira em ${v.dias} dia${v.dias > 1 ? `s` : ``}.*` : `*Não existe um dia de expiração do vip do usuário.*`}`
              )
              .join("\n––\n");
            await mention(tkks);
            break;

          case "limpar":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`;
            await akame.sendMessage(
              from,
              { text: clear },
              {
                quoted: selo,
                contextInfo: { forwardingScore: 500, isForwarded: true },
              }
            );
            break;

          case "d_":
            await akame.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.message.buttonsResponseMessage.contextInfo.stanzaId,
                participant: botNumber,
              },
            });
            break;

          case "doc":
          case "docfake":
            try {
              sprd = "|";
              if (!q)
                return reply(
                  `${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`
                );
              kls = args.join(" ");
              let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`;
              let peso = kls.split(sprd)[1] * 1000000 || "1000000";
              let mimetyp = kls.split(sprd)[2].replace(" ", "") || "gif";
              let thumbc = kls.split(sprd)[3] || "https://google.com/";
              if (mimetyp.toLowerCase() == "pdf") mimetyp = "application/pdf";
              if (mimetyp.toLowerCase() == "apk")
                mimetyp = "application/vnd.android.package-archive";
              if (mimetyp.toLowerCase() == "aac") mimetyp = "audio/aac";
              if (mimetyp.toLowerCase() == "xml") mimetyp = "application/xml";
              if (mimetyp.toLowerCase() == "zip") mimetyp = "application/zip";
              if (mimetyp.toLowerCase() == "jpg") mimetyp = "image/jpeg";
              if (mimetyp.toLowerCase() == "ppt")
                mimetyp = "application/vnd.ms-powerpoint";
              if (mimetyp.toLowerCase() == "pptx")
                mimetyp =
                  "application/vnd.openxmlformats-officedocument.presentationml.presentation";
              if (mimetyp.toLowerCase() == "mp4") mimetyp = "video/mp4";
              if (mimetyp.toLowerCase() == "m4a") mimetyp = "audio/mpeg";
              if (mimetyp.toLowerCase() == "mp3") mimetyp = "audio/mpeg";
              if (mimetyp.toLowerCase() == "gif") mimetyp = "image/gif";
              if (mimetyp.toLowerCase() == "png") mimetyp = "image/png";
              if (mimetyp.toLowerCase() == "svg") mimetyp = "image/svg+xml";
              if (mimetyp.toLowerCase() == "txt") mimetyp = "text/plain";
              let Messagemdoc = {
                document: fs.readFileSync("./database/data/docf.txt"),
                mimetype: mimetyp,
                jpegThumbnail: await getBuffer(thumbc),
                fileName: nomedoc,
                fileLength: peso,
                headerType: 4,
                contextInfo: { forwardingScore: 999, isForwarded: true },
              };
              await akame.sendMessage(from, Messagemdoc, { quoted: selo });
            } catch (err) {
              console.log(err);
              reply(mess.error());
            }
            break;

          case "deletar":
          case "delete":
          case "del":
          case "d":
            if (!menc_prt)
              return reply(
                "Marque a mensagem do usuário que deseja apagar, do bot ou de alguém."
              );
            await akame.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.message.extendedTextMessage.contextInfo.stanzaId,
                participant: menc_prt,
              },
            });
            break;

          case "fundobemvindo":
          case "fundobv":
            if (!SoDono && !isnit && !info.key.fromMe)
              return reply(mess.onlyOwner());
            if (!isQuotedImage) return reply("Marque uma imagem..");
            reply(
              "Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? "
            );
            if (
              ((isMedia && !info.message.videoMessage) ||
                isQuotedImage ||
                isQuotedVideo) &&
              !q.length <= 1
            ) {
              boij =
                isQuotedImage || isQuotedVideo
                  ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                      .message.extendedTextMessage.contextInfo.message
                      .imageMessage
                  : info;
              owgi = await getFileBuffer(boij, "image");
              res = await upload(owgi);
              logoslink.fundo1 = res;
              fs.writeFileSync(
                "./settings/links_img.json",
                JSON.stringify(logoslink, null, 2)
              );
              reply(
                `A imagem de bem vindo foi alterado com sucesso para: ${res}`
              );
            }
            break;

          case "fundolevel":
            if (!SoDono && !isnit && !info.key.fromMe)
              return reply(mess.onlyOwner());
            if (!isQuotedImage) return reply("Marque uma imagem..");
            reply(
              "Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? "
            );
            if (
              ((isMedia && !info.message.videoMessage) ||
                isQuotedImage ||
                isQuotedVideo) &&
              !q.length <= 1
            ) {
              boij =
                isQuotedImage || isQuotedVideo
                  ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                      .message.extendedTextMessage.contextInfo.message
                      .imageMessage
                  : info;
              owgi = await getFileBuffer(boij, "image");
              res = await upload(owgi);
              logoslink.fundolevel = res;
              fs.writeFileSync(
                "./settings/links_img.json",
                JSON.stringify(logoslink, null, 2)
              );
              reply(
                `A imagem de fundo-level foi alterado com sucesso para: ${res}`
              );
            }
            break;

          case "fundosaiu":
            if (!SoDono && !isnit && !info.key.fromMe)
              return reply(mess.onlyOwner());
            if (!isQuotedImage) return reply("Marque uma imagem..");
            reply(
              "Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? "
            );
            if (
              ((isMedia && !info.message.videoMessage) ||
                isQuotedImage ||
                isQuotedVideo) &&
              !q.length <= 1
            ) {
              boij =
                isQuotedImage || isQuotedVideo
                  ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                      .message.extendedTextMessage.contextInfo.message
                      .imageMessage
                  : info;
              owgi = await getFileBuffer(boij, "image");
              res = await upload(owgi);
              logoslink.fundo2 = res;
              fs.writeFileSync(
                "./settings/links_img.json",
                JSON.stringify(logoslink, null, 2)
              );
              reply(`A imagem de saiu foi alterado com sucesso para: ${res}`);
            }
            break;

          case "antiligar":
          case "antiligacao":
          case "antiligação":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isAnticall) {
              nescessario.anticall = true;
              setNes(nescessario);
              reply(
                `O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.`
              );
            } else if (isAnticall) {
              nescessario.anticall = false;
              setNes(nescessario);
              reply("O anti ligação foi desativado com sucesso.");
            }
            break;

          case "antipv":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isAntiPv) {
              nescessario.antipv = true;
              setNes(nescessario);
              reply(
                `Antipv ativado com sucesso, caso alguém enviar mensagem para mim, irei bloquear!`
              );
            } else if (isAntiPv) {
              nescessario.antipv = false;
              setNes(nescessario);
              reply(
                "A função antipv foi desabilitada com sucesso, agora todos podem me usar no pv."
              );
            }
            break;

          case "antipv2":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isAntiPv2) {
              nescessario.antipv2 = true;
              setNes(nescessario);
              reply(
                "Antipv2 ativado com sucesso, o pv pode ser usado, mas não bloquearei, só irei flodar a cada mensagem que ele enviar avisando.."
              );
            } else if (isAntiPv2) {
              nescessario.antipv2 = false;
              setNes(nescessario);
              reply(
                "Antipv2 desativado com sucesso, agora o meu pv está totalmente liberado."
              );
            }
            break;

          case "antipv3":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isAntiPv3) {
              nescessario.antipv3 = true;
              setNes(nescessario);
              reply(
                "Antipv3 ativado com sucesso, irei ignorar todas as mensagens recebidas no pv, exceto: donos e usuários vip.."
              );
            } else if (isAntiPv3) {
              nescessario.antipv3 = false;
              setNes(nescessario);
              reply(
                "Antipv3 desativado com sucesso, agora responderei todos sem preferência!"
              );
            }
            break;

          case "limitarcmd":
          case "limitarcomando":
          case "limitecmd":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            dataGp[0].Limitar_CMD = !dataGp[0].Limitar_CMD;
            setGp(dataGp);
            reply(
              dataGp[0]?.Limitar_CMD
                ? "Limitador de comandos ativado com sucesso no grupo: " +
                    groupName
                : "Limitador de comandos desativado no grupo: " + groupName
            );
            break;

          case "tempocmd":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!q.trim())
              return reply(
                `Exemplo: ${prefix + command} 120\n60 = 1 minuto\nExemplo que coloquei, com o : ${prefix}limitarcmd ativo, só podera usar comandos a cada 2 minutos\nBoa sorte.`
              );
            dataGp[0].Limit_tempo = q.trim();
            setGp(dataGp);
            reply(
              `Tempo limite definido para: ${TimeCount(q.trim())} a cada comando.`
            );
            break;

          case "lyrics":
          case "letramusica":
            if (!q)
              return reply(
                `Você esqueceu de colocar após o comando o nome da música...`
              );
            try {
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/letramusic?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              await akame.sendMessage(
                from,
                {
                  text: mess.lyrics(data, II),
                  contextInfo: {
                    externalAdReply: {
                      title: data.resultado.name,
                      body: data.resultado.description,
                      thumbnail: await getBuffer(data.resultado.image),
                      mediaType: 2,
                      sourceUrl: data.resultado.url,
                    },
                  },
                },
                { quoted: selo }
              );
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "bbbnews":
          case "bbb24news":
          case "bbb24":
          case "bbb":
          case "bigbrother":
            if (args[0] === "-fhouse") {
              try {
                data = await fetchJson(
                  API_URL +
                    `/api/noticias/bbb24/fora-da-casa?apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: {
                      url:
                        data.resultado[0].image ||
                        "https://telegra.ph/file/8cd5cb765008d883ffcc8.jpg",
                    },
                    caption: data.resultado
                      .map(
                        (v, index) =>
                          `*${index + 1}.* ${v.title}\n• _${v.headline}_\n–\n• Sessão da Notícia: *${capitalizeFirstLetter(v.session)}*\n• Postagem: *${v.posted}*\n• Mais informações: *${v.link}*`
                      )
                      .join("\n———\n"),
                  },
                  { quoted: selo }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-dhouse") {
              try {
                data = await fetchJson(
                  API_URL +
                    `/api/noticias/bbb24/dentro-da-casa?apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: {
                      url:
                        data.resultado[0].image ||
                        "https://telegra.ph/file/8cd5cb765008d883ffcc8.jpg",
                    },
                    caption: data.resultado
                      .map(
                        (v, index) =>
                          `*${index + 1}.* ${v.title}\n• _${v.headline}_\n–\n• Sessão da Notícia: *${capitalizeFirstLetter(v.session)}*\n• Postagem: *${v.posted}*\n• Mais informações: *${v.link}*`
                      )
                      .join("\n———\n"),
                  },
                  { quoted: selo }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-bigdays") {
              try {
                data = await fetchJson(
                  API_URL +
                    `/api/noticias/bbb24/bigdays?apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: {
                      url:
                        data.resultado[0].image ||
                        "https://telegra.ph/file/8cd5cb765008d883ffcc8.jpg",
                    },
                    caption: data.resultado
                      .map(
                        (v, index) =>
                          `*${index + 1}.* ${v.title}\n• _${v.headline}_\n–\n• Sessão da Notícia: *${capitalizeFirstLetter(v.session)}*\n• Postagem: *${v.posted}*\n• Mais informações: *${v.link}*`
                      )
                      .join("\n———\n"),
                  },
                  { quoted: selo }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else {
              reply(
                `🪩 - Big Brother Brasil [BBB24] - 👨🏼‍🤝‍👨🏻\n• Usando o comando de forma errada, as opções disponíveis são:\nObs: Todos os dados são retornados do *Gshow*, site oficial da emissora.\n—\n*1.* _${prefix + command}_ *-fhouse* _→_ Esta opção retornará todas as notícias fora da casa as mais recentes de preferência.\n\n*2.* _${prefix + command}_ *-dhouse* _→_ A opção "-dhouse" retorna todas as ocorrências postadas de dentro da casa recentemente.\n\n*3.* _${prefix + command}_ *-bigdays* → Essa opção tem a função de mostrar os dias de votações, entre outros(as)...`
              );
            }
            break;

          case "blockuser":
            if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
              return reply(mess.onlyOwner());
            if (!q.length > 6)
              return reply(
                "Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar..."
              );
            var blcp =
              q.replace(new RegExp("[()+-/ @+/]", "gi"), "") +
              "@s.whatsapp.net";
            var numblc = ban.indexOf(blcp);
            if (numblc >= 0)
              return reply(
                "*Esse número já esta incluso na lista de bloqueio.*"
              );
            ban.push(blcp);
            fs.writeFileSync(
              "./database/usuarios/banned.json",
              JSON.stringify(ban)
            );
            await akame.sendMessage(from, {
              text: mess.bannedMessage(blcp),
              mentions: [blcp],
            });
            break;

          case "unblockuser":
            if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
              return reply(mess.onlyOwner());
            if (!q.length > 6)
              return reply(
                "Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar..."
              );
            var blcp =
              q.replace(new RegExp("[()+-/ @+/]", "gi"), "") +
              "@s.whatsapp.net";
            var numbl = ban.indexOf(blcp);
            if (numbl < 0)
              return reply(
                "*Esse número não está incluso na lista de bloqueados.*"
              );
            pesquisar = blcp;
            processo = ban.indexOf(pesquisar);
            while (processo >= 0) {
              ban.splice(processo, 1);
              processo = ban.indexOf(pesquisar);
            }
            fs.writeFileSync(
              "./database/usuarios/banned.json",
              JSON.stringify(ban)
            );
            await akame.sendMessage(from, {
              text: mess.unbannedMessage(blcp),
              mentions: [blcp],
            });
            break;

          case "acess":
            if (!SoDono && !isnit && !issupre && !ischyt)
              return reply(mess.onlyOwner());
            teks = body.slice(7);
            await exec(teks, async (err, stdout) => {
              if (err)
                return await akame.sendMessage(
                  from,
                  { text: `root@AKAMOficial:~ ${err}` },
                  { quoted: selo }
                );
              if (stdout)
                return await akame.sendMessage(from, { text: stdout });
            });
            break;

          case "sender":
            bla = isGroup ? info.key.participant : info.key.remoteJid;
            reply(bla);
            break;

          case "ping":
            await akame.sendMessage(from, {
              react: { text: `🏃🏻‍♀️`, key: info.key },
            });
            const speedConverted = Date.now() / 1000 - info.messageTimestamp;
            ds = `❪⛩️ꦿᰧ͢𝐒𝐏𝐄𝐄𝐃 ↯ 𝐁𝐎𝐓ེ≭•۟.❫\nຊ *Latência:* ${String(speedConverted.toFixed(3))} milisegundos.\nຊ *Uptime:* ${TimeCount(process.uptime())}\n—\n⚙️ *Sistema:*\nຊ Sistema Operacional: *${os.type()}*\nຊ Versão: *${os.release()}*\nຊ Memória RAM Usada: *${(os.freemem() / Math.pow(1024, 3)).toFixed(2)} GB*\nຊ Total de Memória RAM: *${(os.totalmem() / Math.pow(1024, 3)).toFixed(2)} GB*\nຊ Uso da CPU: *${os.loadavg()[0].toFixed(2)}%*\nຊ Uso da Memória RAM: *${(((os.totalmem() - os.freemem()) / os.totalmem()) * 100).toFixed(2)}%*\nຊ Versão do NodeJS: *${process.version}*`;
            uptimeImage = await getBuffer(
              `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=VELOCIDADE DA BOT&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${String(speedConverted.toFixed(3))}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100`
            );
            fs.writeFileSync(
              `./database/data/media/images/uptime-image.jpg`,
              uptimeImage
            );
            akame.sendInteractiveIMG(
              "./database/data/media/images/uptime-image.jpg",
              from,
              ds,
              "© Akame Supremacy",
              { participant: sender, quotedMessage: info.message },
              {
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                      display_text: "ぁ 𝙲𝚁𝙸𝙰𝙳𝙾𝚁 ぁ",
                      url: `https://wa.me/554891828991`,
                      disabled: true,
                    }),
                  },
                ],
              }
            );
            break;

          case "gtts":
            try {
              if (args.length < 1)
                return await akame.sendMessage(
                  from,
                  {
                    text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`,
                  },
                  { quoted: selo }
                );
              const gtts = require("./arquivos/funcoes/gtts")(args[0]);
              if (args.length < 2)
                return await akame.sendMessage(
                  from,
                  { text: "Falta colocar o código do idioma!" },
                  { quoted: selo }
                );
              dtt = body.slice(8);
              ranm = getRandom(".mp3");
              rano = getRandom(".ogg");
              if (dtt.length > 200)
                return reply(
                  "Para reduzir spam o máximo de letras permitidas são 200!"
                );
              gtts.save(ranm, dtt, async function () {
                await exec(
                  `ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`,
                  async (err) => {
                    await akame
                      .sendMessage(
                        from,
                        {
                          audio: fs.readFileSync(ranm),
                          ptt: true,
                          mimetype: "audio/mpeg",
                        },
                        { quoted: selo }
                      )
                      .catch(async (error) => {
                        return reply(mess.error());
                      });
                    DLT_FL(ranm);
                    DLT_FL(rano);
                  }
                );
              });
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "tagme":
            const tagme = `@${sender.split("@")[0]} ✔️`;
            await mentions(tagme, [sender], true);
            break;

          case "avalie":
            if (q.length < 1)
              return reply(
                `Exemplo: *${prefix}avalie* _“Bot muito bom, parabéns.”_`
              );
            if (q.length > 400)
              return reply(`Você *utrapassou* o máximo de 400 caracteres.`);
            await sendMentions(
              nmrdn,
              `📚🌟 *[Avaliação]* - Recebi uma avaliação do(a) usuário(a): *@${sender.split("@")[0]}*\n- Detalhes: _“${q}”_`
            );
            await sendMentions(
              from,
              `Olá *@${sender.split("@")[0]}*, enviei sua avaliação para um dos meus superiores! Agradeço pelo uso contínuo de mim e pela avaliação, vamos melhorar a cada dia sempre! 🌟🤖`
            );
            break;

          case "bug":
            if (q.length < 1)
              return reply(
                "Campo vázio? Por favor, descreva o erro ocorrido para ser solucionado pela minha equipe!"
              );
            if (q.length > 800)
              return reply(`Você *utrapassou* o máximo de 800 caracteres.`);
            await sendMentions(
              nmrdn,
              `🤖❌️ [ERROR] - O(a) usuário(a) *@${sender.split("@")[0]}* relatou a ocorrência de um erro ao utilizar um comando.\n- Detalhes: _“${q}”_`
            );
            reply(
              "Mensagem enviada ao meu superior, se enviar muitas mensagens repetida por zueiras, você será banido(a) de usar os comandos do bot."
            );
            break;

          case "sugestão":
          case "sugestao":
            if (q.length < 1)
              return reply(
                `Exemplo: *${prefix}sugestao* _“Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso..”_`
              );
            if (q.length > 800)
              return reply(`Você *utrapassou* o máximo de 800 caracteres.`);
            await sendMentions(
              nmrdn,
              `📮🌟 *[Sugestões]* - Sugestões de novos comandos, enviado pelo(a) usuário(a): *@${sender.split("@")[0]}*\n- Detalhes recebidos: _“${q}”_`
            );
            reply(
              "Mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões."
            );
            break;

          case "modoaluguel":
          case "aluguel":
          case "modorent":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!SoDono) return reply(mess.onlyOwner());
            if (args.length < 1)
              return reply(
                "Aviso: 1 para ativar, 0 para desativar este recurso de forma global."
              );
            if (Number(args[0]) === 1) {
              if (isModoAluguel)
                return reply(
                  "Atualmente este modo já está ativado de forma global..."
                );
              nescessario.modo_aluguel = true;
              setNes(nescessario);
              reply(
                "Ativou com sucesso o modo aluguel global, agora todos os grupos que o bot está devem ser registrados para o bot funcionar perfeitamente para todos os participantes/adms do grupo, com meus proprietários não haverá nenhuma restrição de uso."
              );
            } else if (Number(args[0]) === 0) {
              if (!isModoAluguel)
                return reply(
                  "O modo aluguel global não está ativo na configuração."
                );
              nescessario.modo_aluguel = false;
              setNes(nescessario);
              reply(
                "O modo aluguel foi desativado com sucesso, agora todos os comandos estarão funcionando para todos os participantes e adminstradores do grupo, sem a precisão de registrar o grupo no aluguel."
              );
            } else {
              reply(
                "Aviso: 1 para ativar, 0 para desativar este recurso de forma global."
              );
            }
            break;

          case "addcmdvip":
            if (!SoDono) return reply(mess.onlyOwner());
            tp = args.join(" ");
            if (
              tp.includes("addcmdvip addcmdvip") ||
              tp.includes("addcmdvip  addcmdvip")
            )
              return reply(
                `Tá louco maluco? Não tem como adicionar o mesmo comando.`
              );
            if (isCmdVip.includes(args[0]))
              return reply(
                "Este comando já está incluso na lista de comandos vip, verifique."
              );
            isCmdVip.push(args[0]);
            fs.writeFileSync(
              "./settings/nescessario.json",
              JSON.stringify(nescessario, null, 2)
            );
            reply(
              `O comando *${args[0]}* foi adicionado na lista de comandos vip.`
            );
            break;

          case "delcmdvip":
            if (!SoDono) return reply(mess.onlyOwner());
            tp = args.join(" ");
            if (
              tp.includes("delcmdvip delcmdvip") ||
              tp.includes("delcmdvip  delcmdvip")
            )
              return reply(
                `Tá louco maluco? Não tem como deletar o mesmo comando.`
              );
            if (!isCmdVip.includes(args[0]))
              return reply(
                "Este comando já está excluído da lista de comandos vip."
              );
            var i = isCmdVip.indexOf(args[0]);
            isCmdVip.splice(i, 1);
            fs.writeFileSync(
              "./settings/nescessario.json",
              JSON.stringify(nescessario, null, 2)
            );
            reply(
              `O comando *${args[0]}* foi tirado da lista de comandos vip.`
            );
            break;

          case "listacmdvip":
          case "cmdviplist":
            tkks = `[Total: *${isCmdVip.length}*] - Comandos que foram adicionados para uso Vip:\n–\n`;
            tkks += isCmdVip
              .map(
                (v, index) =>
                  `\t• [ *N° ${index + 1}* ] - Comando: ${prefix + v}`
              )
              .join("\n–\n");
            await akame.sendMessage(
              from,
              { text: tkks.trim() },
              { quoted: selo }
            );
            break;

          case "blocklist":
            if (ban.length == 0)
              return reply(
                `Existe *0* user(s) bloqueado(s), ou seja, não existe ninguém.`
              );
            tkks = `[Total: *${ban.length}*] - Lista de Usuários bloqueados pelo julgamento do(s) donos(as):\n–\n`;
            tkks += ban
              .map(
                (v, index) =>
                  `\t• [ *N° ${index + 1}* ] - Usuário: @${v.split("@")[0]}`
              )
              .join("\n–\n");
            await akame.sendMessage(
              from,
              { text: tkks.trim(), mentions: ban },
              { quoted: selo }
            );
            break;

          case "blockcmdgp":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            tp = args.join(" ");
            if (
              tp.includes("blockcmd blockcmd") ||
              tp.includes("blockcmd  blockcmd")
            )
              return reply(
                `Tá louco maluco?, Quer banir o comando de bloquear comando?`
              );
            if (getComandoBlock(from).includes(args[0]))
              return reply("Este comando já está bloqueado.");
            await addComandos(from, args[0]);
            reply(`O comando *${args[0]}* foi bloqueado no grupo com sucesso.`);
            break;

          case "unblockcmdgp":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            tp = args.join(" ");
            if (
              tp.includes("blockcmd unblockcmd") ||
              tp.includes("blockcmd  unblockcmd")
            )
              return reply(
                `Tá louco maluco?, Quer banir o comando de desbloquear comando?`
              );
            if (!getComandoBlock(from).includes(args[0]))
              return reply("Este comando já está desbloqueado.");
            await deleteComandos(from, args[0]);
            reply(
              `O comando *${args[0]}* foi desbloqueado com sucesso no grupo.`
            );
            break;

          case "listblockcmdgp":
          case "listbcmdgp":
            if (!isGroup) return reply(mess.onlyGroup());
            if (getComandoBlock(from).length == 0)
              return reply(
                "Não existe ainda nenhum *comando bloqueado* neste grupo."
              );
            tkks = `[Total: *${getComandoBlock(from).length}*] - Comandos bloqueados pelo adminstrador(s) do grupo:\n–\n`;
            tkks += getComandoBlock(from)
              .map(
                (v, index) =>
                  `\t• [ *N° ${index + 1}* ] - Comando: ${prefix + getComandoBlock(from)[v]}`
              )
              .join("\n–\n");
            await akame.sendMessage(
              from,
              { text: tkks.trim() },
              { quoted: selo }
            );
            break;

          case "blockcmdg":
            if (!SoDono) return reply(mess.onlyOwner());
            tp = args.join(" ");
            if (
              tp.includes("blockcmdg blockcmdg") ||
              tp.includes("blockcmdg  blockcmdg")
            )
              return reply(
                `Tá louco maluco? Não tem como adicionar o mesmo comando.`
              );
            if (isBlockCmdG.includes(args[0]))
              return reply(
                "Este comando já está incluso na lista de *comandos bloqueados global*."
              );
            isBlockCmdG.push(args[0]);
            fs.writeFileSync(
              "./settings/nescessario.json",
              JSON.stringify(nescessario, null, 2)
            );
            reply(
              `O comando *${args[0]}* foi adicionado na lista de comandos bloqueados global.`
            );
            break;

          case "unblockcmdg":
            if (!SoDono) return reply(mess.onlyOwner());
            tp = args.join(" ");
            if (
              tp.includes("unblockcmdg unblockcmdg") ||
              tp.includes("unblockcmdg  unblockcmdg")
            )
              return reply(
                `Tá louco maluco? Não tem como desbloquear o mesmo comando.`
              );
            if (!isBlockCmdG.includes(args[0]))
              return reply(
                "Este comando não está incluso na lista de *cmds bloqueados global*."
              );
            var ab = isBlockCmdG.indexOf(args[0]);
            isBlockCmdG.splice(ab, 1);
            fs.writeFileSync(
              "./settings/nescessario.json",
              JSON.stringify(nescessario, null, 2)
            );
            reply(
              `O comando *${args[0]}* foi tirado da lista de cmds bloqueados global.`
            );
            break;

          case "listbcmdglobal":
            if (isBlockCmdG.length == 0)
              return reply("Não existe nenhum *comando bloqueado* na lista.");
            tkks = `[Total: *${isBlockCmdG.length}*] - Lista de comandos bloqueados pelo(s) meus proprietários:\n–\n`;
            tkks += isBlockCmdG
              .map(
                (v, index) =>
                  `\t• [ *N° ${index + 1}* ] - Comando: ${prefix + v}`
              )
              .join("\n–\n");
            await akame.sendMessage(
              from,
              { text: tkks.trim() },
              { quoted: selo }
            );
            break;

          case "gimage":
            if (!q)
              return reply(
                `Coloque o que deseja após o comando... Por exemplo: *${prefix + command} Fogo*`
              );
            try {
              reply(mess.wait());
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/googleimage?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              returnData = pickRandom(
                data.resultado
              ); /* Cria um random no resultado, retornando só 1. */
              await akame.sendMessage(
                from,
                {
                  image: { url: returnData.url },
                  caption: mess.googleImage(returnData),
                },
                { quoted: selo }
              );
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "google":
          case "googlesrc":
            if (!q)
              return reply(
                `Você esqueceu de colocar o que você deseja pesquisar após o comando.`
              );
            try {
              reply(mess.wait());
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/google?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              await akame.sendMessage(
                from,
                {
                  text: data.resultado
                    .map(
                      (v) =>
                        `• Título: *${v.title}*\n• Descrição: *${v.snippet}*\n• Link: *${v.link}*`
                    )
                    .join("\n–\n"),
                  contextInfo: {
                    externalAdReply: {
                      title: data.resultado[0].title,
                      body: data.resultado[0].snippet,
                      mediaType: 2,
                      sourceUrl: data.resultado[0].link,
                    },
                  },
                },
                { quoted: selo }
              );
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "screenshotweb":
          case "printsite":
          case "ssweb":
            if (!q)
              return reply(
                `Cadê o link do site o qual você deseja visualizar?`
              );
            reply("Aguarde um pouco, entrando no site solicitado...");
            try {
              await akame.sendMessage(
                from,
                {
                  image: {
                    url:
                      API_URL +
                      `/api/outros/ssweb?link=${q}&apikey=` +
                      API_KEY_AKAME,
                  },
                  caption: `• *Site:* ${q}`,
                },
                { quoted: selo }
              );
            } catch (error) {
              reply(
                "• Erro ao entrar no site desejado. Tente novamente mais tarde!"
              );
            }
            break;

          case "memes":
          case "memedroid":
            try {
              reply(mess.wait());
              res = await axios.get(
                API_URL + `/api/memes?apikey=` + API_KEY_AKAME
              );
              teks = pickRandom(res.data.pesquisa.resultado);
              await akame
                .sendMessage(
                  from,
                  {
                    image: await getBuffer(teks.imagem),
                    caption: mess.memesImages(teks),
                  },
                  { quoted: selo }
                )
                .catch(async (error) => {
                  return reply(mess.error());
                });
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "memesvid":
          case "ifunnyvideo":
            try {
              reply(mess.wait());
              res = await axios.get(
                API_URL + `/api/memesvid?apikey=` + API_KEY_AKAME
              );
              teks = pickRandom(res.data.videos);
              await akame
                .sendMessage(
                  from,
                  {
                    video: await getBuffer(teks.video),
                    caption: mess.iFunnyVideo(teks),
                  },
                  { quoted: selo }
                )
                .catch(async (error) => {
                  return reply(mess.error());
                });
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "noticias":
          case "getnoticias":
            try {
              if (!q)
                return reply(
                  `Informe um tema para realizar a pesquisa de suas notícias!`
                );
              theNews = await axios.get(
                `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`
              );
              d = await pickRandom(theNews.data.articles);

              reply(
                `> *${d.title}* - ${d.author} [${d.source.name}]\n–\n• Descrição: *${d.description}*\n• Postagem: *${d.publishedAt.split("T").join(" - ").split("Z")[0]}*\n• URL: *${d.url}*`
              );
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "googlenews":
          case "gnews":
            try {
              idioma = "pt-br"; // Idioma: Português do Brasil
              country = "BR"; // Mude a sigla para qual você quiser puxar as notícias.
              dataNews = await fetchJson(
                `https://delirius-api-oficial.vercel.app/api/noticias?language=${idioma}&country=${country}`
              );
              NTD = pickRandom(dataNews.headline_stories);
              await reply(
                `> Google Notícias - Brasil:\n–\n• Título: *${NTD.title}*\n• Postagem por: *${NTD.by}* | ${NTD.published}\n–\n• URL: *${NTD.url}*`
              );
            } catch (e) {
              return await reply(mess.error());
            }
            break;

          case "cases":
            if (!SoDono) return reply(mess.onlyOwner());
            try {
              const listCases = () => {
                const fileContent = fs.readFileSync("index.js").toString();
                const caseNames = fileContent.match(/case\s+'(.+?)'/g);
                if (caseNames) {
                  return caseNames
                    .map(
                      (caseName, index) =>
                        `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`
                    )
                    .join("\n");
                } else {
                  reply("Nenhuma case encontrada.");
                }
              };
              akame.sendMessage(from, { text: listCases() }, { quoted: selo });
            } catch (e) {
              reply("Ocorreu um erro ao obter as cases.");
            }
            break;

          case "pinterest":
            try {
              if (!q)
                return reply(
                  `Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`
                );
              reply(mess.wait());
              await akame
                .sendMessage(
                  from,
                  {
                    image: {
                      url:
                        API_URL +
                        `/api/pesquisa/pinterest?text=${q}&apikey=` +
                        API_KEY_AKAME,
                    },
                  },
                  { quoted: selo }
                )
                .catch(async (error) => {
                  return reply(mess.error());
                });
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "pinterestmp4":
            try {
              if (!q)
                return reply(
                  `Insira o link de algum vídeo do Pinterest\nExemplo: ${prefix + command} https://pin.it/2rjIHJxKm`
                );
              reply(mess.wait());
              data = await fetchJson(
                API_URL +
                  `/api/download/pinterest?url=${q}&apikey=` +
                  API_KEY_AKAME
              );
              await akame
                .sendMessage(
                  from,
                  { video: { url: data.video }, mimetype: "video/mp4" },
                  { quoted: selo }
                )
                .catch(async (error) => {
                  return reply(mess.error());
                });
            } catch (e) {
              reply(mess.error());
            }
            break;

          case "take":
            if (!isQuotedSticker)
              return reply(
                "Você usou de forma errada... Marque uma figurinha."
              );
            try {
              i8 = rgtake.map((i) => i.usuario).indexOf(sender);
              if (i8 < 0)
                return reply(
                  `Você ainda não definiu a sua marca ďágua personalizada para o uso desse comando.\n• Por favor, use o comando *${prefix}rgtake sb|bot* para registrar sua marca ďagua personalizada de seus stickers.`
                );
              encmediats = await getFileBuffer(
                info.message.extendedTextMessage.contextInfo.quotedMessage
                  .stickerMessage,
                "sticker"
              );
              bas64 = `data:image/jpeg;base64,${encmediats.toString("base64")}`;
              var mantap = await convertSticker(
                bas64,
                `${rgtake[i8].mcdagua2}`,
                `${rgtake[i8].mcdagua1}`
              );
              var sti = new Buffer.from(mantap, "base64");
              await akame.sendMessage(from, {
                sticker: sti,
                contextInfo: {
                  externalAdReply: {
                    title: `Renomeado com sucesso para: ${rgtake[i8].mcdagua1}|${rgtake[i8].mcdagua2}`,
                    body: "",
                    previewType: "PHOTO",
                    thumbnail: sti,
                  },
                },
              });
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "rgtake":
            var [TP, TP2] = q.split("|");
            rgtakergtake = [];
            for (i of rgtake) {
              rgtakergtake.push(i.usuario);
            }
            if (rgtakergtake.indexOf(sender) >= 0)
              return reply(
                "Você já registrou sua marca ďagua, não é possível usar esse comando novamente."
              );
            if (!q.includes("|"))
              return reply(
                `Você usou de forma errada, siga o exemplo: *${prefix + command} sb|bot*`
              );
            if (!TP)
              return reply(
                `Você esqueceu de preencher o primeiro campo... Ex: *${prefix + command} sb|bot*`
              );
            if (!TP2)
              return reply(
                `Você esqueceu de preencher o segundo campo... Ex: *${prefix + command} sb|bot*`
              );
            rgtake.push({ usuario: sender, mcdagua1: TP, mcdagua2: TP2 });
            fs.writeFileSync(
              "./database/usuarios/take.json",
              JSON.stringify(rgtake, null, 2)
            );
            reply(
              `Sucesso ao concluir o registro... Agora você pode usar o comando: *${prefix}take*`
            );
            break;

          case "rntake":
            i8 = rgtake.map((i) => i.usuario).indexOf(sender);
            if (i8 < 0)
              return reply(
                `Como você quer renomear algo que você não tem registro?`
              );
            if (!q.includes("|"))
              return reply(
                `Você usou de forma errada, siga o exemplo: *${prefix + command} sb|bot*`
              );
            var [MARCAD1, MARCAD2] = q.split("|");
            if (!MARCAD1)
              return reply(
                `Você esqueceu de preencher o primeiro campo... Ex: *${prefix + command} sb|bot*`
              );
            if (!MARCAD2)
              return reply(
                `Você esqueceu de preencher o segundo campo... Ex: *${prefix + command} sb|bot*`
              );
            rgtake[i8].mcdagua1 = MARCAD1;
            rgtake[i8].mcdagua2 = MARCAD2;
            fs.writeFileSync(
              "./database/usuarios/take.json",
              JSON.stringify(rgtake, null, 2) + "\n"
            );
            reply(
              `Sua marca ďágua foi alterada para *"${MARCAD1}|${MARCAD2}"* com sucesso.`
            );
            break;

          case "gerarlink":
            try {
              if (
                ((isMedia && !info.message.videoMessage) || isQuotedImage) &&
                !q.length <= 1
              ) {
                await reagir(
                  from,
                  "😸"
                ); /* Reação para aguadar o sucesso da solicitação... '😸' */
                boij = isQuotedImage
                  ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                      .message.extendedTextMessage.contextInfo.message
                      .imageMessage
                  : info.message.imageMessage;
                owgi = await getFileBuffer(boij, "image");
                await akame.sendMessage(
                  from,
                  { text: `• Link gerado: *${await upload(owgi)}*` },
                  { quoted: selo }
                );
                await reagir(
                  from,
                  "✅️"
                ); /* Sucesso? Vai reagir a mensagem com o emoji '✅️' */
              } else if (
                ((isMedia && info.message.videoMessage.seconds < 30) ||
                  (isQuotedVideo &&
                    info.message.extendedTextMessage.contextInfo.quotedMessage
                      .videoMessage.seconds < 30)) &&
                !q.length <= 1
              ) {
                await reagir(
                  from,
                  "😸"
                ); /* Reação para aguadar o sucesso da solicitação... '😸' */
                boij = isQuotedVideo
                  ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                      .message.extendedTextMessage.contextInfo.message
                      .videoMessage
                  : info.message.videoMessage;
                owgi = await getFileBuffer(boij, "video");
                await akame.sendMessage(
                  from,
                  { text: `• Link gerado: *${await upload(owgi)}*` },
                  { quoted: selo }
                );
                await reagir(
                  from,
                  "✅️"
                ); /* Sucesso? Vai reagir a mensagem com o emoji '✅️' */
              } else {
                await reagir(
                  from,
                  "😿"
                ); /* Triste? Não mencionou nada ou não seguiu as diretrizes... */
                reply(
                  "Você deve marcar uma imagem, ou um vídeo de até 30 segundos.."
                );
              }
            } catch {
              await reagir(
                from,
                "❌️"
              ); /* Após as solicitações ocorrer um erro, reagir com com '❌️'. */
              reply(mess.errorUploadImage());
            }
            break;

          // LOGOS

          case "qc":
            if (!q)
              return reply(
                `Para usar este comando é nescessário adicionar algo após o comando.`
              );
            reply(mess.wait());
            try {
              ppimg = await akame.profilePictureUrl(sender, "image");
            } catch {
              ppimg = "https://telegra.ph/file/24fa902ead26340f3df2c.png";
            }
            await axios
              .post(
                "https://quote.btch.bz/generate",
                {
                  type: "quote",
                  format: "png",
                  backgroundColor: "#FFFFFF",
                  width: 512,
                  height: 768,
                  scale: 2,
                  messages: [
                    {
                      entities: [],
                      avatar: true,
                      from: { id: 1, name: pushname, photo: { url: ppimg } },
                      text: q,
                      replyMessage: {},
                    },
                  ],
                },
                { headers: { "Content-Type": "application/json" } }
              )
              .then(async (res) => {
                const buffer = new Buffer.from(res.data.result.image, "base64");
                await akame.sendImageAsSticker(from, buffer, {
                  author: `📌 Criado(a) por: ${NomeDoBot}`,
                });
              })
              .catch(async (error) => {
                return reply(mess.error());
              });
            break;

          case "figuweb":
            verifText = args.join(" ");
            if (!verifText) return reply(mess.syntaxWebSticker(prefix));
            let text, colorNumber;
            if (q.includes("/")) {
              [text, colorNumber] = q.split("/");
            } else {
              text = q;
              colorNumber = "1";
            }
            await reagir(from, "💬");
            reply(
              "• Aguarde, estou gerando a figurinha de acordo o que você solicitou!"
            );
            const colorC = {
              1: "#000000",
              2: "#FFFFFF",
              3: "#FF0000",
              4: "#0000FF",
            };
            const backgroundColor = colorC[colorNumber] || "#000000";
            try {
              ppimg = await akame.profilePictureUrl(sender, "image");
            } catch {
              ppimg = "https://telegra.ph/file/b5427ea4b8701bc47e751.jpg";
            }
            axios
              .post(
                "https://quote.btch.bz/generate",
                {
                  type: "quote",
                  format: "png",
                  backgroundColor: backgroundColor,
                  width: 512,
                  height: 768,
                  scale: 2,
                  messages: [
                    {
                      entities: [],
                      avatar: true,
                      from: { id: 1, name: pushname, photo: { url: ppimg } },
                      text: text,
                      replyMessage: {},
                    },
                  ],
                },
                { headers: { "Content-Type": "application/json" } }
              )
              .then(async (resultar) => {
                const bufferE = new Buffer.from(
                  resultar.data.result.image,
                  "base64"
                );
                await akame.sendImageAsSticker(from, bufferE, {
                  author: `📌 Criado(a) por: ${NomeDoBot}`,
                });
              })
              .catch(async (error) => {
                return reply(mess.error());
              });
            break;

          case "amazon":
          case "amazonsearch":
            if (q.trim().length < 4)
              return reply(
                `NaN, você esqueceu de colocar o nome do produto após o comando.`
              );
            reply(mess.wait());
            try {
              ABC = await fetchJson(
                API_URL +
                  `/api/pesquisa/amazon?nome=${q}&apikey=` +
                  API_KEY_AKAME
              );
              MAP_MAP_RESULT = ABC.resultado
                .map(
                  (v, index) =>
                    `*${index + 1}.* Produto: *${v.titulo}*\n• Valor do Produto: *${v.valor}*\n• Link: *${v.link}*`
                )
                .join("\n–\n");
              await akame.sendMessage(
                from,
                {
                  text: `> 𝐀𝐦𝐚𝐳𝐨𝐧 - 𝐒𝐭𝐨𝐫𝐞\n–\n${MAP_MAP_RESULT}`,
                  contextInfo: {
                    externalAdReply: {
                      title: ABC.resultado[0].titulo,
                      thumbnail: await getBuffer(ABC.resultado[0].imagem),
                      mediaType: 2,
                      sourceUrl: ABC.resultado[0].link,
                    },
                  },
                },
                { quoted: selo }
              );
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "brasileirao":
            try {
              ABC = await fetchJson(
                API_URL + `/api/noticias/brasileirao?apikey=` + API_KEY_AKAME
              );
              reply(
                `⚽️📊 *Tabela Brasileirão:*\n–\n${ABC.resultado.map((v, index) => `${index + 1}°) Time: *${v.equipe}*\n• Pontos alcançados pelo time: *${v.pontos}*\n• Jogos jogados pelo time: *${v.jogosJogados}*`).join("\n–\n")}`
              );
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "receita":
          case "revenue":
            if (!q)
              return reply(`NaN, você esqueceu de digitar após o comando.`);
            try {
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/pesquisar-receitas?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              if (data.resultado.length == 0) return reply(mess.noresult());
              RST = "> 𝐂𝐲𝐛𝐞𝐫𝐂𝐨𝐨𝐤 - 𝐑𝐞𝐜𝐞𝐢𝐭𝐚𝐬\n—\n";
              RST += data.resultado
                .map(
                  (v, index) =>
                    `*${index + 1}.* Título: *Receita de ${v.title}*\n• Avaliação: *${v.assessment.starEmoji} (${v.assessment.star})*\n• Enviado(a) por: *${v.by}*\n• URL: *${v.url}*`
                )
                .join("\n—\n");
              await akame.sendMessage(
                from,
                {
                  text: RST,
                  contextInfo: {
                    externalAdReply: {
                      title: `Receita de ${data.resultado[0].title} - Enviada por: '${data.resultado[0].by}'`,
                      body: `Encontre as melhores receitas culinárias no CyberCook, clique aqui!`,
                      thumbnail: await getBuffer(data.resultado[0].image),
                      mediaType: 2,
                      sourceUrl: data.resultado[0].url,
                    },
                  },
                },
                { quoted: selo }
              );
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "playstore":
            if (!q)
              return reply(`NaN, você esqueceu de digitar após o comando.`);
            try {
              AB = await fetchJson(
                API_URL +
                  `/api/pesquisa/playstore?nome=${q}&apikey=` +
                  API_KEY_AKAME
              );
              if (AB.pesquisa.resultado.length == 0)
                return reply(mess.noresult());
              ABC = `> 𝐏𝐥𝐚𝐲𝐒𝐭𝐨𝐫𝐞 𝐀𝐩𝐩𝐬 - 𝐒𝐞𝐚𝐫𝐜𝐡\n–\n`;
              ABC += `${AB.pesquisa.resultado.map((v, index) => `*${index + 1}.* Nome: *${v.nome}*\n• Desenvolvedor: *${v.desenvolvedor}*\n• Avaliação dos usuários do aplicativo: *${v.estrelas} Estrelas*\n• Url: *${v.link}*`).join("\n–\n")}`;
              await akame.sendMessage(from, {
                text: ABC,
                contextInfo: {
                  externalAdReply: {
                    title: AB.pesquisa.resultado[0].nome,
                    body: `Avaliação: ${AB.pesquisa.resultado[0].estrelas} • Desenvolvedor: ${AB.pesquisa.resultado[0].desenvolvedor}`,
                    thumbnail: await getBuffer(AB.pesquisa.resultado[0].imagem),
                    mediaType: 2,
                    sourceUrl: AB.pesquisa.resultado[0].link,
                  },
                },
              });
            } catch (error) {
              return reply(mess.error());
            }
            break;
          /*
case 'playstoredl':
if(!q) return reply(`Deposite um link de um aplicativo da PlayStore, você pode obter usando o comando 'playstore' ou copiando-o manualmente diretamente do aplicativo ou site oficial do Google Play.`);
if(q.includes('play.google.com')) return reply('Não é um link da PlayStore.');
try {
  dataResult = await fetchJson(`https://rest-api.akuari.my.id/downloader/apkdownloader2?package=${q}`);
     await akame.sendMessage(from, {document: {url: dataResult.respon.downloadapk},
      caption: `• Nome: *${dataResult.respon.title}*\n• Quantidade de instalações: *${dataResult.respon.install}*\n• Classificação: *${dataResult.respon.score}°*\n• Avaliação:  (${dataResult.respon.reviews})`,
      mimetype: "application/vnd.android.package-archive",
      fileName: `${dataResult.respon.title}.apk`
     }, {
      quoted: selo
     });
} catch(e) {
  return reply(mess.error());
}
break
*/
          case "happymod":
            if (!q)
              return reply(`NaN, você esqueceu de digitar após o comando.`);
            try {
              AB = await fetchJson(
                API_URL +
                  `/api/pesquisa/happymod?nome=${q}&apikey=` +
                  API_KEY_AKAME
              );
              if (AB.resultado.length == 0) return reply(mess.noresult());
              ABC = `> 𝐇𝐚𝐩𝐩𝐲𝐦𝐨𝐝 - 𝐒𝐞𝐚𝐫𝐜𝐡\n–\n`;
              ABC += `${AB.resultado.map((v, index) => `*${index + 1}.* Nome: *${v.nome}*\n• Url: *${v.link}*`).join("\n–\n")}`;
              await akame.sendMessage(from, {
                text: ABC,
                contextInfo: {
                  externalAdReply: {
                    title: AB.resultado[0].nome,
                    body: `• Clique aqui para ser redirecionado(a) ao site do Happymod..`,
                    thumbnail: await getBuffer(AB.resultado[0].icon),
                    mediaType: 2,
                    sourceUrl: AB.resultado[0].link,
                  },
                },
              });
            } catch (error) {
              return reply(mess.error());
            }
            break;
          case "autorizar":
          case "autoriza":
            if (!isGroup) return reply(mess.onlyAdmins());
            if (!isGroupAdmins) return reply(mess.onlyGroup());
            const solAll = await akame.groupRequestParticipantsList(from);
            if (solAll == false) return reply("Sem solicitações pendentes.");
            let formattedString = solAll
              .map(
                (item) =>
                  `• Usuário: *@${item.jid.replace("@s.whatsapp.net", "")}*\n• Método de Requisição: *${item.request_method}*\n• Tempo: *${moment.unix(item.request_time).format("LLL")}*`
              )
              .join("\n———\n");
            mention(
              `[⚠️] - *SOLICITAÇÕES PENDENTES:*\n${formattedString}\n–\n• Argumentações nescessárias do comando: _SIM - NÃO - ALL - NOALL_\n• Opção: _"SIM"_ -> Aprovar a solicitação do usuário(a) no grupo.\n• Opção: _"NÃO"_ -> Rejeite todos os usuários sem aprovação.\n• Opção: _"ALL"_ -> Aprovar todos os solitantes da requisição no grupo.\n• Opção: _"NOALL"_ -> Rejeite todos os solitantes de uma vez.`
            );
            awaitMessage(
              {
                chatJid: from,
                sender: sender,
                expectedMessages: ["sim", "nao", "não", "all", "noall", "exit"],
                filter: (info) =>
                  info?.message?.extendedTextMessage?.text ||
                  info?.message?.conversation,
              },
              akame
            )
              .then(async (collected) => {
                const AutoResp =
                  collected?.message?.extendedTextMessage?.text ||
                  collected?.message?.conversation;
                const lowerCaseAutoResp = AutoResp.toLowerCase(); // Convert the user's input to lowercase
                if (/sim/gi.test(lowerCaseAutoResp)) {
                  await akame.groupRequestParticipantsUpdate(
                    from,
                    [solAll[0].jid],
                    "approve"
                  );
                } else if (/não|nao/gi.test(lowerCaseAutoResp)) {
                  await akame.groupRequestParticipantsUpdate(
                    from,
                    [solAll[0].jid],
                    "reject"
                  );
                } else if (/noall/gi.test(lowerCaseAutoResp)) {
                  for (let i = 0; i < solAll.length; i++) {
                    await akame.groupRequestParticipantsUpdate(
                      from,
                      [solAll[i].jid],
                      "reject"
                    );
                  }
                } else if (/all/gi.test(lowerCaseAutoResp)) {
                  for (let i = 0; i < solAll.length; i++) {
                    await akame.groupRequestParticipantsUpdate(
                      from,
                      [solAll[i].jid],
                      "approve"
                    );
                  }
                }
              })
              .catch(async (err) => {
                console.log(err);
              });
            break;

          case "rastrear":
            if (!q) return reply(mess.syntaxTrackParcels(prefix));
            if (q.length < 13) return reply(mess.invalidCodeRastrear());
            data = await fetchJson(
              API_URL +
                `/api/outros/rastreio-encomendas?code=${q}&apikey=` +
                API_KEY_AKAME
            );
            await akame
              .sendMessage(
                from,
                { text: mess.rastrearEncomenda(data, q) },
                { quoted: info }
              )
              .catch(async (error) => {
                return reply(mess.error());
              });
            break;

          case "imdb":
            if (!q)
              return reply(
                `• Para realizar a pesquisa do filme no *IMDb* é necessário conter pelo menos um gênero ou nome do filme.\n      • Exemplo: *${prefix}imdb Ação*\n–\n🔍 Saber mais informações sobre o filme pesquisado? Use: *${prefix}imdbinfo [link]*\n\t• Lembrando que o *link do filme* para ser usado ele é apresentado na pesquisa, *se obter sucesso.*\n\t\t• Exemplo: *https://m.imdb.com/title/tt6495770/?ref_=fn_al_tt_5*`
              );
            try {
              AB = await fetchJson(
                API_URL +
                  `/api/pesquisa/imdb?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              ABC = `• 𝐈𝐌𝐃𝐛 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀\n\t• *Nota:* Para ver as informações do filme de uma forma detalhada, use o comando: *${prefix}imdbinfo [link do filme]*\n\t\tExemplo: *${prefix}imdbinfo ${AB.resultado[0].url}*\n–\n${AB.resultado.map((v, index) => `*${index + 1}.* Título: *${v.title}*\n• Ano de Lançamento: *${v.release}*\n• Créditos principais: *${v.topCredits[0]} e ${v.topCredits[1]}*\n• Link: *${v.url}*`).join("\n–\n")}`;
              await akame.sendMessage(
                from,
                {
                  text: ABC,
                  contextInfo: {
                    externalAdReply: {
                      title: `IMDb - ${AB.resultado[0].title} (${AB.resultado[0].release}) ⭐`,
                      body: `• Créditos principais: ${AB.resultado[0].topCredits[0]} e ${AB.resultado[0].topCredits[1]}`,
                      mediaType: 2,
                      sourceUrl: AB.resultado[0].url,
                    },
                  },
                },
                { quoted: selo }
              );
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "imdbinfo":
            if (!q.includes("m.imdb.com"))
              return reply(
                "Coloque o link do filme que você deseja puxar informações."
              );
            try {
              RST = await fetchJson(
                API_URL +
                  `/api/pesquisa/imdb-info-filme?url=${q}&apikey=` +
                  API_KEY_AKAME
              );
              ABC = `• Título em Português: *${RST.resultado.titulo}*\n• Título Original: *${RST.resultado.tituloOriginal}*\n–\n• Sinopse: *${RST.resultado.trama}*\n–\n• Status do filme: *${RST.resultado.status}*\n• Data de lançamento: *${RST.resultado.dataLancamento.dia}.${RST.resultado.dataLancamento.mes}.${RST.resultado.dataLancamento.ano}*\n• Duração do filme: *${RST.resultado.duracao}*\n• Classificação de Idade: *${RST.resultado.certificado || "Livre"}*\n–\n• Avaliação total de usuários: *${formatNumberDecimal(RST.resultado.avaliacaoTotalUsers)}*\n• Total de críticas: *${formatNumberDecimal(RST.resultado.criticaTotal)}*\n–\n• Valor orçamentário: *$ ${formatNumberDecimal(RST.resultado.dinheiro.orcamento.valor)}*\n• Valor bruto por países: *$ ${formatNumberDecimal(RST.resultado.dinheiro.brutoPaises.valor)}*\n• Valor semanal: *$ ${formatNumberDecimal(RST.resultado.dinheiro.semana.valor)}*\n• Valor bruto pelo mundo: *$ ${formatNumberDecimal(RST.resultado.dinheiro.brutoMundial.valor)}*\n–\n• Prêmios: *${RST.resultado.avaliado.vitorias} vitória(s) e ${RST.resultado.avaliado.indicacoes} indicação(s)*\n• Disputando no rank em: *${RST.resultado.avaliado.rank}° lugar*\n–`;
              ABC += `\n• Mixagens: *${RST.resultado.mixagens.map((v) => `${v}`).join(", ")}*\n`;
              ABC += `• Produção: *${RST.resultado.producao.map((v) => `${v}`).join(", ")}*\n–\n`;
              ABC += `• Gênero(s): *${RST.resultado.genero.map((v) => `${v}`).join(", ")}*\n–\n`;
              ABC += `• *Elenco* - Atrizes e atores participantes do elenco principal do filme:\n–\n${RST.resultado.elencoPrincipal.map((v) => `\t\t• Nome: ${v.nome} - ( ${v.categoria} )\n\t\t• Personagem(ns): *${v.personagem}*`).join("\n–\n")}\n–\n`;
              ABC += `• *Créditos principais:*\n${RST.resultado.creditosPrincipais.map((v) => `\t\t• ${v.categoria}: *${v.creditos}*`).join("\n")}`;
              reply(ABC);
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "sanime":
          case "animetv":
            if (!q)
              return reply(
                "Você não digitou nenhuma palavra ao lado do comando."
              );
            try {
              RST = await fetchJson(
                API_URL +
                  `/api/animetv_search?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              ABC = `${RST.resultado.map((v) => `• Título: *${v.title}* | *${v.type}*\n• Foto: *${v.thumb}*\n• Link: *${v.url}*`).join("\n–\n")}`;
              reply(ABC);
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "frases":
          case "pensador":
            if (!q)
              return reply(
                mess.noArgsSearch() + `Exemplo: *${prefix + command} Amor`
              );
            AB = await fetchJson(
              API_URL +
                `/api/pesquisa/pensador?query=${q}&apikey=` +
                API_KEY_AKAME
            );
            await akame
              .sendMessage(
                from,
                {
                  text: AB.resultado
                    .map((v, index) => `*${index + 1}.* “${v.frase}”`)
                    .join("\n–\n"),
                },
                { quoted: selo }
              )
              .catch(async (error) => {
                return reply(mess.error());
              });
            break;

          case "megadl":
            if (!q.includes("mega.nz"))
              return reply(
                `Você esqueceu de colocar um link do *mega.nz* após o comando.`
              );
            try {
              const { File } = require("megajs");
              const fileListINFO = await File.fromURL(q);
              await fileListINFO.loadAttributes(); // Rodar a função para executar o resultado.
              if (fileListINFO.size >= 300000000)
                return reply(
                  `😿 Infelizmente, não foi possível concluir a ação, *pois o tamanho do arquivo excede o limite máximo de 300MB.*`
                );
              function formatSize(bytes) {
                if (bytes >= 1073741824) {
                  bytes = (bytes / 1073741824).toFixed(2) + " GB";
                } else if (bytes >= 1048576) {
                  bytes = (bytes / 1048576).toFixed(2) + " MB";
                } else if (bytes >= 1024) {
                  bytes = (bytes / 1024).toFixed(2) + " KB";
                } else if (bytes > 1) {
                  bytes = bytes + " bytes";
                } else if (bytes == 1) {
                  bytes = bytes + " byte";
                } else {
                  bytes = "0 bytes";
                }
                return bytes;
              }
              await replyWithNewsletter(
                `🤖💫 Por favor, aguarde alguns minutos! O arquivo está sendo baixado!\n• Arquivo: *${fileListINFO.name}* - [${formatSize(fileListINFO.size)}]`,
                {
                  forwardingScore: 10000,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: { newsletterJid: channel },
                },
                info
              );
              const dataFileBuffer = await fileListINFO.downloadBuffer();
              // Adicionadas extensões suportadas (zip, rar, 7z, jpg, png, zip) à lista.
              if (/mp4/.test(fileListINFO.name)) {
                await akame.sendMessage(
                  from,
                  {
                    document: dataFileBuffer,
                    caption: fileListINFO.name,
                    mimetype: "video/mp4",
                    fileName: `Download Completo! Obrigado por esperar *${pushname}*...`,
                  },
                  { quoted: selo }
                );
              } else if (/mp3|mpeg/.test(fileListINFO.name)) {
                await akame.sendMessage(
                  from,
                  {
                    document: dataFileBuffer,
                    caption: fileListINFO.name,
                    mimetype: "audio/mpeg",
                    fileName: `Download Completo! Obrigado por esperar *${pushname}*...`,
                  },
                  { quoted: selo }
                );
              } else if (/pdf/.test(fileListINFO.name)) {
                await akame.sendMessage(
                  from,
                  {
                    document: dataFileBuffer,
                    caption: `Download Completo: *100%* - ${fileListINFO.name}`,
                    mimetype: "application/pdf",
                    fileName: fileListINFO.name,
                  },
                  { quoted: selo }
                );
              } else if (/txt/.test(fileListINFO.name)) {
                await akame.sendMessage(
                  from,
                  {
                    document: dataFileBuffer,
                    caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
                    mimetype: "text/plain",
                    fileName: fileListINFO.name,
                  },
                  { quoted: selo }
                );
              } else if (/zip/.test(fileListINFO.name)) {
                await akame.sendMessage(
                  from,
                  {
                    document: dataFileBuffer,
                    caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
                    mimetype: "application/zip",
                    fileName: fileListINFO.name,
                  },
                  { quoted: selo }
                );
              } else if (/rar/.test(fileListINFO.name)) {
                await akame.sendMessage(
                  from,
                  {
                    document: dataFileBuffer,
                    caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
                    mimetype: "application/x-rar-compressed",
                    fileName: fileListINFO.name,
                  },
                  { quoted: selo }
                );
              } else if (/7z/.test(fileListINFO.name)) {
                await akame.sendMessage(
                  from,
                  {
                    document: dataFileBuffer,
                    caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
                    mimetype: "application/x-7z-compressed",
                    fileName: `${fileListINFO.name}`,
                  },
                  { quoted: selo }
                );
              } else if (/jpg|jpeg/.test(fileListINFO.name)) {
                await akame.sendMessage(
                  from,
                  {
                    document: dataFileBuffer,
                    caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
                    mimetype: "image/jpeg",
                    fileName: fileListINFO.name,
                  },
                  { quoted: selo }
                );
              } else if (/png/.test(fileListINFO.name)) {
                await akame.sendMessage(
                  from,
                  {
                    document: dataFileBuffer,
                    caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
                    mimetype: "image/png",
                    fileName: fileListINFO.name,
                  },
                  { quoted: selo }
                );
              } else if (/apk/.test(fileListINFO.name)) {
                await akame.sendMessage(
                  from,
                  {
                    document: dataFileBuffer,
                    caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
                    mimetype: "application/vnd.android.package-archive",
                    fileName: fileListINFO.name,
                  },
                  { quoted: selo }
                );
              } else {
                return reply(
                  "Desculpe-me, ocorreu um erro ao encaminhar o arquivo!😿 O formato de arquivo apresentado não é suportado."
                );
              }
            } catch (error) {
              return console.log(`Error: ${error.message}`);
            }
            break;

          case "encurtalink":
          case "tinyurl":
            if (args.length < 1)
              return reply(
                `❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/akamebot.wpp`
              );
            anu = await axios.get(
              `https://tinyurl.com/api-create.php?url=${q}`
            );
            reply(`*Link encurtado com sucesso, aqui está:* ${anu.data}`).catch(
              async (error) => {
                reply(mess.error());
              }
            );
            break;

          case "encurtarlink2":
          case "cuttly":
            if (args.length < 1)
              return reply(
                `❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/akamebot.wpp`
              );
            anu = await axios.get(
              API_URL + `/api/outros/cuttly?link=${q}&apikey=` + API_KEY_AKAME
            );
            reply(
              `*Link encurtado com sucesso, aqui está:* ${anu.data.result}`
            ).catch(async (error) => {
              reply(mess.error());
            });
            break;

          case "encurtarlink3":
          case "bitly":
            if (args.length < 1)
              return reply(
                `❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/akamebot.wpp`
              );
            anu = await axios.get(
              API_URL + `/api/outros/bitly?link=${q}&apikey=` + API_KEY_AKAME
            );
            reply(
              `*Link encurtado com sucesso, aqui está:* ${anu.data.result}`
            ).catch(async (error) => {
              reply(mess.error());
            });
            break;

          case "spotify":
            if (!q)
              return reply(
                "O campo de texto está vazio. Por favor, insira do URL do Spotify, sendo ."
              );
            if (!q.startsWith("https://"))
              return reply(
                `Este comando só baixa tracks, playlist ou albuns pelo link do Spotify.`
              );
            try {
              data = await fetchJson(
                API_URL +
                  `/api/download/spotify?url=${q}&apikey=` +
                  API_KEY_AKAME
              );
              fs.writeFileSync(
                `./database/data/media/images/spotify-thumb.jpg`,
                await getBuffer(
                  API_URL +
                    `/api/canvas/musicard/v2?thumbnail=${data.resultado.metadata.cover}&music_name=${data.resultado.metadata.title}&artist_name=${data.resultado.metadata.artists}&time_end=00:00`
                )
              );
              akame.sendInteractiveIMG(
                "./database/data/media/images/spotify-thumb.jpg",
                from,
                `• ID: *${data.resultado.metadata.id}*\n• Título: *${data.resultado.metadata.title}*\n• Artista(s): *${data.resultado.metadata.artists}*\n• Album: *${data.resultado.metadata.album}*\n• Lançamento: *${data.resultado.metadata.releaseDate}*`,
                "© Akame Supremacy",
                { participant: sender, quotedMessage: info.message },
                {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: JSON.stringify({
                        display_text: "⟅💚⟆ Escutar no Spotify",
                        url: q,
                        disabled: true,
                      }),
                    },
                  ],
                }
              );
              await akame.sendMessage(
                from,
                {
                  audio: { url: data.resultado.link },
                  fileName: `${i + 1}. ${data.resultado.metadata.title} - ${data.resultado.metadata.artists}.mp3`,
                  mimetype: "audio/mpeg",
                },
                { quoted: selo }
              );
            } catch (e) {
              return await reply(mess.error());
            }
            break;

          case "ytsearch":
          case "pesquisa-ytb":
            if (q.trim().length < 4)
              return reply(
                `Você esqueceu de colocar algum texto após o comando.`
              );
            try {
              ABC = await fetchJson(
                API_URL +
                  `/api/pesquisa/youtube?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              RST = ABC.resultado
                .map(
                  (v, index) =>
                    `*${index + 1}.* Título: *${v.title || "Não encontrado"}*\n• Descrição: *${v.description || "Não encontrado"}*\n• Duração: *${v.duration.timestamp || "Não encontrado"}*\n• Link: *${v.url || "Não encontrado"}*`
                )
                .join("\n–\n");
              reply(`> YouTube Search:\n–\n` + RST);
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "ytmp3":
          case "play_audio":
          case "ytmp4":
          case "play_video":
            if (!q)
              return reply(
                "O campo de texto está vázio! Por favor, coloque a URL ou título do vídeo ou música do YouTube."
              );
            if (command == "ytmp3" || command == "play_audio") {
              try {
                await replyWithReaction(`❪🎤ꦿ𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚜𝚎𝚞 𝚊𝚞𝚍𝚒𝚘ེ≭•۟.❫`, {
                  react: { text: "🎤", key: info.key },
                });
                data = await fetchJson(
                  API_URL +
                    `/api/pesquisa/youtube?query=${q}&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    audio: {
                      url:
                        API_URL +
                        `/api/download/youtube-audio?url=${data.resultado[0].url}&apikey=` +
                        API_KEY_AKAME,
                    },
                    fileName: data.resultado[0].title + ".mp3",
                    mimetype: "audio/mpeg",
                    headerType: 4,
                    contextInfo: {
                      externalAdReply: {
                        title: data.resultado[0].title,
                        body: data.resultado[0].description,
                        showAdAttribution: true,
                        thumbnail: await getBuffer(data.resultado[0].image),
                        mediaType: 2,
                        mediaUrl: data.resultado[0].url,
                        sourceUrl: data.resultado[0].url,
                      },
                    },
                  },
                  { quoted: selo }
                );
              } catch (error) {
                return await reply(mess.error());
              }
            } else if (command == "ytmp4" || command == "play_video") {
              try {
                await replyWithReaction(`❪🎥ꦿ𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚜𝚎𝚞 𝚟𝚒𝚍𝚎𝚘ེ≭•۟.❫`, {
                  react: { text: "🎥", key: info.key },
                });
                data = await fetchJson(
                  API_URL +
                    `/api/pesquisa/youtube?query=${q}&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    video: {
                      url:
                        API_URL +
                        `/api/download/youtube-video?url=${data.resultado[0].url}&apikey=` +
                        API_KEY_AKAME,
                    },
                  },
                  { quoted: selo }
                );
              } catch (error) {
                return await reply(mess.error());
              }
            }
            break;

          case "ytmp3-2":
          case "play_audio2":
          case "ytmp4-2":
          case "play_video2":
            if (!q)
              return reply(
                "O campo de texto está vázio! Por favor, coloque a URL ou título do vídeo ou música do YouTube."
              );
            if (command == "ytmp3-2" || command == "play_audio2") {
              try {
                await replyWithReaction(`❪🎤ꦿ𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚜𝚎𝚞 𝚊𝚞𝚍𝚒𝚘ེ≭•۟.❫`, {
                  react: { text: "🎤", key: info.key },
                });
                data = await fetchJson(
                  API_URL +
                    `/api/pesquisa/youtube?query=${q}&apikey=` +
                    API_KEY_AKAME
                );
                dataAudio = await fetchJson(
                  API_URL +
                    `/api/download/youtube-video/v2?url=${data.resultado[0].url}&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    audio: { url: dataAudio.resultado.dl_url },
                    fileName: data.resultado[0].title + ".mp3",
                    mimetype: "audio/mpeg",
                    headerType: 4,
                    contextInfo: {
                      externalAdReply: {
                        title: data.resultado[0].title,
                        body: data.resultado[0].description,
                        showAdAttribution: true,
                        thumbnail: await getBuffer(data.resultado[0].image),
                        mediaType: 2,
                        mediaUrl: data.resultado[0].url,
                        sourceUrl: data.resultado[0].url,
                      },
                    },
                  },
                  { quoted: selo }
                );
              } catch (error) {
                return await reply(mess.error());
              }
            } else if (command == "ytmp4-2" || command == "play_video2") {
              try {
                await replyWithReaction(`❪🎥ꦿ𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚜𝚎𝚞 𝚟𝚒𝚍𝚎𝚘ེ≭•۟.❫`, {
                  react: { text: "🎥", key: info.key },
                });
                data = await fetchJson(
                  API_URL +
                    `/api/pesquisa/youtube?query=${q}&apikey=` +
                    API_KEY_AKAME
                );
                dataVideo = await fetchJson(
                  API_URL +
                    `/api/download/youtube-video/v2?url=${data.resultado[0].url}&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  { video: { url: dataVideo.resultado.dl_url } },
                  { quoted: selo }
                );
              } catch (error) {
                return await reply(mess.error());
              }
            }
            break;

          case "ytdoc":
            if (!q) return reply(mess.syntaxDownloadMusic());
            await reply(`❪🎤ꦿ𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚜𝚎𝚞 𝚍𝚘𝚌𝚞𝚖𝚎𝚗𝚝𝚘ེ≭•۟.❫`);
            try {
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/youtube?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              await akame
                .sendMessage(
                  from,
                  {
                    document: {
                      url:
                        API_URL +
                        `/api/download/youtube-audio?url=${data.resultado[0].url}&apikey=` +
                        API_KEY_AKAME,
                    },
                    fileName: data.resultado[0].title + ".mp3",
                    mimetype: "audio/mpeg",
                  },
                  { quoted: selo }
                )
                .catch(async (error) => {
                  return reply(mess.error());
                });
            } catch (error) {
              reply(
                "Seja mais específico, não deu pra encontrar com apenas isto..."
              );
            }
            break;

          case "play5":
          case "p5":
            if (!q) return reply(mess.syntaxDownloadMusic());
            try {
              akame
                .sendMessage(
                  from,
                  {
                    audio: {
                      url:
                        `https://yurimodz-apis.xyz/api/dl/ytaudio?url=${data.resultado[0].url}&apikey=` +
                        API_KEY_AKAME,
                    },
                    fileName: data.resultado[0].title + ".mp3",
                    mimetype: "audio/mpeg",
                  },
                  { quoted: info }
                )
                .catch((e) => {
                  return reply(mess.error());
                });
            } catch (error) {
              reply(
                "Seja mais específico, não deu pra encontrar com apenas isto..."
              );
            }
            break;

          case "play":
          case "p":
            if (!q) return reply(mess.syntaxDownloadMusic());
            try {
              await loading();
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/youtube?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              fs.writeFileSync(
                `./database/data/media/images/play-thumb.jpg`,
                await getBuffer(data.resultado[0].image)
              );
              akame.sendInteractiveIMG(
                "./database/data/media/images/play-thumb.jpg",
                from,
                mess.playResult(data),
                "© Akame Supremacy",
                { participant: sender, quotedMessage: info.message },
                {
                  buttons: [
                    {
                      name: "quick_reply",
                      buttonParamsJson: JSON.stringify({
                        display_text: "「 🩸 」𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎「 🩸 」",
                        id: `${prefix}ytdoc ${data.resultado[0].url}`,
                      }),
                    },
                    {
                      name: "quick_reply",
                      buttonParamsJson: JSON.stringify({
                        display_text: "「 🩸 」𝐀𝐔𝐃𝐈𝐎「 🩸 」",
                        id: `${prefix}ytmp3 ${data.resultado[0].url}`,
                      }),
                    },
                    {
                      name: "quick_reply",
                      buttonParamsJson: JSON.stringify({
                        display_text: "「 🩸 」𝐕𝐈𝐃𝐄𝐎「 🩸 」",
                        id: `${prefix}ytmp4 ${data.resultado[0].url}`,
                      }),
                    },
                  ],
                }
              );
            } catch (error) {
              reply(
                "Seja mais específico, não deu pra encontrar com apenas isto..."
              );
            }
            break;

          case "play2":
            if (!q) return reply(mess.syntaxDownloadMusic());
            try {
              await loading();
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/youtube?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              Lrows = [];
              for (let v of data.resultado) {
                Lrows.push(
                  {
                    title: v.title,
                    description: `${v.description}`,
                    id: `${prefix}ytmp3 ${v.title}`,
                    header: `Tipo: Áudio > Canal: ${v.author.name} | Duração: ${v.duration.timestamp}`,
                  },
                  {
                    title: v.title,
                    description: v.description,
                    id: `${prefix}ytmp4 ${v.title}`,
                    header: `Tipo: Vídeo > Canal: ${v.author.name} | Duração: ${v.duration.timestamp}`,
                  }
                );
              }
              await akame.relayMessage(
                from,
                {
                  interactiveMessage: {
                    body: { text: `⸺͟͞ꪶ𝐘𝐎𝐔𝐓𝐔𝐁𝐄 - 𝐏𝐋𝐀𝐘 𝐕𝟐ꫂ ♪` },
                    footer: {
                      text: `${tempo}, ${pushname}! Aqui está o resultado da sua pesquisa, selecione a música a qual você deseja baixar.`,
                    },
                    contextInfo: {
                      participant: sender,
                      quotedMessage: info.message,
                    },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "single_select",
                          buttonParamsJson: JSON.stringify({
                            title: "SELECIONAR",
                            sections: [
                              {
                                title: NomeDoBot,
                                highlight_label: "",
                                rows: Lrows,
                              },
                            ],
                          }),
                        },
                      ],
                    },
                  },
                },
                {}
              );
            } catch (error) {
              return await reply(
                "Seja mais específico, não deu pra encontrar com apenas isto..."
              );
            }
            break;

          case "play3":
          case "p3":
            if (!q) return reply(mess.syntaxDownloadMusic());
            try {
              await loading();
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/youtube?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              await akame.sendMessage(
                from,
                {
                  image: { url: `${data.resultado[0].image}` },
                  caption:
                    mess.playResult(tempo2, sender, data) +
                    `\n–\n*• Obs: Se você deseja baixar o vídeo, utilize: ${prefix}playvid ${q}*`,
                  mentions: [sender],
                },
                { quoted: info }
              );
              await akame
                .sendMessage(
                  from,
                  {
                    audio: {
                      url:
                        API_URL +
                        `/api/download/youtube-audio?url=${data.resultado[0].url}&apikey=` +
                        API_KEY_AKAME,
                    },
                    fileName: data.resultado[0].title + ".mp3",
                    mimetype: "audio/mpeg",
                  },
                  { quoted: selo }
                )
                .catch(async (error) => {
                  return reply(mess.error());
                });
            } catch (error) {
              reply(
                "Seja mais específico, não deu pra encontrar com apenas isto..."
              );
            }
            break;

          case "shazam":
            if (!isQuotedAudio)
              return reply(
                "Envie o áudio para eu tentar detectar o nome da música!"
              );
            dataMedia = await getFileBuffer(
              info.message.extendedTextMessage.contextInfo.quotedMessage
                .audioMessage,
              "audio"
            );
            let mime = (quoted.info || quoted).mimetype || "";
            let m = mime.split("/")[1];
            fs.writeFileSync(
              `./database/data/media/audios/shazam/shazam-${sender}.mp3`,
              dataMedia
            ); // Salvar o áudio no diretório selecionado!
            try {
              hasil = await arcloud(
                fs.readFileSync(
                  `./database/data/media/audios/shazam/shazam-${sender}.mp3`,
                  { encoding: "base64" }
                )
              );
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/youtube?query=${hasil[0].titulo}&apikey=` +
                  API_KEY_AKAME
              );
            } catch (error) {
              DLT_FL(
                `./database/data/media/audios/shazam/shazam-${sender}.mp3`
              ); /* Apaga o áudio do diretório após a solicitação falhada. */
              await replyWithReaction(
                "Sem resultado! 😿 Desculpe, não consegui identificar a música fornecida...",
                { react: { text: "😿", key: info.key } }
              );
            }
            await akame
              .sendMessage(
                from,
                {
                  document: {
                    url:
                      API_URL +
                      `/api/download/youtube-audio?url=${data.resultado[0].url}&apikey=` +
                      API_KEY_AKAME,
                  },
                  caption: mess.shz(data),
                  fileName: data.resultado[0].title + ".mp3",
                  mimetype: "audio/mpeg",
                },
                { quoted: selo }
              )
              .catch(async (error) => {
                return await replyWithReaction(mess.error(), {
                  react: { text: "❌", key: info.key },
                });
              });
            DLT_FL(
              `./database/data/media/audios/shazam/shazam-${sender}.mp3`
            ); /* Apaga o áudio do diretório após a solicitação concluída. */
            break;

          case "playdoc":
          case "pdoc":
            if (!q) return reply(mess.syntaxDownloadMusic());
            try {
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/youtube?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              await akame.sendMessage(
                from,
                {
                  image: { url: `${data.resultado[0].image}` },
                  caption: mess.playDocumentResult(data),
                },
                { quoted: info }
              );
              await akame
                .sendMessage(
                  from,
                  {
                    document: {
                      url:
                        API_URL +
                        `/api/download/youtube-audio?url=${data.resultado[0].url}&apikey=` +
                        API_KEY_AKAME,
                    },
                    fileName: data.resultado[0].title + ".mp3",
                    mimetype: "audio/mpeg",
                  },
                  { quoted: selo }
                )
                .catch(async (error) => {
                  return reply(mess.error());
                });
            } catch (error) {
              reply(
                "Seja mais específico, não deu pra encontrar com apenas isto..."
              );
            }
            break;

          case "playvid":
          case "pvid":
            if (!q) return reply(mess.syntaxDownloadMusic());
            await replyWithReaction(`❪🎥ꦿ𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚜𝚎𝚞 𝚟𝚒𝚍𝚎𝚘ེ≭•۟.❫`, {
              react: { text: "🎥", key: info.key },
            });
            try {
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/youtube?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              await akame.sendMessage(
                from,
                {
                  video: {
                    url:
                      API_URL +
                      `/api/download/youtube-video?url=${data.resultado[0].url}&apikey=` +
                      API_KEY_AKAME,
                  },
                  caption: mess.playVideo(data),
                },
                { quoted: selo }
              );
            } catch (error) {
              reply(
                "Seja mais específico, não deu pra encontrar com apenas isto..."
              );
            }
            break;

          case "playmix":
          case "pmix":
            if (!q) return reply(mess.syntaxPlayMix());
            data = await fetchJson(
              API_URL +
                `/api/pesquisa/youtube?query=${q}&apikey=` +
                API_KEY_AKAME
            );
            await akame.sendMessage(
              from,
              {
                image: { url: data.resultado[0].image },
                caption: mess.playmixResult(data),
              },
              { quoted: selo }
            );
            await akame
              .sendMessage(
                from,
                {
                  audio: {
                    url:
                      API_URL +
                      `/api/download/youtube-audio?url=${data.resultado[0].url}&apikey=` +
                      API_KEY_AKAME,
                  },
                  mimetype: "audio/mpeg",
                },
                { quoted: selo }
              )
              .catch(async (error) => {
                return reply(mess.playmixError("1"));
              });
            await akame
              .sendMessage(
                from,
                {
                  audio: {
                    url:
                      API_URL +
                      `/api/download/youtube-audio?url=${data.resultado[1].url}&apikey=` +
                      API_KEY_AKAME,
                  },
                  mimetype: "audio/mpeg",
                },
                { quoted: selo }
              )
              .catch(async (error) => {
                return reply(mess.playmixError("2"));
              });
            await akame
              .sendMessage(
                from,
                {
                  audio: {
                    url:
                      API_URL +
                      `/api/download/youtube-audio?url=${data.resultado[2].url}&apikey=` +
                      API_KEY_AKAME,
                  },
                  mimetype: "audio/mpeg",
                },
                { quoted: selo }
              )
              .catch(async (error) => {
                return reply(mess.playmixError("3"));
              });
            await akame
              .sendMessage(
                from,
                {
                  audio: {
                    url:
                      API_URL +
                      `/api/download/youtube-audio?url=${data.resultado[3].url}&apikey=` +
                      API_KEY_AKAME,
                  },
                  mimetype: "audio/mpeg",
                },
                { quoted: selo }
              )
              .catch(async (error) => {
                return reply(mess.playmixError("4"));
              });
            await akame
              .sendMessage(
                from,
                {
                  audio: {
                    url:
                      API_URL +
                      `/api/download/youtube-audio?url=${data.resultado[4].url}&apikey=` +
                      API_KEY_AKAME,
                  },
                  mimetype: "audio/mpeg",
                },
                { quoted: selo }
              )
              .catch(async (error) => {
                return reply(mess.playmixError("5"));
              });
            break;

          case "audiomeme":
          case "playmeme":
            if (!q)
              return reply(
                `NaN, você não digitou nada... Exemplo: *${prefix + command} Lula*`
              );
            await reagir(from, "😸");
            try {
              bla = await fetchJson(
                API_URL +
                  `/api/download/myinstants?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              teks = pickRandom(bla.resultado);
              await akame.sendMessage(
                from,
                { audio: { url: teks }, mimetype: "audio/mpeg", ptt: true },
                { quoted: selo }
              );
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "audiomeme2":
          case "playmeme2":
            if (!q)
              return reply(
                `NaN, você não digitou nada... Exemplo: *${prefix + command} Lula*`
              );
            await reagir(from, "😸");
            try {
              bla = await fetchJson(
                API_URL +
                  `/api/download/tuna?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              teks = pickRandom(bla.resultado);
              await akame.sendMessage(
                from,
                { audio: { url: teks }, mimetype: "audio/mpeg", ptt: true },
                { quoted: selo }
              );
            } catch (error) {
              await reply(mess.error());
            }
            break;

          case "imgpraanime":
          case "animeia":
          case "toanime":
            if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
              post = isQuotedImage
                ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                    .message.extendedTextMessage.contextInfo.message
                    .imageMessage
                : info.message.imageMessage;
              imagem = await downloadContentFromMessage(post, "image");
              base64 = Buffer.from([]);
              for await (const send of imagem) {
                base64 = Buffer.concat([base64, send]);
              }
              reply(
                `Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`
              );
              link = await upload(base64);
              conv = await fetchJson(
                `https://delirius-api-oficial.vercel.app/api/toanime?url=${link}`
              );
              await akame
                .sendMessage(
                  from,
                  { image: { url: conv.data.comparation } },
                  { quoted: selo }
                )
                .catch(async (error) => {
                  return reply(
                    `Não foi possível criar seu avatar! Por favor, tente com outra imagem!`
                  );
                });
            } else {
              reply("Mencione uma imagem para atribuir o efeito a foto.");
            }
            break;

          case "gtaia":
          case "togta":
          case "imgpragta":
            if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
              post = isQuotedImage
                ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                    .message.extendedTextMessage.contextInfo.message
                    .imageMessage
                : info.message.imageMessage;
              imagem = await downloadContentFromMessage(post, "image");
              base64 = Buffer.from([]);
              for await (const send of imagem) {
                base64 = Buffer.concat([base64, send]);
              }
              reply(
                `Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`
              );
              link = await upload(base64);
              dataConvertAndreas = await fetchJson(
                `https://aemt.me/jadigta?url=${link}`
              );
              await akame
                .sendMessage(
                  from,
                  { image: { url: dataConvertAndreas.result } },
                  { quoted: selo }
                )
                .catch(async (error) => {
                  return reply(
                    `Não foi possível criar seu avatar! Por favor, tente com outra imagem!`
                  );
                });
            } else {
              reply("Mencione uma imagem para atribuir o efeito a foto.");
            }
            break;

          case "tozombie":
          case "zombieai":
          case "imgprazombie":
            if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
              post = isQuotedImage
                ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                    .message.extendedTextMessage.contextInfo.message
                    .imageMessage
                : info.message.imageMessage;
              imagem = await downloadContentFromMessage(post, "image");
              base64 = Buffer.from([]);
              for await (const send of imagem) {
                base64 = Buffer.concat([base64, send]);
              }
              reply(
                `Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`
              );
              link = await upload(base64);
              dataConvertZombie = await fetchJson(
                `https://aemt.me/converter/zombie?url=${link}`
              );
              await akame
                .sendMessage(
                  from,
                  { image: { url: dataConvertZombie.url } },
                  { quoted: selo }
                )
                .catch(async (error) => {
                  return reply(
                    `Não foi possível criar seu avatar! Por favor, tente com outra imagem!`
                  );
                });
            } else {
              reply("Mencione uma imagem para atribuir o efeito a foto.");
            }
            break;

          case "enhance":
          case "dehaze":
          case "recolor":
            if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
              post = isQuotedImage
                ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                    .message.extendedTextMessage.contextInfo.message
                    .imageMessage
                : info.message.imageMessage;
              imagem = await downloadContentFromMessage(post, "image");
              base64 = Buffer.from([]);
              for await (const send of imagem) {
                base64 = Buffer.concat([base64, send]);
              }
              data = await vyroEngine(base64, command);
              await akame
                .sendMessage(from, { image: data }, { quoted: selo })
                .catch(async (error) => {
                  return reply(mess.error());
                });
            } else {
              reply("Mencione uma imagem para atribuir o efeito a foto.");
            }
            break;

          case "ler":
          case "ocr":
          case "lerfoto":
            if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
              post = isQuotedImage
                ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                    .message.extendedTextMessage.contextInfo.message
                    .imageMessage
                : info.message.imageMessage;
              imagem = await downloadContentFromMessage(post, "image");
              base64 = Buffer.from([]);
              for await (const send of imagem) {
                base64 = Buffer.concat([base64, send]);
              }
              reply(mess.wait());
              link = await upload(base64);
              data = await fetchJson(
                API_URL +
                  `/api/outros/leitura-ocr?image=${link}&apikey=` +
                  API_KEY_AKAME
              );
              reply(data.resultado).catch(async (error) => {
                return reply(mess.error());
              });
            } else {
              reply("Mencione uma imagem, por favor!");
            }
            break;

          case "movie":
            if (args.length == 0)
              return reply(
                `Cadê o nome do filme o qual você deseja ver informações?`
              );
            movieInfo = await axios.get(
              `https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`
            );
            if (movieInfo.data.total_results == 0)
              return reply(mess.noresult());
            var ImageMovieLink = `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`;
            var fotoFilme = await getBuffer(ImageMovieLink);
            akame
              .sendMessage(
                from,
                { image: fotoFilme, caption: mess.movies(movieInfo) },
                { quoted: selo }
              )
              .catch(async (error) => {
                return reply(mess.error());
              });
            break;

          case "promocell":
            if (!q)
              return reply(
                "Qual produto você deseja pesquisar? Coloque após o comando o nome do celular o qual você deseja obter as promoções..."
              );
            try {
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/tudocelular?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              promoções = data.resultado.menoresPrecos
                .map(
                  (value, index) =>
                    `[Oferta *N° ${index + 1}*] - Valor ofertado pela loja que realizou a promoção: *${value.preco}*\n• Título: *${value.nome}*\n• URL: *${value.linkCompra}*`
                )
                .join("\n——\n");
              await replyWithReaction(
                `• Produto: *${data.resultado.nomeProduto}*\n• Link do Produto no TudoCelular, confira a partir deste link as demais informações sobre o produto: *${data.resultado.linkCelular}*\n—\n• As melhores ofertas do seu produto *'${data.resultado.nomeProduto}'* estão aqui! Confira abaixo senhor(a):\n—\n${promoções}`,
                { react: { text: "🛒", key: info.key } }
              );
            } catch (error) {
              await replyWithReaction(
                "*Sem promoções para este produto!* Tente outro, caso ocorra o mesmo erro a api do comando deve ter caído.",
                { react: { text: "😿", key: info.key } }
              );
            }
            break;

          case "myname":
            if (!q)
              return reply(
                "Qual é o nome que você deseja saber o significado? Adicione após o comando..."
              );
            try {
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/myname?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              await reagir(from, "😸"); // Reagir quando o comando for executado por um usuário!
              await akame.sendMessage(
                from,
                {
                  image: { url: data.resultado.imageUrl },
                  caption: `• Origem do Nome: *${data.resultado.origem}*\n• Derivações: *${data.resultado.derivacoes ? data.resultado.derivacoes : "Não possuí nenhum tipo de derivação."}*\n• Gênero: *${capitalizeFirstLetter(data.resultado.genero.split("nome ")[1] || "Gênero não identificado.")}*\n• Lugares ou referências com relação ao nome: *${data.resultado.locaisComNome}*\n• Relacionados: *${data.resultado.nomesRelacionados}*`,
                },
                { quoted: selo }
              );
            } catch (error) {
              await replyWithReaction(mess.error(), {
                react: { text: "😿", key: info.key },
              }); // Encaminhar a mensagem pré-definida ao parametro e reagir a mensagem com o emoji definido na função.
            }
            break;

          case "spoiler":
          case "morechat":
            var [text1_a, text2_b] = q.split("/"); // Separador
            if (!text1_a) text1_a = ""; // Caso o texto1 esteja vazio, vai retornar vázio o parâmetro.
            if (!text2_b) text2_b = ""; // Caso o texto2 esteja vazio, vai retornar vázio o parâmetro.
            reply(text1_a + String.fromCharCode(8206).repeat(4001) + text2_b); // Enviar o spoiler.
            break;

          case "obesidade":
          case "obeso":
            if (!q.includes("/"))
              return reply(`Ex.: *${prefix + command} peso/altura*`);
            var [peso, altura] = q.split("/");
            var resultado = await obeso(peso, altura);
            if (resultado <= 17 || resultado <= 18.4) {
              await replyWithReaction(
                `• Seu índice de massa corporal é de: *${resultado}* -> Você está abaixo do peso.`,
                { react: { text: "😸", key: info.key } }
              );
            } else if (resultado <= 18.5 || resultado <= 24.9) {
              await replyWithReaction(
                `• Seu índice de massa corporal é: *${resultado}* -> Você está no peso ideal.`,
                { react: { text: "👍", key: info.key } }
              );
            } else if (resultado <= 25 || resultado <= 29.9) {
              await replyWithReaction(
                `• Seu índice de massa corporal é: *${resultado}* -> Você está com sobrepeso.`,
                { react: { text: "🫤", key: info.key } }
              );
            } else if (resultado <= 30 || resultado <= 39.9) {
              await replyWithReaction(
                `• Seu índice de massa corporal é: *${resultado}* -> Em situção de Obesidade.`,
                { react: { text: "🤨", key: info.key } }
              );
            } else if (resultado > 40) {
              await replyWithReaction(
                `• Seu índice de massa corporal é: *${resultado}* -> Obesidade mórbida!`,
                { react: { text: `😵`, key: info.key } }
              );
            }
            break;

          case "contardias":
          case "countdays":
            if (!q.includes("/"))
              return reply(
                `Você esqueceu da */* para separar os campos.. Exemplo: *31/03/2024*`
              );
            if (q.length < 10)
              return reply(
                `Deve conter a data completa *(dia/mês/ano)* após o comando!\n• Exemplo: *${prefix + command} 31/03/2024*`
              );
            try {
              var tomp = await timeDate("DD/MM/YYYY");
              countDay = await countDays(q.split("/"), tomp.split("/"));
              reply(`*${countDay}* dia(s).`);
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "qrcode":
          case "gerarqr":
            if (!q)
              return reply(
                "Insira um link ou texto para que eu possa gerar o qr code.."
              );
            try {
              await akame.sendMessage(
                from,
                {
                  image: {
                    url: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${q}`,
                  },
                  caption: `💫| 𝐒𝐞𝐮 𝐪𝐫 𝐜𝐨𝐝𝐞 𝐟𝐨𝐢 𝐠𝐞𝐫𝐚𝐝𝐨 𝐜𝐨𝐧𝐭𝐞𝐧𝐝𝐨 𝐨 𝐭𝐞𝐱𝐭𝐨/𝐮𝐫𝐥 𝐞𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐜𝐚𝐝𝐨 𝐚𝐨 𝐥𝐚𝐝𝐨: *${q}*`,
                },
                { quoted: selo }
              );
            } catch (e) {
              return reply(mess.error());
            }
            break;

          case "serie":
            if (args.length == 0)
              return reply(
                `Cadê o nome da serie o qual você deseja ver informações?`
              );
            serieInfo = await axios.get(
              `https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`
            );
            if (serieInfo.data.total_results == 0)
              return reply(mess.noresult());
            await akame
              .sendMessage(
                from,
                {
                  image: {
                    url: `https://image.tmdb.org/t/p/original${serieInfo.data.results[0].backdrop_path}`,
                  },
                  caption: mess.series(serieInfo),
                },
                { quoted: selo }
              )
              .catch(async (error) => {
                return reply(mess.error());
              });
            break;

          case "gamenews":
          case "gamesnews":
            if (args.length < 1)
              return reply(
                `🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix + command} *--help*_`
              );
            if (args[0] == "--help")
              return await mention(mess.helpNoticesG(sender, prefix));
            if (args[0] === "-cod") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/e-sports?query=cod&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-csgo") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/e-sports?query=csgo&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-fifa") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/e-sports?query=fifa&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-fortnite") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/e-sports?query=fortnite&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-gamexp") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/e-sports?query=gamexp&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-pes") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/e-sports?query=pes&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-lol") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/e-sports?query=lol&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-pokemon") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/e-sports?query=pokemon&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-r6") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/e-sports?query=rainbow-6&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-valorant") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/e-sports?query=valorant&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-tcg") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/e-sports?query=tcg&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else {
              await reagir(from, "🤔");
              reply(
                `🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix + command} *--help*_`
              );
            }
            break;

          case "esporte_news":
          case "esportenoticias":
          case "esportenews":
            if (args.length < 1)
              return reply(
                `🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix + command} *--help*_`
              );
            if (args[0] == "--help")
              return await mention(mess.helpNoticesEsporte(sender, prefix));
            if (args[0] === "-all") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-futebol") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=futebol&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-futsal") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=futsal&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-skate") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=skate&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-surf") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=surfe&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-basquete") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=basquete&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-volei") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=volei&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-tenis") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=tenis&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-atletismo") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=atletismo&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-natacao") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=natacao&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-ciclismo") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=ciclismo&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-boxe") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=boxe&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-beisebol") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=beisebol&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-futebol-eua") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=futebol-americano&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-judo") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=judo&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-ginastica") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=ginastica-artistica&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-golfe") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=golfe&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else if (args[0] === "-f1") {
              try {
                ABC = await fetchJson(
                  API_URL +
                    `/api/noticias/esporte?esporte=formula-1&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
                    caption: mess.GshowGE(ABC),
                  },
                  { quoted: info }
                );
              } catch (error) {
                return reply(mess.error());
              }
            } else {
              await reagir(from, "🤔");
              reply(
                `🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix + command} *--help*_`
              );
            }
            break;

          case "aptoide":
            if (args.length == 0)
              return reply(
                `Cadê o nome do app? *Use como exemplo:* ${prefix + command} WhatsApp.`
              );
            try {
              const aptoide = await axios.get(
                `https://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(q)}&trusted=true`
              );
              if (aptoide.data.datalist.total == 0)
                return reply(mess.noresult());
              phAptoide = await (
                await fetch(aptoide.data.datalist.list[0].graphic)
              ).buffer();
              lnDown = await axios.get(
                `https://tinyurl.com/api-create.php?url=${aptoide.data.datalist.list[0].file.path_alt}`
              );
              await akame.sendMessage(
                from,
                {
                  image: phAptoide,
                  caption: mess.aptoide(
                    aptoide.data.datalist.list[0],
                    (aptoide.data.datalist.list[0].size / 1048576).toFixed(1),
                    lnDown
                  ),
                },
                { quoted: selo }
              );
              await akame.sendMessage(
                from,
                {
                  document: { url: aptoide.data.datalist.list[0].file.path },
                  mimetype: "application/vnd.android.package-archive",
                  fileName: `${aptoide.data.datalist.list[0].name}.apk`,
                  caption: "Download Completo!",
                },
                { quoted: selo }
              );
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "soundcloud":
          case "scdl":
            if (!q)
              return reply(
                `Tá faltando aí! Cadê o link da música no SoundCloud hein?`
              );
            try {
              data = await fetchJson(
                API_URL +
                  `/api/download/soundcloud?url=${q}&apikey=` +
                  API_KEY_AKAME
              );
              tinyUrl = await axios.get(
                `https://tinyurl.com/api-create.php?url=${data.resultado.link_dl}`
              );
              await akame.sendMessage(
                from,
                {
                  text: mess.soundcloud(data, tinyUrl),
                  contextInfo: {
                    externalAdReply: {
                      title: `Escute ${data.resultado.titulo} em seu aplicativo do SoundCloud.`,
                      body: `Música • Total de Downloads: ${data.resultado.total_downloads}`,
                      thumbnail: await getBuffer(data.resultado.capa),
                      mediaType: 2,
                      sourceUrl: q,
                    },
                  },
                },
                { quoted: selo }
              );
              await akame
                .sendMessage(
                  from,
                  {
                    audio: {
                      url:
                        API_URL +
                        `/api/download/soundcloud/v2?url=${q}&apikey=` +
                        API_KEY_AKAME,
                    },
                    mimetype: "audio/mpeg",
                  },
                  { quoted: selo }
                )
                .catch(async (error) => {
                  return reply(mess.error());
                });
            } catch (e) {
              reply(mess.error());
            }
            break;

          case "kwai":
            if (!q)
              return await reply(
                `O campo de texto está vazio. Por favor, insira uma URL, nome de usuário ou pesquise um vídeo.`
              );
            if (q.includes("kwai.com")) {
              // Download de Vídeos //
              data = await fetchJson(
                API_URL +
                  `/api/download/kwai?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              captionTextDownload = "> 𝐊𝐰𝐚𝐢 - 𝐃𝐋\n—\n";
              captionTextDownload += `• Criador(a):\n\t• Nome: *${data.resultado.profile.name}* | @${data.resultado.profile.user}\n\t• Total de Publicações: *${data.resultado.profile.publications}*\n\t• Seguidores: *${data.resultado.profile.follow}*\n\t• Curtidas: *${data.resultado.profile.like}*\n\t• URL: *${data.resultado.profile.url}*\n—\n• Vídeo:\n\t• Likes: *${data.resultado.like}*\n\t• Visualizações: *${data.resultado.watch}*\n\t• Comentários: *${data.resultado.comments}*\n\t• Compartilhamentos: *${data.resultado.share}*\n\t• Descrição: *${data.resultado.description}*\n\t• Áudio:\n\t\t• Nome: *${data.resultado.audioName}*\n\t\t• Autor: *${data.resultado.audioAuthor}*`;
              await akame.sendMessage(
                from,
                {
                  video: { url: data.resultado.dl },
                  caption: captionTextDownload,
                },
                { quoted: selo }
              );
            } else if (q.startsWith("@")) {
              // Stalkear Perfis do Kwai //
              try {
                data = await fetchJson(
                  API_URL +
                    `/api/download/kwai?query=${q}&apikey=` +
                    API_KEY_AKAME
                );
                await sendUrlText(
                  from,
                  `> 𝐊𝐰𝐚𝐢 - 𝐒𝐭𝐚𝐥𝐤𝐞𝐫\n—\n• Nome: *${data.resultado.name}* | @${data.resultado.user}\n• Total de Curtidas: *${data.resultado.like}*\n• Seguidores: *${data.resultado.follow}*\n• Total de Publicações: *${data.resultado.publications}*\n• Ícone: *${data.resultado.icon}*\n• URL: *${data.resultado.url}*`,
                  `${data.resultado.name} (@${data.resultado.user})`,
                  "Clique aqui e acompanhe todo contéudo do perfil no Kwai.",
                  data.resultado.icon,
                  data.resultado.url,
                  info
                );
              } catch (error) {
                await reply(mess.error());
              }
            } else {
              // Pesquisa Kwai - Vídeos //
              try {
                data = await fetchJson(
                  API_URL +
                    `/api/download/kwai?query=${q}&apikey=` +
                    API_KEY_AKAME
                );
                captionTextSearch = "> 𝐊𝐰𝐚𝐢 - 𝐒𝐞𝐚𝐫𝐜𝐡\n—\n";
                captionTextSearch += data.resultado
                  .map(
                    (v, index) =>
                      `• Nome: *${v.name || "Sem nome"}* | @${v.user}\n• Descrição: *${v.caption}*\n• Vídeo:\n\t• Comentários: *${v.comments}*\n\t• Likes: *${v.likes}*\n\t• Visualizações: *${v.views}*\n\t• Compartilhamentos: *${v.sharing}*\t• URL: *${v.url}*`
                  )
                  .join("\n—\n");
                await reply(captionTextSearch);
              } catch (e) {
                await reply(mess.error());
              }
            }
            break;

          case "tiktokaudio":
            if (!q)
              return reply("Por favor, adicione um link do tiktok (vídeo).");
            try {
              data = await fetchJson(
                API_URL +
                  `/api/download/tiktok?url=${q}&apikey=` +
                  API_KEY_AKAME
              );
              await akame.sendMessage(
                from,
                {
                  audio: { url: data.resultado.video },
                  mimetype: "audio/mpeg",
                },
                { quoted: selo }
              );
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "tiktok":
            if (!q)
              return reply(
                "O campo de texto está vázio! Por favor, coloque um URL do TikTok, sendo ele uma sequência de fotos ou vídeo."
              );
            try {
              data = await fetchJson(
                API_URL +
                  `/api/download/tiktok?url=${q}&apikey=` +
                  API_KEY_AKAME
              );
              if (data.resultado.photo.length === 0) {
                await akame.sendMessage(
                  from,
                  {
                    video: { url: data.resultado.video },
                    caption: mess.tiktokDownload(data),
                  },
                  { quoted: selo }
                );
              } else {
                await akame.sendMessage(
                  from,
                  {
                    audio: { url: data.resultado.audio },
                    mimetype: "audio/mpeg",
                  },
                  { quoted: selo }
                );
                for (let i = 0; i < data.resultado.photo.length; i++) {
                  await akame.sendMessage(
                    from,
                    { image: { url: data.resultado.photo[i].url } },
                    { quoted: selo }
                  );
                }
              }
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "instagram":
          case "igdl":
            if (q.length < 5)
              return reply(
                "Por favor, adicione um link do Instagram post/reel."
              );
            try {
              reply(mess.wait());
              data = await fetchJson(
                API_URL +
                  `/api/download/instagram?url=${q}&apikey=` +
                  API_KEY_AKAME
              );
              for (let i = 0; i < data.resultado.length; i++) {
                let dmt = data.resultado[i].type;
                mimety =
                  dmt === "video"
                    ? "video/mp4"
                    : dmt === "webp"
                      ? "image/webp"
                      : dmt === "image"
                        ? "image/jpeg"
                        : dmt === "audio"
                          ? "audio/mpeg"
                          : "video/mp4";
                await akame.sendMessage(
                  from,
                  {
                    [mimety.split("/")[0]]: { url: data.resultado[i].url },
                    mimetype: mimety,
                  },
                  { quoted: selo }
                );
              }
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "threads":
          case "thdl":
            if (q.length < 5)
              return reply("Por favor, adicione um link do Threads post/reel.");
            try {
              reply(mess.wait());
              data = await fetchJson(
                API_URL +
                  `/api/download/threads?link=${q}&apikey=` +
                  API_KEY_AKAME
              );
              for (let i = 0; i < data.resultado.resultado.length; i++) {
                let dmt = data.resultado.resultado[i].type;
                mimety =
                  dmt === "video"
                    ? "video/mp4"
                    : dmt === "webp"
                      ? "image/webp"
                      : dmt === "imagem"
                        ? "image/jpeg"
                        : dmt === "audio"
                          ? "audio/mpeg"
                          : "video/mp4";
                await akame.sendMessage(
                  from,
                  {
                    [mimety.split("/")[0]]: {
                      url: data.resultado.resultado[i].link,
                    },
                    mimetype: mimety,
                  },
                  { quoted: selo }
                );
              }
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "twtdl":
          case "twitter":
            if (q.length < 5)
              return reply("Por favor, adicione um link do Threads post/reel.");
            try {
              reply(mess.wait());
              data = await fetchJson(
                API_URL +
                  `/api/download/twitter?url=${q}&apikey=` +
                  API_KEY_AKAME
              );
              for (let i = 0; i < data.resultado.media.length; i++) {
                let dmt = data.resultado.media[i].type;
                mimety =
                  dmt === "video"
                    ? "video/mp4"
                    : dmt === "webp"
                      ? "image/webp"
                      : dmt === "imagem"
                        ? "image/jpeg"
                        : dmt === "audio"
                          ? "audio/mpeg"
                          : "video/mp4";
                await akame.sendMessage(
                  from,
                  {
                    [mimety.split("/")[0]]: {
                      url: data.resultado.media[i].url,
                    },
                    mimetype: mimety,
                  },
                  { quoted: selo }
                );
              }
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "multidl":
          case "pocbi":
            if (q.length < 5)
              return reply(
                "Por favor, adicione um link de uma rede social de mídia. (Ex.: Tiktok, insta, threads, etc...)"
              );
            try {
              data = await fetchJson(
                API_URL +
                  `/api/download/multi-download?url=${q}&apikey=` +
                  API_KEY_AKAME
              );
              for (let i = 0; i < data.resultado.medias.length; i++) {
                let dmt = data.resultado.medias[i].extension;
                mimety =
                  dmt === "mp4"
                    ? "video/mp4"
                    : dmt === "webp"
                      ? "image/webp"
                      : dmt === "jpg"
                        ? "image/jpeg"
                        : dmt === "mp3"
                          ? "audio/mpeg"
                          : "video/mp4";
                await akame.sendMessage(
                  from,
                  {
                    [mimety.split("/")[0]]: {
                      url: data.resultado.medias[i].url,
                    },
                    mimetype: mimety,
                  },
                  { quoted: selo }
                );
              }
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "igstory":
          case "instastorys":
          case "instastory":
            if (!q)
              return reply(
                `Cadê o *usuário da pessoa* que você deseja baixar os storys?\n     • Exemplo: *${prefix + command} @jaoferreira*`
              );
            if (!q.includes("@"))
              return reply(
                `Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix + command} @jaoferreira*\n\t• *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.\n\t• Este comando só baixa storys, *para baixar reels ou entre outras variedades*, use: *${prefix}igdl [link do post/reels]*`
              );
            try {
              reply(
                `Buscando stories do usuário: *${q}*, aguarde o retorno...`
              );
              data = await fetchJson(
                API_URL +
                  `/api/download/instagram-story?usuario=${q.replace("@", "")}&apikey=` +
                  API_KEY_AKAME
              );
              for (let i = 0; i < data.resultado.length; i++) {
                let dmt = data.resultado[i].type;
                mimety =
                  dmt === "video"
                    ? "video/mp4"
                    : dmt === "sticker"
                      ? "image/webp"
                      : dmt === "imagem"
                        ? "image/jpeg"
                        : dmt === "audio"
                          ? "audio/mpeg"
                          : "video/mp4";
                await akame.sendMessage(
                  from,
                  {
                    [mimety.split("/")[0]]: { url: data.resultado[i].link },
                    mimetype: mimety,
                  },
                  { quoted: selo }
                );
              }
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "instaaudio":
          case "igaudio":
          case "insta_audio":
            if (q.length < 5)
              return reply(
                "Por favor, forneça o link de um *reels/video* do Instagram."
              );
            reply(mess.wait());
            try {
              data = await fetchJson(
                API_URL +
                  `/api/download/instagram?url=${q}&apikey=` +
                  API_KEY_AKAME
              );
              akame.sendMessage(
                from,
                {
                  audio: await fetch(data.resultado[0].url).then((v) =>
                    v.buffer()
                  ),
                  mimetype: "audio/mpeg",
                },
                { quoted: selo }
              );
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "tiktokstalker":
          case "tksh":
            if (!q)
              return reply(
                `Cadê o *usuário da pessoa* que você deseja stalkear?\n📌 Exemplo: *${prefix + command} @alex10ofc*\n\t• *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`
              );
            if (!q.includes("@"))
              return reply(
                `Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix + command} @jaoferreira*\n\t• *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`
              );
            try {
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/tiktok-stalker?usuario=${q}&apikey=` +
                  API_KEY_AKAME
              );
              await sendUrlText(
                from,
                mess.TiktokStalker(data, formatNumberDecimal),
                `${data.resultado.users.nickname} (@${data.resultado.users.username})`,
                `${formatNumberDecimal(data.resultado.stats.followerCount)} Seguidores | ${formatNumberDecimal(data.resultado.stats.followingCount)} Seguindo | ${formatNumberDecimal(data.resultado.stats.heartCount)} Curtidas`,
                data.resultado.users.avatarLarger || ftmenu.logo,
                `https://tiktok.com/@${data.resultado.users.username}`,
                info
              );
            } catch (error) {
              await reply(mess.error());
              console.log(error);
            }
            break;

          case "igsh":
          case "igstalker":
          case "instastalk":
          case "instastalker":
            if (!q)
              return reply(
                `Cadê o *usuário da pessoa* que você deseja stalkear?\n📌 Exemplo: *${prefix + command} @jaoferreira*\n\t• *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`
              );
            if (!q.includes("@"))
              return reply(
                `Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix + command} @jaoferreira*\n\t• *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`
              );
            try {
              data = await fetchJson(
                API_URL +
                  `/api/pesquisa/insta-stalker/v3?usuario=${q.replace("@", "")}&apikey=` +
                  API_KEY_AKAME
              );
              await akame.sendMessage(
                from,
                {
                  text: mess.InstaStalker(
                    data,
                    formatNumber,
                    formatNumberDecimal
                  ),
                  contextInfo: {
                    externalAdReply: {
                      title: `${data.resultado.profileName || "Usuário do Instagram"} (@${data.resultado.username}) • Fotos e vídeos do Instagram.`,
                      body: `${formatNumberDecimal(data.resultado.followersAmount)} seguidores, ${formatNumberDecimal(data.resultado.followingAmount)} seguindo, ${formatNumberDecimal(data.resultado.mediaCount)} publicações.`,
                      thumbnail: await getBuffer(data.resultado.profilePicture),
                      mediaType: 2,
                      sourceUrl: `https://instagram.com/${data.resultado.username}`,
                    },
                  },
                },
                { quoted: selo }
              );
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "mediafire":
            if (!q.includes("mediafire.com"))
              return reply(
                "Faltando o link do mediafire para download do arquivo, cade?"
              );
            ABC = await fetchJson(
              API_URL +
                `/api/download/mediafire?url=${q}&apikey=` +
                API_KEY_AKAME
            );
            encurt = await axios.get(
              `https://tinyurl.com/api-create.php?url=${ABC.resultado[0].link}`
            );
            reply(mess.mediafireDownload(ABC, encurt));
            await yoshino
              .sendMessage(from, {
                document: { url: ABC.resultado[0].link },
                mimetype: "application/" + ABC.resultado[0].mime,
                fileName: ABC.resultado[0].nama,
              })
              .catch(async (error) => {
                return reply(mess.error());
              });
            break;

          case "gdrive":
          case "googledrive":
            if (!q.includes("drive.google.com"))
              return reply(
                "Faltando o link do google drive para download do arquivo, cade?"
              );
            ABC = await fetchJson(
              API_URL +
                `/api/download/google-drive?url=${q}&apikey=` +
                API_KEY_AKAME
            );
            reply(
              "Aguarde, estou encaminhando o arquivo. Pode demorar até *2min* para enviar!"
            );
            await akame
              .sendMessage(from, {
                document: { url: ABC.resultado.downloadUrl },
                mimetype: ABC.resultado.mimetype,
                fileName: ABC.resultado.fileName,
              })
              .catch(async (error) => {
                return reply(mess.error());
              });
            break;

          case "gitclone":
            let regex1 =
              /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
            if (!q)
              return reply(
                `Exemplo: ${prefix}gitclone https://github.com/whiskeysockets/baileys`
              );
            reply(mess.wait());
            let [user, repo] = args[0].match(regex1) || [];
            repo = repo.replace(/.git$/, "");
            let filename = (await fetch(url, { method: "HEAD" })).headers
              .get("content-disposition")
              .match(/attachment; filename=(.*)/)[1];
            await akame
              .sendMessage(
                from,
                {
                  document: {
                    url: `https://api.github.com/repos/${user}/${repo}/zipball`,
                  },
                  fileName: filename + ".zip",
                  mimetype: "application/zip",
                },
                { quoted: selo }
              )
              .catch(async (error) => {
                return reply(mess.error());
              });
            break;

          case "antiimg":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAntiImg)
                return reply("O recurso de anti imagem já está ativado.");
              dataGp[0].antiimg = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de anti imagem neste grupo.️"
              );
            } else if (Number(args[0]) === 0) {
              if (!isAntiImg)
                return reply("O recurso de anti imagem já está desativado.");
              dataGp[0].antiimg = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de anti imagem neste grupo."
              );
            } else {
              reply("1 para ativar, 0 para desativar.");
            }
            break;

          case "antivideo":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAntiVid)
                return reply("O recurso de anti vídeo já está ativado.");
              dataGp[0].antivideo = true;
              setGp(dataGp);
              reply("Ativou com sucesso o recurso de anti video neste grupo.");
            } else if (Number(args[0]) === 0) {
              if (!isAntiVid)
                return reply("O recurso de anti vídeo já está desativado.");
              dataGp[0].antivideo = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de anti video neste grupo."
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "antiaudio":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAntiAudio)
                return reply("O recurso de anti áudio já está ativado.");
              dataGp[0].antiaudio = true;
              setGp(dataGp);
              reply("Ativou com sucesso o recurso de anti audio neste grupo.");
            } else if (Number(args[0]) === 0) {
              if (!isAntiAudio)
                return reply("O recurso de anti áudio já está desativado.");
              dataGp[0].antiaudio = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de anti audio neste grupo."
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "antisticker":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAntiSticker)
                return reply("O recurso de anti sticker já está ativado.");
              dataGp[0].antisticker = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de anti sticker neste grupo."
              );
            } else if (Number(args[0]) === 0) {
              if (!isAntiSticker)
                return reply("O recurso de anti sticker já está desativado.");
              dataGp[0].antisticker = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de anti sticker neste grupo."
              );
            } else {
              reply("1 para ativar, 0 para desativar.");
            }
            break;

          case "antidocumento":
          case "antidoc":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (Antidoc)
                return reply("O recurso de anti documento já está ativado.");
              dataGp[0].antidoc = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de anti documento neste grupo."
              );
            } else if (Number(args[0]) === 0) {
              if (!Antidoc)
                return reply("O recurso de anti documento já está desativado.");
              dataGp[0].antidoc = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de anti documento neste grupo."
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "antictt":
          case "anticontato":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAntiCtt)
                return reply("O recurso de anti contato já está ativado.");
              dataGp[0].antictt = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de anti contato neste grupo."
              );
            } else if (Number(args[0]) === 0) {
              if (!isAntiCtt)
                return reply("O recurso de anti contato já está desativado.");
              dataGp[0].antictt = false;
              setGp(dataGp);
              reply(
                "️Desativou com sucesso o recurso de anticontato neste grupo.️"
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "antiloc":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (Antiloc)
                return reply("O recurso de anti loc já está ativado.");
              dataGp[0].antiloc = true;
              setGp(dataGp);
              reply("Ativou com sucesso o recurso de anti loc neste grupo.");
            } else if (Number(args[0]) === 0) {
              if (!Antiloc)
                return reply("O recurso de anti loc já está desativado.");
              dataGp[0].antiloc = false;
              setGp(dataGp);
              reply("Desativou com sucesso o recurso de anti loc neste grupo.");
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "antiddd":
          case "anti_ddd":
          case "anti-ddd":
            if (!isGroup) return await reply(mess.onlyGroup());
            if (!isGroupAdmins) return await reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return await reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return await reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAntiDDD)
                return await reply(
                  "Este recurso já está ativado atualmente senhor(a)!"
                );
              dataGp[0].ANTI_DDD.active = true;
              setGp(dataGp);
              await reply(
                "(🌟) O recurso de remoção de números com DDD adicionado à lista, foi ativado com sucesso!"
              );
            } else if (Number(args[0]) === 0) {
              if (!isAntiDDD)
                return await reply(
                  "Este recurso já está desativado atualmente senhor(a)!"
                );
              dataGp[0].ANTI_DDD.active = false;
              setGp(dataGp);
              await reply(
                "(🌟) O recurso de remoção de números com DDD adicionado à lista, foi desativado com sucesso!"
              );
            } else {
              await reply("1 para ativar, 0 para desativar.");
            }
            break;

          case "antiddd-list":
            if (!isGroup) return await reply(mess.onlyGroup());
            if (!isAntiDDD)
              return await reply(
                `Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`
              );
            if (dataGp[0].ANTI_DDD.listaProibidos.length < 1)
              return await reply(
                `[!] Não existe nenhum ddd proibido neste grupo. Para adicionar à lista, use: ${prefix}add_ddd 21, por exemplo.`
              );
            await reply(
              `Aqui está a lista de DDD proibidos no grupo: '${groupName}':\n• *[Total: ${dataGp[0].ANTI_DDD.listaProibidos.length}]* - ${dataGp[0].ANTI_DDD.listaProibidos.map((v, index) => v).join(", ")}`
            );
            break;

          case "add_ddd":
            if (!isGroup) return await reply(mess.onlyGroup());
            if (!isGroupAdmins) return await reply(mess.onlyAdmins());
            if (!isAntiDDD)
              return await reply(
                `Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`
              );
            if (!q.trim())
              return await reply(
                "Determine o DDD que você deseja adicionar na lista, não pode conter espaço vázio."
              );
            if (q.trim() === 2)
              return await reply(
                `Um DDD possuí 2 dígitos numéricos, por exemplo: 81 (Este DDD pertence à Pernambuco).`
              );
            if (dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()) >= 0)
              return await reply(
                `Esse DDD já se encontra incluso, procure ver na lista dos DDDs banidos no grupo, use: '${prefix}antiddd-list'`
              );
            if (arrayDDDs.indexOf(q.trim()) >= 0)
              return await reply(
                "O DDD preenchido é inválido, não existe nenhum número com este DDD atualmente."
              );
            dataGp[0].ANTI_DDD.listaProibidos.push(q.trim());
            setGp(dataGp);
            await reply(
              `• O DDD '${q.trim()}' foi adicionado com sucesso à blacklist, agora os números que tiver o DDD de ${extractStateFromDDD(q.trim())} será imediatamente banido do grupo.`
            );
            break;

          case "delete_ddd":
          case "del_ddd":
          case "rm_ddd":
            if (!isGroup) return await reply(mess.onlyGroup());
            if (!isGroupAdmins) return await reply(mess.onlyAdmins());
            if (!isAntiDDD)
              return await reply(
                `Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`
              );
            if (!q.trim())
              return await reply(
                "Determine o DDD que você deseja remover da lista, não pode conter espaço vázio."
              );
            if (q.trim() === 2)
              return await reply(
                `Calma, só pode ser removido um DDD por vez.\n• Exemplo: ${prefix + command} 84, aí o bot não vai mais remover os DDDs pertencentes à Rio Grande do Sul.`
              );
            if (dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()) < 0)
              return await reply(
                `Este DDD não está incluso, procure ver na lista dos DDDs excluídos para este grupo. Use: ${prefix}antiddd-list`
              );
            if (dataGp[0].ANTI_DDD.listaProibidos.length == 0)
              return await reply(
                "A lista atualmente está vázia, então não tem como remover nenhum DDD, adicione pelo menos um."
              );
            dataGp[0].ANTI_DDD.listaProibidos.splice(
              dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()),
              1
            );
            setGp(dataGp);
            await reply(
              `O DDD '${q.trim()}' tirado com sucesso da lista de DDDs excluídos do grupo com sucesso, agora o bot não irá mais impedir à entrada deles.`
            );
            break;

          case "antilinkgp":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAntilinkgp)
                return reply("O recurso de antilink de grupo já está ativado.");
              dataGp[0].antilinkgp = true;
              setGp(dataGp);
              reply("Ativou com sucesso o recurso de antilink de grupo.");
            } else if (Number(args[0]) === 0) {
              if (!isAntilinkgp)
                return reply(
                  "O recurso de antilink de grupo já está desativado."
                );
              dataGp[0].antilinkgp = false;
              setGp(dataGp);
              reply("Desativou com sucesso o recurso de antilink de grupo.");
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "antilinkhard":
          case "antilink":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAntiLinkHard)
                return reply("O recurso de antilink hardcore já está ativado.");
              dataGp[0].antilinkhard = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de antilink hardcore neste grupo."
              );
            } else if (Number(args[0]) === 0) {
              if (!isAntiLinkHard)
                return reply(
                  "O recurso de antilink hardcore já está desativado."
                );
              dataGp[0].antilinkhard = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de antilink harcore neste grupo.️"
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "antilinkeasy":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAntiLinkEasy)
                return reply("O recurso de antilink easy já está ativado.");
              dataGp[0].antilinkeasy = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de antilink easy neste grupo."
              );
            } else if (Number(args[0]) === 0) {
              if (!isAntiLinkEasy)
                return reply("O recurso de antilink easy já está desativado.");
              dataGp[0].antilinkeasy = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de antilink easy neste grupo.️"
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "x9":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isx9) return reply("O recurso de x9 já está ativado.");
              dataGp[0].x9 = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for rebaixado/promovido a adm e também quando ouver fixação/desafixação de mensagem do(s) adminstrador(es)."
              );
            } else if (Number(args[0]) === 0) {
              if (!isx9) return reply("O recurso de x9 já está desativado.");
              dataGp[0].x9 = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de x9 neste grupo, não irei mais notificar promoção de adm nem rebaixamento ou fixação/desafixação de mensagem do(s) adminstrador(es)."
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "visualizarmsg":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isVisualizar) {
              nescessario.visualizarmsg = true;
              setNes(nescessario);
              reply(
                "Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado."
              );
            } else if (isVisualizar) {
              nescessario.visualizarmsg = false;
              setNes(nescessario);
              reply(
                "Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado."
              );
            }
            break;

          case "x9visuunica":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isX9VisuUnica)
                return reply(
                  "O recurso de revelar visu única já está ativado."
                );
              dataGp[0].visuUnica = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de revelar visu única neste grupo."
              );
            } else if (Number(args[0]) === 0) {
              if (!isX9VisuUnica)
                return reply(
                  "O recurso de revelar visu única já está desativado."
                );
              dataGp[0].visuUnica = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de revelar visu única neste grupo."
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "so_adm":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (So_Adm)
                return reply(
                  "O modo para somente adminstradores usarem o bot, já se encontra ativo no grupo senhor(a)!"
                );
              dataGp[0].soadm = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de só adm utilizar comandos neste grupo."
              );
            } else if (Number(args[0]) === 0) {
              if (!So_Adm)
                return reply(
                  "O modo para somente adminstradores usarem o bot atualmente já está desativado no grupo."
                );
              dataGp[0].soadm = false;
              setGp(dataGp);
              reply(
                "Desativou o recurso de só adm utilizar comandos neste grupo.️"
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "odelete":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (IS_DELETE)
                return reply("O recurso de delete já está ativado.");
              nescessario.Odelete = true;
              setNes(nescessario);
              reply("Ativou com sucesso o recurso de delete nos grupos.");
            } else if (Number(args[0]) === 0) {
              if (!IS_DELETE)
                return reply("O recurso de delete já está desativado.");
              nescessario.Odelete = false;
              setNes(nescessario);
              reply("️Desativou com sucesso o recurso de delete nos grupos.️");
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "antifake":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAntifake)
                return reply(
                  "O recurso de antifake neste grupo já está ativado."
                );
              dataGp[0].antifake = true;
              setGp(dataGp);
              reply("Ativou com sucesso o recurso de antifake neste grupo!");
            } else if (Number(args[0]) === 0) {
              if (!isAntifake)
                return reply(
                  "O recurso de antifake neste grupo já está desativado."
                );
              dataGp[0].antifake = false;
              setGp(dataGp);
              reply("Desativou com sucesso o recurso de antifake neste grupo!");
            } else {
              reply("1 para ativar, 0 para desativar.");
            }
            break;

          case "prefixos":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isMultiP)
              return reply(
                `Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`
              );
            if (dataGp[0].prefixos.length < 1)
              return reply(
                "Não contem nenhum prefixo a mais adicionado neste grupo."
              );
            reply(
              `Lista de prefixos para uso do bot, no Grupo: *${groupName}*:\n• *[Total: ${dataGp[0].prefixos.length}]* - ${dataGp[0].prefixos.map((v, index) => `( ${v} )`).join(", ")}`
            );
            break;

          case "add_prefixo":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isMultiP)
              return reply(
                `Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`
              );
            if (ANT_LTR_MD_EMJ(q))
              return reply("Não pode letra modificada, nem emoji..");
            if (!q.trim())
              return reply(
                "Determine o novo prefixo, não pode espaço vazio..."
              );
            if (q.trim() > 1)
              return reply(
                `Calma, o prefixo só pode ser um\nExemplo: ${prefix + command} _\nAe o bot vai passar á responder _ como prefixo do bot..`
              );
            if (dataGp[0].prefixos.indexOf(q.trim()) >= 0)
              return reply(
                `Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`
              );
            dataGp[0].prefixos.push(q.trim());
            setGp(dataGp);
            reply(
              `Prefixo ${q.trim()} foi adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`
            );
            break;

          case "tirar_prefixo":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isMultiP)
              return reply(
                `Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`
              );
            if (ANT_LTR_MD_EMJ(q))
              return reply("Não pode letra modificada, nem emoji..");
            if (!q.trim())
              return reply(
                "Determine o prefixo que deseja tirar, não pode espaço vazio..."
              );
            if (q.trim() > 1)
              return reply(
                `Calma, o prefixo só pode ser tirado um por vez..\nExemplo: ${prefix + command} _\nAe o bot não vai responder mais com _`
              );
            if (dataGp[0].prefixos.indexOf(q.trim()) < 0)
              return reply(
                `Esse prefixo não está incluso, procure ver na lista dos prefixos. Veja: ${prefix}prefixos`
              );
            if (dataGp[0].prefixos.length == 1)
              return reply(
                "Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro."
              );
            dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1);
            setGp(dataGp);
            reply(
              `Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`
            );
            break;

          case "multiprefixo":
          case "multiprefix":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
            if (!isMultiP) {
              dataGp[0].multiprefix = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de multi prefixos neste grupo."
              );
            }
            if (isMultiP) {
              dataGp[0].multiprefix = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de multi prefixos neste grupo."
              );
            }
            break;

          case "ephemeral":
          case "msgtemp":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            getInfoG =
              await akame.groupMetadata(
                from
              ); /* Pegar as informações total do grupo! */
            if (getInfoG.ephemeralDuration == undefined) {
              reply(
                `As mensagens temporárias no grupo foram ativadas com sucesso.`
              );
              await akame.sendMessage(from, {
                disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL,
              });
            } else if (getInfoG.ephemeralDuration > 1) {
              reply(
                `As mensagens temporárias no grupo foram desativadas com sucesso.`
              );
              await akame.sendMessage(from, {
                disappearingMessagesInChat: false,
              });
            }
            break;

          case "rmphotogp":
          case "rmfotogroup":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            reply(`A foto do grupo foi removida com sucesso.`);
            await akame.removeProfilePicture(from);
            break;

          case "antinotas":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAntiNotas)
                return reply(
                  "O recurso de anti notas já está ativado no grupo."
                );
              dataGp[0].antinotas = true;
              setGp(dataGp);
              reply("Ativou com sucesso o recurso de anti notas neste grupo.️");
            } else if (Number(args[0]) === 0) {
              if (!isAntiNotas)
                return reply(
                  "O recurso de anti notas já está desativado no grupo."
                );
              dataGp[0].antinotas = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de anti notas neste grupo.️"
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "anticatalogo":
          case "anticatalg":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAnticatalogo)
                return reply(
                  "O recurso de anti catálogos já se encontra ativo no grupo atualmente."
                );
              dataGp[0].anticatalogo = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de anticatalogo neste grupo."
              );
            } else if (Number(args[0]) === 0) {
              if (!isAnticatalogo)
                return reply(
                  "O recurso atualmente se encontra desativado no grupo."
                );
              dataGp[0].anticatalogo = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de anticatalogo neste grupo.️"
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "bemvindo":
          case "welcome":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isWelkom)
                return reply(
                  "O recurso de boas vindas já está ativo neste grupo."
                );
              dataGp[0].wellcome[0].bemvindo1 = true;
              setGp(dataGp);
              reply("Ativou com sucesso o recurso de bem vindo neste grupo.");
            } else if (Number(args[0]) === 0) {
              if (!isWelkom)
                return reply(
                  "O recuso de boas vindas já está desativado neste grupo."
                );
              dataGp[0].wellcome[0].bemvindo1 = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de bemvindo neste grupo.️"
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "bemvindo2":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
            if (args.length < 1)
              return reply(
                `Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `
              );
            if (Number(args[0]) === 1) {
              if (isWelkom2)
                return reply("O recurso já está ativado no grupo.");
              dataGp[0].wellcome[1].bemvindo2 = true;
              setGp(dataGp);
              reply("O recurso foi ativado.");
            } else if (Number(args[0]) === 0) {
              if (!isWelkom2)
                return reply("O recurso não está ativado no grupo.");
              dataGp[0].wellcome[1].bemvindo2 = false;
              setGp(dataGp);
              reply("O recurso foi desativado.");
            } else {
              reply(
                `Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`
              );
            }
            break;

          case "legendabv":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (args.length < 1)
              return reply("*Escreva a mensagem de boas-vindas*");
            teks = body.slice(11);
            if (isWelkom) {
              dataGp[0].wellcome[0].legendabv = teks;
              setGp(dataGp);
              reply("*Mensagem de boas vindas definida com sucesso!*");
            } else {
              reply(`Ative o ${prefix}bemvindo 1`);
            }
            break;

          case "legendabv2":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (args.length < 1)
              return reply("*Escreva a mensagem de boas-vindas*");
            teks = body.slice(12);
            if (isWelkom2) {
              dataGp[0].wellcome[1].legendabv = teks;
              setGp(dataGp);
              reply("*Mensagem de boas vindas2 definida com sucesso!*");
            } else {
              reply(`Ative o ${prefix}bemvindo2 1`);
            }
            break;

          case "legendasaiu":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (args.length < 1)
              return reply(
                "Escreva a mensagem de saída ou para desativar, use: 0"
              );
            teks = body.slice(13);
            if (isWelkom) {
              dataGp[0].wellcome[0].legendasaiu = Number(teks) === 0 ? 0 : teks;
              setGp(dataGp);
              reply("Mensagem de saída do bemvindo foi definida com sucesso!");
            } else {
              reply(
                `Ative o ${prefix}bemvindo para o recurso de edição de mensagem.`
              );
            }
            break;

          case "legendasaiu2":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (q.length < 1)
              return reply(
                "Escreva a mensagem de saída ou para desativar, use: 0"
              );
            if (isWelkom2) {
              dataGp[0].wellcome[1].legendasaiu = Number(teks) === 0 ? 0 : q;
              setGp(dataGp);
              reply("Mensagem de saída do bemvindo2 foi definida com sucesso!");
            } else {
              reply(
                `Ative o ${prefix}bemvindo2 para o recurso de edição de mensagem.`
              );
            }
            break;

          case "legenda_estrangeiro":
          case "legenda_estrangeiros":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (args.length < 1)
              return reply("*Escreva a mensagem de remoção de estrangeiros*");
            if (isAntifake) {
              dataGp[0].legenda_estrangeiro = q;
              setGp(dataGp);
              reply(
                "*Mensagem de remoção de estrangeiros definida com sucesso!*"
              );
            } else {
              reply(
                `Ative o antifake primeiro para definir uma legenda, com: ${prefix}antifake 1`
              );
            }
            break;

          case "legenda_video":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (args.length < 1)
              return reply("*Escreva a mensagem de remoção no antivideo*");
            if (isAntiVid) {
              dataGp[0].legenda_video = q;
              setGp(dataGp);
              reply("*Mensagem de remoção de video definida com sucesso!*");
            } else {
              reply(
                `Ative o antivideo primeiro para definir uma legenda, com: ${prefix}antivideo`
              );
            }
            break;

          case "legenda_imagem":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (args.length < 1)
              return reply("*Escreva a mensagem de remoção no antiimg*");
            if (isAntiImg) {
              dataGp[0].legenda_imagem = q;
              setGp(dataGp);
              reply("*Mensagem de remoção de imagem definida com sucesso!*");
            } else {
              reply(
                `Ative o anti-imagem primeiro para definir uma legenda, com: ${prefix}antiimg`
              );
            }
            break;

          case "legenda_documento":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (args.length < 1)
              return reply("*Escreva a mensagem de remoção no antidoc*");
            if (Antidoc) {
              dataGp[0].legenda_documento = q;
              setGp(dataGp);
              reply("*Mensagem de remoção de documento definida com sucesso!*");
            } else {
              reply(
                `Ative o antidoc primeiro para definir uma legenda, com: ${prefix}antidoc 1`
              );
            }
            break;

          case "addautorm":
          case "addautoban":
          case "listanegra":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins && !SoDono)
              return reply("Precisa ser Dono ou Adm");
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (!mrc_ou_numero)
              return reply(
                "Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra.."
              );
            if (dataGp[0].listanegra.includes(mrc_ou_numero))
              return reply("*Esse Número ja esta incluso*");
            dataGp[0].listanegra.push(mrc_ou_numero);
            setGp(dataGp);
            reply(`*Número adicionado a lista de autoban*`);
            break;

          case "autobang":
          case "listanegrag":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!mrc_ou_numero)
              return reply(
                "Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global.."
              );
            if (listanegraG.includes(mrc_ou_numero))
              return reply("*Esse Número ja esta incluso*");
            listanegraG.push(mrc_ou_numero);
            fs.writeFileSync(
              "./settings/nescessario.json",
              JSON.stringify(nescessario, null, "\t")
            );
            reply(`*Número adicionado a lista de autoban*`);
            break;

          case "tirardalistag":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!mrc_ou_numero)
              return reply(
                "Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra.."
              );
            if (!listanegraG.includes(mrc_ou_numero))
              return reply("*Esse Número não esta incluso*");
            var i = listanegraG.indexOf(mrc_ou_numero);
            listanegraG.splice(i, 1);
            fs.writeFileSync(
              "./settings/nescessario.json",
              JSON.stringify(nescessario, null, "\t")
            );
            reply(`*Número foi removido da lista negra*`);
            break;

          case "delremover":
          case "delautorm":
          case "delautoban":
          case "tirardalista":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (!mrc_ou_numero)
              return reply(
                "Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra.."
              );
            if (!dataGp[0].listanegra.includes(mrc_ou_numero))
              return reply("*Esse Número não esta incluso*");
            var i = dataGp[0].listanegra.indexOf(mrc_ou_numero);
            dataGp[0].listanegra.splice(i, 1);
            setGp(dataGp);
            reply(`*Número foi removido da lista de autoban*`);
            break;

          case "listban":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (dataGp[0].listanegra.length < 1)
              return reply("*Nenhum Número não foi adicionado*");
            teks = "*Números que vou moer na porrada se voltar:*\n";
            for (i = 0; i < dataGp[0].listanegra.length; ++i) {
              teks += `➤ *${dataGp[0].listanegra[i].split("@")[0]}*\n`;
            }
            teks += "*Esses ai vou descer meu martelo do ban.*";
            reply(teks);
            break;

          case "mute":
          case "mutar":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (!menc_os2)
              return reply(
                `🎯 Por favor, mencione o usuário ou marque a mensagem do alvo que você deseja mutar.`
              );
            if (menc_os2 == botNumber)
              return reply("❌️️ Não é possível mutar o bot! Você é louco?");
            if (menc_os2 == nmrdn)
              return reply(
                "Quem você pensa que é, para mutar meu proprietário(a)?"
              );
            if (vip.map((i) => i.id).includes(menc_os2))
              return reply(
                "❌️️ Não é possível mutar usuários que contém vip no bot!"
              );
            if (groupAdmins.includes(menc_os2))
              return reply(
                "❌️ Não é possível mutar um(a) adminstrador(a) do grupo."
              );
            if (!JSON.stringify(groupMembers).includes(menc_os2))
              return reply(
                "❌ ️Não é possível mutar uma pessoa que atualmente não participa mais deste grupo."
              );
            if (
              muted[muted.map((i) => i.grupo).indexOf(from)].usus.includes(
                menc_os2
              )
            )
              return mention(
                `O participante: '@${menc_os2.split("@")[0]}' já está na lista de mutados, para desmutar o usuário, use: ${prefix}desmute.`
              );
            //// ADICIONA O USUÁRIO À LISTA:
            mention(
              `O participante '@${menc_os2.split("@")[0]}' foi mutado pelo administrador: '@${sender.split("@")[0]}'. Se ele(a) falar alguma coisa, será removido do grupo!`
            );
            muted[muted.map((i) => i.grupo).indexOf(from)].usus.push(menc_os2);
            fs.writeFileSync(
              "./database/grupos/muted.json",
              JSON.stringify(muted, null, 2)
            );
            break;

          case "desmute":
          case "desmutar":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (!menc_os2)
              return reply(
                `🎯 Por favor, mencione o usuário ou marque a mensagem do alvo que você deseja desmutar.`
              );
            if (
              !muted[muted.map((i) => i.grupo).indexOf(from)].usus.includes(
                menc_os2
              )
            )
              return mention(
                `O participante: '@${menc_os2.split("@")[0]}' não está na lista de mutados do grupo.`
              );
            //// REMOVE O USUÁRIO DA LISTA:
            mention(
              `O participante '@${menc_os2.split("@")[0]}' foi desmutado com sucesso pelo adminstrador(a): '@${sender.split("@")[0]}'.`
            );
            muted[muted.map((i) => i.grupo).indexOf(from)].usus.splice(
              menc_os2
            );
            fs.writeFileSync(
              "./database/usuarios/muted.json",
              JSON.stringify(muted, null, 2)
            );
            break;

          case "mutelist":
          case "listamutados":
            if (muted[muted.map((i) => i.grupo).indexOf(from)].usus.length == 0)
              return reply(`Não existe nenhum usuário mutado neste grupo.`);
            usus__ = `[Total: *${muted[muted.map((i) => i.grupo).indexOf(from)].usus.length}*] - Lista de participantes mutados no grupo:\n–\n`;
            usus__ += muted[muted.map((i) => i.grupo).indexOf(from)].usus
              .map((v, index) => `• *[${index + 1}]* - @${v.split("@")[0]}`)
              .join("\n");
            await mention(usus__);
            break;

          case "roletarussa":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            TAMBOR = [
              "na perna.",
              "na cabeça.",
              "no pescoço.",
              "no peito.",
              "no olho.",
              "no estômago.",
              "na boca.",
              "na perna.",
              "na testa.",
              "no braço.",
            ];
            C2 = somembros[Math.floor(Math.random() * somembros.length)];
            if (somembros.length == 0)
              return reply(
                "Não existe *membros comuns* no grupo, somente admins."
              );
            if (C2 === sender || C2 === botNumber)
              return mentions(
                `Escolhi *@${C2.split("@")[0]}*, mas conseguiu escapar...`,
                [C2],
                true
              );
            if (C2 === sender || C2 === numerodono[0])
              return mentions(
                `Escolhi *@${C2.split("@")[0]}*, mas conseguiu escapar...`,
                [C2],
                true
              );
            reply(
              `A escolha é minha! 1 membro irá morrer, que os jogos comecem...`
            );
            setTimeout(async () => {
              await mentions(
                `Que pena... você não sobreviveu ao meu jogo *@${C2.split("@")[0]}*, hora de enterrar o cadáver, infelizmente morreu com tiro ${TAMBOR[Math.floor(Math.random() * TAMBOR.length)]}`,
                [C2],
                true
              );
            }, 5000);
            setTimeout(async () => {
              await akame.groupParticipantsUpdate(from, [C2], "remove");
            }, 6000);
            break;

          case "dinextenso":
            if (!q.includes("."))
              return reply(
                `❌️ - Coloque apenas números para realizar a transformação de digitos numérico para números em extenso.\nPor exemplo: *${prefix}dinextenso 500.00 ou 756.50*, tudo que você colocar os valores deve colocar um ponto(.) para converter os valores.`
              );
            try {
              data = await fetchJson(
                `https://api.invertexto.com/v1/number-to-words?token=${API_KEY_INVERTEXTO}&number=${q}&language=pt&currency=BRL`
              );
              reply(`*${q}* : ${capitalizeFirstLetter(data.text)}`);
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "validarcpf":
          case "validarcnpj":
            if (command === "validarcpf") {
              if (!q)
                return reply(
                  "Digite um CPF para realizar a verificação se é válido ou inválido..."
                );
              if (q.length < 11)
                return reply(
                  "Você digitou um cpf que não tem 11 dígitos, verifique se colocou pontuação, se estiver retire."
                );
              try {
                data = await fetchJson(
                  `https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`
                );
                if (data.valid == true) return reply("Válido.");
                if (data.valid == false) return reply("Inválido.");
              } catch (error) {
                reply(mess.error());
              }
            } else if (command === "validarcnpj") {
              if (!q)
                return reply(
                  "Digite um CNPJ para realizar a verificação se é válido ou inválido!"
                );
              if (q.length < 14)
                return reply(
                  "Você digitou um CNPJ que não tem 14 dígitos, verifique se colocou pontuação, se estiver retire."
                );
              try {
                data = await fetchJson(
                  `https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`
                );
                if (data.valid == true) return reply("Válido.");
                if (data.valid == false) return reply("Inválido.");
              } catch (error) {
                reply(mess.error());
              }
            }
            break;

          case "createimg":
          case "texttoimage":
          case "imagine":
            if (!q)
              return reply(
                `O que você deseja criar amiguinho? Coloque após o comando o que você deseja criar... Por exemplo: ${prefix + command} macaco dirigindo uma bmw`
              );
            try {
              await replyWithReaction(
                "Olá, estou criando a imagem a partir de seu questionamento, aguarde senhor(a)...",
                { react: { text: "🎨", key: info.key } }
              );
              dataResultAI = await fetchJson(
                `https://hercai.onrender.com/v3/text2image?prompt=${q}`
              );
              await akame.sendMessage(
                from,
                { image: { url: dataResultAI.url } },
                { quoted: selo }
              );
            } catch (error) {
              await replyWithReaction(mess.error(), {
                react: { text: "❌", key: info.key },
              });
            }
            break;

          case "pergunta":
          case "openai":
          case "gpt":
          case "chatgpt":
            if (!q)
              return reply("Você esqueceu de perguntar ao lado do comando.");
            try {
              if (!q)
                return reply("Você esqueceu de perguntar ao lado do comando.");
              let { key } = await akame.sendMessage(
                from,
                {
                  text: `Estou processando sua pergunta, isso pode levar alguns segundos...`,
                },
                { quoted: selo }
              );
              data = await fetchJson(`https://aemt.me/gpt4?text=${q}`);
              await akame.sendMessage(from, {
                text: `${data.result}`,
                edit: key,
              });
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "gemini":
            try {
              if (!q)
                return reply("Você esqueceu de perguntar ao lado do comando.");
              let { key } = await akame.sendMessage(
                from,
                {
                  text: `Estou processando sua pergunta, isso pode levar alguns segundos...`,
                },
                { quoted: selo }
              );
              data = await fetchJson(
                API_URL +
                  `/api/outros/gemini?query=${q}&apikey=` +
                  API_KEY_AKAME
              );
              await akame.sendMessage(from, {
                text: `${data.resultado}`,
                edit: key,
              });
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "pergunta":
          case "openai":
          case "gpt":
          case "chatgpt":
            if (!q)
              return reply("Você esqueceu de perguntar ao lado do comando.");
            try {
              let { key } = await akame.sendMessage(
                from,
                {
                  text: `Estou processando sua pergunta, isso pode levar alguns segundos...`,
                },
                { quoted: selo }
              );
              data = await fetchJson(`https://aemt.me/gpt4?text=${q}`);
              await akame.sendMessage(from, {
                text: `${data.result}`,
                edit: key,
              });
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "gpt-3.5":
          case "chatgpt-3.5":
            try {
              if (!q)
                return reply("Você esqueceu de perguntar ao lado do comando.");
              let { key } = await akame.sendMessage(
                from,
                {
                  text: `Estou processando sua pergunta, isso pode levar alguns segundos...`,
                },
                { quoted: selo }
              );
              data = await fetchJson(`https://aemt.me/turbo?text=${q}`);
              await akame.sendMessage(from, {
                text: `${data.result}`,
                edit: key,
              });
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "redacao":
            if (!q)
              return reply(
                `Você esqueceu de colocar o tema de sua redação ao lado do comando.`
              );
            try {
              let { key } = await akame.sendMessage(
                from,
                {
                  text: `Estou processando sua solicitação. Isso pode levar alguns segundos...`,
                },
                { quoted: selo }
              );
              promptUser = `Crie um texto dissertativo-argumentativo com o tema: ${q}`;
              anu1 = await fetchJson(`https://aemt.me/gpt4?text=${promptUser}`);
              await akame.sendMessage(from, {
                text: mess.respostaRedacao(anu1),
                edit: key,
              });
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "summerize":
            if (!q)
              return reply(
                `Você esqueceu de colocar o que você deseja resumir ao lado do comando.`
              );
            try {
              let { key } = await akame.sendMessage(
                from,
                {
                  text: `Estou resumindo o texto solicitado. Isso pode levar alguns segundos...`,
                },
                { quoted: selo }
              );
              promptUser = `Faça um resumo básico do texto apresentado: ${q}`;
              anu1 = await fetchJson(`https://aemt.me/gpt4?text=${promptUser}`);
              await akame.sendMessage(from, {
                text: mess.respostaResumida(anu1),
                edit: key,
              });
            } catch (error) {
              return reply(mess.error());
            }
            break;

          case "totext":
            if (!isQuotedAudio)
              return reply(
                "Por favor, mencione um áudio para realizar a leitura do áudio."
              );
            if (
              info.message.extendedTextMessage.contextInfo.quotedMessage
                .audioMessage.fileLength > 2100000
            )
              return reply(
                "Só realizo a transcrição de áudio de até *2MB*, envie um arquivo menor."
              );
            try {
              let getBufferAudio = await getFileBuffer(
                info.message.extendedTextMessage.contextInfo.quotedMessage
                  .audioMessage,
                "audio"
              );
              await akame.sendMessage(
                from,
                {
                  text: `Estou realizando a transcrição do áudio para texto, aguarde...`,
                },
                { quoted: selo }
              );
              fs.writeFileSync(
                `./database/data/media/audios/totext/totext-${sender}.mp3`,
                getBufferAudio
              );
              client = new AssemblyAI({
                apiKey: "11d7fb1a4e8f4e4fac85d3b9be844b4a",
              });
              data = await client.transcripts.create({
                audio_url: `./database/data/media/audios/totext/totext-${sender}.mp3`,
                language_code: "pt",
              });
              if (data.status === "error")
                return reply(
                  "Ocorreu um erro ao transcrever o áudio! Por favor, tente novamente."
                );
              if (data.words.length == 0)
                return reply("Não foi possível transcrever o áudio enviado.");
              akame.sendInteractiveTXT(
                from,
                `Texto extraído do áudio: ⬎\n\t• Texto: '${data.text}'\n–\n• Total de palavra(s) detectada(s) no áudio mencionado: *${data.words.length} palavra(s).*\n• ID: *${data.id}*`,
                `© Akame Supremacy`,
                { participant: sender, quotedMessage: info.message },
                {
                  buttons: [
                    {
                      name: "cta_copy",
                      buttonParamsJson: JSON.stringify({
                        display_text: "Copiar",
                        id: `0`,
                        copy_code: data.text,
                        disabled: true,
                      }),
                    },
                  ],
                }
              );

              DLT_FL(
                `./database/data/media/audios/totext/totext-${sender}.mp3`
              );
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "wikipedia":
          case "wiki":
            try {
              if (!q) return reply(`Exemplo: ${prefix + command} JavaScript`);
              reply(`Aguarde, pesquisando sobre o que está perguntando..`);
              wikip = await axios.get(
                `https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`
              );
              wikis = await axios.get(
                `https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`
              );
              reply(mess.wikiResposta(wikis));
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "nasa":
            try {
              if (!q) return reply(`*Exemplo:* ${prefix}${command} 19-10-2007`);
              dataAkam = await fetchJson(
                API_URL +
                  `/api/pesquisa/nasa_apod?data=${q}&apikey=` +
                  API_KEY_AKAME
              );
              resultExp = await fetchJson(
                API_URL +
                  `/api/outros/translate?texto=${dataAkam.nasa.explanation}&ling=pt&apikey=` +
                  API_KEY_AKAME
              );
              await akame.sendMessage(
                from,
                {
                  image: { url: dataAkam.nasa.hdurl },
                  caption: mess.result_APOD(dataNaga, resultExp),
                },
                { quoted: selo }
              );
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "book":
            if (args.length == 0)
              return reply(`*Exemplo:* ${prefix + command} Nome do Livro`);
            try {
              const takeBook = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=pt`
              );
              const getBook = await axios.get(
                `${takeBook.data.items[0].selfLink}`
              );
              var bookImage = await getBuffer(
                getBook.data.volumeInfo.imageLinks.thumbnail
              );
              await akame.sendMessage(
                from,
                { image: bookImage, caption: mess.searchBooks(getBook) },
                { quoted: selo }
              );
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "clima":
            if (args.length == 0)
              return reply(`*Exemplo:* ${prefix}Clima Maceió`);
            try {
              const wttrin = (
                await axios.get(
                  `https://pt.wttr.in/${encodeURIComponent(q)}?format=j1`
                )
              ).data;
              var wttrImage = await getBuffer(
                `https://wttr.in/${encodeURIComponent(q)}.png`
              );
              await akame.sendMessage(
                from,
                { image: wttrImage, caption: mess.clima(wttrin) },
                { quoted: selo }
              );
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "simi":
            if (!isGroup) return reply(mess.onlyGroup());
            try {
              datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {
                method: "POST",
                headers: {
                  "content-type": "application/x-www-form-urlencoded",
                },
                body: "text=" + q + "&lc=pt",
              });
              reply(datasimi.message);
            } catch (e) {
              return reply("Resposta não encontrada..");
            }
            break;

          case "simih":
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isSimi)
                return reply("O modo simih já se encontra ativo neste grupo.");
              dataGp[0].simi1 = true;
              setGp(dataGp);
              reply("Ativado com sucesso o modo simi neste grupo..");
            } else if (Number(args[0]) === 0) {
              if (!isSimi)
                return reply(
                  "O modo simih já se encontra desativado neste grupo."
                );
              dataGp[0].simi1 = false;
              setGp(dataGp);
              reply("Desativando o modo simi com sucesso neste grupo.️");
            } else {
              reply("1 para ativar, 0 para desativar.");
            }
            break;

          case "autofigu":
          case "autosticker":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAutofigu)
                return reply(
                  "O recurso de criar stickers forma automática já se encontra ativo neste grupo senhor(a)."
                );
              dataGp[0].autosticker = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de auto figurinhas neste grupo."
              );
            } else if (Number(args[0]) === 0) {
              if (!isAutofigu)
                return reply(
                  "O recurso de criar stickers forma automática já se encontra desativado neste grupo senhor(a)."
                );
              dataGp[0].autosticker = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de auto figurinhas neste grupo.️"
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "autorepo":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAutorepo)
                return reply(
                  "O modo auto resposta já se encontra ativo no grupo."
                );
              dataGp[0].autoresposta = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de auto resposta neste grupo."
              );
            } else if (Number(args[0]) === 0) {
              if (!isAutorepo)
                return reply(
                  "O modo auto resposta já esta desativado no grupo."
                );
              dataGp[0].autoresposta = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de auto resposta neste grupo.️"
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "modobrincadeira":
          case "modobrincadeiras":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isModobn) return reply("O modo brincadeira já está ativo.");
              dataGp[0].jogos = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de Modo brincadeira neste grupo."
              );
            } else if (Number(args[0]) === 0) {
              if (!isModobn)
                return reply("O modo brincadeira já está desativado.");
              dataGp[0].jogos = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de Modo brincadeira neste grupo."
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "leveling":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isLevelingOn)
                return reply(
                  "O recurso de nível já estava ativo antes nesse grupo."
                );
              dataGp[0].level = true;
              setGp(dataGp);
              reply("Leveling ativado com sucesso.");
            } else if (Number(args[0]) === 0) {
              if (!isLevelingOn)
                return reply(
                  `O recurso de level já está desativado neste grupo.`
                );
              dataGp[0].level = false;
              setGp(dataGp);
              reply("Leveling desativado com sucesso.");
            } else {
              reply(
                "Adicionar parâmetro 1 ou 0 ao lado do comando por favor senhor(a)!"
              );
            }
            break;

          case "bangp":
          case "unbangp":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!SoDono) return reply(mess.onlyOwner());
            if (command == "bangp") {
              if (isBanchat) return reply(`Este grupo já está banido.`);
              dataGp[0].bangp = true;
              setGp(dataGp);
              reply(`Grupo banido com sucesso.`);
            } else {
              if (!isBanchat) return reply(`Este grupo não está mais banido.`);
              dataGp[0].bangp = false;
              setGp(dataGp);
              reply(`Grupo desbanido...`);
            }
            break;

          case "boton":
          case "botoff":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!isBotoff) {
              nescessario.botoff = true;
              setNes(nescessario);
              reply(
                "Desativando funções e parando a execução de comandos por membros com sucesso..."
              );
            } else if (isBotoff) {
              nescessario.botoff = false;
              setNes(nescessario);
              reply(`Ativando todos os funcionamentos do bot novamente...`);
            }
            break;

          case "antipalavrão":
          case "antipalavrao":
          case "antipalavra":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isPalavrao)
                return reply(
                  "O recurso de anti palavrões hardcore já se encontra ativo atualmente no grupo senhor(a)!"
                );
              dataGp[0].antipalavrao.active = true;
              setGp(dataGp);
              reply(
                "Ativou com sucesso o recurso de anti palavras hardcore neste grupo."
              );
            } else if (Number(args[0]) === 0) {
              if (!isPalavrao)
                return reply(
                  "O recurso de anti palavrões hardcore já se encontra desativado atualmente no grupo senhor(a)!"
                );
              dataGp[0].antipalavrao.active = false;
              setGp(dataGp);
              reply(
                "Desativou com sucesso o recurso de anti palavra harcore neste grupo.️"
              );
            } else {
              reply("1 para ativar, 0 para desativar");
            }
            break;

          case "addpalavra":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isPalavrao) return reply("Anti palavrão desativado!");
            if (args.length < 1)
              return reply(
                `Use assim: ${prefix + command} [palavrão]. Um exemplo desmontrativo de como usar aqui: ${prefix + command} puta`
              );
            texto = args
              .join(" ")
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
            if (isPalavras.includes(texto))
              return reply(
                "A palavra já foi adicionada na lista de proibições. do anti palavra, verifique..."
              );
            dataGp[0].antipalavrao.palavras.push(texto);
            setGp(dataGp);
            reply(
              `Palavrão adicionado com sucesso! Consulte a lista, usando: ${prefix + command}`
            );
            break;

          case "delpalavra":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isPalavrao) return reply("Anti palavrão desativado!");
            if (args.length < 1)
              return reply(
                `Use assim: ${prefix + command} [palavrão]. Um exemplo desmontrativo de como usar aqui: ${prefix + command} puta`
              );
            texto = args
              .join(" ")
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
            if (!isPalavras.includes(texto))
              return reply(
                "A palavra já foi removida ou nunca esteve na lista de proibições do recurso..."
              );
            var i = dataGp[0].antipalavrao.palavras.indexOf(texto);
            dataGp[0].antipalavrao.palavras.splice(i, 1);
            setGp(dataGp);
            reply(
              `Palavrão removido com sucesso da lista. Para verificar se foi removido mesmo, use o comando: ${prefix + command}`
            );
            break;

          case "listapalavrão":
          case "listapalavra":
          case "listpalavra":
            if (!isPalavrao) return reply("Anti palavrão desativado!");
            if (isPalavras.length < 0)
              return reply(`Não existe nenhum palavra proibida na lista.`);
            reply(
              `• [Total: *${isPalavras.length}*] - Lista de palavrões adicionados no grupo:\n–\n${isPalavras.map((v, index) => `*${index + 1}.* ➸  ${v}`).join("\n")}`
            );
            break;

          case "limitecaracteres":
          case "limiteflood":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isAntiFlood)
                return reply(
                  `O recurso limite de caracteres já está ativo no grupo.`
                );
              dataGp[0].limitec.active = true;
              setGp(dataGp);
              reply(`O recurso limite de caracteres foi ativado nesse grupo.`);
            } else if (Number(args[0]) === 0) {
              if (!isAntiFlood)
                return reply(
                  "O recurso limite de caracteres não está ativado no grupo."
                );
              dataGp[0].limitec.active = false;
              setGp(dataGp);
              reply(
                "O recurso limite de caracteres foi desativado nesse grupo.️"
              );
            } else {
              reply(
                `Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`
              );
            }
            break;

          case "limitec_global":
          case "limitec":
            if (!SoDono && !isnit && !ischyt) return reply(mess.onlyOwner());
            if (!isAntiFlood)
              return reply(
                `Ative este recurso primeiro ${prefix}limiteflood 1`
              );
            if (!q)
              return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`);
            if (isNaN(q) == true) return reply("Digite apenas números.");
            if (command == "limitec") {
              dataGp[0].limitec.quantidade = q;
              setGp(dataGp);
              reply(`Foi alterado o limite de caracteres para: ${q}`);
            } else {
              fs.writeFileSync(
                "./database/usuarios/flood.json",
                JSON.stringify({ limitefl: q }, null, "\t")
              );
              await reply(
                `Foi adicionado um limite global de caracteres de: ${q}`
              );
            }
            break;

          case "status":
            if (!isGroup) return reply(mess.onlyGroup());
            if (
              !isGroupAdmins &&
              !SoDono &&
              !isnit &&
              !issupre &&
              !ischyt &&
              !info.key.fromMe
            )
              return reply(mess.onlyAdmins());
            reply(
              mess.statusBot(
                isAnticall,
                isAntiPv,
                isAntiPv2,
                isAntiPv3,
                isAntiImg,
                isAntiVid,
                isAntiAudio,
                isAntiSticker,
                isAntiDDD,
                Antidoc,
                isAntiCtt,
                Antiloc,
                isAntilinkgp,
                isAntiLinkHard,
                isAntiLinkEasy,
                isAntifake,
                isAntiNotas,
                isAnticatalogo,
                isPalavrao,
                isAntiFlood,
                isWelkom,
                isWelkom2,
                isSimi,
                isAutofigu,
                isAutorepo,
                isModobn,
                isModoAluguel,
                isLevelingOn
              )
            );
            break;

          case "reiniciar":
            if (!SoDono) return reply(mess.onlyOwner());
            reply(
              "Reiniciando o sistema, em segundos já estarei de volta senhor(a) as suas ordens!"
            );
            setTimeout(async () => {
              process.exit();
            }, 1200);
            break;

          case "novoqr":
            if (!SoDono) return reply(mess.onlyOwner());
            reply(
              "Será apagado o qrcode, e irá gerar um novo, fique atento no terminal para ler novamente.."
            );
            setTimeout(async () => {
              fs.rmdirSync(qrcode, { recursive: true });
            }, 1500);
            break;

          case "emoji":
          case "semoji":
            try {
              if (!q.trim())
                return reply(
                  `Você está usando o comando de forma errada, use: *${prefix + command} [emj]/[pltf]*\n—\n• *Plataformas disponíveis:* whatsapp, facebook, google, samsung, twitter, apple, microsoft, mesengger, joypixels, openmoji, emojidex, htc, lg, mozilla, softbank, au_kddi`
                );
              if (!q.includes("/"))
                return reply(
                  `Está faltando a */*, para separar o emoji e plataforma.\n• Por exemplo: ${prefix + command} 🏃‍♂️/apple`
                );
              reply(mess.wait());
              var [emojiInput, platform] = q.split("/");
              var { emojisData } = await emoji(emojiInput);
              if (emojisData && emojisData[platform.toLowerCase()]) {
                await sendStickerFromUrl(
                  from,
                  emojisData[platform.toLowerCase()]
                );
              } else {
                return reply(`Emoji '${emojiInput}' não encontrado!`);
              }
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "emoji-mix":
          case "emojimix":
            txt = q.replace(" +", "+").replace("+ ", "+").replace(" + ", "+");
            var [emj1, emj2] = txt.split("+");
            if (!q.includes("+"))
              return reply(
                `Olá, está faltando o +, exemplo de como usar o comando aqui: *${prefix + command} 😪+🤣*`
              );
            try {
              await mention(
                `*@${sender.split("@")[0]}, estou gerando um mix entre os emojis solicitados...`
              );
              await sendStickerFromUrl(
                from,
                API_URL +
                  `/api/outros/emojimix?emoji1=${encodeURI(emj1)}&emoji2=${encodeURI(emj2)}&apikey=` +
                  API_KEY_AKAME
              );
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "figfundo":
          case "figvideo":
          case "figusemfundo":
          case "sfundo":
            if (
              ((isMedia && !info.message.videoMessage) || isQuotedImage) &&
              !q.length <= 1
            ) {
              rafa = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .imageMessage
                : info.message.imageMessage;
              reply(mess.wait());
              buff = await getFileBuffer(rafa, "image");
              bas64 = `data:image/jpeg;base64,${buff.toString("base64")}`;
              anu = args.join(" ").split("|");
              satu = anu[0] !== "" ? anu[0] : `${NomeDoBot}`;
              sd = `↳ ❪👤ฺ࣭࣪͘ꕸ▸ Feito pelo(a) usuário(a): ${pushname}`;
              dua = typeof anu[1] !== "undefined" ? anu[1] : `${sd}`;
              var mantap = await convertSticker(bas64, `${dua}`, `${satu}`);
              var sti = new Buffer.from(mantap, "base64");
              await akame.sendMessage(from, { sticker: sti }, { quoted: selo });
            } else {
              return reply(`So imagem amigo(a)!`);
            }
            break;

          case "rbale":
            if (!isQuotedSticker) return reply("Marque uma figurinha...");
            encmediats = await getFileBuffer(
              info.message.extendedTextMessage.contextInfo.quotedMessage
                .stickerMessage,
              "sticker"
            );
            reply(mess.wait());
            bas64 = `data:image/jpeg;base64,${encmediats.toString("base64")}`;
            var mantap = await convertSticker(
              bas64,
              `↳ ❪👤ฺ࣭࣪͘ꕸ▸ Feito pelo(a) usuário(a): ${pushname}`,
              `${NomeDoBot}`
            );
            var sti = new Buffer.from(mantap, "base64");
            await akame
              .sendMessage(from, { sticker: sti }, { quoted: selo })
              .catch(async (error) => {
                reply(mess.error());
              });
            break;

          case "rename":
          case "roubar":
            if (!isQuotedSticker) return reply("Marque uma figurinha...");
            encmediats = await getFileBuffer(
              info.message.extendedTextMessage.contextInfo.quotedMessage
                .stickerMessage,
              "sticker"
            );
            var kls = q;
            var pack = kls.split("/")[0];
            var author2 = kls.split("/")[1];
            if (!q)
              return reply(
                "Como você renomear a figurinha sem colocar o novo pacote e autor do sticker? Esses humanos..."
              );
            if (!pack)
              return reply(
                `Faça o certo, invés do errado senhor(a), aqui está fórmula correta de uso: *${prefix + command} pacote/autor* (mas não se esqueça de mencionar o comando ao sticker enviado anteriormente se for esse que deseja renomear certo?)`
              );
            if (!author2)
              return reply(
                `Faça o certo, invés do errado senhor(a), aqui está fórmula correta de uso: *${prefix + command} pacote/autor* (mas não se esqueça de mencionar o comando ao sticker enviado anteriormente se for esse que deseja renomear certo?)`
              );
            reply(mess.wait());
            bas64 = `data:image/jpeg;base64,${encmediats.toString("base64")}`;
            var mantap = await convertSticker(bas64, `${author2}`, `${pack}`);
            var sti = new Buffer.from(mantap, "base64");
            await akame
              .sendMessage(from, { sticker: sti }, { quoted: selo })
              .catch(async (error) => {
                reply(mess.error());
              });
            break;

          case "fstiker":
          case "fsticker":
          case "f":
            var RSM =
              info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
            var boij =
              RSM?.imageMessage ||
              info.message?.imageMessage ||
              RSM?.viewOnceMessageV2?.message?.imageMessage ||
              info.message?.viewOnceMessageV2?.message?.imageMessage ||
              info.message?.viewOnceMessage?.message?.imageMessage ||
              RSM?.viewOnceMessage?.message?.imageMessage;
            var boij2 =
              RSM?.videoMessage ||
              info.message?.videoMessage ||
              RSM?.viewOnceMessageV2?.message?.videoMessage ||
              info.message?.viewOnceMessageV2?.message?.videoMessage ||
              info.message?.viewOnceMessage?.message?.videoMessage ||
              RSM?.viewOnceMessage?.message?.videoMessage;
            if (boij) {
              var packnameStk = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${ownerName}`;
              var authorSticker = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ ❪🩸ฺ࣭࣪͘ꕸ▸ 𝐕𝐢𝐬𝐢𝐭𝐞 𝐧𝐨𝐬𝐬𝐨 𝐬𝐢𝐭𝐞:\n• ↳ https://yurimodz-apis.xyz`;
              reply(mess.wait());
              owgi = await getFileBuffer(boij, "image");
              let ENC_MEDIA1 = await sendImageAsSticker(
                akame,
                from,
                owgi,
                info,
                { packname: packnameStk, author: authorSticker }
              );
              await DLT_FL(ENC_MEDIA1);
            } else if (boij2 && boij2?.seconds < 11) {
              var packnameStk = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${ownerName}`;
              var authorSticker = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ ❪🩸ฺ࣭࣪͘ꕸ▸ 𝐕𝐢𝐬𝐢𝐭𝐞 𝐧𝐨𝐬𝐬𝐨 𝐬𝐢𝐭𝐞:\n• ↳ https://yurimodz-apis.xyz`;
              reply(mess.wait());
              owgi = await getFileBuffer(boij2, "video");
              let ENC_MEDIA2 = await sendVideoAsSticker(
                akame,
                from,
                owgi,
                info,
                { packname: packnameStk, author: authorSticker }
              );
              await DLT_FL(ENC_MEDIA2);
            } else {
              reply(
                `Envie uma imagem, vídeo ou gif com legenda: ${prefix}sticker (duração do adesivo de vídeo de 1 a 10 segundos)`
              );
            }
            break;

          case "st":
          case "stk":
          case "sticker":
          case "s":
            var RSM =
              info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
            var boij2 =
              RSM?.imageMessage ||
              info.message?.imageMessage ||
              RSM?.viewOnceMessageV2?.message?.imageMessage ||
              info.message?.viewOnceMessageV2?.message?.imageMessage ||
              info.message?.viewOnceMessage?.message?.imageMessage ||
              RSM?.viewOnceMessage?.message?.imageMessage;
            var boij =
              RSM?.videoMessage ||
              info.message?.videoMessage ||
              RSM?.viewOnceMessageV2?.message?.videoMessage ||
              info.message?.viewOnceMessageV2?.message?.videoMessage ||
              info.message?.viewOnceMessage?.message?.videoMessage ||
              RSM?.viewOnceMessage?.message?.videoMessage;
            if (boij2) {
              var pack = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${ownerName}`;
              var author2 = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ ❪🩸ฺ࣭࣪͘ꕸ▸ 𝐕𝐢𝐬𝐢𝐭𝐞 𝐧𝐨𝐬𝐬𝐨 𝐬𝐢𝐭𝐞:\n• ↳ https://yurimodz-apis.xyz`;
              owgi = await getFileBuffer(boij2, "image");
              let encmediaa = await sendImageAsSticker2(
                akame,
                from,
                owgi,
                info,
                { packname: pack, author: author2 }
              );
              await DLT_FL(encmediaa);
            } else if (boij && boij.seconds < 11) {
              var pack = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${ownerName}`;
              var author2 = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ ❪🩸ฺ࣭࣪͘ꕸ▸ 𝐕𝐢𝐬𝐢𝐭𝐞 𝐧𝐨𝐬𝐬𝐨 𝐬𝐢𝐭𝐞:\n• ↳ https://yurimodz-apis.xyz`;
              owgi = await getFileBuffer(boij, "video");
              let encmedia = await sendVideoAsSticker2(
                akame,
                from,
                owgi,
                info,
                { packname: pack, author: author2 }
              );
              await DLT_FL(encmedia);
            } else {
              reply(
                `Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando: ${prefix + command} (mencionando a mídia)`
              );
            }
            break;

          case "toimg":
            if (!isQuotedSticker)
              return reply(
                "Por favor, *mencione um sticker* para executar o comando."
              );
            try {
              buff = await getFileBuffer(
                info.message.extendedTextMessage.contextInfo.quotedMessage
                  .stickerMessage,
                "sticker"
              );
              await akame
                .sendMessage(from, { image: buff }, { quoted: selo })
                .catch(async (error) => {
                  reply("Ocorreu um erro ao converter o sticker para imagem.");
                });
            } catch (error) {
              console.log(error);
            }
            break;

          case "metadinha":
            try {
              await reagir(from, "💑️");
              anuData = await fetchJson(
                "https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json"
              );
              let selectRandom =
                anuData[Math.floor(Math.random() * anuData.length)];
              await akame.sendMessage(
                from,
                {
                  image: { url: selectRandom.male },
                  caption: "• Perfil Masculino",
                },
                { quoted: selo }
              );
              await akame.sendMessage(
                from,
                {
                  image: { url: selectRandom.female },
                  caption: `• Perfil Feminino`,
                },
                { quoted: selo }
              );
            } catch (e) {
              reply(mess.error());
            }
            break;

          case "comunismo":
          case "bolsonaro":
          case "bnw":
          case "beautiful":
          case "blur":
          case "affect":
          case "del":
          case "circle":
          case "dither":
          case "facepalm":
          case "invert":
          case "magik":
          case "rotate":
          case "rip":
          case "jail":
          case "trash":
          case "pixelate":
          case "sepia":
          case "wanted":
          case "wasted":
          case "lgbt":
          case "karaba":
            try {
              if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
                await reagir(
                  from,
                  "🖼"
                ); /* Reação para aguadar o sucesso da solicitação... '🖼' */
                reply(mess.wait());
                post = isQuotedImage
                  ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                      .message.extendedTextMessage.contextInfo.message
                      .imageMessage
                  : info.message.imageMessage;
                imagem = await downloadContentFromMessage(post, "image");
                base64 = Buffer.from([]);
                for await (const send of imagem) {
                  base64 = Buffer.concat([base64, send]);
                }
                link = await upload(base64);
                await akame.sendMessage(
                  from,
                  {
                    image: {
                      url:
                        API_URL +
                        `/api/canvas/${command}?link=${link}&apikey=` +
                        API_KEY_AKAME,
                    },
                  },
                  { quoted: selo }
                );
                await reagir(
                  from,
                  "✅️"
                ); /* Sucesso? Vai reagir a mensagem com o emoji '✅️' */
              } else {
                await reagir(
                  from,
                  "😿"
                ); /* Triste? Não mencionou nada ou não seguiu as diretrizes... */
                reply("Mencione uma imagem para atribuir o efeito a foto.");
              }
            } catch (error) {
              await reagir(
                from,
                "😿"
              ); /* Triste? Não mencionou nada ou não seguiu as diretrizes... */
              reply(mess.error());
            }
            break;

          case "substituir":
            if (!SoDono && !isnit) return reply(mess.onlyOwner());
            if ((isMedia && !info.message.videoMessage) || isQuotedDocument) {
              media = isQuotedDocument
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .documentMessage
                : info.message.documentMessage;
              rane = getRandom("." + (await getExtension(media.mimetype)));
              doc = await getFileBuffer(media, "document");
              fs.writeFileSync(q, doc);
              await akame.sendMessage(
                from,
                {
                  text: "O arquivo foi substituído para outro local com sucesso.",
                },
                { quoted: selo }
              );
            } else {
              reply("Marque o documento ou arquivo..");
            }
            break;

          case "index-bot":
            if (!SoDono) return reply(mess.onlyOwner());
            if ((isMedia && !info.message.videoMessage) || isQuotedDocument) {
              media = isQuotedDocument
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .documentMessage
                : info.message.documentMessage;
              rane = getRandom("." + (await getExtension(media.mimetype)));
              doc = await getFileBuffer(media, "document");
              fs.writeFileSync("./index.js", doc);
              await akame.sendMessage(
                from,
                { text: "O arquivo './index.js' foi atualizado com sucesso." },
                { quoted: selo }
              );
            } else {
              reply(
                "Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir.."
              );
            }
            break;

          case "getcase":
          case "puxarcase":
            try {
              if (!SoDono) return reply(mess.onlyOwner());
              reply("Seu perdido é uma ordem! Aguarde um pouco mestre! <3");
              const getCase = (cases) => {
                return (
                  "case " +
                  `'${cases}'` +
                  fs
                    .readFileSync("./index.js")
                    .toString()
                    .split("case '" + cases + "'")[1]
                    .split("break")[0] +
                  "break"
                );
              };
              await sleep(500);
              reply(`${getCase(q)}`);
            } catch (error) {
              reply(
                "A case não foi encontrada, você deve ter escrito errado..."
              );
            }
            break;
          /*
case 'figaleatoria':
reply("Estou gerando sua figurinha, aguarde um pouco amigo(a)...")
akame.sendMessage(from, {sticker: {url: API_URL+`/api/stickera?apikey=`+API_KEY_AKAME}}, {quoted: selo})
.catch(async(error) => {
return reply(mess.error());
});
break

case 'figurinhas':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖🌟 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasAleatorias() {
await akame.sendMessage(sender, {sticker: {url: API_URL+`/api/stickera?apikey=`+API_KEY_AKAME}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasAleatorias();
}
break

case 'figuemoji':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖🌟 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhaEmoji() {
await akame.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_emoji?apikey=`+API_KEY_AKAME}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhaEmoji();
}
break

case 'figuflork':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖🌟 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhaFlork() {
await akame.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_flork?apikey=`+API_KEY_AKAME}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhaFlork();
}
break

case 'figumemes':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖🌟 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasMemes() {
await akame.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_memes?apikey=`+API_KEY_AKAME}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasMemes();
}
break

case 'figubebe':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖🌟 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasBabys() {
await akame.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_bebe?apikey=`+API_KEY_AKAME}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasBabys();
}
break

case 'figucoreana':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖🌟 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasCoreana() {
await akame.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_coreana?apikey=`+API_KEY_AKAME}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasCoreana();
}
break

case 'figuanime':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖🌟 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FiguRandolaAnime() {
await akame.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_anime?apikey=`+API_KEY_AKAME}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FiguRandolaAnime();
}
break

case 'figufunny':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖🌟 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasFunny() {
await akame.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_engracada?apikey=`+API_KEY_AKAME}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasFunny();
}
break

case 'figuanimais':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖🌟 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasAnimais() {
await akame.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_animais?apikey=`+API_KEY_AKAME}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasAnimais();
}
break

case 'figudesenho':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖🌟 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasDesenho() {
await akame.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_desenho?apikey=`+API_KEY_AKAME}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasDesenho();
}
break

case 'figuraiva':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖🌟 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasRaivosas() {
await akame.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_raiva?apikey=`+API_KEY_AKAME}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasRaivosas();
}
break

case 'figuroblox':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖🌟 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasRoblox() {
await akame.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_roblox?apikey=`+API_KEY_AKAME}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
FigurinhasRoblox();
}
break
*/
          case "bann":
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (!menc_os2 || menc_jid2[1])
              return reply(
                "Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário..."
              );
            if (!JSON.stringify(groupMembers).includes(menc_os2))
              return reply("Este usuário já foi removido ou saiu do grupo.");
            if (vip.includes(menc_os2))
              return await mentions(
                `@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`,
                [menc_os2],
                true
              );
            if (groupAdmins.includes(menc_os2))
              return mentions(
                `@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`,
                [menc_os2],
                true
              );
            if (botNumber.includes(menc_os2))
              return reply(
                "Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você"
              );
            if (numerodono.includes(menc_os2))
              return reply("Não posso remover meu dono 🤧");
            await akame.sendMessage(from, {
              text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) -`,
              mentions: [menc_os2],
            });
            await akame.groupParticipantsUpdate(from, [menc_os2], "remove");
            break;

          case "band":
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            try {
              if (!menc_os2 || menc_jid2[1])
                return reply(
                  "Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário..."
                );
              if (IS_DELETE) {
                setTimeout(async () => {
                  await akame.sendMessage(from, {
                    delete: {
                      remoteJid: from,
                      fromMe: false,
                      id: info.key.id,
                      participant: sender,
                    },
                  });
                }, 500);
              }
              if (!JSON.stringify(groupMembers).includes(menc_os2))
                return reply(
                  "Este usuário não se encontra mais no grupo senhor(a), não tem como remover."
                );
              if (botNumber.includes(menc_os2))
                return reply(
                  "Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você."
                );
              if (numerodono.includes(menc_os2))
                return reply("Não posso remover meu dono 🤧");
              await akame.sendMessage(from, {
                text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`,
                mentions: [menc_os2],
              });
              await akame.groupParticipantsUpdate(from, [menc_os2], "remove");
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "add":
          case "unkick":
            if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (!q && info.message.extendedTextMessage === null)
              return reply(
                "Marque a mensagem ou coloque o número de quem você quer adicionar no grupo."
              );
            try {
              useradd = `${args.join(" ").replace(/\D/g, "")}`
                ? `${args.join(" ").replace(/\D/g, "")}`
                : info.message.extendedTextMessage.contextInfo.participant;
              let id = `${useradd.replace(/\D/g, "")}`;
              if (!id) return reply(`Número inválido.`);
              let [result] = await akame.onWhatsApp(id);
              if (!result)
                return reply(`Esse número não está registrado no WhatsApp.`);
              let response = await akame.groupParticipantsUpdate(
                from,
                [result.jid],
                "add"
              );
              if (response[0].status == "409") {
                await akame.sendMessage(
                  from,
                  {
                    text: `Ele já está no grupo, como eu vou adicionar?`,
                    mentions: [result.jid, sender],
                  },
                  { quoted: selo }
                );
              } else if (response[0].status == "403") {
                await akame.sendMessage(
                  from,
                  {
                    text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta.`,
                    mentions: [result.jid, sender],
                  },
                  { quoted: selo }
                );
              } else if (response[0].status == "408") {
                await akame.sendMessage(
                  from,
                  {
                    text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`,
                    mentions: [result.jid, sender],
                  },
                  { quoted: selo }
                );
              } else if (response[0].status == "401") {
                await akame.sendMessage(
                  from,
                  {
                    text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot.`,
                    mentions: [result.jid, sender],
                  },
                  { quoted: selo }
                );
              } else if (response[0].status == "200") {
                await akame.sendMessage(
                  from,
                  {
                    text: `Prontinho fiz o que você pediu.`,
                    mentions: [result.jid, sender],
                  },
                  { quoted: selo }
                );
              } else {
                await akame.sendMessage(
                  from,
                  {
                    text: `Ocorreu um erro ao adicionar o(a) *@${result.jid.split("@")[0]}* no grupo.`,
                    mentions: [result.jid, sender],
                  },
                  { quoted: selo }
                );
              }
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "ban":
          case "banir":
          case "kick":
          case "avadakedavra":
            if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            try {
              if (!menc_os2 || menc_jid2[1])
                return reply(
                  "Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário..."
                );
              if (!JSON.stringify(groupMembers).includes(menc_os2))
                return reply("Este usuário já foi removido do grupo ou saiu.");
              if (botNumber.includes(menc_os2))
                return reply(
                  "Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você"
                );
              if (JSON.stringify(numerodono).indexOf(menc_os2) >= 0)
                return reply("Não posso remover meu dono 🤧");
              await akame.sendMessage(from, {
                text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`,
                mentions: [menc_os2],
              });
              await akame.groupParticipantsUpdate(from, [menc_os2], "remove");
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "promover":
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (!menc_os2 || menc_jid2[1])
              return reply(
                "Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário..."
              );
            if (!JSON.stringify(groupMembers).includes(menc_os2))
              return reply(
                "Este usuário foi removido do grupo ou saiu, não será possível promover.."
              );
            akame.sendMessage(from, {
              text: `@${menc_os2.split("@")[0]} Foi promovido(a) para adm com sucesso.`,
              mentions: [menc_os2],
            });
            akame.groupParticipantsUpdate(from, [menc_os2], "promote");
            break;

          case "rebaixar":
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (!menc_os2 || menc_jid2[1])
              return reply(
                "Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário..."
              );
            if (!JSON.stringify(groupMembers).includes(menc_os2))
              return reply(
                "Este usuário foi removido do grupo ou saiu, não será possível rebaixar.."
              );
            akame.sendMessage(from, {
              text: `@${menc_os2.split("@")[0]} Foi rebaixado para [ MEMBRO COMUM ] com sucesso.`,
              mentions: [menc_os2],
            });
            akame.groupParticipantsUpdate(from, [menc_os2], "demote");
            break;

          case "sorteio":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!q)
              return reply(
                `Coloque algo após o comando, por exemplo: *${prefix}sorteio* _de 100 R$_`
              );
            try {
              await mention(
                `🤖🎉 Parabéns *@${groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)].id.split("@")[0]}*, você acaba de ser contemplado(a) como o(a) ganhador(a) do sorteio...\n–\n• Para mais informações entre em contato com o(a) adm responsável pelo sorteio: _“${q}”_.`
              );
            } catch (error) {
              reply("Deu erro, tente novamente :/");
            }
            break;

          case "sorteionumero":
          case "sorteionumeros":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!args.length > 1)
              return reply(
                `Coloque algo após o comando, por exemplo: *${prefix}sorteio* _de 100 R$_`
              );
            try {
              reply(
                `🤖🎉 Parabéns ao sortudo(a) do número *${Math.floor(Math.random() * groupMetadata.participants.length)}*, por ganhar o sorteio!\n–\n• Para mais informações entre em contato com o(a) adm responsável pelo sorteio: _“${q}”_.`
              );
            } catch (error) {
              reply("Deu erro, tente novamente :/");
            }
            break;

          case "nuke":
          case "arquivargp":
            if (!SoDono && !isnit)
              return reply("Só dono pode utilizar este comando...");
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (info.key.fromMe) return;
            blup = [];
            for (i of groupMembers) {
              if (!numerodono.includes(i.id)) blup.push(i.id);
            }
            blup.splice(blup.indexOf(botNumber), 1);
            for (i = 0; i < blup.length; i++) {
              await sleep(500);
              await akame.groupParticipantsUpdate(from, [blup[i]], "remove");
            }
            break;

          case "ttp":
            if (!q)
              return reply(
                `Coloque o texto que você quiser!\n- *Por exemplo:* ${prefix + command} Eu me amo`
              );
            reply(mess.wait());
            string = args.join(" ") || "Texto indefinido";
            post =
              API_URL +
              `/api/canvas/ttp?texto=${string}&apikey=` +
              API_KEY_AKAME;
            sendStickerFromUrl(from, post, { quoted: selo }).catch((e) => {
              reply(mess.error());
            });
            break;

          case "togif":
            if (!isQuotedSticker)
              return reply(
                "Por favor, atribua uma figurinha animada à mensagem para realizar a conversão para vídeo/gif."
              );
            try {
              if (
                ((isMedia && !info.message.videoMessage) || isQuotedSticker) &&
                !q.length <= 1
              ) {
                const { FiguMp4OuGif } = require("./arquivos/funcoes/togif.js");
                getBufferWebP = await getFileBuffer(
                  info.message.extendedTextMessage.contextInfo.quotedMessage
                    .stickerMessage,
                  "sticker"
                );
                fs.writeFileSync(
                  "./database/data/media/sticker/convert.webp",
                  getBufferWebP
                );
                outputFile = "./database/data/media/sticker/convert.webp";
                convertWebP = await FiguMp4OuGif(outputFile);
                await akame
                  .sendMessage(
                    from,
                    {
                      video: { url: convertWebP },
                      gifPlayback: true,
                      fileName: "sticker-sb.gif",
                    },
                    { quoted: selo }
                  )
                  .catch(async (error) => {
                    await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao enviar o resultado da conversão do WebP para MP4.
                    await DLT_FL(outputFile); // Apagar o arquivo, caso ocorrer um erro na conversão entre eles.
                    console.log(error);
                  });
              }
            } catch (error) {
              await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao realizar a conversão do WebP para MP4.
              console.log(error);
            }
            break;

          case "attp":
            if (!q)
              return reply(
                `Coloque o texto que você quiser após o comando, por exemplo: *${prefix + command}* _Eu me amo_`
              );
            reply(mess.wait());
            await akame
              .sendMessage(
                from,
                {
                  sticker: {
                    url:
                      API_URL +
                      `/api/canvas/attp?texto=${q}&apikey=` +
                      API_KEY_AKAME,
                  },
                },
                { quoted: selo }
              )
              .catch(async (error) => {
                return reply(mess.error());
              });
            break;

          case "nick":
          case "gerarnick":
          case "fazernick":
          case "estilizar":
            try {
              if (ANT_LTR_MD_EMJ(q))
                return reply(
                  "Ao realizar a solicitação de criação foi detectada letras modificadas ou emojis, ou seja, não se pode conter emojis e letras modificadas."
                );
              if (!q)
                return reply(
                  `Escreva um texto para eu enviar ele com letras modificadas.\n• *Exemplo:* ${prefix + command} akame`
                );
              DATABC = await fetchJson(
                API_URL +
                  `/api/outros/styletext?nome=${q}&apikey=` +
                  API_KEY_AKAME
              );
              reply(
                `• [Total: *${DATABC.length}*] - Estilos aplicados com sucesso ao texto: “${q}”\n–\n` +
                  DATABC.map((m, index) => `${index + 1}. ${m}`).join("\n—\n")
              );
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "chance":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            if (args.length < 1)
              return reply(
                `Você precisa digitar da forma correta... Por exemplo: *${prefix}chance* _do jubileu ser gay_`
              );
            await akame.sendMessage(
              from,
              {
                text: `😵‍💫🌟 - A chance _“${q}”_ é de: *${Math.floor(Math.random() * 100)}%*. Eai, foi o que a probabilidade que esperava jovem?`,
                mentions: [sender],
              },
              { quoted: selo }
            );
            break;

          case "namorar":
          case "pediremnamoro":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!menc_os2)
              return reply(
                "Marque a mensagem ou o @ que queira pedir ela em namoro. Se você tomar um fora, juízo!"
              );
            if (botNumber.includes(menc_os2))
              return reply(
                "Não é possível pedir o bot em namoro, seu baitola. 🙄"
              );
            if (JSON.stringify(namoro2).includes(menc_os2))
              return reply(`Este usuário já foi pedido em namoro...`);
            if (
              JSON.stringify(namoro1).includes(menc_os2) &&
              namoro1[namoro1.map((i) => i.usu1).indexOf(menc_os2)].namorados ==
                false
            )
              return reply(
                `Essa pessoa já pediu alguém em namoro... Sinto muito! 😕`
              );
            if (
              JSON.stringify(namoro1).includes(menc_os2) &&
              namoro1[namoro1.map((i) => i.usu1).indexOf(menc_os2)].namorados ==
                true
            )
              return reply(
                `Não será possível pedir essa pessoa em namoro, pois a mesma já está com outro(a). 🌚`
              );
            if (
              JSON.stringify(namoro1).includes(sender) &&
              namoro1[namoro1.map((i) => i.usu1).indexOf(sender)].namorados ==
                false
            )
              return await mention(
                `Você já pediu para namorar com o (a) *@${namoro1[namoro1.map((i) => i.usu1).indexOf(sender)].usu2}*. Não brinque com os sentimentos dos outros! Se decida logo ou digite: *${prefix}cancelarpedido*.`
              );
            if (
              JSON.stringify(namoro1).includes(sender) &&
              namoro1[namoro1.map((i) => i.usu1).indexOf(sender)].namorados ==
                true
            )
              return await mention(
                `Você já está namorando com o (a) *@${namoro1[namoro1.map((i) => i.usu1).indexOf(sender)].usu2}*...`
              );
            await reagir(from, "💍");
            namoro1.push({
              usu1: sender,
              usu2: menc_os2.split("@")[0],
              namorados: false,
              idgp: from,
              hora: hourofc,
              data: dattofc,
            });
            fs.writeFileSync(
              "./database/func/namoro1.json",
              JSON.stringify(namoro1, null, 2)
            );
            namoro2.push({
              id: menc_os2,
              pedido: sender.split("@")[0],
              idgp: from,
            });
            fs.writeFileSync(
              "./database/func/namoro2.json",
              JSON.stringify(namoro2)
            );
            await mention(
              `🥳| Felicitações *@${menc_os2.split("@")[0]}*!\nな ⃝̸̷͓᪺⃔͜O *@${sender.split("@")[0]}* acaba de pedir sua mão em namoro!\nな ⃝̸̷͓᪺⃔͜Eai você aceita o pedido, *sim ou não?*`
            );
            break;

          case "cancelarpedido":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!JSON.stringify(namoro1).includes(sender))
              return reply("Não há pedido de namoro para cancelar.");
            if (
              namoro1[namoro1.map((i) => i.usu1).indexOf(sender)].namorados ==
              true
            )
              return reply(
                "Não é possível cancelar o pedido de namoro depois de aceito."
              );
            namoro1.splice(namoro1.map((i) => i.usu1).indexOf(sender), 1);
            fs.writeFileSync(
              "./database/func/namoro1.json",
              JSON.stringify(namoro1, null, 2)
            );
            namoro2.splice(
              namoro2
                .map((i) => i.id)
                .indexOf(
                  namoro1[namoro1.map((i) => i.usu1).indexOf(sender)].usu2 +
                    "@s.whatsapp.net"
                ),
              1
            );
            fs.writeFileSync(
              "./database/func/namoro2.json",
              JSON.stringify(namoro2)
            );
            reply("❌| Pedido de namoro cancelado com sucesso.");
            break;

          case "terminar_namoro":
            if (!JSON.stringify(namoro1).includes(sender))
              return reply(`Você não está namorando com ninguém. Sinto muito!`);
            D1 = namoro1.map((i) => i.usu1).indexOf(sender);
            D2 = namoro1
              .map((a) => a.usu1)
              .indexOf(`${namoro1[D1].usu2}@s.whatsapp.net`);
            namoro1[D2].namorados = false;
            reply(
              `Agora você está totalmente solteiro, notifiquei a(o) sua/seu parceiro sobre o término.`
            );
            await akame.sendMessage(
              `${namoro1[D1].usu2}@s.whatsapp.net`,
              {
                text: `Tenho uma notícia ruim sobre seu namoro, ele(a) acaba de terminar.\n–\n• Seja feliz e lembre dos todos os bons momentos que vocês tiveram juntos.`,
              },
              { quoted: selo }
            );
            namoro1.splice(D2, 1);
            fs.writeFileSync(
              "./database/func/namoro1.json",
              JSON.stringify(namoro1, null, 2)
            );
            namoro1.splice(D1, 1);
            fs.writeFileSync(
              "./database/func/namoro1.json",
              JSON.stringify(namoro1, null, 2)
            );
            break;

          case "minhadupla":
          case "dupla":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!JSON.stringify(namoro1).includes(sender))
              return reply(`Você não está namorando com ninguém. Sinto muito!`);
            await reagir(from, "❤️‍🩹");
            D1 = namoro1.map((i) => i.usu1).indexOf(sender);
            if (namoro1[D1].namorados == false)
              return reply(
                `A pessoa que você pediu em namoro não aceitou o pedido ainda. Portanto, não é possível consultar os dados da dupla.️`
              );
            await mention(
              `@${namoro1[D1].usu1.split("@")[0]} namora com @${namoro1[D1].usu2}\n–\n• O pedido de namoro ocorreu às ${namoro1[D1].hora} do dia ${namoro1[D1].data}.\n–\n• Para realizar o término do namoro é fácil, use o comando: *${prefix}terminar_namoro*`
            );
            break;

          case "nazista":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de nazista: *@${sender_ou_n.split("@")[0]}* aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgnazista },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa nazista?\n• Porcentagem de chance de ser uma pessoa nazista: *${random}%.* `,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "gay":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de gay: @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              feio = random;
              boiola = random;
              if (boiola < 20) {
                var bo = "hmm... você é hetero...";
              } else if (boiola == 21) {
                var bo = "+/- boiola";
              } else if (boiola == 23) {
                var bo = "+/- boiola";
              } else if (boiola == 24) {
                var bo = "+/- boiola";
              } else if (boiola == 25) {
                var bo = "+/- boiola";
              } else if (boiola == 26) {
                var bo = "+/- boiola";
              } else if (boiola == 27) {
                var bo = "+/- boiola";
              } else if (boiola == 2) {
                var bo = "+/- boiola";
              } else if (boiola == 29) {
                var bo = "+/- boiola";
              } else if (boiola == 30) {
                var bo = "+/- boiola";
              } else if (boiola == 31) {
                var bo = "tenho minha desconfiança...";
              } else if (boiola == 32) {
                var bo = "tenho minha desconfiança...";
              } else if (boiola == 33) {
                var bo = "tenho minha desconfiança...";
              } else if (boiola == 34) {
                var bo = "tenho minha desconfiança...";
              } else if (boiola == 35) {
                var bo = "tenho minha desconfiança...";
              } else if (boiola == 36) {
                var bo = "tenho minha desconfiança...";
              } else if (boiola == 37) {
                var bo = "tenho minha desconfiança...";
              } else if (boiola == 3) {
                var bo = "tenho minha desconfiança...";
              } else if (boiola == 39) {
                var bo = "tenho minha desconfiança...";
              } else if (boiola == 40) {
                var bo = "tenho minha desconfiança...";
              } else if (boiola == 41) {
                var bo = "você é né?";
              } else if (boiola == 42) {
                var bo = "você é né?";
              } else if (boiola == 43) {
                var bo = "você é né?";
              } else if (boiola == 44) {
                var bo = "você é né?";
              } else if (boiola == 45) {
                var bo = "você é né?";
              } else if (boiola == 46) {
                var bo = "você é né?";
              } else if (boiola == 47) {
                var bo = "você é né?";
              } else if (boiola == 4) {
                var bo = "você é né?";
              } else if (boiola == 49) {
                var bo = "você é né?";
              } else if (boiola == 50) {
                var bo = "você é ou não?";
              } else if (boiola > 51) {
                var bo = "você é gay...";
              }
              await akame.sendMessage(
                from,
                {
                  image: { url: imggay },
                  caption: `Qual é a porcentagem de chance do(a) *@${sender_ou_n.split("@")[0]}* ser gay?\n• *${random}% homossexual*, ${bo}`,
                  mentions: [sender_ou_n],
                  thumbnail: null,
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "feio":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de feio: *@${sender_ou_n.split("@")[0]}* aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              feio = random;
              if (feio < 20) {
                var bo = "É não é feio";
              } else if (feio == 21) {
                var bo = "+/- feio";
              } else if (feio == 23) {
                var bo = "+/- feio";
              } else if (feio == 24) {
                var bo = "+/- feio";
              } else if (feio == 25) {
                var bo = "+/- feio";
              } else if (feio == 26) {
                var bo = "+/- feio";
              } else if (feio == 27) {
                var bo = "+/- feio";
              } else if (feio == 2) {
                var bo = "+/- feio";
              } else if (feio == 29) {
                var bo = "+/- feio";
              } else if (feio == 30) {
                var bo = "+/- feio";
              } else if (feio == 31) {
                var bo = "ainda tá na média";
              } else if (feio == 32) {
                var bo = "dá pra pegar umas(ns) novinha(o) ainda";
              } else if (feio == 33) {
                var bo = "Da pra pegar umas(ns) novinha(o) ainda";
              } else if (feio == 34) {
                var bo = "é fein, mas tem baum coração";
              } else if (feio == 35) {
                var bo = "tá na média, mas não deixa de ser feii";
              } else if (feio == 36) {
                var bo = "bonitin mas é feio com orgulho";
              } else if (feio == 37) {
                var bo = "feio e preguiçoso(a), vai se arrumar praga feia";
              } else if (feio == 3) {
                var bo = "tenho ";
              } else if (feio == 39) {
                var bo = "feio, mas um banho e se arrumar, deve resolver";
              } else if (feio == 40) {
                var bo =
                  "fein,  mas não existe gente feia, existe gente que não conhece os produtos jequity";
              } else if (feio == 41) {
                var bo = "você é Feio, mas é legal, continue assim";
              } else if (feio == 42) {
                var bo =
                  "Nada que uma maquiagem e se arrumar, que não resolva.";
              } else if (feio == 43) {
                var bo = "Feio que dói de ver, compra uma máscara que melhora";
              } else if (feio == 44) {
                var bo = "Feio mas nada que um saco na cabeça não resolva né!?";
              } else if (feio == 45) {
                var bo = "você é feio, mas tem bom gosto";
              } else if (feio == 46) {
                var bo = "feio mas tem muitos amigos";
              } else if (feio == 47) {
                var bo = "é feio mas tem lábia pra pegar várias novinha";
              } else if (feio == 4) {
                var bo = "feio e ainda não sabe se vestir, vixi";
              } else if (feio == 49) {
                var bo = "feiooo dms vey.";
              } else if (feio == 50) {
                var bo = "você é feio, mas não se encherga.";
              } else if (feio > 51) {
                var bo = "você é feio demais bixo.";
              }
              await akame.sendMessage(
                from,
                {
                  image: { url: imgfeio },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa feia?\n• A porcentagem de chance é *${random}%*, ${bo}`,
                  mentions: [sender_ou_n],
                  thumbnail: null,
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "corno":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a ficha de corno @${sender_ou_n.split("@")[0]}, aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgcorno },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa chifruda?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "vesgo":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a ficha de vesgo @${sender_ou_n.split("@")[0]}, aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgvesgo },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa vesga?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "bebado":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a ficha de bebado(a) @${sender_ou_n.split("@")[0]}, aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgbebado },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "gado":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a ficha de gado @${sender_ou_n.split("@")[0]}, aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imggado },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um gado?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "gostoso":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de gostoso @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imggostoso },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`,
                  gifPlayback: true,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "gostosa":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de gostosa @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imggostosa },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`,
                  gifPlayback: true,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "sigma":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de sigma @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgsigma },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa sigma?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "beta":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de beta @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgbeta },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um beta?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "baiano":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de baiano @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgbaiano },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "baiana":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de baiana @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgbaiana },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "carioca":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de carioca @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgcarioca },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa carioca?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "louco":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de louco @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imglouco },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "louca":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de louca @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imglouca },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "safada":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de safada @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgsafada },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "safado":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de safado @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgsafado },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "macaco":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de macaco @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgmacaco },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um macaco?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "macaca":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de macaca @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgmacaca },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma macaca?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "puta":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await akame.sendMessage(
              from,
              {
                text: `Pesquisando a sua ficha de puta @${sender_ou_n.split("@")[0]} aguarde...`,
                mentions: [sender_ou_n],
              },
              { quoted: selo }
            );
            setTimeout(async () => {
              random = `${Math.floor(Math.random() * 110)}`;
              await akame.sendMessage(
                from,
                {
                  image: { url: imgputa },
                  caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma puta?\n• A porcentagem de chance é *${random}%*`,
                  mentions: [sender_ou_n],
                },
                { quoted: selo }
              );
            }, 7000);
            break;

          case "morte":
          case "death":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            if (args.length == 0)
              return reply(
                `Está faltando o nome da pessoa! Por exemplo: ${prefix + command} Victor`
              );
            predea = await axios.get(
              `https://api.agify.io/?name=${encodeURIComponent(args[0])}`
            );
            if (predea.data.age == null)
              return reply(
                `Você inseriu um nome invalido, certifique-se de inserir um sem acentos, emojis, números e outros.`
              );
            await akame.sendMessage(
              from,
              {
                video: { url: deathcmd },
                gifPlayback: true,
                caption: `Pessoas com este nome citado “${predea.data.name}” tendem a morrer aos ${predea.data.age} anos.`,
                mentions: [sender],
              },
              { quoted: selo }
            );
            break;

          case "matar":
          case "mata":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            if (!menc_os2 || menc_jid2[1])
              return reply(
                "marque o alvo que você quer matar, a mensagem ou o @"
              );
            akame.sendMessage(
              from,
              {
                video: { url: matarcmd },
                gifPlayback: true,
                caption: `Você acabou de matar o(a) *@${menc_os2.split("@")[0]}*, seu... 😵‍💫💅🏻`,
                mentions: [menc_os2],
              },
              { quoted: selo }
            );
            break;

          case "beijo":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            if (!menc_os2 || menc_jid2[1])
              return reply(
                "Marque a pessoa que você quer beijar, a mensagem ou o @"
              );
            await akame.sendMessage(
              from,
              {
                video: { url: beijocmd },
                gifPlayback: true,
                caption: `Você acabou de mandar um beijo gostoso para o(a) *@${menc_os2.split("@")[0]}*!`,
                mentions: [menc_os2],
              },
              { quoted: selo }
            );
            break;

          case "tapa":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            if (!menc_os2 || menc_jid2[1])
              return reply(
                "Marque o alvo que você quer da um tapa, a mensagem ou o @."
              );
            await akame.sendMessage(
              from,
              {
                video: { url: tapacmd },
                gifPlayback: true,
                caption: `Você acabou de da um tapa na raba da *@${menc_os2.split("@")[0]}*. 😼`,
                mentions: [menc_os2],
              },
              { quoted: selo }
            );
            break;

          case "chute":
          case "chutar":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            if (!menc_os2 || menc_jid2[1])
              return reply(
                "Marque o alvo que você quer da um chute, a mensagem ou o @"
              );
            await akame.sendMessage(
              from,
              {
                video: { url: chutecmd },
                gifPlayback: true,
                caption: `Você acabou de dar um chute em *@${menc_os2.split("@")[0]}*.`,
                mentions: [menc_os2],
              },
              { quoted: selo }
            );
            break;

          case "dogolpe":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            if (!menc_os2 || menc_jid2[1])
              return reply(
                "Marque a mensagem com o comando ou marque o @ do usuário.."
              );
            randomF = [
              "em iludir pessoas",
              "em ferir os sentimentos",
              "em dar chifre",
            ];
            await akame.sendMessage(
              from,
              {
                text: `🌟☠️ *@${menc_os2.split("@")[0]}* é especialista *${randomF[Math.floor(Math.random() * randomF.length)]}*.`,
                mentions: [menc_os2],
              },
              { quoted: selo }
            );
            break;

          case "shipo":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            if (!menc_os2)
              return reply(
                "Marque uma pessoa do grupo para encontrar o par dela."
              );
            await mention(
              `🌟 Eu shipo *@${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split("@")[0]} & @${menc_os2.split("@")[0]}* com uma porcentagem de *${Math.floor(Math.random() * 100) + "%"}*.`
            );
            break;

          case "casal":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await reagir(from, "💘");
            var m1 =
              groupMembers[Math.floor(Math.random() * groupMembers.length)].id;
            var m2 =
              groupMembers[Math.floor(Math.random() * groupMembers.length)].id;
            try {
              ppimg = await akame.profilePictureUrl(m1);
            } catch (erro) {
              ppimg = "https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg";
            }
            try {
              ppimg2 = await akame.profilePictureUrl(m2);
            } catch (erro) {
              ppimg2 = "https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg";
            }
            p1 = await axios.get(
              `https://tinyurl.com/api-create.php?url=${ppimg}`
            );
            p2 = await axios.get(
              `https://tinyurl.com/api-create.php?url=${ppimg2}`
            );
            random = Math.floor(Math.random() * 100);
            await akame
              .sendMessage(
                from,
                {
                  image: {
                    url:
                      API_URL +
                      `/api/canvas/ship?foto1=${p1.data}&foto2=${p2.data}&mat=${random}&fundo=https://telegra.ph/file/b41f8e7f2ca966c8a6667.jpg`,
                  },
                  caption: `❪👩🏼‍❤️‍💋‍👨🏻ꦿฺ - Sinto que esses dois formariam um par perfeito juntos:\n*•〔@${m1.split("@")[0]}〕&〔@${m2.split("@")[0]}〕*\n*•*  Com uma expectativa de sucesso de:*『${random + "%"}』*`,
                  mentions: [m1, m2],
                },
                { quoted: selo }
              )
              .catch((error) => {
                reply(mess.error());
              });
            break;

          case "rank":
          case "ranklevel":
          case "rankpatente":
            if (!isGroup) return reply(mess.onlyAdmins());
            if (!isLevelingOn)
              return reply(
                `Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`
              );
            if (level2.length > 4) {
              cortGG = level2.map((i) => i);
              rank = cortGG.sort((a, b) => (a.contador < b.contador ? 0 : -1));
              if (level2.length > 10) {
                var totalR = 10;
              } else {
                var totalR = level2.length;
              }
              tc = `🎖️ Rank Level - [Type: *Global*]\n–`;
              for (i = 0; i < totalR; i++) {
                if (i != null) {
                  var newlevel = rank[i].contador;
                  if (newlevel < 100) {
                    var newpatente = "Bronze I 🥉";
                  }
                  if (newlevel >= 100 && newlevel < 200) {
                    var newpatente = "Bronze II 🥉";
                  }
                  if (newlevel >= 200 && newlevel < 300) {
                    var newpatente = "Bronze III 🥉";
                  }
                  if (newlevel >= 300 && newlevel < 400) {
                    var newpatente = "Prata I 🥈";
                  }
                  if (newlevel >= 400 && newlevel < 500) {
                    var newpatente = "Prata II 🥈";
                  }
                  if (newlevel >= 500 && newlevel < 600) {
                    var newpatente = "Prata III 🥈";
                  }
                  if (newlevel >= 600 && newlevel < 700) {
                    var newpatente = "Ouro I 🥇";
                  }
                  if (newlevel >= 700 && newlevel < 800) {
                    var newpatente = "Ouro II 🥇";
                  }
                  if (newlevel >= 800 && newlevel < 900) {
                    var newpatente = "Ouro III 🥇";
                  }
                  if (newlevel >= 900 && newlevel < 1200) {
                    var newpatente = "Ouro IV 🥇";
                  }
                  if (newlevel >= 1200 && newlevel < 1500) {
                    var newpatente = "Platina I 🌀";
                  }
                  if (newlevel >= 1500 && newlevel < 1800) {
                    var newpatente = "Platina II 🌀";
                  }
                  if (newlevel >= 1800 && newlevel < 2100) {
                    var newpatente = "Platina III 🌀";
                  }
                  if (newlevel >= 2100 && newlevel < 2700) {
                    var newpatente = "Platina IV 🌀";
                  }
                  if (newlevel >= 2700 && newlevel < 3300) {
                    var newpatente = "Diamante I 💎";
                  }
                  if (newlevel >= 3300 && newlevel < 3900) {
                    var newpatente = "Diamante II 💎";
                  }
                  if (newlevel >= 3900 && newlevel < 4500) {
                    var newpatente = "Diamante III 💎";
                  }
                  if (newlevel >= 4500 && newlevel < 5000) {
                    var newpatente = "Diamante IV 💎";
                  }
                  if (newlevel >= 5000 && newlevel < 5500) {
                    var newpatente = "Paladino I 🔮";
                  }
                  if (newlevel >= 5500 && newlevel < 6500) {
                    var newpatente = "Paladino II 🔮";
                  }
                  if (newlevel >= 6500 && newlevel < 7500) {
                    var newpatente = "Paladino III 🔮";
                  }
                  if (newlevel >= 7500 && newlevel < 9000) {
                    var newpatente = "Paladino IV 🔮";
                  }
                  if (newlevel >= 9000 && newlevel < 10500) {
                    var newpatente = "Mestre I ❤️‍🔥";
                  }
                  if (newlevel >= 10500 && newlevel < 12000) {
                    var newpatente = "Mestre II ❤️‍🔥";
                  }
                  if (newlevel >= 12000 && newlevel < 13500) {
                    var newpatente = "Mestre III ❤️‍🔥";
                  }
                  if (newlevel >= 13500 && newlevel < 15000) {
                    var newpatente = "Mestre IV ❤️‍🔥";
                  }
                  if (newlevel >= 15000 && newlevel < 20000) {
                    var newpatente = "Mestre V ❤️‍🔥";
                  }
                  if (newlevel >= 20000 && newlevel < 25000) {
                    var newpatente = "Desafiante I 👑";
                  }
                  if (newlevel >= 25000 && newlevel < 30000) {
                    var newpatente = "Desafiante II 👑";
                  }
                  if (newlevel >= 30000 && newlevel < 35000) {
                    var newpatente = "Desafiante III 👑";
                  }
                  if (newlevel >= 35000 && newlevel < 40000) {
                    var newpatente = "Desafiante IV 👑";
                  }
                  if (newlevel >= 40000 && newlevel < 50000) {
                    var newpatente = "Desafiante V 👑";
                  }
                  if (newlevel >= 50000 && newlevel < 60000) {
                    var newpatente = "Usuário Superior I 🎓";
                  }
                  if (newlevel >= 60000 && newlevel < 70000) {
                    var newpatente = "Usuário Superior II 🎓";
                  }
                  if (newlevel >= 70000 && newlevel < 80000) {
                    var newpatente = "Mestre Supremo I 🪄";
                  }
                  if (newlevel >= 80000 && newlevel < 90000) {
                    var newpatente = "Mestre Supremo II 🪄";
                  }
                  if (newlevel >= 90000 && newlevel < 100000) {
                    var newpatente = "Mestre Supremo III 🪄";
                  }
                  if (newlevel >= 100000 && newlevel < 150000) {
                    var newpatente = "Conquistador I ⚒️";
                  }
                  if (newlevel >= 150000 && newlevel < 200000) {
                    var newpatente = "Conquistador II ⚒️";
                  }
                  if (newlevel >= 200000 && newlevel < 300000) {
                    var newpatente = "Conquistador III ⚒️";
                  }
                  if (newlevel >= 300000 && newlevel < 400000) {
                    var newpatente = "Desbravador I 🛰️";
                  }
                  if (newlevel >= 400000 && newlevel < 500000) {
                    var newpatente = "Desbravador II 🛰️";
                  }
                  if (newlevel >= 500000 && newlevel < 1000000) {
                    var newpatente = "Desbravador III 🛰️";
                  }
                  if (newlevel >= 1000000 && newlevel < 1500000) {
                    var newpatente = "Grande Mestre I 🪩";
                  }
                  if (newlevel >= 1500000 && newlevel < 2000000) {
                    var newpatente = "Grande Mestre II 🪩";
                  }
                  if (newlevel >= 2000000 && newlevel < 5000000) {
                    var newpatente = "Grande Mestre III 🪩";
                  }
                  if (newlevel >= 5000000 && newlevel < 10000000) {
                    var newpatente = "Supremacy X ⚜️";
                  }
                  if (newlevel >= 10000000) {
                    var newpatente = "Veterano 🎩🏼‍♂️";
                  }
                  tc += `\n*${i + 1}°.* • Usuário(a): *${rank[i].nick}*\n• Usuário ID: *wa.me/${rank[i].id.split("@")[0]}*\n• Quantidade Total de XP: *${rank[i].contador}*\n• Atualmente a pessoa está no patente *${newpatente}*, no level: *${rank[i].level}*\n————`;
                }
              }
              reply(tc);
            } else {
              reply(
                `Nenhum dado(s) foi retornado, tente novamente mais tarde️!`
              );
            }
            break;

          case "patente":
          case "level":
            if (!isGroup) return reply(mess.onlyAdmins());
            if (!isLevelingOn)
              return reply(
                `Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`
              );
            if (JSON.stringify(level2).includes(sender)) {
              levelstts = level2.map((i) => i.id).indexOf(sender);
              var newlevel = level2[levelstts].contador;
              if (newlevel < 100) newpatente = "Bronze I";
              if (newlevel >= 100 && newlevel < 200) newpatente = "Bronze II";
              if (newlevel >= 200 && newlevel < 300) newpatente = "Bronze III";
              if (newlevel >= 300 && newlevel < 400) newpatente = "Prata I";
              if (newlevel >= 400 && newlevel < 500) newpatente = "Prata II";
              if (newlevel >= 500 && newlevel < 600) newpatente = "Prata III";
              if (newlevel >= 600 && newlevel < 700) newpatente = "Ouro I";
              if (newlevel >= 700 && newlevel < 800) newpatente = "Ouro II";
              if (newlevel >= 800 && newlevel < 900) newpatente = "Ouro III";
              if (newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV";
              if (newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I";
              if (newlevel >= 1500 && newlevel < 1800)
                newpatente = "Platina II";
              if (newlevel >= 1800 && newlevel < 2100)
                newpatente = "Platina III";
              if (newlevel >= 2100 && newlevel < 2700)
                newpatente = "Platina IV";
              if (newlevel >= 2700 && newlevel < 3300)
                newpatente = "Diamante I";
              if (newlevel >= 3300 && newlevel < 3900)
                newpatente = "Diamante II";
              if (newlevel >= 3900 && newlevel < 4500)
                newpatente = "Diamante III";
              if (newlevel >= 4500 && newlevel < 5000)
                newpatente = "Diamante IV";
              if (newlevel >= 5000 && newlevel < 5500)
                newpatente = "Paladino I";
              if (newlevel >= 5500 && newlevel < 6500)
                newpatente = "Paladino II";
              if (newlevel >= 6500 && newlevel < 7500)
                newpatente = "Paladino III";
              if (newlevel >= 7500 && newlevel < 9000)
                newpatente = "Paladino IV";
              if (newlevel >= 9000 && newlevel < 10500)
                newpatente = "Mestre I️";
              if (newlevel >= 10500 && newlevel < 12000)
                newpatente = "Mestre II️";
              if (newlevel >= 12000 && newlevel < 13500)
                newpatente = "Mestre III";
              if (newlevel >= 13500 && newlevel < 15000)
                newpatente = "Mestre IV️";
              if (newlevel >= 15000 && newlevel < 20000)
                newpatente = "Mestre V️";
              if (newlevel >= 20000 && newlevel < 25000)
                newpatente = "Desafiante I";
              if (newlevel >= 25000 && newlevel < 30000)
                newpatente = "Desafiante II";
              if (newlevel >= 30000 && newlevel < 35000)
                newpatente = "Desafiante III";
              if (newlevel >= 35000 && newlevel < 40000)
                newpatente = "Desafiante IV";
              if (newlevel >= 40000 && newlevel < 50000)
                newpatente = "Desafiante V";
              if (newlevel >= 50000 && newlevel < 60000)
                newpatente = "Usuário Superior I";
              if (newlevel >= 60000 && newlevel < 70000)
                newpatente = "Usuário Superior II";
              if (newlevel >= 70000 && newlevel < 80000)
                newpatente = "Mestre Supremo I";
              if (newlevel >= 80000 && newlevel < 90000)
                newpatente = "Mestre Supremo II";
              if (newlevel >= 90000 && newlevel < 100000)
                newpatente = "Mestre Supremo III";
              if (newlevel >= 100000 && newlevel < 150000)
                newpatente = "Conquistador I️";
              if (newlevel >= 150000 && newlevel < 200000)
                newpatente = "Conquistador II️";
              if (newlevel >= 200000 && newlevel < 300000)
                newpatente = "Conquistador III️";
              if (newlevel >= 300000 && newlevel < 400000)
                newpatente = "Desbravador I";
              if (newlevel >= 400000 && newlevel < 500000)
                newpatente = "Desbravador II️";
              if (newlevel >= 500000 && newlevel < 1000000)
                newpatente = "Desbravador III️";
              if (newlevel >= 1000000 && newlevel < 1500000)
                newpatente = "Grande Mestre I";
              if (newlevel >= 1500000 && newlevel < 2000000)
                newpatente = "Grande Mestre II";
              if (newlevel >= 2000000 && newlevel < 5000000)
                newpatente = "Grande Mestre III";
              if (newlevel >= 5000000 && newlevel < 10000000)
                newpatente = "Supremacy X";
              if (newlevel >= 10000000) newpatente = "Veterano";
              // É usado na barra apresentada na msg, que vai ser encaminhada pelo bot quando Usuário executar o cmd 'level' ou 'patente'.
              if (newpatente == "Bronze I") {
                newcont = 100;
                newtt = 0;
              }
              if (newpatente == "Bronze II") {
                newcont = 200;
                newtt = 100;
              }
              if (newpatente == "Bronze III") {
                newcont = 300;
                newtt = 200;
              }
              if (newpatente == "Prata I") {
                newcont = 400;
                newtt = 300;
              }
              if (newpatente == "Prata II") {
                newcont = 500;
                newtt = 400;
              }
              if (newpatente == "Prata III") {
                newcont = 600;
                newtt = 500;
              }
              if (newpatente == "Ouro I") {
                newcont = 700;
                newtt = 600;
              }
              if (newpatente == "Ouro II") {
                newcont = 800;
                newtt = 700;
              }
              if (newpatente == "Ouro III") {
                newcont = 900;
                newtt = 800;
              }
              if (newpatente == "Ouro IV") {
                newcont = 1200;
                newtt = 900;
              }
              if (newpatente == "Platina I") {
                newcont = 1500;
                newtt = 1200;
              }
              if (newpatente == "Platina II") {
                newcont = 1800;
                newtt = 1500;
              }
              if (newpatente == "Platina III") {
                newcont = 2100;
                newtt = 1800;
              }
              if (newpatente == "Platina IV") {
                newcont = 2700;
                newtt = 2100;
              }
              if (newpatente == "Diamante I") {
                newcont = 3300;
                newtt = 2700;
              }
              if (newpatente == "Diamante II") {
                newcont = 3900;
                newtt = 3300;
              }
              if (newpatente == "Diamante III") {
                newcont = 4500;
                newtt = 3900;
              }
              if (newpatente == "Diamante IV") {
                newcont = 5000;
                newtt = 4500;
              }
              if (newpatente == "Paladino I") {
                newcont = 5500;
                newtt = 5000;
              }
              if (newpatente == "Paladino II") {
                newcont = 6500;
                newtt = 5500;
              }
              if (newpatente == "Paladino III") {
                newcont = 7500;
                newtt = 6500;
              }
              if (newpatente == "Paladino IV") {
                newcont = 9000;
                newtt = 7500;
              }
              if (newpatente == "Mestre I️") {
                newcont = 10500;
                newtt = 9000;
              }
              if (newpatente == "Mestre II") {
                newcont = 12000;
                newtt = 10500;
              }
              if (newpatente == "Mestre III️") {
                newcont = 13500;
                newtt = 12000;
              }
              if (newpatente == "Mestre IV️") {
                newcont = 15000;
                newtt = 13500;
              }
              if (newpatente == "Mestre V️") {
                newcont = 20000;
                newtt = 15000;
              }
              if (newpatente == "Desafiante I") {
                newcont = 25000;
                newtt = 20000;
              }
              if (newpatente == "Desafiante II") {
                newcont = 30000;
                newtt = 25000;
              }
              if (newpatente == "Desafiante III") {
                newcont = 35000;
                newtt = 30000;
              }
              if (newpatente == "Desafiante IV") {
                newcont = 40000;
                newtt = 35000;
              }
              if (newpatente == "Desafiante V") {
                newcont = 50000;
                newtt = 40000;
              }
              if (newpatente == "Usuário Superior I") {
                newcont = 60000;
                newtt = 50000;
              }
              if (newpatente == "Usuário Superior II") {
                newcont = 70000;
                newtt = 60000;
              }
              if (newpatente == "Mestre Supremo I") {
                newcont = 80000;
                newtt = 70000;
              }
              if (newpatente == "Mestre Supremo II") {
                newcont = 90000;
                newtt = 80000;
              }
              if (newpatente == "Mestre Supremo III") {
                newcont = 100000;
                newtt = 90000;
              }
              if (newpatente == "Conquistador I️") {
                newcont = 150000;
                newtt = 100000;
              }
              if (newpatente == "Conquistador II") {
                newcont = 200000;
                newtt = 150000;
              }
              if (newpatente == "Conquistador III️") {
                newcont = 300000;
                newtt = 200000;
              }
              if (newpatente == "Desbravador I️") {
                newcont = 400000;
                newtt = 300000;
              }
              if (newpatente == "Desbravador II️") {
                newcont = 500000;
                newtt = 400000;
              }
              if (newpatente == "Desbravador III️") {
                newcont = 1000000;
                newtt = 500000;
              }
              if (newpatente == "Grande Mestre I") {
                newcont = 1500000;
                newtt = 1000000;
              }
              if (newpatente == "Grande Mestre II") {
                newcont = 2000000;
                newtt = 1500000;
              }
              if (newpatente == "Grande Mestre III") {
                newcont = 5000000;
                newtt = 2000000;
              }
              if (newpatente == "Supremacy X️") {
                newcont = 10000000;
                newtt = 5000000;
              }
              // Barra de quanto falta para alcançar o próximo nível.
              if (newlevel < 10000000) {
                nagaPor = Number(
                  (Number(newlevel - newtt) / Number(newcont - newtt)) * 100
                ).toFixed(1);
                nagaibis = newcont - newlevel;
                if (nagaPor == 100) nagaPor = `〘██████████〙${nagaPor}%`;
                if (nagaPor < 100) returnP = `〘█████████▒〙${nagaPor}%`;
                if (nagaPor < 90) returnP = `〘████████▒▒〙${nagaPor}%`;
                if (nagaPor < 80) returnP = `〘███████▒▒▒〙${nagaPor}%`;
                if (nagaPor < 70) returnP = `〘██████▒▒▒▒〙${nagaPor}%`;
                if (nagaPor < 60) returnP = `〘█████▒▒▒▒▒〙${nagaPor}%`;
                if (nagaPor < 50) returnP = `〘████▒▒▒▒▒▒〙${nagaPor}%`;
                if (nagaPor < 40) returnP = `〘███▒▒▒▒▒▒▒〙${nagaPor}%`;
                if (nagaPor < 30) returnP = `〘██▒▒▒▒▒▒▒▒〙${nagaPor}%`;
                if (nagaPor < 20) returnP = `〘█▒▒▒▒▒▒▒▒▒〙${nagaPor}%`;
                if (nagaPor < 10) returnP = `〘▒▒▒▒▒▒▒▒▒▒〙${nagaPor}%`;
              } else {
                returnP = ``;
              }
              leveltxt = `• Usuário: *@${sender.split("@")[0]}*\n• Você está atualmente no level *${level2[levelstts].level}* e no patente *${newpatente}*\n• Sua quantidade de XP é: *${level2[levelstts].contador}*\n\t[•] -> ${newlevel < 10000000 ? `*${returnP}*` : ``}\n–\n${newlevel < 10000000 ? `${newlevel < 10000000 ? `• Para subir para o próximo level, alcance essa quantidade: *${newcont}*.` : ``}\n• Falta${Number(nagaibis) > 1 ? `m` : ``} apenas *${nagaibis} XP* para você upar para o próximo level.` : `Você já alcançou a patente máxima, ou seja, está muito a frente de todos.`}`;
              localeL = level2
                .map((i) => i)
                .sort((a, b) => (a.contador < b.contador ? 0 : -1));
              try {
                uk = await akame.profilePictureUrl(sender);
              } catch (erro) {
                uk = "https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg";
              }
              gerarBufferLV = await getBuffer(uk);
              photoULV = await upload(gerarBufferLV);
              await akame.sendMessage(
                from,
                {
                  image: {
                    url:
                      API_URL +
                      `/api/canvas/levelcard?foto=${photoULV}&nome=${getName(sender)}&xp_before=${level2[levelstts].contador}&xp_after=${newcont}&level=${level2[levelstts].level}&ranking=${localeL.map((i) => i.id).indexOf(sender) + 1}&fundo=${fundolevel}`,
                  },
                  caption: leveltxt,
                  mentions: [sender],
                },
                { quoted: selo }
              );
            } else {
              reply(
                `Nenhuma informação foi obtida sobre seu level/patente atual em sua solicitação.\n• *Tente novamente mais tarde!* Caso seja uma falha técnica entre em contato com o(a) dono(a) do bot.`
              );
            }
            break;

          case "addlevel":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!q)
              return reply(
                "Digite a quantidade de level que deseja adicionar..."
              );
            if (!Number(args[0])) return reply(args[0] + " não é número...");
            if (Number(args[0]) < 1)
              return reply("Tem que adicionar ao menos 1 level.");
            if (q.includes(".")) return reply("Não pode número decimal.");
            AB = level2.map((i) => i.id).indexOf(menc_prt ? menc_prt : sender);
            level2[AB].level += Number(args[0]);
            fs.writeFileSync(
              "./database/usuarios/leveling.json",
              JSON.stringify(level2)
            );
            reply(
              `${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} adicionado${Number(args[0]) > 1 ? `s` : ``} a este usuário...`
            );
            break;

          case "tirarlevel":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!q)
              return reply("Digite a quantidade de level que deseja remover");
            if (!Number(args[0])) return reply(args[0] + " não é número...");
            if (Number(args[0]) < 1)
              return reply("Tem que tirar ao menos 1 level.");
            if (q.includes(".")) return reply("Não pode número decimal.");
            AB = level2.map((i) => i.id).indexOf(menc_prt ? menc_prt : sender);
            level2[AB].level -= Number(args[0]);
            fs.writeFileSync(
              "./database/usuarios/leveling.json",
              JSON.stringify(level2)
            );
            reply(
              `${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} retirado${Number(args[0]) > 1 ? `s` : ``} deste usuário...`
            );
            break;

          case "addxp":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!q)
              return reply("Digite a quantidade de XP que deseja adicionar");
            if (!Number(args[0])) return reply(args[0] + " não é número...");
            if (Number(args[0]) < 1)
              return reply("Tem que add ao menos 1 de XP");
            if (q.includes(".")) return reply("Não pode número decimal");
            AB = level2.map((i) => i.id).indexOf(menc_prt ? menc_prt : sender);
            level2[AB].contador += Number(args[0]);
            fs.writeFileSync(
              "./database/usuarios/leveling.json",
              JSON.stringify(level2)
            );
            reply(
              `${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} adicionada${Number(args[0]) > 1 ? `s` : ``} a este usuário...`
            );
            break;

          case "tirarxp":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!q)
              return reply("Digite a quantidade de XP que deseja retirar");
            if (!Number(args[0])) return reply(args[0] + " não é número...");
            if (Number(args[0]) < 1)
              return reply("Tem que tirar ao menos 1 de XP");
            if (q.includes(".")) return reply("Não pode número decimal");
            AB = level2.map((i) => i.id).indexOf(menc_prt ? menc_prt : sender);
            level2[AB].contador -= Number(args[0]);
            fs.writeFileSync(
              "./database/usuarios/leveling.json",
              JSON.stringify(level2)
            );
            reply(
              `${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} retirada${Number(args[0]) > 1 ? `s` : ``} deste usuário...`
            );
            break;

          case "blocklevel":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!menc_os2)
              return reply(
                "Marque o @ ou a mensagem da pessoa que deseja bloquear do contador."
              );
            if (!JSON.stringify(level2).includes(menc_os2))
              return reply(
                "O usuário mencionado não está presente no contador de mensagens."
              );
            AB = level2.map((i) => i.id).indexOf(menc_os2);
            if (level2[AB].block == true)
              return reply(
                "O usuário mencionado já está bloqueado no contador."
              );
            level2[AB].block = true;
            fs.writeFileSync(
              "./database/usuarios/leveling.json",
              JSON.stringify(level2)
            );
            reply(
              "Usuário bloqueado do contador com sucesso... As interações do mesmo não serão mais contabilizadas!"
            );
            break;

          case "unblocklevel":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!menc_os2)
              return reply(
                "Marque o @ ou a mensagem da pessoa que deseja bloquear do contador."
              );
            if (!JSON.stringify(level2).includes(menc_os2))
              return reply(
                "O usuário mencionado não está presente no contador de mensagens."
              );
            AB = level2.map((i) => i.id).indexOf(menc_os2);
            if (level2[AB].block == false)
              return reply(
                "O usuário mencionado não está bloqueado atualmente!"
              );
            level2[AB].block = false;
            fs.writeFileSync(
              "./database/usuarios/leveling.json",
              JSON.stringify(level2)
            );
            reply(
              "Usuário desbloqueado do contador com sucesso! As interações do usuário mencionado voltarão a ser contabilizadas."
            );
            break;

          case "blocklevel-list":
          case "blocklevellist":
            if (!SoDono) return reply(mess.onlyOwner());
            txt = `[Total: *${level2.length}*] - Lista de usuários bloqueados do contador de XP:\n`;
            let blocklevellist = 0;
            for (i = 0; i < level2.length; i++) {
              if (level2[i].block == true) {
                txt += `*${i + 1}.* @${level2[i].id.split("@")[0]}\n`;
                blocklevellist += 1;
              }
            }
            txt += `\n–\n• Total de Bloqueados: *${blocklevellist}*`;
            if (blocklevellist > 0) {
              await mention(txt);
            } else {
              reply("Não existe nenhum *usuário bloqueado* do contador XP.");
            }
            break;

          case "rmlevel":
            if (!SoDono) return reply(mess.onlyOwner());
            if (!q && !menc_os2)
              return reply("Marque a pessoa que deseja apagar do contador.");
            var qp = menc_os2
              ? menc_os2
              : q.replace(new RegExp("[()+-/ +/]", "gi"), "") +
                `@s.whatsapp.net`;
            if (!JSON.stringify(level2).includes(qp))
              return reply(
                "O usuário mencionado não está registrado no contador."
              );
            AB = level2.map((i) => i.id).indexOf(qp);
            level2.splice(AB, 1);
            fs.writeFileSync(
              "./database/usuarios/leveling.json",
              JSON.stringify(level2)
            );
            reply(
              "Usuário apagado foi contador com sucesso como o(a) senhor(a) pediu..."
            );
            break;

          case "rankativos":
          case "rankativo":
            if (!isGroup) return reply(mess.onlyGroup());
            var i3 = countMessage.map((i) => i.groupId).indexOf(from);
            var blue = countMessage[i3].numbers.map((i) => i);
            blue.sort((a, b) =>
              (a.figus == undefined
                ? (a.figus = 0)
                : a.figus + a.messages + a.cmd_messages) <
              (b.figus == undefined
                ? (b.figus = 0)
                : b.figus + b.cmd_messages + b.messages)
                ? 0
                : -1
            );
            menc = [];
            blad = `*🏆 Rank dos mais ativos no grupo:* ${groupName}\n`;
            for (i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
              if (i != null)
                blad += `\n*🏅 ${i + 1}º Lugar:* @${blue[i].id.split("@")[0]}\n• Quantidade de mensagens encaminhadas: *${blue[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${blue[i].cmd_messages}*\n• Usuário está conectado em um dispositivo: *${blue[i].aparelho}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${blue[i].figus}*\n`;
              menc.push(blue[i].id);
            }
            await mentions(blad, menc, true);
            break;

          case "rankinativo":
          case "rankinativos":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            await ClearMembersInactive();
            bule = [];
            bule2 = [];
            mentioned_jid = [];
            for (cag of countMessage[ind].numbers) {
              bule2.push(cag.id);
              if (cag.messages <= 1) {
                bule.push(cag);
              }
            }
            bule.sort((a, b) =>
              a.messages + a.cmd_messages < b.cmd_messages + b.messages ? 0 : -1
            );
            boardi = `🗑 *Rank dos mais inativos do grupo:* ${groupName}\n-\n`;
            if (bule.length == 0)
              boardi +=
                "❌ Nenhum usuário inativo foi encontrado neste grupo.️";
            for (i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
              if (i != null)
                boardi += `*🏅 ${i + 1}º Lugar:* @${bule[i].id.split("@")[0]}\n• Quantidade de mensagens enviadas pelo usuário(a): *${bule[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${bule[i].cmd_messages}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${bule[i].aparelho}*\n\n`;
              mentioned_jid.push(bule[i].id);
            }
            await mentions(boardi, mentioned_jid, true);
            break;

          case "checkativo":
            if (!isGroup) return reply(mess.onlyGroup());
            if (groupIdscount.indexOf(from) < 0)
              return reply("O bot não tem ainda dados sobre o grupo");
            var ind = groupIdscount.indexOf(from);
            if (!menc_os2 || menc_jid2[1])
              return reply(
                "Marque o @ de quem deseja puxar a atividade / Só pode um por vez.."
              );
            if (numbersIds.indexOf(menc_os2) >= 0) {
              var indnum = numbersIds.indexOf(menc_os2);
              var RSM_CN = countMessage[ind].numbers[indnum];
              await mentions(
                `Consulta individual da atividade do usuário @${menc_os2.split("@")[0]}\n–\n• Quantidade de mensagens enviadas pelo usuário(a): *${RSM_CN.messages}*\n• Quantidade de comandos executados pelo usuário(a): *${RSM_CN.cmd_messages}*\n• Usuário está conectado em um dispositivo: *${RSM_CN.aparelho}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${RSM_CN.figus}*\n–\n〘 *${groupName}* 〙`,
                [menc_os2],
                true
              );
            } else {
              await mentions(
                `Não tenho nenhuma informação no grupo sobre o *@${menc_os2.split("@")[0]}*.`,
                [menc_os2],
                true
              );
            }
            break;

          case "vab":
          case "vcprefere":
          case "voceprefere":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await reagir(
              from,
              "😸"
            ); /* Reação à mensagem, quando solicitar a execução do comando. */
            await psycatgames()
              .then(async (array) => {
                const { nsfw, questions } =
                  array[Math.floor(Math.random() * array.length)];
                const { pergunta1, pergunta2 } =
                  questions[Math.floor(Math.random() * questions.length)];
                await sendPoll(akame, from, "Você prefere...", [
                  pergunta1,
                  pergunta2,
                ]); /* Enviar a enquete com as preferências sorteadas. */
              })
              .catch(async (error) => {
                await replyWithReaction(mess.error(), {
                  react: { text: "😿", key: info.key },
                });
              });
            break;

          case "eununca":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await reagir(
              from,
              "🤔"
            ); /* Reação à mensagem, quando solicitar a execução do comando. */
            await sendPoll(
              akame,
              from,
              tools.iNever[Math.floor(Math.random() * tools.iNever.length)],
              ["Eu nunca", "Eu já"]
            ).catch(async (error) => {
              await replyWithReaction(mess.error(), {
                react: { text: "😭", key: info.key },
              });
            });
            break;

          case "conselhobiblico":
          case "conselhosbiblico":
          case "conselhosb":
          case "conselhob":
            /* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
              advices.biblicalAdvice[
                Math.floor(Math.random() * advices.biblicalAdvice.length)
              ],
              { react: { text: "😌", key: info.key } }
            ).catch(async (error) => {
              /* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
                mess.error(),
                { react: { text: "😿", key: info.key } }
              );
            });
            break;

          case "conselhos":
          case "conselho":
            /* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
              advices.commonAdvices[
                Math.floor(Math.random() * advices.commonAdvices.length)
              ],
              { react: { text: "😌", key: info.key } }
            ).catch(async (error) => {
              /* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
                mess.error(),
                { react: { text: "😿", key: info.key } }
              );
            });
            break;

          case "cantadas":
          case "cantada":
            /* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
              tools.Cantadas[Math.floor(Math.random() * tools.Cantadas.length)],
              { react: { text: "😼", key: info.key } }
            ).catch(async (error) => {
              /* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
                mess.error(),
                { react: { text: "😿", key: info.key } }
              );
            });
            break;

          case "fatos":
          case "curiosidades":
            /* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
              tools.curiousFacts[
                Math.floor(Math.random() * tools.curiousFacts.length)
              ],
              { react: { text: "🙀", key: info.key } }
            ).catch(async (error) => {
              /* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
                mess.error(),
                { react: { text: "😿", key: info.key } }
              );
            });
            break;

          case "rankgay":
          case "rankgays":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `🏳️‍🌈 *RANK DOS 5 MAIS GAYS DO GRUPO!*\n—\n`;
            TMGAYS = [
              "Esse aí gosta de cheirar banana até umas horas kakak",
              "Gosta de ser dominado e chicoteado.",
              "Viadinho gente boa, nada contra os veados.",
              "Esse aí roda mais que roda de caminhão.",
              "Mapoa é você meu amor?",
              "Esse aí ainda tá no armário, a franga tá presa!",
              "Profissional na garganta profunda!",
              "Essa bicha é finíssima!",
              "Essa aí precisa sair do closet ainda!",
              "Vixi esse aí e vitaminado!",
              "Vixi um gay vulgo irene!",
              "Poc fechosa, amo tu mona!",
            ];
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGAYS[Math.floor(Math.random() * TMGAYS.length)]} )\n`;
            }
            await mencionarIMG(ABC, rnkgay);
            break;

          case "rankgado":
          case "rankgados":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `🐂 *RANK DOS 5 MAIS GADO DO GRUPO:*\n—\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnkgado);
            break;

          case "rankcorno":
          case "rankcornos":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `🐂 *RANK DOS 5 MAIS CORNOS DO GRUPO!*\n—\n`;
            TMCRN = [
              "Familiar, leva até chifre com os parentes!",
              "Masoquista, leva chifre mas não larga a mulher!",
              "Atéu, leva chifre e não acredita!",
              "Político, só faz promessa e não cumpre o que fala!",
              "Esse é que leva chifres, vai embora e volta por causa das crianças.",
              "Xuxa, o que não larga a mulher por causa dos baixinhos.",
              "Famoso, aquele que por onde passa é reconhecido como tal.",
              "Inflação, a cada dia que passa o chifre aumenta.",
            ];
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMCRN[Math.floor(Math.random() * TMCRN.length)]} )\n`;
            }
            await mencionarIMG(ABC, rnkcorno);
            break;

          case "surubao":
          case "suruba":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            if (!q)
              return reply(`Eita, coloque o número de pessoas após o comando.`);
            if (Number(q) > 5)
              return reply("Coloque um número menor, ou seja, abaixo de *5*.");
            emojiskk = ["🥵", "😈", "🫣", "😏"];
            emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)];
            frasekk = [
              `tá querendo relações sexuais a ${q}, topa?`,
              `quer que *${q}* pessoas venham de *chicote, algema e corda de alpinista*.`,
              `quer que ${q} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`,
            ];
            context = frasekk[Math.floor(Math.random() * frasekk.length)];
            ABC = `${emojis} @${sender.split("@")[0]} ${context}\n\n`;
            for (var i = 0; i < q; i++) {
              ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mention(ABC);
            break;

          case "rankgostosos":
          case "rankgostoso":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `*RANK DOS 5 MAIS GOSTOSOS DO GRUPO* 😏🔥\n—\n`;
            TMGSTS = [
              "Você tá olhando para um semi Deus!",
              "Mds, me apaixonei! Passa o insta gatinho?",
              "Ei ei gatinhas, o gostosão do grupo chegou!",
              "Gostoso? É, pena que é homem galinha!",
              "Não sei se comparo esse gostoso com o Ares Ridalgo!",
              "Cruz credo, porque tu tá aqui? Tu é feio desgraça!",
            ];
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`;
            }
            await mencionarIMG(ABC, rnkgostoso);
            break;

          case "rankgostosas":
          case "rankgostosa":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `*RANK DAS 5 MAIS GOSTOSAS DO GRUPO* 😏🔥\n—\n`;
            TMGSTS = [
              "Calma novinha, assim eu não resisto!!",
              "Mds, me apaixonei no sorriso dessa gata!!",
              "Eita gatinha, Passa o insta quando? rs",
              "Credo, sai daqui dragão!",
              "Ui gata, que rabão ein!!",
            ];
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`;
            }
            await mencionarIMG(ABC, rnkgostosa);
            break;

          case "ranknazista":
          case "ranknazistas":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n—\n`;
            TMNZTS = [
              "Soldado nazista, marcha com estilo.‍",
              "Comandante implacável, lidera com rigor.️",
              "Nazista estrategista, conquista territórios.️",
              "Mestre da ordem, disciplina em primeiro lugar.",
              "Soldado de elite, Nazista hardcore.",
              "General invencível, domina as batalhas.",
              "Nazista disciplinado, fiel à causa.",
              "Líder autoritário, impõe respeito.️",
              "Soldado feroz, nazismo no coração.",
              "Mestre da propaganda, convence com palavras.️",
              "Nazista moderno, tecnologia na guerra.",
              "Máquina de guerra, implacável e eficiente.️",
              "Comandante supremo, nazismo eterno.",
              "Soldado leal, marcha em nome da ideologia.",
              "Nazista clássico, revive o passado.",
              "General poderoso, Nazista do século XXI.",
              "Comandante inabalável, Nazista de honra.",
              "Soldado devoto, nazismo no sangue.",
              "Mestre da retórica nazista, convence a todos.",
              "Nazista visionário, futuro sob a suástica.",
            ];
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMNZTS[Math.floor(Math.random() * TMNZTS.length)]} )\n`;
            }
            await mencionarIMG(ABC, rnknazista);
            break;

          case "rankotaku":
          case "rankotakus":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n—\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnkotaku);
            break;

          case "ranksigma":
          case "ranksigmas":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `RANK DOS 5 MAIS SIGMAS DO GRUPO 🗿🍷\n\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnksigma);
            break;

          case "rankbeta":
          case "rankbetas":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `RANK DOS 5 MAIS BETAS DO GRUPO 🫵🏽😂\n\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnkbeta);
            break;

          case "rankbaiano":
          case "rankbaianos":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `RANK DOS 5 MAIS BAIANOS DO GRUPO 😴💤\n\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnkbaiano);
            break;

          case "rankbaiana":
          case "rankbaianas":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `RANK DAS 5 MAIS BAIANAS DO GRUPO 😴💤\n\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnkbaiana);
            break;

          case "rankcarioca":
          case "rankcariocas":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `RANK DOS 5 MAIS CARIOCAS DO GRUPO 🔫🔥\n\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnkcarioca);
            break;

          case "ranklouco":
          case "rankloucos":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `RANK DOS 5 MAIS LOUCOS DO GRUPO 💀\n\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnklouco);
            break;

          case "ranklouca":
          case "rankloucas":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `RANK DAS 5 MAIS LOUCAS DO GRUPO 💀\n\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnklouca);
            break;

          case "ranksafada":
          case "ranksafadas":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `RANK DAS 5 MAIS SAFADAS DO GRUPO 😏🔥\n\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnksafada);
            break;

          case "ranksafado":
          case "ranksafados":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `RANK DOS 5 MAIS SAFADOS DO GRUPO 🥵🔥\n\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnksafado);
            break;

          case "rankmacaco":
          case "rankmacacos":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `RANK DOS 5 MAIS MACACOS DO GRUPO 🐒\n\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnkmacaco);
            break;

          case "rankmacaca":
          case "rankmacacas":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `RANK DAS 5 MAIS MACACAS DO GRUPO 🐒\n\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnkmacaca);
            break;

          case "rankputa":
          case "rankputas":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `RANK DAS 5 MAIS PUTAS DO GRUPO 😈🔥\n\n`;
            for (var i = 0; i < 5; i++) {
              ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
            }
            await mencionarIMG(ABC, rnkputa);
            break;

          case "rankpau":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n—\n`;
            TMPAU = [
              "Pequeno pra cact, se mata maluco",
              `Pequenininho chega ser até fofo`,
              `Menor que meu dedo mindinho pequeno demais`,
              `Até que dá sentir, tá na média`,
              `Até que é grandinho`,
              `Grande até!`,
              `Gigantesco igual meu braço`,
              `Enorme quase chega no útero`,
              `Grandão demais em, e uii`,
              `Vara de pegar manga, grande demais, como sai na rua assim??`,
              "Que grandão em, nasceu metade animal",
            ];
            for (var i = 0; i < 5; i++) {
              ABC += `• *${i + 1}°* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMPAU[Math.floor(Math.random() * TMPAU.length)]} )\n`;
            }
            await mencionarIMG(ABC, rnkpau);
            break;

          case "mencionar":
            if (!q)
              return reply(
                `Você usou o comando de forma incorreta, use a correta: ${prefix}mencionar corno`
              );
            if (!isGroup)
              return reply(`Esta brincadeira só funciona em grupos.`);
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));
            await mention(
              `Estou mencionando o *${q}* do grupo: *@${groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)].id.split("@")[0]}*`
            );
            break;

          case "jogodavelha":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!menc_jid2)
              return reply(
                "Marque junto com o comando, o @ do usuário que deseja desafiar.."
              );
            joguinhodavelhajs.push(sender);
            fs.writeFileSync(
              "./database/usuarios/joguinhodavelha.json",
              JSON.stringify(joguinhodavelhajs)
            );
            joguinhodavelhajs2.push(from);
            fs.writeFileSync(
              "./database/usuarios/joguinhodavelha2.json",
              JSON.stringify(joguinhodavelhajs2)
            );
            if (fs.existsSync(`./arquivos/tictactoe/db/${from}.json`)) {
              const boardnow = setGame(`${from}`);
              const matrix = boardnow._matrix;
              await mention(
                `『 *🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️* 』\n—\n💢 Alguém está jogando o *jogo da velha* no momento! Por favor, aguarde o término da partida para iniciar a próxima.\n—\n• Atualmente está ocorrendo uma disputa entre os jogadores: ''@${boardnow.X} VS @${boardnow.O}'. Quem será que ganha? Tire seus palpites!`
              );
            }
            if (argss.length === 1)
              return reply(
                `Jogue com alguém, para inicar a partida : ${prefix + command} @membro.`
              );
            const boardnow = setGame(`${from}`);
            console.log(
              colors.red(time, "red"),
              colors.magenta("[ JOGO DA VELHA ]"),
              colors.white(`Iniciado - Sessão: ${boardnow.session}`)
            );
            boardnow.status = false;
            boardnow.X = sender.replace("@s.whatsapp.net", "");
            boardnow.O = argss[1].replace("@", "");
            var blabord = [`${boardnow.X}`, `${boardnow.O}`];
            fs.writeFileSync(
              `./arquivos/tictactoe/db/${from}.json`,
              JSON.stringify(boardnow, null, 2)
            );
            await mentions(
              `『 *📌 ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ ⚔️* 』\n—\n@${sender.replace("@s.whatsapp.net", "")} está te desafiando para uma partida de jogo da velha...\n[${argss[1]}], use *'S'* para aceitar ou *'N'* para não aceitar...\n—\n• Em caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`,
              [sender, menc_jid],
              true
            );
            break;

          case "resetarvelha":
          case "resetavelha":
          case "resetarv":
          case "resetav":
          case "resetvelha":
          case "rv":
            if (!isJoguin && !isGroupAdmins)
              return reply(
                `Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`
              );
            if (fs.existsSync("./arquivos/tictactoe/db/" + from + ".json")) {
              DLT_FL("./arquivos/tictactoe/db/" + from + ".json");
              reply(`Jogo da velha resetado com sucesso nesse grupo!`);
              joguinhodavelhajs.splice([]);
              fs.writeFileSync(
                "./database/usuarios/joguinhodavelha.json",
                JSON.stringify(joguinhodavelhajs)
              );
              joguinhodavelhajs2.splice([]);
              fs.writeFileSync(
                "./database/usuarios/joguinhodavelha2.json",
                JSON.stringify(joguinhodavelhajs2)
              );
            } else {
              reply(`Não a nenhuma sessão em andamento...`);
            }
            break;

          case "ppt":
            if (args.length < 1)
              return reply(
                `Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`
              );
            ppt = ["pedra", "papel", "tesoura"];
            ppy = ppt[Math.floor(Math.random() * ppt.length)];
            ppg = Math.floor(Math.random() * 1) + 10;
            pptb = ppy;
            if (
              (pptb == "pedra" && args == "papel") ||
              (pptb == "papel" && args == "tesoura") ||
              (pptb == "tesoura" && args == "pedra")
            ) {
              var vit = "vitoria";
            } else if (
              (pptb == "pedra" && args == "tesoura") ||
              (pptb == "papel" && args == "pedra") ||
              (pptb == "tesoura" && args == "papel")
            ) {
              var vit = "derrota";
            } else if (
              (pptb == "pedra" && args == "pedra") ||
              (pptb == "papel" && args == "papel") ||
              (pptb == "tesoura" && args == "tesoura")
            ) {
              var vit = "empate";
            } else if ((vit = "undefined")) {
              return reply(
                `Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`
              );
            }
            if (vit == "vitoria") {
              var tes = "Vitória do jogador";
            }
            if (vit == "derrota") {
              var tes = "A vitória é do BOT";
            }
            if (vit == "empate") {
              var tes = "O jogo terminou em empate";
            }
            reply(
              `*${NomeDoBot}* jogou ${pptb}, o jogador jogou: ${args} -> *${tes}*`
            );
            break;

          case "icms":
            txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|");
            var [result1, result2] = txt.split("|");
            if (!q.includes("|")) return reply(mess.syntaxIcms(prefix));
            data = await fetchJson(
              API_URL +
                `/api/outros/icms?valor=${encodeURIComponent(result1)}&ddd=${encodeURIComponent(result2)}&apikey=` +
                API_KEY_AKAME
            );
            await akame
              .sendMessage(
                from,
                { text: mess.icmsResult(data) },
                { quoted: selo }
              )
              .catch(async (error) => {
                return reply(mess.error());
              });
            break;

          case "bot":
            soundft = await fetch(qviado).then((v) => v.buffer());
            await akame.sendMessage(
              from,
              { audio: soundft, mimetype: "audio/mpeg", ptt: true },
              { quoted: selo }
            );
            break;

          case "videocontrario":
          case "reversevid":
            if (
              ((isMedia && info.message.videoMessage) || !isQuotedImage) &&
              !q.length <= 1
            ) {
              reply(mess.wait());
              encmedia = isQuotedVideo
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .videoMessage
                : info.message.videoMessage;
              rane = getRandom("." + (await getExtension(encmedia.mimetype)));
              buffimg = await getFileBuffer(encmedia, "video");
              fs.writeFileSync(rane, buffimg);
              media = rane;
              ran = getRandom(".mp4");
              exec(
                `ffmpeg -i ${media} -vf reverse -af areverse ${ran}`,
                async (err) => {
                  await DLT_FL(media);
                  if (err) return reply(`Err: ${err}`);
                  buffer453 = fs.readFileSync(ran);
                  await akame.sendMessage(
                    from,
                    { video: buffer453, mimetype: "video/mp4" },
                    { quoted: selo }
                  );
                  DLT_FL(ran);
                }
              );
            } else {
              reply("Marque um vídeo..");
            }
            break;

          case "videolento":
          case "slowvid":
            if (
              ((isMedia && info.message.videoMessage) || !isQuotedImage) &&
              !q.length <= 1
            ) {
              reply(mess.wait());
              encmedia = isQuotedVideo
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .videoMessage
                : info.message.videoMessage;
              rane = getRandom("." + (await getExtension(encmedia.mimetype)));
              buffimg = await getFileBuffer(encmedia, "video");
              fs.writeFileSync(rane, buffimg);
              media = rane;
              ran = getRandom(".mp4");
              exec(
                `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
                async (err) => {
                  await DLT_FL(media);
                  if (err) return reply(`Error: ${err}`);
                  buffer453 = fs.readFileSync(ran);
                  await akame.sendMessage(
                    from,
                    { video: buffer453, mimetype: "video/mp4" },
                    { quoted: selo }
                  );
                  await DLT_FL(ran);
                }
              );
            } else {
              reply("Marque um vídeo..");
            }
            break;

          case "videorapido":
          case "fastvid":
            if (
              ((isMedia && info.message.videoMessage) || !isQuotedImage) &&
              !q.length <= 1
            ) {
              reply(mess.wait());
              encmedia = isQuotedVideo
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .videoMessage
                : info.message.videoMessage;
              rane = getRandom("." + (await getExtension(encmedia.mimetype)));
              buffimg = await getFileBuffer(encmedia, "video");
              fs.writeFileSync(rane, buffimg);
              media = rane;
              ran = getRandom(".mp4");
              exec(
                `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
                async (err) => {
                  await DLT_FL(media);
                  if (err) return reply(`Err: ${err}`);
                  buffer453 = fs.readFileSync(ran);
                  await akame.sendMessage(
                    from,
                    { video: buffer453, mimetype: "video/mp4" },
                    { quoted: selo }
                  );
                  await DLT_FL(ran);
                }
              );
            } else {
              reply("Marque o vídeo..");
            }
            break;

          case "grave2":
            if (
              (isMedia &&
                !info.message.imageMessage &&
                !info.message.videoMessage) ||
              isQuotedAudio
            ) {
              reply(mess.wait());
              muk = isQuotedAudio
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .audioMessage
                : info.message.audioMessage;
              rane = getRandom("." + (await getExtension(muk.mimetype)));
              buffimg = await getFileBuffer(muk, "audio");
              fs.writeFileSync(rane, buffimg);
              gem = rane;
              ran = getRandom(".mp3");
              exec(
                `ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`,
                async (err, stderr, stdout) => {
                  await DLT_FL(gem);
                  if (err)
                    return reply(
                      "Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
                    );
                  hah = fs.readFileSync(ran);
                  await akame.sendMessage(
                    from,
                    { audio: hah, mimetype: "audio/mpeg", ptt: true },
                    { quoted: selo }
                  );
                  await DLT_FL(ran);
                }
              );
            } else {
              reply("Marque o áudio..");
            }
            break;

          case "grave":
            if (
              (isMedia &&
                !info.message.imageMessage &&
                !info.message.videoMessage) ||
              isQuotedAudio
            ) {
              reply(mess.wait());
              muk = isQuotedAudio
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .audioMessage
                : info.message.audioMessage;
              rane = getRandom("." + (await getExtension(muk.mimetype)));
              buffimg = await getFileBuffer(muk, "audio");
              fs.writeFileSync(rane, buffimg);
              gem = rane;
              ran = getRandom(".mp3");
              exec(
                `ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`,
                async (err, stderr, stdout) => {
                  await DLT_FL(gem);
                  if (err)
                    return reply(
                      "Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
                    );
                  hah = fs.readFileSync(ran);
                  await akame.sendMessage(
                    from,
                    { audio: hah, mimetype: "audio/mpeg", ptt: true },
                    { quoted: selo }
                  );
                  await DLT_FL(ran);
                }
              );
            } else {
              reply("Marque o áudio..");
            }
            break;

          case "adolesc":
          case "vozmenino":
            if (
              (isMedia &&
                !info.message.imageMessage &&
                !info.message.videoMessage) ||
              isQuotedAudio
            ) {
              reply(mess.wait());
              muk = isQuotedAudio
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .audioMessage
                : info.message.audioMessage;
              rane = getRandom("." + (await getExtension(muk.mimetype)));
              buffimg = await getFileBuffer(muk, "audio");
              fs.writeFileSync(rane, buffimg);
              gem = rane;
              ran = getRandom(".mp3");
              exec(
                `ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`,
                async (err, stderr, stdout) => {
                  await DLT_FL(gem);
                  if (err)
                    return reply(
                      "Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
                    );
                  hah = fs.readFileSync(ran);
                  await akame.sendMessage(
                    from,
                    { audio: hah, mimetype: "audio/mpeg", ptt: true },
                    { quoted: selo }
                  );
                  await DLT_FL(ran);
                }
              );
            } else {
              reply("Marque o áudio..");
            }
            break;

          case "tomp3":
            if ((isMedia && !info.message.imageMessage) || isQuotedVideo) {
              post = isQuotedImage
                ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                    .message.extendedTextMessage.contextInfo.message
                    .imageMessage
                : info.message.videoMessage;
              reply(mess.wait());
              encmedia = isQuotedVideo
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .videoMessage
                : info.message.videoMessage;
              rane = getRandom("." + (await getExtension(encmedia.mimetype)));
              buffimg = await getFileBuffer(encmedia, "video");
              fs.writeFileSync(rane, buffimg);
              media = rane;
              ran = getRandom(".mp4");
              exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
                await DLT_FL(media);
                if (err)
                  return reply(
                    "Ocorreu uma falha ao fazer a conversão do vídeo para mp3."
                  );
                buffer = fs.readFileSync(ran);
                await akame.sendMessage(
                  from,
                  { audio: buffer, mimetype: "audio/mpeg" },
                  { quoted: selo }
                );
                await DLT_FL(ran);
              });
            } else {
              reply("Marque o vídeo para transformar em áudio por favor...");
            }
            break;

          case "bass3":
            if (
              (isMedia &&
                !info.message.imageMessage &&
                !info.message.videoMessage) ||
              isQuotedAudio
            ) {
              reply(mess.wait());
              muk = isQuotedAudio
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .audioMessage
                : info.message.audioMessage;
              rane = getRandom("." + (await getExtension(muk.mimetype)));
              buffimg = await getFileBuffer(muk, "audio");
              fs.writeFileSync(rane, buffimg);
              gem = rane;
              ran = getRandom(".mp3");
              exec(
                `ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`,
                async (err, stderr, stdout) => {
                  await DLT_FL(gem);
                  if (err)
                    return reply(
                      "Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
                    );
                  hah = fs.readFileSync(ran);
                  await akame.sendMessage(
                    from,
                    { audio: hah, mimetype: "audio/mpeg", ptt: true },
                    { quoted: selo }
                  );
                  await DLT_FL(ran);
                }
              );
            } else {
              reply("Marque o áudio..");
            }
            break;

          case "bass":
            if (
              (isMedia &&
                !info.message.imageMessage &&
                !info.message.videoMessage) ||
              isQuotedAudio
            ) {
              reply(mess.wait());
              muk = isQuotedAudio
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .audioMessage
                : info.message.audioMessage;
              rane = getRandom("." + (await getExtension(muk.mimetype)));
              buffimg = await getFileBuffer(muk, "audio");
              fs.writeFileSync(rane, buffimg);
              gem = rane;
              ran = getRandom(".mp3");
              exec(
                `ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`,
                async (err, stderr, stdout) => {
                  await DLT_FL(gem);
                  if (err)
                    return reply(
                      "Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
                    );
                  hah = fs.readFileSync(ran);
                  await akame.sendMessage(
                    from,
                    { audio: hah, mimetype: "audio/mpeg", ptt: true },
                    { quoted: selo }
                  );
                  await DLT_FL(ran);
                }
              );
            } else {
              reply("Marque o áudio...");
            }
            break;

          case "bass2":
            if (
              (isMedia &&
                !info.message.imageMessage &&
                !info.message.videoMessage) ||
              isQuotedAudio
            ) {
              reply(mess.wait());
              muk = isQuotedAudio
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .audioMessage
                : info.message.audioMessage;
              rane = getRandom("." + (await getExtension(muk.mimetype)));
              buffimg = await getFileBuffer(muk, "audio");
              fs.writeFileSync(rane, buffimg);
              gem = rane;
              ran = getRandom(".mp3");
              exec(
                `ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`,
                async (err, stderr, stdout) => {
                  await DLT_FL(gem);
                  if (err)
                    return reply(
                      "Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
                    );
                  hah = fs.readFileSync(ran);
                  await akame.sendMessage(
                    from,
                    { audio: hah, mimetype: "audio/mpeg", ptt: true },
                    { quoted: selo }
                  );
                  await DLT_FL(ran);
                }
              );
            } else {
              reply("Marque o áudio..");
            }
            break;

          case "estourar":
            if (
              (isMedia &&
                !info.message.imageMessage &&
                !info.message.videoMessage) ||
              isQuotedAudio
            ) {
              reply(mess.wait());
              muk = isQuotedAudio
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .audioMessage
                : info.message.audioMessage;
              rane = getRandom("." + (await getExtension(muk.mimetype)));
              buffimg = await getFileBuffer(muk, "audio");
              fs.writeFileSync(rane, buffimg);
              gem = rane;
              ran = getRandom(".mp3");
              exec(
                `ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`,
                async (err, stderr, stdout) => {
                  await DLT_FL(gem);
                  if (err)
                    return reply(
                      "Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
                    );
                  hah = fs.readFileSync(ran);
                  await akame.sendMessage(
                    from,
                    { audio: hah, mimetype: "audio/mpeg", ptt: true },
                    { quoted: selo }
                  );
                  await DLT_FL(ran);
                }
              );
            } else {
              reply("Marque o áudio..");
            }
            break;

          case "fast":
          case "audiorapido":
            if (
              (isMedia &&
                !info.message.imageMessage &&
                !info.message.videoMessage) ||
              isQuotedAudio
            ) {
              reply(mess.wait());
              muk = isQuotedAudio
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .audioMessage
                : info.message.audioMessage;
              rane = getRandom("." + (await getExtension(muk.mimetype)));
              buffimg = await getFileBuffer(muk, "audio");
              fs.writeFileSync(rane, buffimg);
              gem = rane;
              ran = getRandom(".mp3");
              exec(
                `ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`,
                async (err, stderr, stdout) => {
                  await DLT_FL(gem);
                  if (err)
                    return reply(
                      "Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
                    );
                  hah = fs.readFileSync(ran);
                  await akame.sendMessage(
                    from,
                    { audio: hah, mimetype: "audio/mpeg", ptt: true },
                    { quoted: selo }
                  );
                  await DLT_FL(ran);
                }
              );
            } else {
              reply("Marque o áudio...");
            }
            break;

          case "esquilo":
            if (
              (isMedia &&
                !info.message.imageMessage &&
                !info.message.videoMessage) ||
              isQuotedAudio
            ) {
              reply(mess.wait());
              muk = isQuotedAudio
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .audioMessage
                : info.message.audioMessage;
              rane = getRandom("." + (await getExtension(muk.mimetype)));
              buffimg = await getFileBuffer(muk, "audio");
              fs.writeFileSync(rane, buffimg);
              gem = rane;
              ran = getRandom(".mp3");
              exec(
                `ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`,
                async (err, stderr, stdout) => {
                  DLT_FL(gem);
                  if (err)
                    return reply(
                      "Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
                    );
                  hah = fs.readFileSync(ran);
                  await akame.sendMessage(
                    from,
                    { audio: hah, mimetype: "audio/mpeg", ptt: true },
                    { quoted: selo }
                  );
                  await DLT_FL(ran);
                }
              );
            } else {
              reply("Marque o áudio...");
            }
            break;

          case "audiolento":
          case "slow":
            if (
              (isMedia &&
                !info.message.imageMessage &&
                !info.message.videoMessage) ||
              isQuotedAudio
            ) {
              reply(mess.wait());
              muk = isQuotedAudio
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .audioMessage
                : info.message.audioMessage;
              rane = getRandom("." + (await getExtension(muk.mimetype)));
              buffimg = await getFileBuffer(muk, "audio");
              fs.writeFileSync(rane, buffimg);
              gem = rane;
              ran = getRandom(".mp3");
              exec(
                `ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`,
                async (err, stderr, stdout) => {
                  DLT_FL(gem);
                  if (err)
                    return reply(
                      "Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
                    );
                  hah = fs.readFileSync(ran);
                  await akame.sendMessage(
                    from,
                    { audio: hah, mimetype: "audio/mpeg", ptt: true },
                    { quoted: selo }
                  );
                  await DLT_FL(ran);
                }
              );
            } else {
              reply("Marque o áudio..");
            }
            break;

          /// LOGOS EPHOTO:
          case "brilhante":
          case "blur":
          case "goldt":
          case "vietnam":
          case "tela":
          case "seta":
          case "grafite":
          case "natalmsg":
          case "anonovo":
          case "pubgv":
          case "trigrev":
            if (
              command === "brilhante" ||
              command === "blur" ||
              command === "goldt" ||
              command === "vietnam" ||
              command === "tela" ||
              command === "seta"
            ) {
              if (!q)
                return await reply(
                  "O campo de texto está vázio! Coloque algo após o comando para definir como texto em sua criação."
                );
              try {
                await reply(mess.wait());
                await akame.sendMessage(
                  from,
                  {
                    image: await getBuffer(
                      API_URL +
                        `/api/ephoto/${command}?texto=${q}&apikey=` +
                        API_KEY_AKAME
                    ),
                  },
                  { quoted: selo }
                );
              } catch (error) {
                return await reply(mess.error());
              }
            } else if (command === "grafite") {
              if (!q.includes("|"))
                return await reply(
                  `Você esqueceu de separar os textos, por favor separe com uma | entre eles. Por exemplo: *'${prefix + command} akame|Bot'*`
                );
              try {
                var replaceText = q
                  .replace(" |", "|")
                  .replace("| ", "|")
                  .replace(" | ", "|");
                var [texto1, texto2] = replaceText.split("|");
                await reply(mess.wait());
                await akame.sendMessage(
                  from,
                  {
                    image: await getBuffer(
                      API_URL +
                        `/api/ephoto/${command}?texto=${texto1}&texto2=${texto2}&apikey=` +
                        API_KEY_AKAME
                    ),
                  },
                  { quoted: selo }
                );
              } catch (error) {
                return await reply(mess.error());
              }
            } else if (
              command === "natalmsg" ||
              command === "anonovo" ||
              command === "pubgv" ||
              command === "trigrev"
            ) {
              if (!q)
                return await reply(
                  "O campo de texto está vázio! Coloque algo após o comando para definir como texto em sua criação."
                );
              try {
                await reply(mess.wait());
                await akame.sendMessage(
                  from,
                  {
                    video: await getBuffer(
                      API_URL +
                        `/api/ephoto/${command}?texto=${q}&apikey=` +
                        API_KEY_AKAME
                    ),
                    mimetype: "video/mp4",
                  },
                  { quoted: selo }
                );
              } catch (error) {
                return await reply(mess.error());
              }
            }
            break;

          // LOGOS PHOTOOXY
          case "angelwing":
          case "hackneon":
          case "fpsmascote":
          case "equipemascote":
          case "txtquadrinhos":
          case "frozen":
          case "3dsilver":
          case "starballons":
          case "goldtext":
          case "ffavatar":
          case "mascotegame":
          case "wingeffect":
          case "angelglx":
          case "blackpink":
          case "gizquadro":
          case "logogame":
          case "girlmascote":
          case "smoke":
          case "fire":
          case "romantic":
          case "narutologo":
          case "lovemsg":
          case "lovemsg2":
          case "lovemsg3":
          case "papel":
          case "coffecup":
          case "florwooden":
          case "coffecup2":
          case "madeira":
          case "lobometal":
          case "neon2":
          case "cup":
          case "txtborboleta":
          case "harryp":
          case "metalgold":
          case "cemiterio":
          case "shadow":
          case "shadow-sky":
          case "flaming":
          case "efeitoneon":
          case "metallic":
          case "naruto":
          case "metalgold":
          case "under-grass":
          case "harry-potter":
          case "picture-of-love":
          case "flower-typography":
          case "carved-wood":
          case "butterfly":
          case "night-sky":
          case "illuminated-metallic":
          case "sweet-candy":
          case "ffbanner":
          case "mascoteavatar":
          case "pubg":
          case "gameplay":
          case "googlesg":
            if (
              command === "ffbanner" ||
              command === "mascoteavatar" ||
              command === "pubg" ||
              command === "gameplay"
            ) {
              if (!q.includes("|"))
                return await reply(
                  `Você esqueceu de separar os textos, por favor separe com uma | entre eles. Por exemplo: *'${prefix + command} akame|Bot'*`
                );
              try {
                var replaceText = q
                  .replace(" |", "|")
                  .replace("| ", "|")
                  .replace(" | ", "|");
                var [texto1, texto2] = replaceText.split("|");
                await reply(mess.wait());
                data = await fetchJson(
                  API_URL +
                    `/api/photooxy/${command}?texto=${texto1}&texto2=${texto2}&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  { image: await getBuffer(data.resultado.imageUrl) },
                  { quoted: selo }
                );
              } catch (error) {
                return await reply(mess.error());
              }
            } else if (command === "googlesg") {
              if (!q.includes("|"))
                return await reply(
                  `Você esqueceu de separar os textos, por favor separe com uma | entre eles. Por exemplo: *'${prefix + command} akame|Bot|2024'*`
                );
              try {
                var replaceText = q
                  .replace(" |", "|")
                  .replace("| ", "|")
                  .replace(" | ", "|");
                var [texto1, texto2, texto3] = replaceText.split("|");
                await reply(mess.wait());
                data = await fetchJson(
                  API_URL +
                    `/api/photooxy/${command}?texto=${texto1}&texto2=${texto2}&texto3=${texto3}&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  { image: await getBuffer(data.resultado.imageUrl) },
                  { quoted: selo }
                );
              } catch (error) {
                return await reply(mess.error());
              }
            } else {
              if (!q)
                return await reply(
                  "O campo de texto está vázio! Coloque algo após o comando para definir como texto em sua criação."
                );
              try {
                await reply(mess.wait());
                data = await fetchJson(
                  API_URL +
                    `/api/photooxy/${command}?texto=${q}&apikey=` +
                    API_KEY_AKAME
                );
                await akame.sendMessage(
                  from,
                  { image: await getBuffer(data.resultado.imageUrl) },
                  { quoted: selo }
                );
              } catch (error) {
                return await reply(mess.error());
              }
            }
            break;

          case "convite":
            if (!budy.includes("chat.whatsapp.com"))
              return reply(
                "Cadê o link do grupo que você deseja que eu entre?"
              );
            cnvt = args.join(" ");
            reply(
              `O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`
            );
            await akame.sendMessage(
              nmrdn,
              { text: mess.groupInvitation(sender, cnvt, prefix) },
              { quoted: selo }
            );
            break;

          case "recusar":
            if (!SoDono) return reply(mess.onlyOwner());
            await akame.sendMessage(
              `${q}@s.whatsapp.net`,
              {
                text: `Olá amigo(a), sinto muito dizer, mas seu convite foi recusado.`,
              },
              { quoted: selo }
            );
            break;

          case "join":
          case "entrar":
            if (!SoDono) return reply(mess.onlyOwner());
            string = args.join(" ");
            if (!string)
              return reply("Insira um link de convite ao lado do comando.");
            if (string.includes("chat.whatsapp.com"))
              return reply("Ops, verifique o link que você inseriu.");
            link = string.split("app.com/")[1];
            try {
              await akame.groupAcceptInvite(`${link}`);
            } catch (erro) {
              if (String(erro).includes("resource-limit"))
                return reply("O grupo já está com o alcance de 1mil membros.");
              if (String(erro).includes("not-authorized"))
                return reply(
                  "Não foi possível entrar no grupo por motivo que você foi banido por um adm."
                );
            }
            break;

          case "sip":
          case "ip":
            if (!q)
              return reply(
                `Informe o ip que você deseja! *Exemplo:* ${prefix + command} 8.8.8.8`
              );
            try {
              ip = await axios.get(
                `https://ipwhois.app/json/${encodeURIComponent(q)}`
              );
              await akame.sendMessage(
                from,
                {
                  image: {
                    url: `https://maps.googleapis.com/maps/api/streetview?size=1400x1400&location=${ip.data.latitude},%20${ip.data.longitude}&sensor=false&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`,
                  },
                  caption: mess.searchIpAdress(ip),
                },
                { quoted: selo }
              );
              await akame.sendMessage(
                from,
                {
                  location: {
                    degreesLatitude: ip.data.latitude,
                    degreesLongitude: ip.data.longitude,
                    addrees: "",
                  },
                },
                { quoted: selo }
              );
            } catch (error) {
              reply(mess.error());
            }
            break;

          case "cep":
          case "scep":
            if (!q) return reply(`Cadê o cep?`);
            try {
              res = await fetchJson(
                API_URL + `/api/outros/cep?code=${q}&apikey=` + API_KEY_AKAME
              );
              await reply(mess.searchCep(res));
            } catch (error) {
              await reply(mess.error());
            }
            break;

          case "cassino":
          case "slot":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModoCoins)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`
              );
            if (RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.cassino > 4)
              return reply(
                `Volte amanhã! Você consumiu todas suas 5 chances do dia no cassino.`
              );
            if (RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].coins < 29)
              return reply(
                "Saldo insuficiente! Para usar os comandos de Coins, você deve ter pelo menos 30 N-Coins em sua carteira."
              );
            !RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS]
              ? (RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.cassino = 1)
              : (RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.cassino += 1);
            CoinsUpdate(RG_SCOINS);
            var getResultSlot = ["🍓", "🍒", "🍎", "🍉"];
            V_ = [0, 1, 2];
            V_.forEach(function (one, two, three) {
              V_[two] =
                getResultSlot[Math.floor(Math.random() * getResultSlot.length)];
            });
            async function slot_(text) {
              reply(
                `${text}\n[${V_[0]} | ${V_[1]} | ${V_[2]}] - Você possuí *${RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.cassino}/5* chances no cassino por hoje.`
              );
            }
            if (V_[0] === V_[1] && V_[1] === V_[2] && V_[0] === V_[2]) {
              await SYSTEM_COIN.AdicionarCoins(sender, 65);
              slotMess = [
                "Parece que a sorte estava esperando por você! Você acaba de levantar 65 N-Coins, aproveite você é digno de ganhar. 💰🌟",
                "Que reviravolta! Você saiu do cassino com 65 N-Coins no bolso! Quem disse que os jogos de azar não valem a pena? 🌟💰",
                "Surpreendente! A sorte sorriu para você esta noite no cassino, você ganhou 65 N-Coins como recompensa! 🎰✨",
              ];
              slot_(slotMess[Math.floor(Math.random() * slotMess.length)]);
            } else {
              await SYSTEM_COIN.RemoverCoins(sender, 5);
              slotLoss = [
                "Que pena! Você perdeu, o que resultará na perda de 5 N-Coins. Mas não fique triste, na próxima você ganha! 🙏🏼🌟",
                "Você perdeu, o que resultará a perda de 5 N-Coins! Com o tempo você recuperará e ultrapassará o valor perdido. 😇🌟",
                "Hoje a sorte não estava de bom humor com sua pessoa, você perdeu, o que vai resultar a perda de 5 N-Coins. 🥱☠️",
              ];
              slot_(slotLoss[Math.floor(Math.random() * slotLoss.length)]);
            }
            break;

          case "menucoins":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModoCoins)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`
              );
            await reagir(from, "🪙");
            mention(`💰 Seja bem vindo(a) @${sender.split("@")[0]} ao *'Menu N-Coins | akame-BOT':
—
👑 Donos & Administrador(es):
*01.* ${prefix}Sorteiocoins | ${prefix}Sortcoins
• Este comando tem a função de sortear coins para os participantes do grupo, mas somente meu/minha proprietário(a) tem o poder de executar este comando.
${"– ".repeat(14)}
*02.* ${prefix}Whatmusic | ${prefix}Gartic | ${prefix}Enigma | ${prefix}Quizanimais | ${prefix}Anagrama | ${prefix}Quizfutebol
• Vamos aumentar a quantidade de mensagens neste grupo? Temos 6 jogos ultra divertidos para interagir com seus participantes.
—
🌟 Comandos de Membros:
*01.* ${prefix}Coins | ${prefix}Estatisticas
• Este comando tem a função de mostrar a quantidade de coins e chances que você possuí atualmente no seu registro.
${"– ".repeat(14)}
*02.* ${prefix}Dadoapostado
• Ei, você aí! Tá afim de tentar sua sorte e vidência? Jogue este jogo e seja considerado um cigano do oriente hein!
${"– ".repeat(14)}
*03.* ${prefix}Minerar | ${prefix}Minerarcoins
• Comece a explorar o minas de diamantes e ouros, é ainda ganhe recompensas! Mas lembre-se você só tem 6 chances diárias hein, não vai ultrapassar o limite ok?
${"– ".repeat(14)}
*04.* ${prefix}Cassino | ${prefix}Slot
• Ei, você aí! Tá afim de deixar eu sugar todo seu dinheiro na N-Coins? Vem comigo! Aqui você tem 5 chances diárias, será que alguma você vai ter sorte de ganhar?`);
            break;

          case "coins":
          case "estatisticas":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModoCoins)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`
              );
            await mention(
              `${tempo}, usuário(a): @${sender.split("@")[0]}, aqui está suas estatísticas na N-Coins:\n—\n• Saldo atual: '${RG_SCOINS[ID_G_COINS]?.usus[ID_USU_COINS]?.coins || 0} N-Coins'.\n—\n💰🌟 Chances:\n\t• Quantidade de chances restantes para usar na mineração: ${RG_SCOINS[ID_G_COINS]?.usus[ID_USU_COINS]?.chances.minerar || 0}/6\n\t• Quantidade de chances restantes no cassino: ${RG_SCOINS[ID_G_COINS]?.usus[ID_USU_COINS]?.chances.cassino || 0}/5`
            );
            break;

          case "sorteiocoins":
          case "sortcoins":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModoCoins)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`
              );
            if (!SoDono) return reply(mess.onlyOwner());
            if (q.match(/[a-z]/i))
              return reply(
                "️️😭🌟 Ô chefe(a), assim você me quebra colocando letras invés de ser somente números. Por favor, um valor numérico justo para sortear..."
              );
            var LuckyUser =
              RG_SCOINS[ID_G_COINS].usus[
                Math.floor(Math.random() * RG_SCOINS[ID_G_COINS].usus.length)
              ].id;
            await mention(
              `🎉🌟 Parabéns @${LuckyUser.split("@")[0]}, você acaba de ganhar: ${q.trim()} N-Coins. *Gaste com moderação!*`
            );
            SYSTEM_COIN.AdicionarCoins(LuckyUser, Math.floor(q.trim()));
            break;

          case "dadoapostado":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModoCoins)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`
              );
            var [numberDado, amountBet] = q.split("/");
            if (!numberDado)
              return await reply(
                `Você esqueceu de escolher o número que você quer tirar, escolha um número de 1 à 6. Após escolher o número, você irá colocar uma (/) entre o número e o valor apostado. Caso disperte dúvidas, veja o exemplo abaixo:\n\t• *${prefix + command} número/aposta*`
              );
            if (!amountBet)
              return reply(
                `Você esqueceu de colocar o valor que você deseja apostar...`
              );
            if (
              SYSTEM_COIN.VerificarCampo(sender, "coins") < parseInt(amountBet)
            )
              return reply(
                `Ops, você não tem essa quantidade de Coins para apostar. Verifique seu saldo usando:  '${prefix}saldo' e depois volte para apostar!`
              );
            if (!Number(numberDado))
              return reply(`${numberDado} não é número!`);
            if (!Number(amountBet)) return reply(`${amountBet} não é número!`);
            if (Number(amountBet) > 500)
              return reply(`Não é possível apostar mais de 500 N-Coins.`);
            if (Number(numberDado) < 1 || Number(numberDado) > 6)
              return reply(
                `O número está inválido, pois não existe um dado com a quantidade de '${numberDado}'. Por favor, informe um número de 1 à 6!`
              );
            await reagir(from, "🎲");
            await reply(`Sorteando dado(s)! 🌟⏳️`);
            drawQuantity = Math.floor(Math.random() * 5) + 1;
            await sendSticker(
              from,
              `./database/data/media/sticker/dados/${drawQuantity}.webp`,
              info
            );
            if (Number(drawQuantity) === Number(numberDado)) {
              setTimeout(async () => {
                WINN = [
                  `🎲🌟 Parabéns @${sender.split("@")[0]}, você acaba de ganhar ${parseInt(amountBet)} N-Coins, por ter acertado a previsão do dado.`,
                  `🎉💰 Parabéns @${sender.split("@")[0]}, você ganhou ${parseInt(amountBet)} N-Coins, por acertar a previsão do dado.`,
                ];
                await mention(WINN[Math.floor(Math.random() * WINN.length)]);
                await SYSTEM_COIN.AdicionarCoins(sender, parseInt(amountBet));
              }, 5000);
            } else {
              setTimeout(async () => {
                PERDA = [
                  `🤧 Dessa vez *@${sender.split("@")[0]}*, você não conseguiu acertar a previsão! Foi descontado de sua carteira: *${parseInt(amountBet)} N-Coins!`,
                  `😿😨 Infelizmente *@${sender.split("@")[0]}*, você perdeu ${parseInt(amountBet)} por errar a previsão do dado.`,
                ];
                await mention(PERDA[Math.floor(Math.random() * PERDA.length)]);
                await SYSTEM_COIN.RemoverCoins(sender, parseInt(amountBet));
              }, 5000);
            }
            break;

          case "minerar":
          case "minerarcoins":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModoCoins)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`
              );
            if (RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar > 5)
              return reply(
                `Sinto muito, você não tem mais chance para minerar hoje, porque você completou: 6/6.`
              );
            !RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS]
              ? (RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar = 1)
              : (RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar += 1);
            CoinsUpdate(RG_SCOINS);
            aleatValor = Math.floor(Math.random() * 2);
            rndg = Math.floor(Math.random() * 300);
            if (aleatValor == 0) {
              randomMining = [
                `Você estava minerando nas ilhas savitas e encontrou em seu caminho ${Number(rndg)} N-Coins em minerais preciosos! 💰`,
                `🗣💰 Você invadiu uma mina proibida e quando estava fazendo a mineração achou ${Number(rndg)} N-Coins em troca de ouro!`,
                `💎👷🏻‍♀️ Você invadiu uma mina de diamantes proibida, enquanto você estava fazendo a mineração, encontrou 2 diamantes equivalentes à ${Number(rndg)} N-Coins.`,
                `⛏️👷🏻‍♀️ Você escavou uma mina de ouro subterrânea em Minas Gerais e encontrou ${Number(rndg)} N-Coins!`,
                `🛫 Em uma de suas viagens para o interior da Flórida, você embarcou uma busca ao tesouro perdido e encontrou em seu caminho um cordão de ouro perdido avaliado em ${Number(rndg)} N-Coins.`,
                `😱🌟 Você invadiu a casa do vizinho e encontrou ${Number(rndg)} N-Coins escavando o quintal dele.`,
                `⛏️👷🏻‍♀️✨️ Você acaba de invadir em uma mina de esmeraldas desconhecida e encontrou ${Number(rndg)} N-Coins`,
                `🛥️💰 Você encontrou nas profundezas do oceanos, um tesouro em um navio antigo equivalente à ${Number(rndg)} N-Coins.`,
                `🌟 Você foi chamado para trabalhar na mina e encontrou milhares de resíduos! Como recompensa, você acaba de ganhar ${Number(rndg)} N-Coins. 😸`,
                `Você foi chamado para trabalhar na mina e encontrou muitos tesouros perdidos!👷🏼🌟 Como recompensa, você acaba de ganhar ${Number(rndg)} N-Coins.`,
              ];
              await reply(
                randomMining[Math.floor(Math.random() * randomMining.length)]
              );
              sender, rndg;
            } else if (aleatValor != 0) {
              miningFailureRX = [
                "😥 Em sua tentativa de mineração, não foi possível evidenciar nenhum mineral valioso!",
                "😿 Em sua tentativa de mineração, não foi possível evidenciar nenhuma joia valiosa em sua caçada misteriosa! 🌟",
                "⛏️💎 Em sua tentativa de mineração em Minas Gerais no Brasil, um estado particularmente rico em diamantes, mas você não deu sorte em sua escavação.",
                "😿🌟 Em sua tentativa de mineração, não foi possível evidenciar nenhum minério validoso.",
                "Particularmente, dessa vez você não deu sorte em sua mineração! Mas não desista, você pode ter muitas chances de sucssso ainda hoje. Ouça meus conselhos! 🌟",
                "A sorte virou sua inimiga por hoje! Você não conseguiu obter nenhum minério em sua caçada! Mas não desista! 😁",
              ];
              miningFailure =
                miningFailureRX[
                  Math.floor(Math.random() * miningFailureRX.length)
                ];
              miningFailure +=
                RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar >= 5
                  ? "\n> Infelizmente você não tem mais chances para minerar hoje, volte amanhã..."
                  : `\n> Ainda lhe resta ${RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar}/6 para obter Coins por hoje, você pode minerar 6 vezes ao dia.`;
              await reply(miningFailure);
            }
            break;

          case "modocoins":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
            if (args.length < 1)
              return reply(
                `Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
              );
            if (Number(args[0]) === 1) {
              if (isModoCoins)
                return await mention(
                  `'@${sender.split("@")[0]}' o sistema de Moedas já está ativado neste grupo atualmente, para desativar troque o 1 por 0.`
                );
              dataGp[0].isModoCoins = true;
              setGp(dataGp);
              await mention(
                `O sistema de Moedas neste grupo foi ativado com sucesso pelo administrador(a): '@${sender.split("@")[0]}'.`
              );
            } else if (Number(args[0]) === 0) {
              if (!isModoCoins)
                return await mention(
                  `'@${sender.split("@")[0]}' o sistema de Moedas já está desativado neste grupo atualmente, para desativar troque o 0 por 1.`
                );
              dataGp[0].isModoCoins = false;
              setGp(dataGp);
              await mention(
                `O sistema de Moedas neste grupo foi desativado com êxito pelo administrador(a): '@${sender.split("@")[0]}'.`
              );
            } else {
              await reply(
                "Use 0 para desativar a função e 1 para ativar a função em seu grupo."
              );
            }
            break;

          case "revelargartic":
            if (!isGroupAdmins)
              return reply("Somente adms podem ver a(s) resposta(s) do jogos!");
            if (fs.existsSync(`./database/grupos/games/gartic/${from}.json`))
              return reply(
                "Não existe nenhuma partida atual do jogo neste grupo."
              );
            let dataAnagramaa = JSON.parse(
              fs.readFileSync(`./database/grupos/games/gartic/${from}.json`)
            );
            reply(
              `• Olá *${pushname}*, a resposta correta da afirmação era: ${II}${dataAnagramaa.resposta}${II}\n• Envie a resposta apresentada acima para passar a próxima..`
            );
            break;

          case "revelarenigma":
            if (!isGroupAdmins)
              return reply("Somente adms podem ver a(s) resposta(s) do jogos!");
            if (fs.existsSync(`./database/grupos/games/enigma/${from}.json`))
              return reply(
                "Não existe nenhuma partida atual do jogo neste grupo."
              );
            let eni1 = JSON.parse(
              fs.readFileSync(`./database/grupos/games/enigma/${from}.json`)
            );
            reply(
              `• Olá *${pushname}*, a resposta correta do enigma era: ${II}${eni1.respostaEne}${II}\n• Envie a resposta apresentada acima para passar a próxima..`
            );
            break;

          case "anagrama":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isModoCoins)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`
              );
            const anaaleatorio = Math.floor(Math.random() * palavrasANA.length);
            if (args.length == 0)
              return reply(
                "Use 1 para ativar o jogo do anagrama, ou seja, para desativar utilize o valor numérico 0"
              );
            if (args.join(" ") === "1") {
              if (
                fs.existsSync(`./database/grupos/games/anagrama/${from}.json`)
              ) {
                an = JSON.parse(
                  fs.readFileSync(
                    `./database/grupos/games/anagrama/${from}.json`
                  )
                );
                reply(
                  `• Já existe um registro da ativação do anagrama aqui no grupo, resolva abaixo, caso desejar resetar ou desativar, use: *${prefix}anagrama 1/0*\n—\n⭐️ Qual é a ordem correta da palavra? Resolva: *${an.embaralhada}*\n• Dica: ${an.dica}`
                );
              } else {
                fs.writeFileSync(
                  `./database/grupos/games/anagrama/${from}.json`,
                  `${JSON.stringify(palavrasANA[anaaleatorio])}`
                );
                await akame.sendMessage(
                  from,
                  {
                    text: `🌟😲 Decifre a palavra embaralhada abaixo, qual será a ordem correta das letras?\n—\n• Palavra: *${shuffle(palavrasANA[anaaleatorio].palavraOriginal)}*\n• Dica: ${palavrasANA[anaaleatorio].dica}`,
                  },
                  { quoted: selo }
                );
              }
            } else if (args.join(" ") === "0") {
              if (
                !fs.existsSync(`./database/grupos/games/anagrama/${from}.json`)
              )
                return reply(
                  "Não tem como desativar o jogo do anagrama pôs ele não foi ativado..."
                );
              fs.unlinkSync(`./database/grupos/games/anagrama/${from}.json`);
              reply("Desativado com sucesso.");
            }
            break;

          case "quizanimais":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isModoCoins)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`
              );
            const animaisquiz = Math.floor(Math.random() * quizanimais.length);
            if (args.length == 0)
              return reply(
                "Use 1 para ativar o quiz animais, ou seja, para desativar utilize o valor numérico 0"
              );
            if (args.join(" ") === "1") {
              if (
                fs.existsSync(
                  `./database/grupos/games/quiz-animais/${from}.json`
                )
              ) {
                superrttrr = JSON.parse(
                  fs.readFileSync(
                    `./database/grupos/games/quiz-animais/${from}.json`
                  )
                );
                imagemtexto = `• Existe um jogo existente, aqui no grupo! Resolva a pergunta abaixo:\n—\n🤔 Pergunta: ${superrttrr.question}`;
                wew = await getBuffer(`${superrttrr.foto}`);
                await akame.sendMessage(
                  from,
                  { image: wew, caption: imagemtexto },
                  { quoted: selo }
                );
              } else {
                fs.writeFileSync(
                  `./database/grupos/games/quiz-animais/${from}.json`,
                  `${JSON.stringify(quizanimais[animaisquiz])}`
                );
                wew = await getBuffer(`${quizanimais[animaisquiz].foto}`);
                await akame.sendMessage(
                  from,
                  {
                    image: wew,
                    caption: `🤔 Pergunta: ${quizanimais[animaisquiz].question}`,
                  },
                  { quoted: selo }
                );
              }
            } else if (args.join(" ") === "0") {
              if (
                !fs.existsSync(
                  `./database/grupos/games/quiz-animais/${from}.json`
                )
              )
                return reply(
                  "Não tem como desativar o jogo pôs ele não foi ativado"
                );
              fs.unlinkSync(
                `./database/grupos/games/quiz-animais/${from}.json`
              );
              reply("Desativado com sucesso.");
            }
            break;

          case "whatmusic":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isModoCoins)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`
              );
            const whatMAle = Math.floor(Math.random() * whatMusicAr.length);
            if (args.length == 0)
              return reply(
                "Use 1 para ativar o jogo, ou seja, para desativar utilize o valor numérico 0"
              );
            if (args.join(" ") === "1") {
              if (
                fs.existsSync(`./database/grupos/games/wmusic/${from}.json`)
              ) {
                dataW = JSON.parse(
                  fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`)
                );
                reply(
                  `Já existe uma partida iniciada aqui no grupo, confira:\n–\n${dataW.trechoMusic}\n–\n🤔😱 Qual música pertence o trecho apresentado acima?\n• ${II}Dica:${II} ${dataW.dica}`
                );
              } else {
                fs.writeFileSync(
                  `./database/grupos/games/wmusic/${from}.json`,
                  `${JSON.stringify(whatMusicAr[whatMAle])}`
                );
                await akame.sendMessage(
                  from,
                  {
                    text: `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡\n–\n${whatMusicAr[whatMAle].trechoMusic}\n–\n🤔😱 Qual música pertence o trecho apresentado acima?\n• ${II}Dica:${II} ${whatMusicAr[whatMAle].dica}`,
                  },
                  { quoted: selo }
                );
              }
            } else if (args.join(" ") === "0") {
              if (!fs.existsSync(`./database/grupos/games/wmusic/${from}.json`))
                return reply(
                  "Não tem como desativar o jogo, pois ele não foi ativado"
                );
              fs.unlinkSync(`./database/grupos/games/wmusic/${from}.json`);
              reply("Desativado com sucesso.");
            }
            break;

          case "gartic":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isModoCoins)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`
              );
            const garticquiz = Math.floor(
              Math.random() * garticArchives.length
            );
            if (args.length == 0)
              return reply(
                "Use 1 para ativar o gartic, ou seja, para desativar utilize o valor numérico 0"
              );
            if (args.join(" ") === "1") {
              if (
                fs.existsSync(`./database/grupos/games/gartic/${from}.json`)
              ) {
                dataGartic2 = JSON.parse(
                  fs.readFileSync(`./database/grupos/games/gartic/${from}.json`)
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: `${dataGartic2.imagem}` },
                    caption: `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}\n📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"\n🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`,
                  },
                  { quoted: selo }
                );
              } else {
                fs.writeFileSync(
                  `./database/grupos/games/gartic/${from}.json`,
                  `${JSON.stringify(garticArchives[garticquiz])}`
                );
                await akame.sendMessage(
                  from,
                  {
                    image: { url: `${garticArchives[garticquiz].imagem}` },
                    caption: `👩🏼‍🏫 - A resposta é representada por um(a): ${garticArchives[garticquiz].pergunta}\n📜 - A resposta supostamente começa com a(s) letra(s): "${garticArchives[garticquiz].letra_inicial}"\n🤔 - Hmmm, contém traços? ${garticArchives[garticquiz].contem_traços}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`,
                  },
                  { quoted: selo }
                );
              }
            } else if (args.join(" ") === "0") {
              if (!fs.existsSync(`./database/grupos/games/gartic/${from}.json`))
                return reply(
                  "Não tem como desativar o gartic pôs ele não foi ativado."
                );
              fs.unlinkSync(`./database/grupos/games/gartic/${from}.json`);
              reply("Desativado com sucesso.");
            }
            break;

          case "enigma":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply("Somente adms!");
            if (!isModoCoins)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`
              );
            const engimaSolu = Math.floor(Math.random() * enigmaArchive.length);
            if (args.length == 0)
              return reply(
                "Use 1 para ativar o enigma, ou seja, para desativar utilize o valor numérico 0"
              );
            if (args.join(" ") === "1") {
              if (
                fs.existsSync(`./database/grupos/games/enigma/${from}.json`)
              ) {
                NAGA_NAGA_ENI = JSON.parse(
                  fs.readFileSync(`./database/grupos/games/enigma/${from}.json`)
                );
                await akame.sendMessage(
                  from,
                  {
                    image: {
                      url: `https://telegra.ph/file/15be608763684b3e3af38.jpg`,
                    },
                    caption: `📜 - Resolva o seguinte enigma abaixo:\n–\n${NAGA_NAGA_ENI.charada}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`,
                    thumbnail: wew,
                  },
                  { quoted: selo }
                );
              } else {
                fs.writeFileSync(
                  `./database/grupos/games/enigma/${from}.json`,
                  `${JSON.stringify(enigmaArchive[engimaSolu])}`
                );
                await akame.sendMessage(
                  from,
                  {
                    image: {
                      url: `https://telegra.ph/file/15be608763684b3e3af38.jpg`,
                    },
                    caption: `📜 - Resolva o seguinte enigma abaixo:\n–\n${enigmaArchive[engimaSolu].charada}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`,
                    thumbnail: wew,
                  },
                  { quoted: selo }
                );
              }
            } else if (args.join(" ") === "0") {
              if (!fs.existsSync(`./database/grupos/games/enigma/${from}.json`))
                return reply(
                  "Não tem como desativar o enigma pôs ele não foi ativado."
                );
              fs.unlinkSync(`./database/grupos/games/enigma/${from}.json`);
              reply("Desativado com sucesso.");
            }
            break;

          case "quizfutebol":
          case "quizfut":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isGroupAdmins) return reply(mess.onlyAdmins());
            if (!isModoCoins)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`
              );
            const futebolquiz = Math.floor(Math.random() * quizFutebol.length);
            if (args.length == 0)
              return reply(
                "Use 1 para ativar o quiz futebol, ou seja, para desativar utilize o valor numérico 0"
              );
            if (args.join(" ") === "1") {
              if (
                fs.existsSync(
                  `./database/grupos/games/quiz-futebol/${from}.json`
                )
              ) {
                superrttrr = JSON.parse(
                  fs.readFileSync(
                    `./database/grupos/games/quiz-futebol/${from}.json`
                  )
                );
                texto = `• Já existe uma partida iniciada aqui no grupo! Resolva a pergunta abaixo:\n—\n💫⚽ 𝐐𝐔𝐈𝐙 𝐅𝐔𝐓𝐄𝐁𝐎𝐋 ⚽💫\n–\n*🗣️| Responda a pergunta mostrada abaixo:*\n• _${superrttrr.pergunta}_`;
                await akame.sendMessage(
                  from,
                  { text: texto },
                  { quoted: selo }
                );
              } else {
                fs.writeFileSync(
                  `./database/grupos/games/quiz-futebol/${from}.json`,
                  `${JSON.stringify(quizFutebol[futebolquiz])}`
                );
                await akame.sendMessage(
                  from,
                  {
                    text: `💫⚽ 𝐐𝐔𝐈𝐙 𝐅𝐔𝐓𝐄𝐁𝐎𝐋 ⚽💫\n–\n*🗣️| Responda a pergunta mostrada abaixo:*\n• _${quizFutebol[futebolquiz].pergunta}_`,
                  },
                  { quoted: selo }
                );
              }
            } else if (args.join(" ") === "0") {
              if (
                !fs.existsSync(
                  `./database/grupos/games/quiz-futebol/${from}.json`
                )
              )
                return reply(
                  "Não tem como desativar o jogo pôs ele não foi ativado"
                );
              fs.unlinkSync(
                `./database/grupos/games/quiz-futebol/${from}.json`
              );
              reply("Desativado com sucesso.");
            }
            break;

          default:
            // IF DOS ANTIs - (LOCALIZAÇÃO - CONTATO - CATALOGO)
            if (isGroup && isBotGroupAdmins && !isGroupAdmins) {
              if (isAntiCtt || Antiloc || isAnticatalogo) {
                if (
                  type === "contactMessage" ||
                  type === "contactsArrayMessage" ||
                  type === "locationMessage" ||
                  type === "productMessage"
                ) {
                  if (isGroupAdmins)
                    return await akame.sendMessage(
                      from,
                      { text: mess.antisRandomMessage() },
                      { quoted: selo }
                    );
                  if (IS_DELETE) {
                    setTimeout(async () => {
                      await akame.sendMessage(from, {
                        delete: {
                          remoteJid: from,
                          fromMe: false,
                          id: info.key.id,
                          participant: sender,
                        },
                      });
                    }, 500);
                  }
                  if (!JSON.stringify(groupMembers).includes(sender)) return;
                  await akame.groupParticipantsUpdate(from, [sender], "remove");
                  await akame.sendMessage(from, {
                    text: `🗑${"\n".repeat(255)}🗑️\n✅️ A limpeza de chat foi concluída com sucesso.`,
                    contextInfo: { forwardingScore: 500, isForwarded: true },
                  });
                  await akame.sendMessage(from, {
                    text: "Por favor, reporte aos adminstradores do grupo sobre o ocorrido.",
                    mentions: groupAdmins,
                  });
                }
              }
            }

            if (
              isGroup &&
              isAntiFlood &&
              !SoDono &&
              !isVip &&
              !isnit &&
              isBotGroupAdmins &&
              !isGroupAdmins &&
              !isBot
            ) {
              if (isLimitec == null) {
                var limitefl = limitefll.limitefl;
              } else {
                var limitefl = isLimitec;
              }
              if (budy.length >= limitefl) {
                setTimeout(async () => {
                  reply(mess.charactersAnti());
                  console.log(
                    colors.red(`[SPAM DETECTED IN THE GROUP]`),
                    "Grupo:",
                    colors.yellow(`${groupName}`),
                    colors.white(`Ocorrência: ${hourofc} ${dattofc}`)
                  );
                }, 100);
                setTimeout(async () => {
                  if (IS_DELETE) {
                    setTimeout(async () => {
                      akame.sendMessage(from, {
                        delete: {
                          remoteJid: from,
                          fromMe: false,
                          id: info.key.id,
                          participant: sender,
                        },
                      });
                    }, 500);
                  }
                  if (!JSON.stringify(groupMembers).includes(sender)) return;
                  await akame.groupParticipantsUpdate(from, [sender], "remove");
                }, 1000);
              }
            }

            if (isAutorepo) {
              if (budy2 === "bot") {
                reply(mess.chamandoBot(pushname, tempo));
              }

              if (budy2.includes("bot corno")) {
                if (info.key.fromMe) return;
                reply("Corno é você, seu animal!");
              }

              if (
                budy2.includes("adivinha meu celular") ||
                budy2.includes("bot qual meu celular")
              ) {
                akame.sendMessage(from, { text: adivinha }, { quoted: selo });
              }

              if (budy2.includes("boa noite")) {
                tujuh = await fetch(boa_noite).then((v) => v.buffer());
                await akame.sendMessage(
                  from,
                  { audio: tujuh, mimetype: "audio/mpeg", ptt: true },
                  { quoted: selo }
                );
              }

              if (budy2.includes("boa tarde")) {
                tujuh = await fetch(boa_tarde).then((v) => v.buffer());
                await akame.sendMessage(
                  from,
                  { audio: tujuh, mimetype: "audio/mpeg", ptt: true },
                  { quoted: selo }
                );
              }

              if (budy2.includes("bom dia")) {
                tujuh = await fetch(bom_dia).then((v) => v.buffer());
                await akame.sendMessage(
                  from,
                  { audio: tujuh, mimetype: "audio/mpeg", ptt: true },
                  { quoted: selo }
                );
              }

              if (budy2.includes("corno")) {
                tujuh = await fetch(corno).then((v) => v.buffer());
                await akame.sendMessage(
                  from,
                  { audio: tujuh, mimetype: "audio/mpeg", ptt: true },
                  { quoted: selo }
                );
              }
            }

            //=[ ANTI PALAVRAS - (🤖) - GRUPOS ]=\\
            if (
              isGroup &&
              isPalavrao &&
              isBotGroupAdmins &&
              !SoDono &&
              !isGroupAdmins
            ) {
              if (
                dataGp[0].antipalavrao.palavras.some((i) =>
                  budy2.includes(
                    i
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                  )
                )
              ) {
                setTimeout(() => {
                  if (!JSON.stringify(groupMembers).includes(sender)) return;
                  akame.groupParticipantsUpdate(from, [sender], "remove");
                  setTimeout(() => {
                    akame.sendMessage(from, {
                      delete: {
                        remoteJid: from,
                        fromMe: false,
                        id: info.key.id,
                        participant: sender,
                      },
                    });
                  }, 500);
                }, 2000);
                akame.sendMessage(
                  from,
                  { text: mess.permissionDenied_rUser() },
                  { quoted: selo }
                );
              }
            }

            if (isGroup && isSimi && budy != undefined) {
              if (type == "imageMessage") return;
              if (type == "audioMessage") return;
              if (type == "stickerMessage") return;
              if (info.key.fromMe) return;
              emojisList = ["🤠", "💅🏻", "🦸‍♀️", "👮‍♀️", "😹", "😸"];
              await reagir(
                from,
                emojisList[Math.floor(Math.random() * emojisList.length)]
              );
              muehe = await simih(budy);
              await akame
                .sendMessage(from, { text: muehe }, { quoted: selo })
                .catch(async (e) => {
                  reply(mess.errorResponseSimi());
                });
            }

            // COMANDO ERRADO

            hora2 = moment.tz("America/Sao_Paulo").format("HH:mm:ss");

            if (isCmd) {
              uptime = process.uptime();
              if (SoDono) {
                reagir(from, "🤷");
                akame.sendPresenceUpdate("composing", from);
                audiomenu = await fs.readFileSync(
                  "./database/data/media/audios/mestre.mp3"
                );
                akame.sendMessage(
                  from,
                  { audio: audiomenu, mimetype: "audio/mpeg", ptt: true },
                  { quoted: selo }
                );
              } else {
                reagir(from, "🤷");
                akame.sendPresenceUpdate("composing", from);
                audiomenu = await fs.readFileSync(
                  "./database/data/media/audios/iscmd.mp3"
                );
                akame.sendMessage(
                  from,
                  { audio: audiomenu, mimetype: "audio/mpeg", ptt: true },
                  { quoted: selo }
                );
              }
            }
        }
      }
    }

    //=================

    const nmrdn =
      setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "") +
      `@s.whatsapp.net`;

    async function forTemporaryVip() {
      if (vip.length > 0) {
        for (y of vip) {
          if (y.save != Number(moment.tz("America/Sao_Paulo").format("DD"))) {
            y.save = Number(moment.tz("America/Sao_Paulo").format("DD"));
            fs.writeFileSync(
              "./database/usuarios/vip.json",
              JSON.stringify(vip)
            );
            if (y.infinito == false) {
              if (y.dias > 1) {
                y.dias -= 1;
                fs.writeFileSync(
                  "./database/usuarios/vip.json",
                  JSON.stringify(vip)
                );
              } else {
                akame.sendMessage(y.id, {
                  text: `⚠️ *ATENÇÃO!* Seus dias como usuário vip acabam de terminar, para realizar a renovação entre em contato com o número abaixo:\n• Contato: *http://wa.me/${nmrdn.split("@")[0]}*\n––\n• Desde já muito obrigado pela atenção, desculpe-me o incômodo.\n• *Essa mensagem é automática*, caso seja um engano entre em contato com número acima e saiba mais!`,
                });
                AB = vip.map((b) => b.id).indexOf(y.id);
                vip.splice(AB, 1);
                fs.writeFileSync(
                  "./database/usuarios/vip.json",
                  JSON.stringify(vip)
                );
              }
            }
          }
        }
      }
    }

    forTemporaryVip().catch((error) => {
      console.log(error);
    });

    async function timeRentOficial() {
      if (aluguel.length > 0) {
        for (x of aluguel) {
          if (
            x.save != Number(moment.tz("America/Sao_Paulo").format("DD")) &&
            x.cortesia == false
          ) {
            if (x.tempo > 1) {
              if (
                Number(x.tempo) === 8 ||
                Number(x.tempo) === 4 ||
                Number(x.tempo) === 3 ||
                Number(x.tempo) === 2
              )
                return akame.sendMessage(x.cliente, {
                  text: `😿⚠️ Olá, acabo de verificar que nosso contrato no grupo *${aluguel[aluguel.map((m) => m.id).indexOf(x.id)].nome}* termina em ${Number(x.tempo) === 8 ? `1 semana (7 dias)` : Number(x.tempo) !== 2 ? `${x.tempo - 1} dias` : `24 horas (amanhã)`}...\n• Não deixe de fechar contrato novamente com nossa equipe! *Qualquer dúvida, entre em contato com meu proprietário.*`,
                });
              x.save = Number(moment.tz("America/Sao_Paulo").format("DD"));
              x.tempo -= 1;
              fs.writeFileSync(
                "./database/grupos/aluguel/aluguel.json",
                JSON.stringify(aluguel, null, 2)
              );
            } else {
              akame.sendMessage(x.id, {
                text: `*O tempo limite deste grupo acabou!😿💔* Para a renovação do contrato entre em contato com o meu dono: *wa.me/${nmrdn.split("@")[0]}*`,
              });
              akame.sendMessage(nmrdn, {
                text: `🤓🗑️ Só passando pra avisar que o tempo limite do grupo *${x.nome}* expirou agora... Visto que o(a) *@${x.cliente.split("@")[0]}* não renovou o contrato, eu saí do grupo dele(a) e apaguei os registros! 🌟`,
                mentions: [x.cliente],
              });
              findGroupRG = grupos.map((i) => i.id).indexOf(x.id);
              grupos.splice(findGroupRG, 1);
              fs.writeFileSync(
                "./database/grupos/aluguel/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
              findGroupRent = aluguel.map((i) => i.id).indexOf(x.id);
              aluguel.splice(findGroupRent, 1);
              fs.writeFileSync(
                "./database/grupos/aluguel/aluguel.json",
                JSON.stringify(aluguel, null, 2)
              );
              await sleep(4000);
              await akame.groupLeave(x.id);
            }
          }
        }
      }
    }

    timeRentOficial().catch((error) => {
      console.log(error);
    });

    async function forRentCourtesy() {
      if (aluguel.length > 0) {
        for (x of aluguel) {
          if (
            x.save != Number(moment.tz("America/Sao_Paulo").format("HH")) &&
            x.cortesia == true
          ) {
            if (x.tempo > 0) {
              x.save = Number(moment.tz("America/Sao_Paulo").format("HH"));
              x.tempo -= 1;
              fs.writeFileSync(
                "./database/grupos/aluguel/aluguel.json",
                JSON.stringify(aluguel, null, 2)
              );
            } else {
              akame.sendMessage(x.id, {
                text: `🌟💳 *O cartão cortesia 24h deste grupo expirou!* Caso se veja interessado em nossos serviços, favor entrar em contato com meu dono: *wa.me/${setting.ownerNumber}*`,
              });
              akame.sendMessage(nmrdn, {
                text: `🤓🗑️Só passando pra avisar que o cartão cortesia do grupo *${x.nome}* expirou agora... Visto que não houve alteração em meus registros, eu saí do grupo e apaguei os dados! 🌟`,
              });
              grupos.splice(grupos.map((i) => i.id).indexOf(x.id), 1);
              fs.writeFileSync(
                "./database/grupos/aluguel/grupos.json",
                JSON.stringify(grupos, null, 2)
              );
              aluguel.splice(aluguel.map((i) => i.id).indexOf(x.id), 1);
              fs.writeFileSync(
                "./database/grupos/aluguel/aluguel.json",
                JSON.stringify(aluguel, null, 2)
              );
              await sleep(4000);
              await akame.groupLeave(x.id);
            }
          }
        }
      }
    }

    forRentCourtesy().catch((error) => {
      console.log(error);
    });

    startFunctionNaga().catch(async (error) => {
      if (JSON.stringify(error).includes(API_KEY_AKAME)) {
      } else if (String(error).includes("Erro: aborted")) {
        fileStart = require.resolve("./connect.js");
        delete require.cache[fileStart];
        require(fileStart);
      } else if (String(error).includes("nativeFlowResponseMessage")) {
        // Para ignorar um erro contendo essa função, até a correção, está funcionando perfeitamente. //
      } else {
        return console.log(
          "O servidor-geral caiu ou não foi possivel executar esta ação.",
          error
        );
      }
    });
  };
}

/* Atualizar o arquivo de forma automática, após o index.js ser salvo com uma modificação.*/
fs.watchFile(require.resolve(__filename), () => {
  fs.unwatchFile(require.resolve(__filename));
  console.log(colors.red(`Alterações salvas - '${__filename}'`));
  delete require.cache[require.resolve(__filename)];
  require(require.resolve(__filename));
});

module.exports = startakame;
