interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports : number;
}

const teacher1: Teacher = {
  firstName: 'Michael',
  lastName: 'Scott',
  fullTimeEmployee: true,
  location: 'Scranton',
  contract: false,
}

console.log(teacher1);

const director1: Directors = {
    firstName: 'Dwight',
    lastName: 'Schrute',
    location: 'Scranton',
    fullTimeEmployee: true,
    numberOfReports: 15,
}

console.log(director1);

interface printTeacherFunc {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunc = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;

console.log(printTeacher('John', 'Doe'));

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    }
