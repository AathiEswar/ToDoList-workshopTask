// function addTask() {
//     let task = document.getElementById("taskInput").value;
//     if (task) {
//         let li = document.createElement("li");
//         li.textContent = task;
//         document.getElementById("taskList").appendChild(li);
//         document.getElementById("taskInput").value = "";
//                 li.onclick = function() {
//            this.parentNode.removeChild(this);
//        }
//    }
// }

function addTask() {
  let task = document.getElementById("text").value;
  let title = document.getElementById("title").value;

  let lists = document.createElement("div");
  lists.className = "lists";

  let listTitles = document.createElement("div");
  listTitles.className = "list-titles";
  let listTitleHolder = document.createElement("span");
  listTitleHolder.className = "list-title-holder";
  listTitleHolder.innerHTML = title;
  listTitles.appendChild(listTitleHolder);

  let listTexts = document.createElement("div");
  listTexts.className = "list-texts";
  let listTextHolder = document.createElement("span");
  listTextHolder.className = "list-text-holder";
  listTextHolder.innerHTML = task;
  listTexts.appendChild(listTextHolder);

  lists.appendChild(listTitles);
  lists.appendChild(listTexts);

  let listHolder = document.getElementById("holder");
  listHolder.appendChild(lists);

  document.getElementById("text").value = "";
  document.getElementById("title").value = "";

  lists.onclick = function(){
    this.parentNode.removeChild(this);
  }
}

