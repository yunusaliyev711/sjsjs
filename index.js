let display = document.getElementById('display')
let buttons = document.querySelectorAll('.btns')
let operators = document.querySelectorAll('.operators')
let equal = document.querySelector('.equal')
let clearButton = document.querySelector('.clear')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent
  } )
})

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    display.value += operator.textContent
  })
})

clearButton.addEventListener('click', () => {
  display.value = ''
})

equal.addEventListener('click', () => {
display.value = eval(display.value)
})