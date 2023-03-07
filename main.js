let list = [];
let itemNum = 0;


function addItems() {
    let task = document.getElementById("txtItem").value;
    if(task==""){
        alert("Please add a task.");
    }
    else{
        list.push(task); //adds task to array
        displayItems();
        document.getElementById("txtItem").value = "";
        updateNumberList();
    }
}

function displayItems(){
    let newItem = document.getElementById('txtItem').value;
    let display = `<li id="${itemNum}">${newItem}</li>`;
    const ul = document.getElementById("items");
    ul.innerHTML += display;
    itemNum++;
}

function updateNumberList() {
    document.getElementById('listItems').innerHTML = list.length;
}

