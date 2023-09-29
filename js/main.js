const allCheckbox = document.querySelectorAll('.todo__checkbox')
const allToDoText = document.querySelectorAll('.todo__text')
const allBtn = document.querySelectorAll('.btn')
const boxToDo = document.querySelector('.box__todo')

// This can be removed after all ToDo list is finished, this is only adding listeners to existing ToDo's. Since there will be not at the begining we can easily delete that

for (let i = 0; i < allCheckbox.length; i++) {
	allCheckbox[i].addEventListener('click', () => {
		if (allCheckbox[i].checked) {
			allToDoText[i].classList.add('todo-done')
		} else {
			allToDoText[i].classList.remove('todo-done')
		}
	})
}

// Function for creating ToDo

const createToDoFunciton = () => {
	// Creating ToDo
	const toDoDiv = document.createElement('div')
	toDoDiv.classList.add('todo')
	toDoDiv.setAttribute('draggable', true)
	const toDoInput = document.createElement('input')
	toDoInput.classList.add('todo__checkbox')
	toDoInput.type = 'checkbox'
	const toDoP = document.createElement('p')
	toDoP.classList.add('todo__text')
	toDoP.textContent = 'To do dodany przez button'
	toDoDiv.appendChild(toDoInput)
	toDoDiv.appendChild(toDoP)
	boxToDo.appendChild(toDoDiv)

	const allCheckbox = document.querySelectorAll('.todo__checkbox')
	const allToDoText = document.querySelectorAll('.todo__text')

	// Looping through all ToDo's and adding listener to 'close' the ToDo

	for (let i = 0; i < allCheckbox.length; i++) {
		allCheckbox[i].addEventListener('click', () => {
			if (allCheckbox[i].checked) {
				allToDoText[i].classList.add('todo-done')
			} else {
				allToDoText[i].classList.remove('todo-done')
			}
		})
	}
}

const removeLastToDo = () => {
	boxToDo.removeChild(boxToDo.lastChild)

	// select.removeChild(select.lastChild)
}

allBtn[0].addEventListener('click', createToDoFunciton)
allBtn[1].addEventListener('click', removeLastToDo)

// allBtn[3].addEventListener('click', isCheckedFunction)
// allCheckbox[0].addEventListener('click', isCheckedFunction)

// const testFunction = () => {
// 	console.log(checkbox.indexOf())
// }

// allCheckbox.forEach(checkbox => {
// 	checkbox.addEventListener('click', testFunction)
// })

// // const doneToDoFunction = () => {
// // 	if (allCheckbox[0].checked == true) {
// // 		allToDoText[0].classList.add('todo-done')
// // 	} else {
// // 		allToDoText[0].classList.remove('todo-done')
// // 	}
// // }

// // allBtn[3].addEventListener('click', doneToDoFunction)

// const isCheckedFunction = () => {
// 	if (allCheckbox[0].checked) {
// 		console.log('is checked')
// 	} else {
// 		console.log('is not checked')
// 	}
// }

// const indexOfFunction = () => {
// 	// console.log(allCheckbox[0].indexOf())
// 	allToDoText[0].classList.add('todo-done')
// 	console.log('test')
// }

// for (let i = 0; i < allCheckbox.length; i++) {
// 	allCheckbox[i].addEventListener('click', isCheckedFunction)
// }
