function toggleMenu(){
    var dropdownMenu = document.getElementById('myDropdown');
    dropdownMenu.classList.toggle('show');  // Add or remove the 'show' class
    // .classList returns the class name(s) of an element
    // .toggle() method toggles between adding and removing a class name from an element
}
// Close the dropdown if the user clicks outside of it.
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){ // event.target returns the element that triggered the event
        // .matches() method checks if the element would be selected by the specified selector
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for(var i = 0; i<dropdowns.length;i++){ // dropdowns.length returns the number of elements in the dropdowns array
            var openDropdown = dropdowns[i]; 
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }

    }
}