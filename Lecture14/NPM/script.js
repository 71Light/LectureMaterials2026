import { v4 as uuidv4 } from "./node_modules/uuid/dist/index.js";

const button = document.getElementById("generate");
const list = document.getElementById("list");

button.addEventListener("click", () => {
    const id = uuidv4();

    const li = document.createElement("li");
    li.textContent = id;

    list.appendChild(li);
});