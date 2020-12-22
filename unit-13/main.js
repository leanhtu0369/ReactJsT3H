// Lesson 1

const logCurrentTime = () => {
  const now = new Date()
  const currentTime = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`

  return currentTime
}

const logTimeHover = () => {
  console.log(`Hover lúc: ${logCurrentTime()}`);
}

const logTimeHoverOut = () => {
  console.log(`Out Hover lúc: ${logCurrentTime()}`);
}

// Lesson 2
const checkValidateAccount = e => {
  const regAccount = /^[a-z0-9_]+$/
  if (!regAccount.test(e.key)) {
    alert(`Kí tự ' ${e.key} ' không hợp lệ`)
  }
}

// Lesson 3
const checkValidateMoney = e => {
  const regMoney = /^[0-9]+$/

  if (!regMoney.test(e.key)) {
    alert(`Kí tự ' ${e.key} ' không hợp lệ`)
  } else if (parseInt(e.target.value) < 0) {
    alert(`Số tiền không được phép âm`)
  } else if (parseInt(e.target.value) > 1000) {
    alert(`Số tiền nhập tối đa là 1000`)
  }
}

// Lesson 4
const alertDoubleClick = () => {
  alert('double click')
}

// Lesson 5
const getHighlightedText = () => {
  console.log(window.getSelection().toString())
}

// Lesson 6
const getSelectedItem = (e) => {
  console.log(e.target.value);
}
