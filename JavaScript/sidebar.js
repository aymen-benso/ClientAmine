// var sideBar = document.querySelector( ".sidebar" )
// var menuToggle = document.querySelector( ".menu-toggle" )
// var main = document.querySelector( ".main" )
// var main1 = document.querySelector( ".search" )
// var main2 = document.querySelector( ".profile" )
// var main3 = document.querySelector( ".main-highlight" )
// var main4 = document.querySelector( ".main-menus" )
// var body = document.querySelector( "body" )

// menuToggle.addEventListener( "click", open )
// function open ()
// {
//     if ( sideBar.classList.contains( "sideBarTranslate" ) )
//     {
//         sideBar.classList.remove( "sideBarTranslate" )
//         menuToggle.classList.remove( "toggleTranslate" )
//         // main.classList.remove( "blur" )
//         main1.classList.remove( "blur" )
//         main2.classList.remove( "blur" )
//         main3.classList.remove( "blur" )
//         main4.classList.remove( "blur" )
//         main5.classList.remove( "blur" )
//     }
//     else
//     {
//         sideBar.classList.add( "sideBarTranslate" )
//         menuToggle.classList.add( "toggleTranslate" )
//         // main.classList.add( "blur" )
//         main1.classList.add( "blur" )
//         main2.classList.add( "blur" )
//         main3.classList.add( "blur" )
//         main4.classList.add( "blur" )
//         main5.classList.add( "blur" )
//     }

// }
var sideBar = document.querySelector( ".sidebar" )
var menuToggle = document.querySelector( ".menu-toggle" )
var main = document.querySelector( ".main" )
menuToggle.addEventListener( "click", open )
function open ()
{
    if ( sideBar.classList.contains( "sideBarTranslate" ) )
    {
        sideBar.classList.remove( "sideBarTranslate" )
        menuToggle.classList.remove( "toggleTranslate" )
        main.classList.remove( "blur" )
    }
    else
    {
        sideBar.classList.add( "sideBarTranslate" )
        menuToggle.classList.add( "toggleTranslate" )
        main.classList.add( "blur" )
    }

}