let inbox = document.getElementById("inbox");
let listContainer = document.getElementById("listContainer");

const addTask = () =>{
    if(inbox.value === ""){
        alert("you must write here !")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inbox.value;
        listContainer.appendChild(li)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inbox.value = "";
    saveData();
};


listContainer.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    };
    saveData();
});


const saveData = () =>{
    localStorage.setItem("data", listContainer.innerHTML);
};

const showData = () =>{
    listContainer.innerHTML = localStorage.getItem("data")
};

showData();
