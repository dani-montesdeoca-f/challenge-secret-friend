// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

function addFriend(){
    // TO DO
    let addButton = document.querySelector("#button-add");
    // add elements to the ul with id #listaAmigos
    let friendInput = document.querySelector("#amigo");
    let friendName = friendInput.value.trim(); // Trim spaces

    if (friendInput.value === "") { // Use trimmed value for validation
        alert("Please input a valid name");
        return;
    }

    friends.push(friendName); // keep track of the array
    updateFriendList(friendName, "#listaAmigos");
    friendInput.value = ""; // Clear input field
   
    console.log(friends)
}

function updateFriendList(name, list){
    // TO DO
    let newFriend = document.createElement("li"); // create a new li for the ul
    newFriend.textContent = name;
    document.querySelector(list).appendChild(newFriend);
}

function drawFriend(){
    // TO DO

    document.querySelector("#resultado").innerHTML = ""; // empty list
    
    if(friends.length == 0){
        alert("No friends in the list");
    }

    let maxNumber = friends.length;
    let generatedNumber = Math.floor(Math.random()*maxNumber);
    updateFriendList(friends[generatedNumber], "#resultado");
}

