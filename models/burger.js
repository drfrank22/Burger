const orm = require("../config/orm");

var burger = {

    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },

    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(res) {
            callback(res);
        });
    },

    updateOne: function(burgerId, callback) {
        orm.updateOne(burgerId, function(res) {
            callback(res);
        });
    }

};

module.exports = burger;