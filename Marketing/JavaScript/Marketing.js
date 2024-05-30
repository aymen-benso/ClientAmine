

var sideBar = document.querySelector( ".sidebar" )
var menuToggle = document.querySelector( ".menu-toggle" )
var main = document.querySelector( ".main" )
var main1 = document.querySelector( ".search" )
var main2 = document.querySelector( ".profile" )

menuToggle.addEventListener( "click", open )
function open ()
{
    if ( sideBar.classList.contains( "sideBarTranslate" ) )
    {
        sideBar.classList.remove( "sideBarTranslate" )
        menuToggle.classList.remove( "toggleTranslate" )
        main.classList.remove( "blur" )
        main1.classList.remove( "blur" )
        main2.classList.remove( "blur" )

    }
    else
    {
        sideBar.classList.add( "sideBarTranslate" )
        menuToggle.classList.add( "toggleTranslate" )
        main.classList.add( "blur" )
        main1.classList.add( "blur" )
        main2.classList.add( "blur" )
    }
}

