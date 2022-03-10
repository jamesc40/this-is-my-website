let data = ["My Favorite Food is American Chinese", "My Favorite Video Game of all time is 'The Last of Us'", "My Favorite Multiplayer Game is Apex Legends", "I'm a Blue Belt in Jiu Jitsu"];
  
let list = document.getElementById("myList");

data.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});
