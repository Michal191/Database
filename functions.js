// vybratie dát z databázy, pokiaľ tam žiadne niesú vytvorí sa prázdne pole

const getSavedNames = function(){
    const myNames = localStorage.getItem('names')
    if(myNames !== null){
        return JSON.parse(myNames)
    } else {
        return []
    }
}


const saveNames = function(name){
    localStorage.setItem('names', JSON.stringify(name))

}

// tvorba html  elementov

const HTMLgenerate = function(name){

    const createDiv = document.createElement('div')
    const createSpan = document.createElement('span')
    const createBtn = document.createElement('button')

    createBtn.textContent = "Vymazať"
    createDiv.appendChild(createBtn)

    createBtn.addEventListener('click', function(event){
        remove(name.id)
        saveNames(names)
        upload()
        

    })
    if(name.check === true){
        createSpan.classList.add('adult')
    }else {
        createSpan.classList.add('no-adult')
    }


    createSpan.textContent = name.firstname
    createDiv.appendChild(createSpan)
    return createDiv

}

// vymazanie dát

const remove = function(id){
    const index = names.findIndex(function(name){
        return name.id === id
    })

    if(index > -1){
        names.splice(index, 1)
    }

}

//obnovenie vypísaných mien po vymazaní 

const upload = function(){
    namesList.innerHTML = ""
    getSavedNames().forEach(function(name){
        
        namesList.appendChild(HTMLgenerate(name))
    })
}