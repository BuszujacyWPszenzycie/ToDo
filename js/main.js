const allCheckbox = document.querySelectorAll('.todo__checkbox')
const allToDoText = document.querySelectorAll('.todo__text')
const allBtn = document.querySelectorAll('.btn')
const boxToDo = document.querySelector('.box__todo')
const allToDo = document.querySelectorAll('.todo')
const boxTrash = document.querySelector('.box__trash')

// console.log(allToDo)

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

	// Adding dragstart and dragend for creating new ToDo's

	toDoDiv.addEventListener('dragstart', () => {
		toDoDiv.classList.add('is-dragged')
	})

	toDoDiv.addEventListener('dragend', () => {
		toDoDiv.classList.remove('is-dragged')
	})
}

// Fuinction for removing last element

const removeLastToDo = () => {
	boxToDo.removeChild(boxToDo.lastChild)
}

// Adding dragstart and dragend to the existing elements, --> it can be removed when app is ready

allToDo.forEach(todo => {
	todo.addEventListener('dragstart', () => {
		todo.classList.add('is-dragged')
	})

	todo.addEventListener('dragend', () => {
		todo.classList.remove('is-dragged')
	})
})

// Function for removing ToDo's

boxTrash.addEventListener('dragover', e => {
	e.preventDefault()
	// console.log(boxTrash)
	const isDragged = document.querySelector('.is-dragged')
	boxTrash.appendChild(isDragged)
	boxTrash.removeChild(boxTrash.lastChild)
})

allBtn[0].addEventListener('click', createToDoFunciton)
allBtn[1].addEventListener('click', removeLastToDo)
