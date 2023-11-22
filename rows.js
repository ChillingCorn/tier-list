const rows = document.querySelectorAll('.row');
const colors = ['#FD7F7E', '#FEBF7F', '#FEFF7F', '#7EFF7F', '#7FFFFF', '#807FFF', '#FD7FFE'];

const onDragOver = (event) => {
  event.preventDefault();
}

const onDrop = (event) => {
  event.preventDefault();
  const draggedCardId = event.dataTransfer.getData('id');
  const draggedCard = document.getElementById(draggedCardId);
  event.target.appendChild(draggedCard);
  console.log('dropped the element');
}

rows.forEach((row, index) => {
  const label = row.querySelector('.label');
  label.style.backgroundColor = colors[index];
  row.ondragover = onDragOver;
  row.ondrop = onDrop;
})