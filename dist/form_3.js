"use strict";
class Student {
    constructor(thisName, thisAge) {
        this.name = thisName,
            this.age = thisAge;
    }
    greetingNewStudent() {
        return `Hello ${this.name}`;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.querySelector("#greeting");
    const form = document.querySelector("#registrationForm");
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const age = parseInt(document.getElementById('age').value);
        const myStudent = new Student(name, age);
        // greeting.innerText = myStudent.greetingNewStudent();
        const response = fetch('http://localhost:3333/submit', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: myStudent.name,
                age: myStudent.age
            })
        });
    });
});
