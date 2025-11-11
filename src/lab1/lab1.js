
console.log('lab1');
// fullname (string)
const name = 'Quang Huy';

// birth year (number)
const birthYear = 2006;
const today = new Date();
const currentYear = today.getFullYear();
const calculateAge = currentYear - birthYear;
//isStudent (boolean)
const isStudent = true;

console.log(`Tên: ${name}
Năm sinh: ${birthYear}
Tuổi: ${calculateAge}
Là sinh viên: ${isStudent}`);
