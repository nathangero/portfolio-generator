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
    
    let htmlStr = `<!DOCTYPE html>\n` +
    `<html lang="en">\n` +
    `<head>\n` +
    `   <meta charset="UTF-8">\n` +
    `   <meta name="viewport" content="width=device-width, initial-scale=1.0">\n` +
    `   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">\n` + 
    `   <title>My Porfolio</title>\n` +
    `</head>\n` +
    `<body>\n` +
    `   <div class="container">\n` +
    `       <div class="jumbotron">\n` +
    `           <div class="jumbotron">\n` +
    `               <h1 class="display-4">I'm ${name}</h1>\n` +
    `               <p class="lead">I'm located in ${location}</p>\n` +
    `               <hr class="my-4">\n` +
    `               <table class="table table-bordered">\n` +
    `                   <thead>\n` +
    `                       <tr>\n` +
    `                           <th scope="col">Profiles</th>\n` +
    `                           <th scope="col">Links</th>\n` +
    `                       </tr>\n` +
    `                   </thead>\n` +
    `                   <tbody>\n` +
    `                       <tr>\n` +
    `                           <td>LinkedIn</td>\n` +
    `                           <td id="linkedin-link"><a target="_blank" href="${linkedin}">${linkedin}</a></td>\n` +
    `                       </tr>\n` +
    `                       <tr>\n` +
    `                           <td>GitHub</td>\n` +
    `                           <td id="github-link"><a target="_blank" href="${githubUrl}">${githubUrl}</a></td>\n` +
    `                       </tr>\n` +
    `                   </body>\n` +
    `               </table>\n` +
    `           </div>\n` +
    `       </div>\n` +
    `   </div>\n` +
    `<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>\n
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>\n
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>\n` +
    `</body>` +
    `</html>`

    
    return htmlStr
}

askUser();