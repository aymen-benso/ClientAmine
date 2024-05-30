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