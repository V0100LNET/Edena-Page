const $menu_btn =  document.getElementById("btn-menu"),
      $inactive_nav_principal = document.querySelector(".inactive-nav-principal"),
      $inactive_nav_secundary = document.querySelector(".inactive-nav-secundary"),
      $btn_remove = document.querySelector("btn-remove");


$menu_btn.addEventListener("click", (e) => {
    console.log($inactive_nav_principal);
    console.log($inactive_nav_secundary);

    $inactive_nav_principal.classList.remove("inactive-nav-principal");
    $inactive_nav_secundary.classList.remove("inactive-nav-secundary");
});
