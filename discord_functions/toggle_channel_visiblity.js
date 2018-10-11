const Discord = require('discord.js');
const config = require('../framework/config.js');

// Hide a channel from @everyone
function hideChannel(channel, hiderRole) {

    let PermissionOverwrites = channel.permissionOverwrites.find(prop => prop.id === hiderRole.id);

    // Construct permissions to read from
    let currentPermissions = new Discord.Permissions(hiderRole, PermissionOverwrites.allow || 0);
    if (PermissionOverwrites.deny !== undefined) currentPermissions.remove(PermissionOverwrites.deny);

    // Check if changes need to be made
    if (currentPermissions.has("VIEW_CHANNEL") === true) {

        // Call API to set the new properties
        channel.overwritePermissions(hiderRole, config.hiddenChannel, "Showing channel to public");
    }
}

// Unhide/show a channel to @everyone
function showChannel(channel, hiderRole) {

    let PermissionOverwrites = channel.permissionOverwrites.find(prop => prop.id === hiderRole.id);

    // Construct permissions to read from
    let currentPermissions = new Discord.Permissions(hiderRole, PermissionOverwrites.allow || 0);
    if (PermissionOverwrites.deny !== undefined) currentPermissions.remove(PermissionOverwrites.deny);

    // Check if changes need to be made
    if (currentPermissions.has("VIEW_CHANNEL") === false) {

        // Call API to set the new properties
        channel.overwritePermissions(hiderRole, config.visibleChannel, "Showing channel to public");
    }
}

module.exports = {

    hideChannel: hideChannel,
    showChannel: showChannel,
}
