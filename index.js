const inquirer = require("inquirer");
const fs = require("fs");


function askUser() {
    inquirer
        .prompt([
            {
                message: "What's your name?",
                name: "name",
            },
            {
                message: "Where are you located?",
                name: "location",
            },
            {
                message: "What's your LinkedIn URL?",
                name: "linkedin",
            },
            {
                message: "What's your GitHub username?",
                name: "github",
            },
            {
                message: "What's a hobby of yours?",
                name: "hobby",
            },
        ])
        .then((response) => {
            const { name, location, linkedin, github, ...others } = response

            fs.writeFile("index.html", renderHtml(response), (err) => {
                err ? console.log(err) : console.log("Created porfolio html")
            })
        })
}


function renderHtml({ name, location, linkedin, github, ...others }) {
    console.log(name, location, linkedin, github, others)
    let githubUrl = `https://github.com/${github}`
    
    let htmlStr = `<!DOCTYPE html>` +
    `<html lang="en">` +
    `<head>` +
    `   <meta charset="UTF-8">` +
    `   <meta name="viewport" content="width=device-width, initial-scale=1.0">` +


    `   <title>My Porfolio</title>` +
    `</head>` +
    `<body>` +
    `   <header>` +
    `       <h1>My name is ${name}</h1>` +
    `       <h2>Located in ${location}</h2>` +
    `   </header>` +
    `   <main>` +
    `       <p>My LinkedIn profile is: <a target="_blank" href="${linkedin}">${linkedin}</a></p>` +
    `       <p>My GitHub profile is: <a target="_blank" href="${githubUrl}">${githubUrl}</a></p>` +
    `   </main>` +
    `</body>` +
    `</html>`

    
    return htmlStr
}

askUser();