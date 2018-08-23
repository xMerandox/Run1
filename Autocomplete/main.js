
var roomController = require('room.controller');

module.exports.loop = function () {
    // Test 3      

    var room = Game.rooms;

    roomController.run(room[0]);
}