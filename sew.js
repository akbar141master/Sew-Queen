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
let {sendMessageownerMSG, sendMessageADSMSG, sendMessageBotOn, sendMessageGreetingMSG, sendMessageMSGMSG, sendMessageBlackListMSG, sendMessageBIOMSG} = DataPack.fullpathsew
let fs = require('fs');
let os = require('os');
let got = require('got');
let WorkType = Details.WORKTYPE == 'public' ? ' Public' : ' Private'
let path = require("path");
let chalk = require('chalk');
let {WAConnection, MessageOptions, MessageType, Mimetype, Presence, WALocationMessage, WAMessageProto, ReconnectMode, ProxyAgent, ChatModification, GroupSettingChange, WA_MESSAGE_STUB_TYPES, WA_DEAFULT_EPHEMERAL, waChatKey, mentionedJid, processTime, prepareMessageFromContent, relayWAMessage } = require('@adiwajshing/baileys');  
let {Message, StringSession, Image, Video} =  require('sew-queen-pro/sources/dc/Wa-Base/');
let { DataTypes } = require('sequelize');
let { getMessage } = require("./DataBase/greetings");
let Heroku = require('heroku-client');
let simpleGit = require('simple-git');
let heroku = new Heroku({
    token: Details.HEROKU.API_KEY
});
let git = simpleGit();
let baseURI = '/apps/' + Details.HEROKU.APP_NAME;

let SewQueenDB = Details.DATABASE.define('SewQueen', {
        info: {
                type: DataTypes.STRING,
                allowNull: false
        },
        value: {
                type: DataTypes.TEXT,
                allowNull: false
        }
});
fs.readdirSync('./DataBase/').forEach(plugin => {
        if (path.extname(plugin).toLowerCase() == '.js') {
                require('./DataBase/' + plugin)
        }
})
let Commandsdb = require('./DataBase/cmd');
var OWN = {
        ff: '94785435462,94785457519'
}
String.prototype.format = function () {
        var i = 0,
                args = arguments;
        return this.replace(/{}/g, function () {
                return typeof args[i] != 'undefined' ? args[i++] : '';
        })
};
if (!Date.now) {
        Date.now = function () {
                return new Date().getTime();
        }
}
Array.prototype.remove = function () {
        var what, a = arguments,
                L = a.length,
                ax;
        while (L && this.length) {
                what = a[--L];
                while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                }
        }
        return this;
};
async function sewQueen() {
    console.log('test')
        await Details.DATABASE.sync();
        var StrSes_Db = await SewQueenDB.findAll({
                where: {
                        info: 'StringSession'
                }
        });
        const DataKey = new WAConnection();
        DataKey.version = [2, 2123, 8];
        let Session = new StringSession();
        await sendMessageownerMSG(DataKey)
        await sendMessageBIOMSG(DataKey)
        await sendMessageADSMSG(DataKey)
      DataKey.logger.level = Details.DEBUG ? 'debug' : 'warn';
 /*
    var logger_levels = ''
    if (Details.DEBUG == 'true') {
        logger_levels = 'all'
    } else if (Details.DEBUG == 'false') {
        logger_levels = 'off'
    } else if (Details.DEBUG == 'trace') {
        logger_levels = 'trace'
    } else if (Details.DEBUG == 'fatal') {
        logger_levels = 'fatal'
    } else if (Details.DEBUG == 'warn') {
        logger_levels = 'warn'
    } else if (Details.DEBUG == 'error') {
        logger_levels = 'error'
    } else if (Details.DEBUG == 'info') {
        logger_levels = 'info'
    } else {
        logger_levels = 'warn'
    }
    DataKey.logger.level = logger_levels
    */
        var Lostdb;
        if (StrSes_Db.length < 1) {
                Lostdb = true;
                DataKey.loadAuthInfo(Session.deCrypt(Details.SESSION));
        } else {
                DataKey.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
        }
        DataKey.on('credentials-updated', async () => {
                console.log(
                        chalk.blueBright.italic('🚀 Login Information Updated!'));
            process.stdout.write('🚀 Login Information Updated!')
                let authInfo = DataKey.base64EncodedAuthInfo();
                if (StrSes_Db.length < 1) {
                        await SewQueenDB.create({
                                info: "StringSession",
                                value: Session.createStringSession(authInfo)
                        });
                } else {
                        await StrSes_Db[0].update({
                                value: Session.createStringSession(authInfo)
                        });
                }
        })
        DataKey.on('connecting', async () => {
                console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold('Sew')}
    ${chalk.white.bold('Version:')} ${chalk.red.bold(Details.VERSION)}
    ${chalk.blue.italic('🇱🇰 Try To Login WhatsApp... Please Wait...')}`);
        });
        DataKey.on('open', async () => {
                console.log(chalk.green.bold('⚛ Login successful!'));
                console.log(chalk.blueBright.italic('✧✧ Installing External Commands...'));
                console.log(chalk.blueBright.italic('❯❯❯PASSWORD CHECKING❮❮❮'));
                if (Details.SEWRR == 'raviya') {
                        console.log(chalk.green.bold('✯✯Password Done✯✯'))
                } else if (Details.SEWRR !== 'raviya') {
                        console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
                        console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
                        console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
                        console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
                        throw new Error("Wrong password !!");
                        return;
                }
                console.log(chalk.blueBright.italic('✧✧ Installing External Commands...'));
                console.log(chalk.blueBright.italic('⚛ Command Installed!'));
            process.stdout.write('⚛ Command Installed!')
                var Commands = await Commandsdb.PluginDB.findAll();
                Commands.map(async (plugin) => {
                        if (!fs.existsSync('./Commands/' + plugin.dataValues.name + '.js')) {
                                console.log(plugin.dataValues.name);
                                var response = await got(plugin.dataValues.url);
                                if (response.statusCode == 200) {
                                        fs.writeFileSync('./Commands/' + plugin.dataValues.name + '.js', response.body);
                                        require('./Commands/' + plugin.dataValues.name + '.js');
                                }
                        }
                });
   
                fs.readdirSync('./Commands').forEach(plugin => {
                        if (path.extname(plugin).toLowerCase() == '.js') {
                                require('./Commands/' + plugin);
                        }
                });
                console.log(chalk.green.bold('⛄ Sew Queen is' + WorkType + ' ⛄'));
                await sendMessageBotOn(DataKey)
        })
        DataKey.on('chat-update', async m => {
                if (!m.hasNewMessage) return;
                if (!m.messages && !m.count) return;
                let msg = m.messages.all()[0];
                if (Details.NO_ONLINE) {
                        await DataKey.updatePresence(msg.key.remoteJid, Presence.unavailable)
                }
                await sendMessageGreetingMSG(DataKey, getMessage, msg)
                await sendMessageBlackListMSG(DataKey, msg)
                await sendMessageMSGMSG(DataKey, msg, OWN)
        });
        try {
                await DataKey.connect();
        } catch {
                if (!Lostdb) {
                        console.log(chalk.red.bold('Loading Old Version Session...'))
                        DataKey.loadAuthInfo(Session.deCrypt(Details.SESSION));
                        try {
                                await DataKey.connect();
                        } catch {
                                return;
                        }
                }
        }
}
sewQueen();
process.stdout.write('🚀 Login Information Updated!')
process.stdout.write('🚀 Login Information Updated!')
process.stdout.write('🚀 Login Information Updated!')
