var sideBar = document.querySelector( ".sidebar" )
var menuToggle = document.querySelector( ".menu-toggle" )
var main1 = document.querySelector( ".search" )
var main2 = document.querySelector( ".profile" )
var tabContent = document.querySelector( ".tab-content" )
var nav = document.querySelector( ".nav" )

menuToggle.addEventListener( "click", open )
function open ()
{
    if ( sideBar.classList.contains( "sideBarTranslate" ) )
    {
        sideBar.classList.remove( "sideBarTranslate" )
        menuToggle.classList.remove( "toggleTranslate" )
        main1.classList.remove( "blur" )
        main2.classList.remove( "blur" )
        tabContent.classList.remove( "blur" )
        nav.classList.remove( "blur" )
    }
    else
    {
        sideBar.classList.add( "sideBarTranslate" )
        menuToggle.classList.add( "toggleTranslate" )
        main1.classList.add( "blur" )
        main2.classList.add( "blur" )
        tabContent.classList.add( "blur" )
        nav.classList.add( "blur" )
    }

}



//-------------------------------- //

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");

    select.addEventListener("click", () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove("active");
            });
            option.classList.add("active");
        });
    });
});










