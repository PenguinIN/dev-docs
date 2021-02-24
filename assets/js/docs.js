// $(document).ready(function () {
//   $(".docs-sidebar-toggler").click();

//   $("body").scrollspy({ target: "#docs-nav", offset: 100 });
// });

// function openNav() {
// 	if (document.getElementById("mySidenav").style.width === "250px"){
// 	  document.getElementById("mySidenav").style.width = "0";
// 	  document.getElementById("main").style.marginLeft = "0";
// 	} else {
// 	  document.getElementById("mySidenav").style.width = "250px";
// 	  document.getElementById("main").style.marginLeft = "250px";
// 	}

//   }

// getting burger btn id

// const docsBurger = document.querySelector("#docs-sidebar-toggler");
// docsBurger.addEventListener("click", (e) => {
//   const sideMenu = document.querySelector(".sidenav2");
//   const main = document.querySelector(".docs-article");

//   main.classList.toggle("mainPaddingLeft");
//   sideMenu.classList.toggle("toRightMenu");
// });

$(document).ready(function () {
   $("body").scrollspy({ target: "#docs-nav", offset: 100 });

   $(".docs-sidebar-toggler").click(function () {
    $(".sidenav2").toggleClass("nav-hide");
    $(".main").toggleClass("page-show");
    $(".cover").toggleClass("cover-show");


  });

  $(".cover").click(function () {
    $(".sidenav2").toggleClass("nav-hide");
    $(".main").toggleClass("page-show");
    $(".cover").toggleClass("cover-show");
  });
  
});
