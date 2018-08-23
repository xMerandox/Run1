/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('asdf');
 * mod.thing == 'a thing'; // true
 */

module.exports = {

    run: function (roomId) {

        var room = Game.getObjectById(roomId);
        initialising(roomId);

        

	 }
};


function initialising(roomId) {
    if (!Memory.Rooms) {
        Memory.Rooms = new Array();
    }

    if (!Memory.Rooms.includes(roomId)) {
        console.log("Want to add id: " + roomId);
        Memory.Rooms.push(roomID);
        console.log("New Room in Memory: " + room.name);
    }
}