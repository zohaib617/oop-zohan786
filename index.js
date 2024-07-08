#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new person();
const programStart = async (persons) => {
    do {
        console.log("Welcome");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "whom would you like to intract with?",
            choices: ["staff", "Student", "Exit"]
        });
        if (ans.select == "staff") {
            console.log("welcom to staff room");
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage with:"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello I am ${name.name}. nice to meet you!`);
                console.log("New student added");
                console.log("Current student list:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello I am ${student.name}. nice to see you again!`);
                console.log("Exiting student list");
                console.log(persons.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log("Exiting program.....");
            process.exit();
        }
    } while (true);
};
programStart(persons);
