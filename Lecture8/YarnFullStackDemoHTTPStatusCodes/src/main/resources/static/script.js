const BASE_URL = "http://localhost:8080/api/yarns";

const nameInput = document.getElementById("nameInput");
const colorInput = document.getElementById("colorInput");
const lengthInput = document.getElementById("lengthInput");
const washableInput = document.getElementById("washableInput");

const addBtn = document.getElementById("addBtn");
const yarnList = document.getElementById("yarnList");

// LOAD ALL
async function loadYarns() {
    const response = await fetch(BASE_URL);
    const yarns = await response.json();

    yarnList.innerHTML = "";

    yarns.forEach((yarn, index) => {
        const li = document.createElement("li");

        li.textContent = `${index}: ${yarn.name}, ${yarn.color}, length: ${yarn.length}, washable: ${yarn.washable} `;

        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        updateBtn.addEventListener("click", () => updateYarn(index, yarn));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteYarn(index));

        li.appendChild(updateBtn);
        li.appendChild(deleteBtn);

        yarnList.appendChild(li);
    });
}

// CREATE
async function addYarn() {
    const name = nameInput.value.trim();
    const color = colorInput.value.trim();
    const length = Number(lengthInput.value);
    const washable = washableInput.checked;

    if (!name || !color || Number.isNaN(length)) return;

    const yarn = { name, color, length, washable };

    await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(yarn)
    });

    nameInput.value = "";
    colorInput.value = "";
    lengthInput.value = "";
    washableInput.checked = false;

    loadYarns();
}

// UPDATE
async function updateYarn(index, oldYarn) {
    const newName = prompt("Enter new name:", oldYarn.name);
    if (newName === null) return;

    const newColor = prompt("Enter new color:", oldYarn.color);
    if (newColor === null) return;

    const newLengthText = prompt("Enter new length:", String(oldYarn.length));
    if (newLengthText === null) return;

    const newLength = Number(newLengthText);
    if (Number.isNaN(newLength)) return;

    const washableText = prompt("Washable? (true/false):", String(oldYarn.washable));
    if (washableText === null) return;

    const newWashable = washableText.toLowerCase() === "true";

    const updatedYarn = {
        name: newName.trim(),
        color: newColor.trim(),
        length: newLength,
        washable: newWashable
    };

    await fetch(`${BASE_URL}/${index}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedYarn)
    });

    loadYarns();
}

// DELETE
async function deleteYarn(index) {
    await fetch(`${BASE_URL}/${index}`, { method: "DELETE" });
    loadYarns();
}

addBtn.addEventListener("click", addYarn);
loadYarns();
