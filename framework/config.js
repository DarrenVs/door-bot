const applyProperties = require('./applyProperties.js');

defaultConfig = {

    token: process.argv[2],

    // The categories to hide from the hiderRole
    hiddenCategories: {
        ["361445029476040709"]: true,
    },
    // The hider role that hides from the catagories above
    hiderRole: "@everyone",

    // The permission changes in the voice-channel
    hiddenChannel: {
        'VIEW_CHANNEL': false,
    },
    visibleChannel: {
        'VIEW_CHANNEL': true,
    },
}


serverConfigs = {
    /*
    [serverId] = config
    */
}

function config(properties) {

    applyProperties
}


module.exports = defaultConfig
