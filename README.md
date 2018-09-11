# Friend Finder

DESCRIPTION

* Powered by Javascript, node.js, Express.js, and Bootstrap

*Further design development underway.*

## Getting Started and Prerequisites

Check out the deployed site here: [**Friend Finder**](https://nodejs.org/en/)!

This is a full-stack application, so no need to download anything!

### Preview 
<!-- take a picture of the image and add it into the readme  -->

![Friend Finder](assets/preview.gif  "Friend Finder")
*An example of the manager interface in action*

## Technology Used

* **HTML5, CSS3** 
* **Javascript** - the primary scripting logic powering the game
* [**node.js**](https://nodejs.org/en/) - a versatile Javascript runtime environment that processes user inputs in terminal
* [BootstrapCDN v4.1.0](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - the open-source web framework utilized

*Semantic UI was attempted in an initial rendering of this application. Since then, Bootstrap was utilized due to its breadth of documentation*
* [**Semantic UI**](https://semantic-ui.com/) - a modern CSS design framework with more intuitive Javascript capabilities

## Node Packages Employed

1. Express - 
``` require("Express"); ```
2. Body Parser - 
``` require("body-parser"); ```
3. Path - 
``` require("path"); ```

# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

Node.js allows a diversity of interactions in the backend. Here, I initialize and outline the interface that allows the user to directly alter a connected database of product items. Two node packages, *inquirer* and *mysql*, operate in unison to allow the user to input the desired ID and query an existing database for that ID's existence. Then, the user's input is related to the existing "stock_quantity" attribute of that ID's product object, and it is updated dynamically.

```
function addInventory() {
    inquirer.prompt([
        {
            name: "item_id",
            type: "input",
            message: "What is the ID of the product you would like to restock?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            name: "addedQuantity",
            type: "input",
            message: "How many units would you like to add?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }

                return false;
            }
        }
    ]).then(function (answer) {
        // console.log(answer.item_id);
        connection.query("SELECT * FROM products WHERE id = ?", [answer.item_id], function (err, res) {

            var stock = res[0].stock_quantity;
            var product = res[0].product_name;
            var numAdded = parseInt(answer.addedQuantity);
            if (err) throw err;


            //additional query to update stock accordingly
            console.log(chalk.blue("\nUpdating " + product + " stock quantity...\n"));
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: stock + numAdded
                    },
                    {
                        id: answer.item_id
                    }
                ],
                function (err, res) {
                    console.log(chalk.green(res.affectedRows + " products had their stock replenished!\n"));
                    managerPrompt();
                }
            );
        });
    });
}

```

# Learning Points
<!-- Learning points where you would write what you thought was helpful -->
* Express.js is a comprehensive node package that simplifies server functionality
* Modularization was key for this application. While the development and code of the application suffered slightly in terms of readability and simplicity, the fundamental logic was organized much more fruitfully to allow the potential for multiple segments of the app to be optimized simultaneously. 
* I briefly attempted utilizing Semantic UI's design framework, but I quickly realized how difficult it would be to implement a completely new and unexplored user interface in such a short period of time. Still, Semantic UI offers very unique design and animation functionality for the explorative developer.

## Developers

* **Sajeel Malik** - *Initial work* - [GitHub](https://github.com/sajeelmalik)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
