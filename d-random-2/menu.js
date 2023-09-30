// Get the menu toggle and menu ((from the DOM)
const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu() {
  // Check that the elements exist (menu and menu toggle)
  if (menuToggle && menu) {
    
    // if the menu is open,  close it
    if (menu.classList.contains("active")) {
      //remove the "active" class from the menu
      menu.classList.remove("active");

      // put font-awesome menu icon in the toggle element
      menuToggle.querySelector("a").innerHTML = '<span class="sr-only">Open Menu</span><i class="fas fa-bars" aria-label="Open Menu "></i>';

      // set the aria expanded attribute to false
      menuToggle.setAttribute("aria-expanded", "false");
    }

    // otherwise open it
    else {
      //add the "active" class to the menu
      menu.classList.add("active");

      // put font-awesome close icon in the toggle element
      menuToggle.querySelector("a").innerHTML = '<span class="sr-only">Menu Close</span><i class="fas fa-times" aria-label="Close Menu"></i>';
      

      // set the aria expanded attribute to true
      menuToggle.setAttribute("aria-expanded", "true");
    }
  }
}

/* Event Listeners */
menuToggle.addEventListener("click", toggleMenu, false);
