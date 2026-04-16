function applyChanges() {
    var name = document.getElementById("nameInput").value;
    var message = document.getElementById("messageInput").value;
    var color = document.getElementById("bgSelect").value;

    document.getElementById("greeting").innerHTML = "Hello User " + name + "!";
    document.getElementById("message").innerHTML = message;
    document.body.style.backgroundColor = color;

}
document.getElementById("applyBtn").onclick = applyChanges;


//Extra Credit (up to 3 points): To Do List

function addTodoList() {
    var itemText = document.getElementById("todoInput").value;

    if (itemText === "") {
        return;
    }
    var li = document.createElement("li");
    li.innerHTML = itemText;

    document.getElementById("todoList").appendChild(li);
    document.getElementById("todoList").value = "";
}
document.getElementById("addTodoBtn").onclick = addTodoList;





