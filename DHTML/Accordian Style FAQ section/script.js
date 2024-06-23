// Get all accordion buttons
var acc = document.getElementsByClassName("accordion");

// Add click event listener to each accordion button
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Toggle showing/hiding of panel when clicking on an accordion button

    this.classList.toggle("active"); 
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// In the JavaScript code provided, when an accordion button is clicked, the corresponding answer panel's display property is toggled between "block"
//  and "none". Additionally, the class active is toggled on the button, which is used to style the active accordion button. 


// classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.The classList property is useful to 
// add, remove and toggle CSS classes on an element.
// classList.toggle() method toggles between adding and removing a class name from an element.

// this.nextElementSibling property returns the element immediately following the specified element, in the same tree level.

// Steps:
// When an accordion button is clicked, the active class is toggled on the button itself using classList.toggle("active").
// The next element sibling of the button (which is the corresponding answer panel) has its display property toggled between "block"
//  and "none" using JavaScript's style.display property.
// The .panel.show CSS rule defines the appearance of the answer panels when they have the show class. In this case, it sets the display property 
// to "block", effectively showing the panel.