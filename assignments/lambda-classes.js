// CODE here for your Lambda Classes
class Person {
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak(){
      console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}
class Instructor extends Person{
  constructor(specialty, favLanguage, catchPhrase, personAttrs){
    super(personAttrs);
    this.specialty = specialty;
    this.favLanguage = favLanguage;  
    this.catchPhrase = catchPhrase;
  }
  demo(subject){
    console.log(`Today we are learning about ${subject}.`)
  }
  grade(studentObj, subject){
    console.log(`${studentObj.name} recieves a perfect score on ${subject}.`)
  }
}
class Student extends Person{
  constructor(background, className, favSubjects, personAttrs){
    super(personAttrs);
    this.previousBackground = background;
    this.className = className;  
    this.favSubjects = favSubjects;
  }
  listSubjects(){
    console.log(`${this.name} favorite subjects are ${favSubjects}.`)
  }
  prAssignment(subject){
    console.log(`${this.name} has submitted a PR for ${subject}.`)
  }
  sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}.`)
  }
}
class ProjectManager extends Instructor{
  constructor(gradClassName, favInstructor, instructorAttrs){
    super(instructorAttrs);
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }
  standUp(slackChannel){
    console.log(`${this.name} announces to ${slackChannel}, @channel standup times!`);
  }
  debugCode(studentObj, subject){
    console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}.`);
  }
}
/*  
    Instructor Classes
*/
const dan = new Instructor({
  name: 'Dan',
  age: 30,
  location: 'Colorado',
  specialty: 'sleep',
  favLanguage: 'JavaScript',
  catchPhrase: 'Cats, cats. ummm cats.'
});
const justin = new Instructor({
  name: 'justin',
  age: 26,
  location: 'Idaho',
  specialty: 'Rugby',
  favLanguage: 'Python',
  catchPhrase: 'I\'m a sssssssssnnnakkkkee'
});
/*  
    Student Classes
*/
const michael = new Student({
  name: 'Michael',
  age: 21,
  location: 'California',
  background: 'Food Service',
  className: 'WEB20',
  favSubjects: ['JavaScript', 'Python', 'CSS']
});
const lizzy = new Student({
  name: 'Elizabeth',
  age: 38,
  location: 'New Hampshire',
  background: 'US Marines',
  className: 'WEB20',
  favSubjects: ['HTML', 'C#', 'CSS']
});
const lizzy = new Student({
  name: 'Elizabeth',
  age: 38,
  location: 'New Hampshire',
  background: 'US Marines',
  className: 'WEB20',
  favSubjects: ['HTML', 'C#', 'CSS']
});