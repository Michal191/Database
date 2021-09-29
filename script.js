let names = getSavedNames();
let myCheckbox = document.querySelector(".checkbox")

// uloženie dát do databázy

let myForm = document.querySelector(".myForm").addEventListener("submit", function(event){
    event.preventDefault()
    
    names.push({
        id:uuidv4(),
        firstname: event.target.firstname.value,
        check: myCheckbox.checked
    })
    event.target.elements.firstname.value = ''
    myCheckbox.checked = false
    
    saveNames(names)
})

// vypísanie dát z databázy

let namesList = document.querySelector(".names")
let buttonWrite = document.querySelector('.write').addEventListener('click', function(event){
    namesList.innerHTML = ""
    let namesFromStorage = JSON.parse(localStorage.getItem("names"))
    console.log(namesFromStorage)

    namesFromStorage.forEach(function(name){  
        namesList.appendChild(HTMLgenerate(name))

    })
})



