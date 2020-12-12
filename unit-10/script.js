// lesson 1:
// In một bảng nhân của một số bất kỳ với các số từ 1 tới 10 và hiển thị kết quả

function getMultiplyTable(number) {
  let result =''
  if (typeof(number) !== 'number') {
    result = 'Dữ liệu nhập không hợp lệ: Phải là một số'
  } else {
    result = 'In bang nhan:\n' 
    for (let i = 1; i <= 10; i++) {
      result += '   ' + number + ' x ' + i + ' = ' + number * i + '\n'
    }
  }
  return result
}

// lesson 2:
// Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In các số chẵn từ 1 đến n Vd n = 6: in ra: 2 4 6

function getEvenNumber(number) {
  let result = ''
  if (!(Number.isInteger(number)) || number < 1 || number > 30) {
    result = 'Dữ liệu nhập không hợp lệ: Phải là một số nguyên dương 1 <= n <= 30'
  } else {
    for (let i = 2; i <= number; i +=2) {
      result += i + ' '
    }
  }
  return result
}

// lesson 3:
// Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 Tính tổng từ 1 đến n
// vd nhập vào 6: Tổng = 1 + 2 + 3 + 4 + 5 + 6 = 21

function getSumNumber(number) {
  let result = ''
  if (!(Number.isInteger(number)) || number < 1 || number > 30) {
    result = 'Dữ liệu nhập không hợp lệ: Phải là một số nguyên dương 1 <= n <= 30'
  } else {
    let sum = 0

    for (let i = 1; i <= number; i++) {
      sum += i
      if (i !== number) {
        result += i + ' + '
      } else {
        result += i
      }
    }
    result = 'Tổng = ' + result + ' = ' + sum
  }
  return result
}

// lesson 4:
// Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In ra n! (giai thừa của n)

function getFactorial(number) {
  let result = ''
  if (!(Number.isInteger(number)) || number < 1 || number > 30) {
    result = 'Dữ liệu nhập không hợp lệ: Phải là một số nguyên dương 1 <= n <= 30'
  } else {
    factorial = 1
    for (let i = 1; i <= number; i++) {
      factorial *= i
    }
    result = number + '! = ' + factorial
  }
  return result
}

// lesson 5:
// Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn
// Vd: param là [1, 2, 3, 6, 2, 9, 0] thì return 4 vì có 4 số chẵn

const arrNumber = [1, 2, 3, 6, 2, 9, 0]

function countEvenNumber() {
  let count = 0
  for (let index = 0; index < arrNumber.length; index++) {
    if (!(arrNumber[index] % 2)) {
      count++
    }
  }
  return count
}

// lesson 6:
// Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp
// Vd params:
// ['A', 'C', 'A', 'A', 'B', 'D', 'B']
// Thì return:
// return ['A', 'C', 'B', 'D']

const arrAlphabet = ['A', 'C', 'A', 'A', 'B', 'D', 'B']

function getAlphabetAlphabet() {
  let result = []
  for (let index = 0; index < arrAlphabet.length; index++) {
    if (result.indexOf(arrAlphabet[index]) < 0) {
      result.push(arrAlphabet[index])
    }
  }
  return result
}

// lesson 7:
// Bạn cần phải tạo ra 1 object có đầy đủ các thuộc tính: name, score từ 2 array sau:
// Yêu cầu mảng cần tạo phải là:
// const students = [
//     { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
//     { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
//     { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
//     { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
//     { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
//     { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     { id: 7, name: 'Trần Minh Minh', score: 6.1 }
// ]

const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' },
  { id: 5, name: 'Nguyễn Minh Nhật' },
  { id: 6, name: 'Phí Duy Quân' },
  { id: 7, name: 'Trần Minh Minh' }
]

const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 7, score: 6.1 }
]

const studentsList = []

function getStudents() {
  studentNames.forEach(studentName => {
    let student = {
      id: studentName.id,
      name: studentName.name
    }
    studentScores.forEach(studentScore => {
      if (studentScore.id === studentName.id) {
        student.score = studentScore.score
      }
    });
    studentsList.push(student)
  });
  return studentsList
}

// lesson 8:
// Cho array dưới đây là danh sách các students
// Hãy tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất
// Với format đầu ra dạng:
// return {
//     theBest: { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     theBad: { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 }
// }

const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

function getScoreStudents() {
  let max = 0, min
  students.forEach(student => {
    max = max > student.score ? max : student.score
    min = min < student.score ? min : student.score
  });
  return {
    theBest: students.find(student => student.score === min),
    theBad: students.find(student => student.score === max)
  }
}
