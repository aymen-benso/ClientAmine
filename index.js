function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function deleteCookie(name) {
    document.cookie = `${name}=; Max-Age=0; path=/;`;
}

document.getElementById('profile-link').addEventListener('click', () => {
    const userCookie = getCookie('user');
    if (userCookie) {
        const user = JSON.parse(decodeURIComponent(userCookie));
        document.getElementById('profile-name').innerText = user.name;
        document.getElementById('profile-email').innerText = user.email;
        document.getElementById('profile-phone').innerText = user.phone;
        document.getElementById('profile-department').innerText = user.departement;
        document.getElementById('profile-popup').classList.add('active');
    } else {
        alert('No user data found.');
    }
});

document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('profile-popup').classList.remove('active');
});