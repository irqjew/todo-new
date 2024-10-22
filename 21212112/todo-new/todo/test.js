const inputEl = document.getElementsByClassName('app__controls-input')[0];
const btnEl = document.getElementsByClassName('app__controls-button')[0];
const listEl = document.getElementsByClassName('app__list')[0];
const chkd = document.getElementsByTagName("app__list-checkbox");
const elem = document.querySelector('#app__list-item')

adds[0].addEventListener('mouseover', function() {
    this.style.color = "red";
  })

let counter = 1;
const data = [];

function createTask(objectData) {
    const root = document.createElement('div');
    root.classList.add('app__list-item');

    if (objectData.isDone) {
        root.classList.add('app__list-item_done');
    }

    const input = document.createElement('input');
    input.classList.add('app__list-checkbox');

    if (objectData.isDone) {
        input.checked = true;
    }

    input.type = 'checkbox';

    const txt = document.createElement('p');
    txt.classList.add('app__list-item-text');
    txt.innerText = objectData.text;

    const btn = document.createElement('button');
    btn.classList.add('app__list-btn');

    const img = document.createElement('img');
    img.src = './vector.svg';
    img.alt = 'trash';

    btn.appendChild(img);

    btn.addEventListener('click', () => {
        root.remove();
        data.splice(0)
    });

    root.appendChild(input);
    root.appendChild(txt);
    root.appendChild(btn);
    return root;
}

btnEl.addEventListener('click', () => {
    const textValue = inputEl.value.trim();
    if (textValue !== '') {
        data.push({
            id: counter++,
            text: textValue,
            isDone: false
        });
        render();
        inputEl.value = '';
    }
});

function render() {
    listEl.innerHTML = '';
    for (let item of data) {
        const tmpElement = createTask(item);
        listEl.appendChild(tmpElement);
    }
}

const correct = document.querySelector('#yes')
console.log(yes.checked)

console.log(elem)

chkd.addEventListener('click', function() {
    createTask.classList.toggle("app__list-item_done")
    elem.classList.toggle('212112')
})