export function getItems() {
    fetch('http://127.0.0.1:3000/tasks', {
        method: 'GET'
    }).then((data) =>{
        console.log(data)
    })
}