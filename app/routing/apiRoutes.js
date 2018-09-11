//Sajeel Malik

//API Routes to provide useful JSON responses 

app.get("/api/friends", function (req, res) {
    return res.json(waitingList);
})

app.post("/api/friends", function (req, res) {

    var friend = req.body;

    // logic

    return res.json(friend);
});