// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
      console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person{
  constructor(personAttrs, specialty, favLanguage, catchPhrase){
    super(personAttrs);                                                                              //Problem where name and location was coming undefined fixed it by 
    this.specialty = specialty;                                                                      //having the first parameter in the constructor be the properties from 
    this.favLanguage = favLanguage;                                                                  //the parent class
    this.catchPhrase = catchPhrase;
  }
  demo(subject){
    console.log(`Today we are learning about ${subject}.`)
  }
  // grade(studentObj, subject){
  //   //console.log(`${studentObj.name} recieves a perfect score on ${subject}.`)                              //missunderstood stretch goal
  //   console.log(`${studentObj.name} recieves a score of ${Math.floor(Math.random() * 100)} on ${subject}`)
  // }
  grade(studentObj){
    return{
      increment(){
        const newGrade = studentObj.grade += Math.floor(Math.random() * 10)
        return studentObj.grade = newGrade;                                                                 //after incrementing numbers would change they wouldn't stay at their new grade
      },
      decrement(){
        const newGrade = studentObj.grade -= Math.floor(Math.random() * 10)
        return studentObj.grade = newGrade;
      }
    }
  }
}

class Student extends Person{
  constructor(studentAttrs){
    super(studentAttrs);
    this.previousBackground = studentAttrs.background;
    this.className = studentAttrs.className;  
    this.favSubjects = studentAttrs.favSubjects;
    this.grade = studentAttrs.grade;
  }
  listSubjects(){
    console.log(`${this.name}'s favorite subjects are ${this.favSubjects}.`)
  }
  prAssignment(subject){
    console.log(`${this.name} has submitted a PR for ${subject}.`)
  }
  sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}.`)
  }
  graduate(subject){
    if(this.grade > 70){
      console.log(`Congratulations ${this.name}! You are ready to graduate!!`)
    } else {
      console.log(`We will have to re grade you ${this.name}...`)
      grade(this, subject);
    }
  }
}

class ProjectManager extends Instructor{
  constructor(instructorAttrs, gradClassName, favInstructor){                                               
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

/////////////////////////////////////////////////////////////////////////////////////////////////////
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
  favSubjects: ['JavaScript', ' Python', ' CSS'],
  grade: 65
});
const lizzy = new Student({
  name: 'Elizabeth',
  age: 38,
  location: 'New Hampshire',
  background: 'US Marines',
  className: 'WEB20',
  favSubjects: ['HTML', ' C#', ' CSS'],
  grade: 79
});
const mason = new Student({
  name: 'Mason',
  age: 27,
  location: 'Texas',
  background: 'Music Teacher',
  className: 'WEB20',
  favSubjects: ['HTML', ' JavaScript', ' CSS'],
  grade: 42
});
/*  
    Project Manager Classes
*/
const patricia = new ProjectManager({
  name: 'Patricia',
  age: 24,
  location: 'California',
  gradClassName: 'WEB16',
  favInstructor: 'Mark'
})
const peter = new ProjectManager({
  name: 'Peter',
  age: 31,
  location: 'Kentucky',
  gradClassName: 'WEB18',
  favInstructor: 'Dan'
})
/////////////////////////////////////////////////////////////////////////////////////////////////////
//                          test of person class
patricia.speak();           
dan.speak();
mason.speak();

//                         test of instructor class
justin.demo('Ruby');
dan.demo('Booleans');
dan.grade(michael, 'Javascript');
justin.grade(mason, 'something');

//                          test of student class
michael.listSubjects();
lizzy.listSubjects();
lizzy.prAssignment('Ruby');
mason.sprintChallenge('Java');
//                           test of prohject manager class
patricia.grade(mason, 'Javascript');
peter.standUp('web20_sprint2');
peter.demo('HTML');
patricia.grade(lizzy, 'Python');
//                            testing grade method on instructors and pms
// console.log(dan.grade(mason).increment())
// console.log(dan.grade(mason).increment())
// console.log(dan.grade(mason).increment())
// console.log(dan.grade(mason).increment())
// console.log(dan.grade(mason).increment())
// console.log(dan.grade(mason).increment())
// console.log(dan.grade(mason).increment())
// console.log(dan.grade(mason).increment())
// console.log(dan.grade(mason).increment())

// console.log(patricia.grade(lizzy).decrement());
// console.log(patricia.grade(lizzy).decrement());
// console.log(patricia.grade(lizzy).decrement());
// console.log(patricia.grade(lizzy).decrement());
// console.log(patricia.grade(lizzy).decrement());