# [Friend Finder](https://friendsearcher2018.herokuapp.com/)

Find your most suitable match, whether it be a friend or a potential romantic acquaintance! This full-stack site will take in results from multiple users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

* Powered by Javascript, node.js, Express.js, and Bootstrap

*Further design development underway.*

## Getting Started and Prerequisites

Check out the deployed site here: 
[**Friend Finder**](https://friendsearcher2018.herokuapp.com/)!

This is a full-stack application, so no need to download anything!

### Preview 
<!-- take a picture of the image and add it into the readme  -->

![Friend Finder](./preview.gif  "Friend Finder")
*An example of the survey and matching interface in action*

## Technology Used

* **HTML5, CSS3** 
* **Javascript** - the primary scripting logic powering the game
* **jQuery** - the robust DOM-oriented scripting library for Javascript
* [**node.js**](https://nodejs.org/en/) - a versatile Javascript runtime environment that processes user inputs in terminal
* [**BootstrapCDN v4.1.0**](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - the open-source web framework utilized

*Semantic UI was attempted in an initial rendering of this application. Since then, Bootstrap has been utilized due to its breadth of documentation*
* [**Semantic UI**](https://semantic-ui.com/) - a modern CSS design framework with more intuitive Javascript capabilities

## Node Packages Employed

1. Express - unopinionated web framework for Node.js that constructs server logic and powers the API
``` require("Express"); ```
2. Body Parser - middleware technology for JSON formatting
``` require("body-parser"); ```
3. Path - simplifies directories and filepaths through Node
``` require("path"); ```

# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

Express.js allows a diversity of interactions in the backend. I leveraged Express's capabilities of producing JSON responses based on user input to create a unique API for this application. The user can view all "friends" who have visited the app and successfully completed the survey by visiting the specific route, "/api/friends" outlined in the *get* method. Additionally, the user may *post* new content to the JSON.

```Javascript
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


```

Here, we have our on-click functionality after submitting the survey. A user object, ```user = {} ``` has already been created and contains the name and image of the current surveyer. Now, each of the user's selections from the survey is cross-referenced against every other user in the "database" to assess which other user is a closest match to the surveyer!

```Javascript
$(document).on("click", "#surveyInfo", function (event) {
            event.preventDefault();

            user.scores = [];
            //iterate through questions and obtain the values of each checked radio button. Here, it becomes clearer that radio buttons are not the most effective way to store this information - they're too complicated, irregular, and just DIRTY
            for (var i = 1; i < 11; i++) {
                var choice = parseInt($("input[type='radio'][name='question" + i + "']:checked").val());
                user.scores.push(choice);
            }

            //initialize rating at 40 - the highest possible difference
            rating = 40;

            //calculates the individual absolute value difference between each of the user's inputs and each of the inputs of those already in the array. For this simple case, one could simply compare the total values of all 10 questions, but the implementation below leaves room for further updates in which individual questions are weighted more heavily
            $.get("/api/friends/", function (friends) {
                console.log(friends);
                friends.forEach(function (elem) {
                    console.log(elem);
                    var tempRating = 0;
                    for (var i = 0; i < elem.scores.length; i++) {
                        tempRating += Math.abs(elem.scores[i] - user.scores[i]);
                    }
                    console.log(tempRating);

                    //continually checks to see if we're receiving a better rating
                    if (tempRating < rating) {
                        rating = tempRating;
                        matchedPerson = elem.name;
                        matchedImg = elem.photo;
                    }
                })
            }).then(function (res) {
                $.post("/api/friends/", user, function (response) {
                    $("#matchedProfile").attr("src", matchedImg);
                    $("#matchedName").text(matchedPerson);
                    $("#matchedRating").text(Math.ceil((40 - rating) / 40 * 100) + "%");
                })
            })


        })
```

# Learning Points
<!-- Learning points where you would write what you thought was helpful -->
* Express.js is a comprehensive node package that simplifies server functionality
* Modularization was key for this application. While the development and code of the application suffered slightly in terms of readability and simplicity, the fundamental logic was organized much more fruitfully to allow the potential for multiple segments of the app to be optimized simultaneously. 
* I briefly attempted utilizing Semantic UI's design framework, but I quickly realized how difficult it would be to implement a completely new and unexplored user interface in such a short period of time. Still, Semantic UI offers very unique design and animation functionality for the explorative developer.

## Developers

* **Sajeel Malik** - *Initial work* - [GitHub](https://github.com/sajeelmalik)
 - *This was my first full-stack application.*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
