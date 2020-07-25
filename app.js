var list = document.getElementById('list')
function addTodo() {
    // ADD
    var todo_item = document.getElementById('todo_item')
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    // DELETE
    var delbtn = document.createElement('button')
    var delText = document.createTextNode('Delete')
    delbtn.setAttribute("class", "btn btn-dark")
    delbtn.setAttribute("onclick", "deleteItem(this)")
    delbtn.appendChild(delText)

    // EDIT
    var editbtn = document.createElement('button')
    var editText = document.createTextNode('Edit')
    editbtn.setAttribute("class", "btn btn-dark")
    editbtn.setAttribute("onclick", "editItem(this)")
    editbtn.appendChild(editText)

    li.appendChild(editbtn)
    li.appendChild(delbtn)
    list.appendChild(li)
    todo_item.value = ""
}

function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    var val = prompt("Enter Update Value ", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val
}

function delTodo() {
    list.innerHTML = ""
}

