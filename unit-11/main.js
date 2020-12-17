const validateArray = arr => Array.isArray(arr)
const validateObject = object => !(Array.isArray(object)) && typeof(object) === 'object'

// lesson 1
// Viết 1 hàm trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp

const validateNumberRepeat = times => Number.isInteger(times) && times > 0

const repeatWord1 = (word, times) => {
  if (!validateNumberRepeat) {
    return 'Dữ liệu nhập không hợp lệ.'
  }

  const arrRepeat1 = []
  for (let i = 0; i < times; i++) {
    arrRepeat1.push(word)
  }

  return arrRepeat1
}

const repeatWord2 = (word, times) => {
  if (!validateNumberRepeat) {
    return 'Dữ liệu nhập không hợp lệ.'
  }

  const arrRepeat2 = []
  for (let i = 0; i < times; i++) {
    arrRepeat2.unshift(word)
  }

  return arrRepeat2
}

// lesson 2
// Viết 1 hàm để đảo ngược 1 mảng, không được dùng hàm array.reverse()

const arrLesson2 = ['a', 1, '9', 'apple']

const reverseArr = arr => {
  if (!validateArray(arr)) {
    return 'Dữ liệu nhập không hợp lệ. Dữ liệu phải là một array'
  }

  const arrReverse = []
  arr.forEach(item => {
    arrReverse.unshift(item)
  });

  return arrReverse
}

// lesson 3
// Xóa đi các giá trị được xem là sai

const arrLesson3 = [0, 1, false, 2, undefined, '', 3, null]

const formatArr = arr => {
  if (!validateArray(arr)) {
    return 'Dữ liệu nhập không hợp lệ. Dữ liệu phải là một array'
  }

  const result = arr.filter(function(value) {
    return value
  })

  return result
}

// lesson 4
// Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu

const arrLesson4 = [['a', 1], ['b', 2]]

const convertArrayToObject = arr => {
  if (!validateArray(arr)) {
    return 'Dữ liệu nhập không hợp lệ. Dữ liệu phải là một array'
  }

  const objectAfterConvert = {}

  arr.forEach(item => {
    objectAfterConvert[item[0]] = item[1]
  });

  return objectAfterConvert
}

// lesson 5
// Sắp xếp mảng tăng dần

const arrLesson5 = [6, 4, 0, 3, -2, 1]

const sortArr = arr => {
  if (!validateArray(arr)) {
    return 'Dữ liệu nhập không hợp lệ. Dữ liệu phải là một array'
  }

  arr.sort((a,b) => a - b)

  return arr
}

// lesson 6
// Kiểm tra input đầu vào có phải là object hay không?

const objLesson6 = { a: 1 }
const arrLesson6 = [1, 2, 3]

const checkObject = object => {
  if (!validateObject(object)) {
    return 'Dữ liệu nhập không hợp lệ. Dữ liệu phải là một object'
  }

  return object
}

// lesson 7
// Viết 1 hàm trả về các key+value (của 1 object) khác các key truyền vào Vd:

const objLesson7 = { a: 1, b: 2, c: 3, d: 4 }

const deletePropertyObject = (object, ...rest) => {
  if (!validateObject(object)) {
    return 'Dữ liệu nhập không hợp lệ. Dữ liệu phải là một object'
  }

  for (const key in object) {
    rest.forEach(item => {
      if (key === item) {
        delete object[key];
      }
    });
  }

  return object
}

// lesson 8
// Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử Xóa phần tử số 2, 3 trong array Return mảng sau khi đã xóa

const creatrArr = arr => {
  if (!validateArray(arr) || arr.length <= 5) {
    return 'Dữ liệu nhập không hợp lệ. Dữ liệu phải là một array nhiều hơn 5 phần tử'
  }

  arr.splice(2,2)

  return arr
}

// lesson 9
// Viết hàm nhập vào 1 array có cấu trúc như ví dụ sau:

const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const checkStudentPass = arr => {
  const studentsAfter = []

  arr.forEach(student => {
    if (student.score < 5.0 || student.name.indexOf('Duy') > 2 && student.name.indexOf('Duy') < (student.name.length - 4)) {
      studentsAfter.push('Fail')
    } else {
      studentsAfter.push('Pass')
    }  
  });

  return studentsAfter
}

// lesson 10
// Cho array có cấu trúc như input bài 9
// Hãy tìm các students có điểm là số mà tổng số nút của phần trước dấu thập phân và phần sau dấu thập phân cộng lại lớn hơn 5

const checkScore = arr => {
  const studentScore = []

  arr.forEach(student => {
    const decimalBefor = (student.score * 10) % 10
    const decimalAfter = student.score - (decimalBefor / 10)
    const total = decimalBefor + decimalAfter

    if (total > 5) {
      studentScore.push(student)
    }
  });

  return studentScore
}
