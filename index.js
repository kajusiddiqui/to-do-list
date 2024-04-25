#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
//print welcome message
console.log(chalk.magenta.bold("\n \t Welcome To Todo-List Application\n"));
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.yellow("What would you like to do?\n"),
                choices: ["Add Task", "Delete task", "Update Task", "View Todo-List", "Exit"],
            },
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
// Function to add new Todo-List Task
let addTask = async () => {
    let newtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task",
        },
    ]);
    todos.push(newtask.task);
    console.log(`\n ${newtask.task} added successfully in To-Do-List the list.`);
};
// Function to view all Todo-List Tasks
let viewTask = () => {
    console.log("\nYour To-Do-List:");
    todos.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// Function to delete Todo-List Task
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index number to delete",
        },
    ]);
    let deletedTask = todos.splice(taskIndex.index - 1, 1);
    console.log(`\n${deletedTask} This Task deleted successfully from the list.`);
};
// Function to update Todo-List Task
let updateTask = async () => {
    await viewTask();
    let updateTaskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index number of the Task you want to update :",
        },
        {
            name: "newTask",
            type: "input",
            message: "Enter the updated task",
        },
    ]);
    todos[updateTaskIndex.index - 1] = updateTaskIndex.newTask;
    console.log(`\n${updateTaskIndex.index} updated successfully [For updated list Check option: "View Todo-List"].`);
};
main();
