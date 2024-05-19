let createButton = document.getElementById("create");

// Fonction création de note
function createNote() {
  let textAreaValue = document.getElementById("notes").value;
  let errorMessage = document.querySelector(".alert_paragraph");
  console.log(textAreaValue);
  let getNoteStorage = localStorage.getItem("note");

  let parsedNotesStorage = JSON.parse(getNoteStorage);
  if (parsedNotesStorage == null) {
    parsedNotesStorage = [];
  }

  if (textAreaValue == "") {
    errorMessage.style.display = "block";
    document.getElementById("notes").style.border = "red 1px solid";
  } else {
    errorMessage.style.display = "none";
    document.getElementById("notes").style.border = "black 1px solid";
    parsedNotesStorage.push({ text: textAreaValue });
    localStorage.setItem("note", JSON.stringify(parsedNotesStorage));
    document.getElementsByName("notes")[0].value = "";

    location.reload();
  }
}
// Fonction delete de note
function deleteNote(noteToDelete) {
  let getNoteStorage = localStorage.getItem("note");
  let parsedNotesStorage = JSON.parse(getNoteStorage);
  if (parsedNotesStorage == null) {
    parsedNotesStorage = [];
  }
  console.log("Type de noteToDelete:", typeof noteToDelete);
  let index = parsedNotesStorage.findIndex(
    (note) => note.text === noteToDelete.text
  );
  //.text car ce sont des objet et pas des chaine de caractere , si string , pas de .text
  console.log(index);
  //index était a -1 car il ne trouvais pas l'index correspondant donc apres le .text
  console.log(noteToDelete);
  console.log(parsedNotesStorage);

  if (index !== -1) {
    parsedNotesStorage.splice(index, 1);
    localStorage.setItem("note", JSON.stringify(parsedNotesStorage));
    location.reload();
  }
}

// Fonction affichage de note
function displayNotes() {
  let allNotes = document.getElementById("all_notes");
  let getNoteStorage = localStorage.getItem("note");
  let parsedNotesStorage = JSON.parse(getNoteStorage);
  if (parsedNotesStorage == null) {
    parsedNotesStorage = [];
  }

  parsedNotesStorage.forEach((note) => {
    let noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    let noteParagraph = document.createElement("p");
    noteParagraph.textContent = note.text;
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Supprimer";
    deleteButton.addEventListener("click", () => {
      deleteNote(note);
    });
    allNotes.appendChild(noteDiv);
    noteDiv.appendChild(noteParagraph);
    noteDiv.appendChild(deleteButton);
  });
}

window.onload = displayNotes();
createButton.addEventListener("click", createNote);
