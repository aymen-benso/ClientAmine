document.addEventListener("DOMContentLoaded", function() {
    const myInfoRadio = document.getElementById('My');
    const usersInfoRadio = document.getElementById('users');
    const myAccountSection = document.querySelector('.myAccount');
    const tableContainer = document.querySelector('.table-container');

    myInfoRadio.addEventListener('change', function() {
        if (this.checked) {
            myAccountSection.style.display = 'block';
            tableContainer.style.display = 'none';
        }
    });

    usersInfoRadio.addEventListener('change', function() {
        if (this.checked) {
            myAccountSection.style.display = 'none';
            tableContainer.style.display = 'block';
        }
    });
});


var zoomProfilePictur = document.querySelector(".profile-zoom")
var closeButton = document.querySelector(".close")
var profileArea = document.querySelector( ".profile-area" )
var toggle = document.querySelector( ".menu-toggle" )
var sideBar = document.querySelector( ".sidebar" )
var main = document.querySelector( ".main" )

profileArea.addEventListener( "click", piczoom );
closeButton.addEventListener( "click", closePropfile );
function piczoom ()
{
    if (!zoomProfilePictur.classList.contains( "picture-zoom" )){
        zoomProfilePictur.classList.add("picture-zoom" );
        main.classList.add( "filter" );
        sideBar.classList.add( "filter" );
        toggle.classList.add( "filter" );
    }
}

function closePropfile ()
{
        zoomProfilePictur.classList.remove("picture-zoom" );
        main.classList.remove( "filter" );
        sideBar.classList.remove( "filter" );
        sideBar.classList.remove( "filter" );
        toggle.classList.remove( "filter" );
}

