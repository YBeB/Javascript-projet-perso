let createButton = document.getElementById("create");
let creationNote = document.querySelector(".creation_note");

function createNote() {
  let notesSelect = document.getElementById("notes");
  let textCont = notesSelect.value;
  let alertMessage = document.querySelector(".alert_paragraph");
  let allNotes = document.getElementById("all_notes");

  console.log(textCont);
  if (textCont == "") {
    notesSelect.style.border = "red 2px solid";
    alertMessage.style.display = "block";
  } else {
    notesSelect.style.border = "1px black solid";
    let divNotes = document.createElement("div");
    divNotes.classList.add("note");
    let textNotes = document.createElement("p");
    let deleteButton = document.createElement("button");
    alertMessage.style.display = "none";

    let savedNote = [];
    allNotes.appendChild(divNotes);
    divNotes.appendChild(textNotes);
    divNotes.appendChild(deleteButton);
  }
}

function deleteNote() {}

createButton.addEventListener("click", createNote);

/* <div class="note">
<p> test</p>
<button id="delete">Supprimer la note</button>
</div> */
