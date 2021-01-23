const connection = require("./connection");

var orm = {

    selectAll: function(callback) {
        // retrieve data from db
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    insertOne: function(burger_name, callback) {
        // insert data in db
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: burger_name,
            devoured: false
        }, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    updateOne: function(burgerId, callback) {
        // update data in db
        connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id: burgerId}], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    }
    
};

module.exports = orm;