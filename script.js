function addContact() {
  let name = document.getElementById("nameInput").value.trim();
  let phone = document.getElementById("phoneInput").value.trim();

  if (name === "" || phone === "") {
    alert("Please enter both Name and Phone Number!");
    return;
  }

  let li = document.createElement("li");
  li.className = "flex items-center justify-between bg-white shadow rounded-xl px-4 py-2";

  li.innerHTML = `
    <div>
      <p class="font-semibold text-lg">${name}</p>
      <p class="text-gray-600">${phone}</p>
    </div>
    <div class="flex items-center gap-3">
      <button onclick="editContact(this)" class="text-blue-600">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button onclick="this.closest('li').remove()" class="text-red-600">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `;

  document.getElementById("contactList").appendChild(li);

  // Clear input fields
  document.getElementById("nameInput").value = "";
  document.getElementById("phoneInput").value = "";
}

function editContact(button) {
  let li = button.closest("li");
  let nameEl = li.querySelector("p.font-semibold");
  let phoneEl = li.querySelector("p.text-gray-600");

  let newName = prompt("Edit Name:", nameEl.textContent);
  let newPhone = prompt("Edit Phone Number:", phoneEl.textContent);

  if (newName && newName.trim() !== "") {
    nameEl.textContent = newName;
  }
  if (newPhone && newPhone.trim() !== "") {
    phoneEl.textContent = newPhone;
  }
}
