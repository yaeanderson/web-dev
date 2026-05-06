const TRASH_BUTTON = "<button onclick='deleteItem(this)'><svg viewBox='0 0 448 512' width='15' title='trash'> <path d='M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z' /></svg></button>";
const CHECK_BOX = "<button onclick='checkItem(this)'><svg viewBox='0 0 448 512' width='15' title='check-square'>  <path d='M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z' /></svg></button>";

let itemInput = document.getElementById("input");
let moreItems = document.getElementById("new-item");
let noMoreItems = document.getElementById("no-more-item");
let list = document.getElementById("list");
loadList();
noMoreItems.addEventListener("click", () => clearList());
moreItems.addEventListener("click", () => addItem());
document.addEventListener("beforeunload", () => saveList()):
document.addEventListener("keydown", (key) => {
  if (key.code == "Enter") addItem(key);
});
//function definitions
function addItem(event) {
  if (itemInput.value != "") {
  let _newItemText = itemInput.value;
    //Create new L.I. element
    let _itemElem = document.createElement("li");

    //Set content and attributes of the new L.I.
    _itemElem.innerText = _newItemText;
    _itemElem.innerHTML = CHECK_BOX + _itemElem.innerHTML + "  " + TRASH_BUTTON;

    //Add new L.I. to  list
    list.append(_itemElem);

    //Clear Input
    itemInput.value = "";

    //Resume Focus
    itemInput.focus();
  }
}
function clearList(event) {
  list.innerHTML = "";
}
function deleteItem(elem) {
 elem.parentElement.remove();
}
function checkItem(elem) {
  elem.parentElement.style.textDecoration = "solid black line-through 0.1em";
}
function saveList() {
  document.cookie = "list=" + list.innerHTML;
}
function loadList() {
  let oldList = document.cookie.substring(5);
  if (oldList != "") list.innerHTML = oldList;
}


