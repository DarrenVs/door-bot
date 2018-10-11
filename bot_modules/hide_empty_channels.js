const toggle_channel_visiblity = require('../discord_functions/toggle_channel_visiblity.js');
const config = require('../framework/config.js');


function hideEmptyChannels() {


}

// On user joined voice channel
hideEmptyChannels.prototype.voiceStateUpdate = function (oldMember, newMember) {

    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;

    // If User joins a hidden category channel, show it
    if (newUserChannel !== undefined
    && config.hiddenCategories[newUserChannel.parentID] === true) {

        let targetRole = newMember.roles.find(prop => prop.name === config.hiderRole);
        if (targetRole !== undefined)
            toggle_channel_visiblity.showChannel(newUserChannel, targetRole);
    }


    // If User leaves a hidden category channel empty, hide it
    if (oldUserChannel !== undefined
    && config.hiddenCategories[oldUserChannel.parentID] === true
    && oldUserChannel.members.lastKey() === undefined) {

        let targetRole = oldMember.roles.find(prop => prop.name === config.hiderRole);
        if (targetRole !== undefined)
            toggle_channel_visiblity.hideChannel(oldUserChannel, targetRole);
    }
}

module.exports = hideEmptyChannels;
