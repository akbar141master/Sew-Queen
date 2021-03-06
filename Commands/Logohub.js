/* 
 Sew Queen Whatsapp Bot                       
                       
 Telegram: t.me/RavinduManoj
 Facebook: https://www.facebook.com/ravindu.manoj.79
 Licensed under the  GPL-3.0 License;
 
 Coded By Ravindu Manoj
*/ 
let DataPack = require('sew-queen-pro');
let SewQueen = require('sew-queen-pro/sources/dc/handler');
let Details = require('sew-queen-pro/sources/dc/Details');
let {sendMessagettplist, sendMessagettpres} = require('sew-queen-pro/sources/dc/cmd/ttp')
let {sendMessagelogolist} = require('sew-queen-pro/sources/dc/cmd/TextList')
let {sendMessagelogores, sendMessagepngres} = require('sew-queen-pro/sources/dc/cmd/textmaker')
let WorkType = Details.WORKTYPE == 'public' ? false : true
var LOGODISC = '';
var des = '';
if (Details.LANG == 'SI') {
   des = 'ඉමෝජි පින්තූර බවට පත් කරයි'
   LOGODISC = '350 කට අදික ඌ ලෝගො සෑදීම සදහා යොදා ගන්න.අනිවාරයෙන් වචන දෙකක් යෙදිය යුතු අතර වචන දෙක / මගින් වෙන් කරන්න.\n🎲උදා:- .textlogo SEW / QUEEN'
} else {
   des = "You Can Png From Any Emoji"
   LOGODISC = '350+ Text To Image and Logo Maker... Need Two Words And Split Them Using /\neg : .textlogo SEW / Queen '
}
SewQueen['IntroduceCMD']({
        pattern: 'ttp ?(.*)', 
        fromMe: WorkType, 
        disc: 'ttp and sticker making command...\n*Usage:-* .ttp Sew'
       }, 
(async (QueenSew, input) => {
 await sendMessagettplist(QueenSew, input)
}));
SewQueen['IntroduceCMD']({
        pattern: 'png ?(.*)', 
        fromMe: WorkType, 
        disc: des
        }, 
(async (QueenSew, input) => { 
await sendMessagepngres(QueenSew, input)
})); 
SewQueen['IntroduceCMD']({
        pattern: 'respondlisttextmaker ?(.*)', 
        fromMe: WorkType, 
        dontAdCommandList: true,
        }, 
(async (QueenSew, input) => { 
await sendMessagelogores(QueenSew, input)
})); 
SewQueen['IntroduceCMD']({
        pattern: 'textlogo ?(.*)', 
        fromMe: WorkType, 
        disc: LOGODISC
        }, 
(async (QueenSew, input) => { 
await sendMessagelogolist(QueenSew, input)
})); 

SewQueen['IntroduceCMD']({
        pattern: 'responderlistttp ?(.*)', 
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessagettpres(QueenSew, input)
}));
