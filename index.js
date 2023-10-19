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
            console.log(name, location, linkedin, github, others)

        })
}

askUser();