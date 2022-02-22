import { Student } from "./Student";
import { StudentList } from "./StudentList";
//erew
const student1 = new Student(
    "2015-105867",
    "BSCPE",
    "CEIT",
    "Jhon Rhay",
    20,
    "MALE",
    "PASAY CITY"
);

const student2 = new Student(
    "2015-105868",
    "BSCPE",
    "CEIT",
    "Jhon Rhay",
    20,
    "MALE",
    "PASAY CITY"
);

const student3 = new Student(
    "2015-105869",
    "BSCPE",
    "CEIT",
    "Jhon Rhay",
    20,
    "MALE",
    "PASAY CITY"
);

const studentList = new StudentList([
    student1,
    student2,
    student3
]);

console.log(studentList.getstudent("2015-105869"));
//console.log(studentList.updateAge("2015-105869", 27));
//console.log(studentList.getstudent("2015-105869"));
console.log(studentList.updateStudentCourse("2015-105869", "BSIT"));
console.log(studentList.getstudent("2015-105869"));
console.log(studentList.updateStudentCollege("2015-105869", "URSB"));
console.log(studentList.getstudent("2015-105869"));
console.log(studentList.updateStudentAddress("2015-105869", "Binangonan"));
console.log(studentList.numberOfStudents())
console.log(studentList.removestudent(0,1))
console.log(studentList.numberOfStudents())
// console.log("*************");
// console.log(studentList.updateStudentName("2015-105869", "Michael Jordan"));
// console.log("*************");
//console.log(studentList.updateAddress("2015-105868", "ahhh"));
// console.log(studentList.checkStudentId("2015-105870"));