import { Student } from "./Student";

export class StudentList {
    students: Array<Student>;

    constructor(students: Array<Student>) {
        this.students = students
    }

    getstudent(id:string,){
        return this.students.find((student: Student) => student.studentId === id)
    }

    updateStudentName(id: string, name: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.name = name;
                    return element;
                }
            }
        }

        return "Student id doesnt exists";
    }
   
    updateCourseName(id: string, Coursename: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.course = Coursename;
                    return element;
                }
            }
        }

        return "Student id doesnt exists";
    }
    checkStudentId(id: string) {
         let valid = false;

         for (let index = 0; index < this.students.length; index++) {
             const element = this.students[index];

             if (element.studentId === id) {
                 valid = true;
             }
         }
        let checkStudent = this.students.find(element => element.studentId === id);

        if (checkStudent) return true;

        return false;
    }

    //updateAge(id: string, age: number) {
        //let student = this.students.find(element => element.studentId === id);

        //if (student) {
         //   student.age = age;
         //   return student;
       // }

       //return "Student id doesnt exists";
    //}

     updateStudentCourse(id: string, course: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.course = course;
                    return element;
                }
            }
        }

        return "Student id doesnt exists";

    }

    updateStudentCollege(id: string, college: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.college = college;
                    return element;
                }
            }
        }

        return "Student id doesnt exists";

    }

    updateStudentAddress(id: string, address: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.address = address;
                    return element;
                }
            }
        }

        return "Student id doesnt exists";
    }

    numberOfStudents(){
 
        return this.students.length;
    }

    removestudent(index: number, num: number) {   
        this.students.splice(index, num);
        return "deleted student";

    }


    // create method and return number of students
    // delete one student and return list of students, use splice method (index, 1)
}