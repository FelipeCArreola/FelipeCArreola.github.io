/* Drop Down Function-Nav Bar -----**Source**:https://www.w3schools.com/css/css_dropdowns.asp" */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it -----**Source**:https://www.w3schools.com/css/css_dropdowns.asp" //
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}
