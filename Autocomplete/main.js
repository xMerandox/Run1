
var roomController = require('room.controller');

module.exports.loop = function () {
    // Test 3      

    var room = Game.rooms;

    console.log(room);
    roomController.run(room[0].id);
}