
// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
       "images/tm-bg-slide-1.jpg",
       "images/tm-bg-slide-2.jpg",
	"images/tm-bg-slide-3.jpg",
       "images/tm-bg-slide-3(copy).jpg"
     ], 	{duration: 7200, fade: 2300});
		});
})



/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}
