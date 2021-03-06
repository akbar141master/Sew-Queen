/* 

Sew Queen Whatsapp Bot                       

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Licensed under the  GPL-3.0 License;

Coded By Ravindu Manoj

*/ 
let DataPack = require('sew-queen-pro');
let SewQueen = require('sew-queen-pro/sources/dc/handler');
let Details = require('sew-queen-pro/sources/dc/Details');
let { MessageType, MessageOptions, Mimetype, GroupSettingChange, ChatModification, WAConnectionTest, WA_DEFAULT_EPHEMERAL } = require('@adiwajshing/baileys');
let fs = require('fs');
let os = require('os');
let ffmpeg = require('fluent-ffmpeg');
let exec = require('child_process').exec;
let axios = require('axios');
let got = require('got');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let DataHelp = DataPack.constdata
let WorkType = Details.WORKTYPE == 'public' ? false : true
let { thumbnail } = require('sew-queen-pro/sources/dc/media/thumbnail');  
const cheerio = require('cheerio')
const FormData = require('form-data')
const Axios = require('axios');
const DATA = DataHelp.dataGet('conventer');

function webp2mp4File(path) {
    return new Promise(async (resolve, reject) => {
        const bodyForm = new FormData()
        bodyForm.append('new-image-url', '')
        bodyForm.append('new-image', fs.createReadStream(path))
        await Axios({
            method: 'post',
            url: 'https://s6.ezgif.com/webp-to-mp4',
            data: bodyForm,
            headers: {
                'Content-Type': `multipart/form-data boundary=${bodyForm._boundary}`
            }
        }).then(async ({ data }) => {
            const bodyFormThen = new FormData()
            const $ = cheerio.load(data)
            const file = $('input[name="file"]').attr('value')
            const token = $('input[name="token"]').attr('value')
            const convert = $('input[name="file"]').attr('value')
            const gotdata = {
                file: file,
                token: token,
                convert: convert
            }
            bodyFormThen.append('file', gotdata.file)
            bodyFormThen.append('token', gotdata.token)
            bodyFormThen.append('convert', gotdata.convert)
            await Axios({
                method: 'post',
                url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                data: bodyFormThen,
                headers: {
                    'Content-Type': `multipart/form-data boundary=${bodyFormThen._boundary}`
                }
            }).then(({ data }) => {
                const $ = cheerio.load(data)
                const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
                resolve({
                    status: true,
                    message: Details.CPK,
                    result: result
                })
            }).catch(reject)
        }).catch(reject)
    })
}

    SewQueen['IntroduceCMD']({pattern: 'mp3$', fromMe: WorkType, desc: DATA.MP4TOAUD??O_DESC}, (async (message, input) => {    
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, DATA.MP4TOAUD??O_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,DATA.MP4TOAUD??O,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)    
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    SewQueen['IntroduceCMD']({pattern: 'photo$', fromMe: WorkType, desc: DATA.ST??CKER_DESC}, (async (message, input) => {    
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, DATA.ST??CKER_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,DATA.ST??CKER,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fromFormat('webp_pipe')
            .save('output.jpg')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    SewQueen['IntroduceCMD']({pattern: 'vsticker$', desc: DATA.AN??M_ST??CK, fromMe: WorkType}, (async (message, input) => {
        const mid = message.jid
        if (message.reply_message === false) return await message.sendMessage(DATA.ST??CKER_NEEDREPLY);
        await message.client.sendMessage(mid, DATA.AN??MATE, MessageType.text)
        const savedFilename = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await webp2mp4File(savedFilename).then(async (rest) => {
            await Axios({ method: "GET", url: rest.result, responseType: "stream"}).then(({ data }) => {
                const saving = data.pipe(fs.createWriteStream('/root/QueenSewWhatsappBot/stweb.mp4'))
                saving.on("finish", async () => {
                    await message.client.sendMessage(mid, fs.readFileSync('/root/QueenSewWhatsappBot/stweb.mp4'), MessageType.video, { mimetype: Mimetype.mp4, caption: Details.CPK, quoted: message.data })
                    if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
                    if (fs.existsSync('/root/QueenSewWhatsappBot/stweb.mp4')) fs.unlinkSync('/root/QueenSewWhatsappBot/stweb.mp4')
                })
            })
        })
    }));
