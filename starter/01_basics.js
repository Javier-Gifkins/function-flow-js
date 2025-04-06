// TODO: Create a student object with 'name' and 'age' properties
// TODO: Write a function 'printStudentName' that logs the student's name

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function printStudentName() {
  student = new Student("Ava", 20);
  console.log("Student name is:", student.name);
  return student.name;
}

printStudentName();

module.exports = { printStudentName };
