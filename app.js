const inputTask = document.getElementById("input-task");
const listElement = document.getElementById("list-element");
function addTask(){
    if(inputTask.value===''){
        alert("you must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        listElement.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value = "";
    saveData();
}
 
listElement.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listElement.innerHTML)
}
function showData(){
    listElement.innerHTML = localStorage.getItem("data");
}
showData();