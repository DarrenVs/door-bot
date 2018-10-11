// Index
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.js');

// Bot modules
const modules = {
    hide_empty_channels: require('../bot_modules/hide_empty_channels.js'),
};



let activeModules = {
    hideEmptyChannels: new modules.hide_empty_channels(),
};


// Fire module events
function fireModuleEvents(eventName, ...args) {

    for (var moduleName in activeModules) {
        const module = activeModules[moduleName];

        if (module[ eventName ] !== undefined) {

            module[ eventName ]( ...args );
        }
    }
}

// Bot events
client.on('ready', (...args) => {
    console.log(`Logged in as ${client.user.tag}.`);

    fireModuleEvents("ready", ...args);
});
client.on('message', (msg, ...args) => {
    if (msg.content === '.ping') {
        msg.reply('Pong!');
    }

    fireModuleEvents("message", msg, ...args);
});
client.on('voiceStateUpdate', (...args) => {

    fireModuleEvents("voiceStateUpdate", ...args);
})



// Login bot
client.login(config.token);
