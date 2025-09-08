function addContact() {
  let name = document.getElementById("nameInput").value.trim();
  let phone = document.getElementById("phoneInput").value.trim();
  let code = document.getElementById("countryCode").value;

  if (name === "" || phone === "") {
    alert("Please enter both Name and Phone Number!");
    return;
  }

  let avatarLetter = name.charAt(0).toUpperCase();

  let card = document.createElement("div");
  card.className = "bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition transform";

  card.innerHTML = `
    <div class="flex items-center gap-4">
      <!-- Avatar -->
      <div class="w-12 h-12 flex items-center justify-center rounded-full bg-green-900 text-green-400 font-bold text-lg shadow">
        ${avatarLetter}
      </div>

      <div>
        <p class="font-semibold text-xl text-gray-100">${name}</p>
        <p class="text-gray-400">${code} ${phone}</p>
      </div>
    </div>

    <div class="flex justify-end gap-4 mt-6">
      <button onclick="editContact(this)" class="text-blue-400 hover:text-blue-300">
        <i class="fa-solid fa-pen-to-square text-lg"></i>
      </button>
      <button onclick="this.closest('.bg-gray-800').remove()" class="text-red-400 hover:text-red-300">
        <i class="fa-solid fa-trash text-lg"></i>
      </button>
    </div>
  `;

  document.getElementById("contactList").appendChild(card);

  document.getElementById("nameInput").value = "";
  document.getElementById("phoneInput").value = "";
  document.getElementById("countryCode").value = "+91";
}

function editContact(button) {
  let card = button.closest(".bg-gray-800");
  let nameEl = card.querySelector("p.font-semibold");
  let phoneEl = card.querySelector("p.text-gray-400");

  let newName = prompt("Edit Name:", nameEl.textContent);
  let newPhone = prompt("Edit Phone Number:", phoneEl.textContent);

  if (newName && newName.trim() !== "") {
    nameEl.textContent = newName;
    card.querySelector("div.w-12").textContent = newName.charAt(0).toUpperCase();
  }
  if (newPhone && newPhone.trim() !== "") {
    phoneEl.textContent = newPhone;
  }
}
