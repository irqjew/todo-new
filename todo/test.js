const url = 'http://127.0.0.1:3000/tasks'

const inputEl = document.getElementsByClassName('app__controls-input') [0]
const btnEl = document.getElementsByClassName('app__controls-button')[0]
const listEl = document.getElementsByClassName('app__list')[0]
const textEL = document.getElementsByClassName('app__list-item-text')[0]
const btnDel = document.getElementsByClassName('app__list-btn')[0]
const task = document.getElementsByClassName('app__list-item')[0]
let counter = 1
const data = [
    { id: 1, text: 'lol', isDone: true},
    { id: 2, text: 'lol', isDone: false}
]

data.forEach((item) => {
    if(item.id > counter) {
        counter = item.id
    };
})
if(counter > 1) {
    counter++
}

// //API

// async function getItems() {
//     const res = await fetch(url, {
//         method: 'GET'
//     })
//     if(!res.ok) {
//         console.log('Wrong');
//         return
//     }
//     data = await res.json()
// }


// async function CreateTaskApi(data) {
//     const res = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify({
//             text: data.text,
//             isDone: data.isDone
//         })
//     })  
// }

//APP
//data.forEach((item) => {
//    if(item.id > counter) {
//        counter = item.id
//    }
//if (counter > 1) {
//    counter++
//}
//    render()
//})

function createTask(objectData) {
    const root = document.createElement('div');
    root.classList.add('app__list-item');

    if (data.isDone === true) {
        root.classList.add('app__list-item_done')
    };

    const input = document.createElement('input');
    input.classList.add('app__list-checkbox');

    if (data.isDone === true) {
        input.checked = true
    };

    input.type = 'checkbox'

    const txt = document.createElement('p')
    txt.classList.add('app__list-item-text')
    txt.innerText = data.text

    const btn = document.createElement('button')
    btn.classList.add('app__list-btn')

    const img = document.createElement('img')
    img.src = './vector.svg'
    img.alt = 'trash'

    btn.appendChild(img)

    root.appendChild(input)
    root.appendChild(txt)
    root.appendChild(btn)
    return root
}  


btnDel.addEventListener('click', () => {
    task.delete()
})

btnEl.addEventListener('click', () => {
    const textValue = inputEl.value;
    data.push({
        id: 3,
        text: textValue,
        isDone: false
    })
    render()
    inputEl.value = ''
})

function render() {
    listEl.innerHTML = ''
    for(let item of data) {
        const tmpElement = createTask(item);
        listEl.appendChild(tmpElement)
    }
}

// function render() {
//     listEl.innerHTML = ''
//     for (let item of data) {
//         const tmpElement = createTask(item)
//         listEl.appendChild(tmpElement)
//     }
// }

