let inputToDo = document.getElementById("task")

let ulList = document.getElementById("list")

let toDo = []



function newElement() {

    if (inputToDo.value.trim() && !toDo.includes(inputToDo.value)) {
        toDo = Boolean(toDo = JSON.parse(localStorage.getItem("liste"))) ? toDo = JSON.parse(localStorage.getItem("liste")) : []
        toDo.push(inputToDo.value)
        localStorage.setItem("liste", JSON.stringify(toDo))
        addLastToList(inputToDo.value)
    }
}
ListEntries()


function ListEntries() {
    // localStorage'a kaydedilen list elementleri array'e dönüştürülerek geri alındı
    let list = JSON.parse(localStorage.getItem("liste"))
    if (list) {
        list.forEach(function(value){
            addLiElement(value);
        })
    }
}

function addLastToList(value) {

    addLiElement(value);

}

function addLiElement(value) { // Ayrı bir metoda aktardım ve farklı yerlerde li elementi oluşturabildim bu metotlar
    const li = document.createElement("li")
    li.textContent = value
    //x işareti için i elementi oluşturuldu
    const i = document.createElement("i")
    //font awesome sınıfları i elementine eklendi
    i.classList.add("fa-sharp", "fa-solid", "fa-xmark")
    // x elementini içerecek, buton olan span elementi eklendi
    const span = document.createElement("span")
    // butonun sınıfları eklendi
    span.classList.add("deleteEntry", "btn", "btn-outline-warning", "d-flex", "border-0", "float-right")

    span.appendChild(i)
    li.appendChild(span)    //i elementi, span içine, span elementi li elementi içine, li elementi de ul içine eklendi.
    ulList.appendChild(li)
}