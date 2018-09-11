//Sajeel Malik

//HTML Server get routes 

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})

app.get("/:anything", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})