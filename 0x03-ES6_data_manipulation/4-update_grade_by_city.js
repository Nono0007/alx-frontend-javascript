export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((stud) => stud.location === city).map((stud) => ({ ...stud, grade: newGrade.filter((grades) => grades.studentId === stud.id).map((grades) => grades.grade)[0] || 'N/A' }));
}
