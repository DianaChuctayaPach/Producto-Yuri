
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// bari
$( document ).ready(function(){
 $('.button-collapse').sideNav({
      menuWidth: 400, 
      edge: 'right', 
      closeOnClick: true, 
      draggable: true, 
    });
 $('.slider').slider();
 
});
