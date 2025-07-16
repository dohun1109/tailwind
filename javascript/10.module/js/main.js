import { createHeader } from "./header.js";
import { createFooter } from "./footer.js";
import { createListItem } from "./view.js";

const app = document.getElementById("app");

const input = document.createElement("input");
input.id = "nameInput";
input.placeholder = "이름을 입력하세요";

const button = document.createElement("button");
button.id = "addBtn";
button.innerText = "등록";

const list = document.createElement("ul");
list.id = "guestList";

const deleteButton = document.createElement("button");
deleteButton.id = "deleteBtn";
deleteButton.innerText = "항목 삭제";
deleteButton.style.marginTop = "10px";
deleteButton.style.backgroundColor = "#dc3545";
deleteButton.style.color = "white";

const guestbook = [];

button.addEventListener("click", () => {
  const name = input.value.trim();
  if (name) {
    guestbook.push({ name });
    updateList();
    console.log(guestbook);
    input.value = "";
  }
});

deleteButton.addEventListener("click", () => {
  if (guestbook.length > 0) {
    guestbook.pop();
    updateList();
    console.log(guestbook);
  } else {
    alert("삭제할 항목이 없습니다!");
  }
});

function updateList() {
  list.innerHTML = "";
  guestbook.forEach((guest, index) => {
    list.appendChild(createListItem(guest.name, index));
  });
}

app.appendChild(createHeader());
app.appendChild(input);
app.appendChild(button);
app.appendChild(list);
app.appendChild(deleteButton);
app.appendChild(createFooter());
