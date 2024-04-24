#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos : string [] = []; 
let condition = true;

//print welcome message
console.log(chalk.magenta.bold("\n \t Welcome To Todo-List Application\n"));



while (condition)
{
  let todoQuestion = await inquirer.prompt([
    {
      name: "firstQuestion",
      type: "list",
      message: chalk.green("What would you like to do in your To Do List\n"),
      choices: ["Add", "Delete", "Show List", "update","Exit"],
    },
    // {
    //   name: "secondQuestion",
    //   type: "confirm",
    //   message: "Do you want to add more Todos?",
    //   default: "true",
    // }    
  ]);

  if (todoQuestion.firstQuestion === "Exit") {
    condition = false;
  }
  else if (todoQuestion.firstQuestion === "Show List") {
    // let showListInput = await inquirer.prompt([
    //   {
    //     name: "showList",
    //     type: "list",
    //     message: "Your To Do List",
    //     choices: todos,
    //   },
    // ]);
    console.log("Current Tasks:");
  todos.forEach((todos, index) => {
    console.log(`${index + 1}: ${todos}`);
  });
  console.log(""); // Add a blank line for separation

  }
  else if (todoQuestion.firstQuestion === "Delete") {
    console.log("Deleted last value");
    todos.pop();
    console.log(todos);
  }
  else if (todoQuestion.firstQuestion === "update") {
    let updateTaskInput = await inquirer.prompt([
      {
        name: "updateTask",
        type: "input",
        message: "Enter your task",
      },
    ]);
    console.log(todos);
    todos.pop();

    todos.push(updateTaskInput.updateTask);
    console.log(todos);
    console.log("Updated");
  }
  else if (todoQuestion.firstQuestion === "Add") {
    let addTaskInput = await inquirer.prompt([
      {
        name: "addTask",
        type: "input",
        message: "Enter your task",
      },
    ]);
    todos.push(addTaskInput.addTask);
    console.log (`${addTaskInput.addTask} added successfully into the list.`);
    console.log(todos) + "\n";
  }

  //todos.push(todoQuestion.firstQuestion);
  //condition = todoQuestion.secondQuestion;
  //console.log(todos);
}
