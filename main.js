//Main container
const addButton = document.querySelector("#push");
const inputField = document.querySelector(".inline input");
const postsContainer = document.querySelector("#posts");

addButton.addEventListener("click", (e) => {
    e.preventDefault();

    createToDoElement();

    inputField.value = "";
});

const createToDoElement = () => {
    const toDoElement = document.createElement("div");
    toDoElement.className = "toDoElement";

    const title = document.createElement("input");
    title.value = inputField.value;
    title.disabled = true;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    deleteBtn.className = "button";
    deleteBtn.innerText = "Delete";

    const editButtonDiv = document.createElement("div");
    editButtonDiv.className = "editButton";

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    editBtn.innerText = "Edit";
    editBtn.className = "button";

    const saveBtn = document.createElement("button");
    saveBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    saveBtn.innerText = "Save";
    saveBtn.className = "button";

    const checkButtonDiv = document.createElement("div");
    checkButtonDiv.className = "checkButton";

    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    checkBtn.innerText = "Check";
    checkBtn.className = "button";

    const UncheckButtonDiv = document.createElement("div");
    checkButtonDiv.className = "UncheckButton";

    const UncheckBtn = document.createElement("button");
    UncheckBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    UncheckBtn.innerText = "UnCheck";
    UncheckBtn.className = "button";

    checkBtn.addEventListener("click", (e) => {
        title.style.textDecoration = "line-through";
        title.innerText = "Check";
        title.innerText = inputField.value;
    });

    UncheckBtn.addEventListener("click", () => {
        title.style.textDecoration = "";
        title.innerText = "UnCheck";
        title.innerText = inputField.value = "";
    });

    title.innerText = "UnCheck";
    title.innerText = inputField.value = "";

    deleteBtn.addEventListener("click", (e) => {
        toDoElement.remove();
    });

    editBtn.addEventListener("click", (e) => {
        title.disabled = false;
    });

    saveBtn.addEventListener("click", (e) => {
        title.disabled = true;
    });

    toDoElement.append(title, checkBtn, UncheckBtn, deleteBtn, editBtn, saveBtn);

    postsContainer.append(toDoElement);
};
