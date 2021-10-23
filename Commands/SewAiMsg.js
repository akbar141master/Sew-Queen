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
let https = require('https');
let googleTTS = require('google-translate-tts');
let DATA = DataHelp.dataGet('voicy');
let axiosdef = require("axios").default;
let translatte = require('translatte');
let LanguageDetect = require('languagedetect');
let lngDetector = new LanguageDetect();
let Heroku = require('heroku-client');
let heroku = new Heroku({
    token: Details.HEROKU.API_KEY
});
let baseURI = '/apps/' + Details.HEROKU.APP_NAME;
var vtalk_dsc = 'start to sew voice chat'
var reply_sew = 'reply to any voice message'

let recognizeAudio = () => {
    let headers = new Headers({
        'Content-Type': 'audio/wav',
        "Authorization": `Bearer ${Details.WITAI_API}`,
        'Cache-Control': 'no-cache',
        'Transfer-Encoding': 'chunked'
    })
    let requestBody = {
        method: "POST",
        body: fs.readFileSync('output.wav'),
        headers: headers
    }
    return fetch("https://api.wit.ai/speech?v=20200219", requestBody)
        .then(response => response.json())
        .then(json => json._text)
}
let convertToWav = file => {
    return ffmpeg(file)
        .audioCodec('pcm_s16le')
        .format('wav')
        .save('output.wav')
}
SewQueen['IntroduceCMD']({on: 'text', fromMe: false, dontAdCommandList: true, deleteCommand: false}, (async (message, input) => {
    if (message.message.startsWith('Sew') && Details.FULLSEW !== 'true') {        
        var unique_ident = message.client.user.jid.split('@')[0]      
        var finm = message.message.replace('Sew', '').replace(' ', '')   
        var trmsg = ''
            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
            if ('text' in ceviri) {
                trmsg = ceviri.text
            }
        var uren = encodeURI(trmsg)
        await axios.get('http://api.brainshop.ai/get?bid=158771&key=lde7pf4X5TyRxddQ&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
            var fins = ''                           
            if (Details.LANG !== 'EN') {
                ceviri = await translatte(response.data.cnt, {from: 'auto', to: Details.LANG});
                if ('text' in ceviri) {
                    fins = ceviri.text
                }
            } else { fins = response.data.cnt }
            await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
        })
    }
}));
SewQueen['IntroduceCMD']({on: 'text', fromMe: false, deleteCommand: false}, (async (message, input) => {
        if (Details.FULLSEW == 'true' && ((!message.jid.includes('-')) || (message.jid.includes('-') && 
            (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
            if (message.jid.includes('-') && (message.mention !== false && message.mention.length !== 0)) {
                message.mention.map(async (jid) => {
                    if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                        var unique_ident = message.client.user.jid.split('@')[0]      
                        
                        var finm = message.message
                        var trmsg = ''

                            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                            if ('text' in ceviri) {
                                trmsg = ceviri.text
                            }
                        var uren = encodeURI(trmsg)
                        await axios.get('http://api.brainshop.ai/get?bid=158771&key=lde7pf4X5TyRxddQ&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                            var fins = ''                           
                            if (Details.LANG !== 'EN') {
                                ceviri = await translatte(response.data.cnt, {from: 'auto', to: Details.LANG});
                                if ('text' in ceviri) {
                                    fins = ceviri.text
                                }
                            } else { fins = response.data.cnt }
                            await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                        })
                    }
                })
            } else if (message.jid.includes('-') && message.reply_message !== false) {
                if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                    var unique_ident = message.client.user.jid.split('@')[0]      
                    
                    var finm = message.message
                    var trmsg = ''
           
                        ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                        if ('text' in ceviri) {
                            trmsg = ceviri.text
                        }
              
                    var uren = encodeURI(trmsg)
                    await axios.get('http://api.brainshop.ai/get?bid=158771&key=lde7pf4X5TyRxddQ&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                        var fins = ''                           
                        if (Details.LANG !== 'EN') {
                            ceviri = await translatte(response.data.cnt, {from: 'auto', to: Details.LANG});
                            if ('text' in ceviri) {
                                fins = ceviri.text
                            }
                        } else { fins = response.data.cnt }
                        await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                    })
                }
            } else {
                var unique_ident = message.client.user.jid.split('@')[0]      
                
                var finm = message.message
            
                var trmsg = ''
                    ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                    if ('text' in ceviri) {
                        trmsg = ceviri.text
                    }
                var uren = encodeURI(trmsg)
                await axios.get('http://api.brainshop.ai/get?bid=158771&key=lde7pf4X5TyRxddQ&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                    var fins = ''                           
                    if (Details.LANG !== 'EN') {
                        ceviri = await translatte(response.data.cnt, {from: 'auto', to: Details.LANG});
                        if ('text' in ceviri) {
                            fins = ceviri.text
                        }
                    } else { fins = response.data.cnt }
                    await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                })
            }
        }

}));
SewQueen['IntroduceCMD']({ pattern: 'vtalk$', desc: vtalk_dsc,dontAdCommandList: true, fromMe: false }, (async (message, input) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,reply_sew, MessageType.text, { quoted: message.data }) 
    try {
        let file = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        })
        
        convertToWav(file)
            .on('end', async () => {
                let recognizedText = await recognizeAudio()
                
                var ssc = ''
                ceviri = await translatte(recognizedText, {from: 'auto', to: 'EN' });
                if ('text' in ceviri) {
                    ssc = ceviri.text
                }
                var unique_ident = message.client.user.jid.split('@')[0]
                
        
                var son = encodeURI(ssc)
                await axios.get('http://api.brainshop.ai/get?bid=158771&key=lde7pf4X5TyRxddQ&uid=' + unique_ident + '&msg=' + son).then(async (response) => {
                    var trmsg = ''
                    cevir = await translatte(response.data.cnt, {from: 'auto', to: Details.LANG});
                    if ('text' in cevir) {
                        trmsg = cevir.text
                    }
            
                    let 
                        LANG = Details.LANG.toLowerCase(),
                        ttsMessage = trmsg,
                        SPEED = 1.0
                    var buffer = await googleTTS.synthesize({
                        text: ttsMessage,
                        voice: LANG
                    });
            
                    await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data})
                }).catch(async (error) => {
	            console.log(error)
                });
        });
    } catch (err) { console.log(err) }
}));
