// lesson 1
// Hãy viết 1 hàm nhập vào 2 array, kiểm tra xem 2 array có khớp 100% các value với nhau về cả giá trị và index không

const data1Lesson1 = [1, 2, 3, 4]
const data2Lesson1 = [1, 2, 3, 4]
const data3Lesson1 = [1, 2, 3, 5]
const data4Lesson1 = [1, 2, 3, 4, 5]

// const arrayCompare = (arrA, arrB) => {
//   for (let index = 0; index < arrA.length; index++) {
//     console.log(`${arrA[index]} - ${arrB[index]}`);
//     return arrA[index] === arrB[index]
//   }
// }

const arrayEquals = (arrA, arrB) => {
  return JSON.stringify(arrA) === JSON.stringify(arrB)

  // return Array.isArray(arrA) && Array.isArray(arrB) && arrA.length === arrB.length && arrayCompare(arrA, arrB)
}

// lesson 2
// Viết 1 hàm, nhập vào 1 array nhiều chiều (không xác định số chiều) Hãy tạo thành array 1 chiều

const dataLesson2 = [1, 2, [3, 4, [5]]]

const arrayFlatten = arr => {
  return arr.flat(Infinity)
}

// lesson 3
// Cắt nhỏ array thành nhiều đoạn, mỗi đoạn có n phần tử Viết 1 hàm, nhập vào 1 array 1 chiều và 1 số (vd là n) Hãy tạo array 2 chiều, với mỗi array con sẽ chứa n số trong array đã nhập

const dataLesson3 = [1, 2, 3, 4, 5, 6, 7];

const arrayChunk = (arr, size) => {
  const arrAfterChunk = []
  for (let index = 0; index < arr.length; index += size) {
    arrAfterChunk.push(arr.slice(index, index + size))
  }
  return arrAfterChunk
}

// lesson 4
// Viết 1 hàm, nhập vào ít nhất 1 array Tìm ra các phần tử xuất hiện trong tất cả các array truyền vào

const data1Lesson4 = [1, 2]
const data2Lesson4 = [2, 3]
const data3Lesson4 = ['a', 'b']
const data4Lesson4 = ['b', 'c']
const data5Lesson4 = ['b', 'e', 'c']
const data6Lesson4 = ['b', 'b', 'e']
const data7Lesson4 = ['b', 'c', 'e']
const data8Lesson4 = ['b', 'e', 'c']

const arrIntersection = (...rest) => {
  const restAfterFlat = rest.flat(Infinity)
  const counts = {}
  const result = []

  for (let index = 0; index < restAfterFlat.length; index++) {
    let item = restAfterFlat[index]
    counts[item] = counts[item] ? counts[item] + 1 : 1
    counts[item] >= rest.length ? result.push(restAfterFlat[index]) : 0
  }

  return result
}

// lesson 5
// Sử dụng Date trong javascript
// Hãy viết 1 hàm, nhập vào 1 giá trị date sau đó so sánh giá trị vừa nhập với giá trị thời gian sau đây 12 giờ 30phút 32 giây ngày 30 tháng 10 năm 2020
// Kết quả cần return về: equals, before, after Để biết thời gian nhập vào bằng, hay trước, hay sau mốc thời gian đã cho

const getDate = (...rest) => {
  const milestoneDate = new Date(2020, 10, 30, 12, 30, 32).getTime()
  const inputDate = new Date(...rest).getTime()
  const result = inputDate - milestoneDate

  return result > 0 ? 'after' : result < 0 ? 'before' : result === 0 ? 'equals' : 'data nhập vào sai'
}

// lesson 6
// Viết regex để validate:
// Với email thì phải có định dạng email

const validateEmail = email => {
  const regEmail = /^([A-Za-z])+([A-Za-z0-9_\-\.]{0,})+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{1,})$/
  return regEmail.test(email)
}

// lesson 7
// Viết regex để validate:
// Với userName thì tối thiểu phải có 2 ký tự, tối đa 10 ký tự. Các ký tự được phép sử dụng là a-z (viết thường), các số từ 0-9 và dấu _. userName không được bắt đầu bằng số, và không được có 2 dấu _ đứng cạnh nhau.

const validateUserName = userName => {
  // const regUserName = /^[a-z]([a-z0-9_]){1,9}$/
  const regUserName = /^[a-z]([a-z0-9]{0,}[_]?[a-z0-9]+){1,9}$/
  return regUserName.test(userName)
}
