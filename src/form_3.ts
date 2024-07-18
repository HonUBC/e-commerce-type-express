
interface Person {
    name:string;
    age:number
}
class Student implements Person {
    name:string;
    age:number;
    constructor(thisName:string,thisAge:number){
        this.name=thisName,
        this.age=thisAge
    }
    greetingNewStudent(): string{
        return `Hello ${this.name}`
    }
}

document.addEventListener('DOMContentLoaded',()=>{   
  
    const greeting=document.querySelector("#greeting") as HTMLInputElement
    const form= document.querySelector("#registrationForm") as HTMLFormElement

    form.addEventListener('submit',(event)=>{
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const age = parseInt((document.getElementById('age') as HTMLInputElement).value);

        const myStudent = new Student(name, age);
        // greeting.innerText = myStudent.greetingNewStudent();

        const response = fetch('http://localhost:3333/submit',{         
            method:"POST",
            headers: {
                "Content-type":"application/json",
            },           
            body: JSON.stringify({
                name:myStudent.name,
                age:myStudent.age
            })
        })
    
       
    })
})