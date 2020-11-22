
var modalOverlay = document.querySelector(".modal-overlay");
var btnClose = document.querySelector(".close");
var btnOK = document.querySelector(".btnOK");
var btnCancel = document.querySelector(".btnCancel");


btnClose.onclick = function() {
    closeModal();
}
btnOK.onclick = function() {
    closeModal();
}
btnCancel.onclick = function() {
    closeModal();
}

// Click anywhere
window.onclick = function(event) {
  if (event.target == modalOverlay) {
    closeModal();
  }
} 

function openModal() {
    modalOverlay.style.display = "block";
}

function closeModal() {
    modalOverlay.style.display = "none";
}