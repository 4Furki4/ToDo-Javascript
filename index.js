let inputToDo = document.getElementById("task")

let ulList = document.getElementById("list")

let toDo = []

function newElement() {

    if (inputToDo.value.trim() || !toDo.includes(inputToDo.value)) {
        
        toDo.push(inputToDo.value)
        localStorage.setItem("liste", JSON.stringify(toDo))
        addEntryToDo()
    }

}


function addEntryToDo() {
    let list = JSON.parse(localStorage.getItem("liste"))
    list.forEach(function(value){
        const li = document.createElement("li")
        li.textContent = value
        const i = document.createElement("i")
        i.classList.add("fa-sharp", "fa-solid", "fa-xmark")
        const span = document.createElement("span")
        span.classList.add("deleteEntry", "btn", "btn-outline-warning", "d-flex", "border-0", "float-right")
        span.appendChild(i)
        li.appendChild(span)
        ulList.appendChild(li)
    })
}