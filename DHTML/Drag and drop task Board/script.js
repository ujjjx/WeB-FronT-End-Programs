// Function to allow drop
function allowDrop(event) {
    event.preventDefault();
  }
  
  // Function to drag
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  // Function to drop
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }
  