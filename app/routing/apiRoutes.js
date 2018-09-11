//Sajeel Malik

//API Routes to provide useful JSON responses 

var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    })

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;

        //pushes the new friend object to the array of friends previously created
        friends.push(newFriend);

        return res.json(newFriend);
    });

}