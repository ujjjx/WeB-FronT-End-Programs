function openModel(imageURL){
    var modal = document.getElementById("myModal"); 
    var modalImg = document.getElementById("modalImg");  
    modal.style.display = "block";  //model.style is used to change the style of the model element dynamically
    modalImg.src = imageURL;
}
function closeModal(){
    var modal = document.getElementById("myModal");
        modal.style.display = "none";
}





