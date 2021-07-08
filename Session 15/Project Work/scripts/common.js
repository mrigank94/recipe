navHeaderTemplate();
contactTemplate();
loginTemplate();
footerTemplate();

let user = document.getElementById("user");

if(sessionStorage.isLogin) {
    loginNavbar.style.display = "none";
    let username = document.getElementById("user-name");
    username.innerHTML = sessionStorage.username.toUpperCase();
    user.style.display = "flex";
} else {
    user.style.display = "none";
}

function login() {
    let modal = document.getElementsByClassName("login-modal");
    modal[0].style.display = "block";
}

function closeModal() {
    let modal = document.getElementsByClassName("login-modal");
    modal[0].style.display = "none";
}

function openContactUsModal() {
    let modal = document.getElementsByClassName("contactus-modal");
    modal[0].style.display = "flex";
}

function closeContactUsModal() {
    let modal = document.getElementsByClassName("contactus-modal");
    modal[0].style.display = "none";
}

function userLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === 'admin' && password === 'admin') {
        let errorMsg = document.getElementById('error-msg');
        alert(`Welcome back, ${username}`);
        sessionStorage.username = 'admin';
        sessionStorage.isLogin = true;
        if(errorMsg.style.display === "block") {
            errorMsg.style.display = "none";
        }
        let modal = document.getElementsByClassName("login-modal");
        modal[0].style.display = "none";
        loginNavbar.style.display = "none";
        let navbarUser = document.getElementById("user-name");
        navbarUser.innerHTML = sessionStorage.username.toUpperCase();
        user.style.display = "flex";
    } else {
        let errorMsg = document.getElementById('error-msg');
        errorMsg.style.display = "block";
    }
}

function upArrowClick() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function loginTemplate() {
    let logintemplate = '<div id="login">' +
        '<span class="close" onclick="closeModal()">X</span>' +
        '<img src="assets/images/logo-chefs-table.png" height="50" width="50" />' +
        '<h4>Login</h4>' +
        '<input type="text" placeholder="Username" id="username" />' +
        '<br />' +
        '<input type="password" placeholder="Password" id="password" />' +
        '<br />' +
        '<button id="loginButton">Login</button>' +
    '</div>';
    document.getElementById('login-modal').innerHTML += logintemplate;
}

function contactTemplate() {
    let contacttemplate = '<div id="contactus">' +
    '<span class="close" onclick="closeContactUsModal()">X</span>'+
    '<h4>Contact Us</h4>'+
    '<div class="contact-form">'+
        '<form>'+
            '<label for="name">Name:</label><br />'+
            '<input type="text" id="form-name" name="name" />'+
            '<br />'+

            '<label for="address">Address:</label><br />'+
            '<textarea id="form-address" name="address"></textarea>'+

            '<br />'+

            '<label for="email">Email Address:</label><br />'+
            '<input type="email" id="form-email" name="email" />'+

            '<br />'+

            '<label for="contact">Contact Number:</label><br />'+
            '<input type="number" id="form-phone" name="contact" max="10" />'+

            '<br />'+

            '<label for="birth-date">Date of Birth:</label><br />'+
            '<input type="date" id="form-date" name="birth-date" />'+

            '<br />'+

            '<label for="gender">Gender:</label><br />'+
            '<input type="radio" id="male" name="gender" value="male">'+
            '<label for="male">Male</label>'+
            '<input type="radio" id="female" name="gender" value="female">'+
            '<label for="female">Female</label>'+
            '<input type="radio" id="other" name="gender" value="other">'+
            '<label for="other">Other</label>'+

            '<br />'+

            '<input type="checkbox" id="newsletter-check" name="newsletter-check" />'+
            '<label for="newsletter-check">Subscribe to our newsletter.</label>'+

            '<br />'+

            '<input type="submit" id="submitBtn" />'+
        '</form>'+
    '</div>'+
'</div>';
document.getElementById('contactus-modal').innerHTML += contacttemplate;
}

function navHeaderTemplate() {
    let headertemplate = '<div class="website-title">' +
    '<a href="index.html">' +
        '<img src="assets/images/logo-chefs-table.png" class="website-logo" />' +
        '<span>Chef\'s Table</span>' +
    '</a>' +
    '</div>' +
    '<div class="nav-links">' +
    '<a href="live-sessions.html"><span>Live Sessions</span></a>' +
    '<a onclick="login()"><span>Login</span></a>' +
    '<div id="user"><img src="./assets/images/user-solid.svg"/><span id="user-name"></span></div>' +
    '</div>';
    document.getElementById('navheader').innerHTML += headertemplate;
}

function footerTemplate() {
    let footertemplate = '<span class="address">' +
        '497 Evergreen Rd. Roseville, CA 95673' +
        '<br />' +
        '+44 345 678 903' +
        '<br />' +
        'adobexd@mail.com' +
    '</span>' +
    '<div class="social-media-icons-container">' +
        '<a href="https://www.facebook.com/upGradGlobal/" target="_blank"><img src="assets/images/logo-facebook.png" class="social-media-icons"/></a>' +
        '<a href="https://www.instagram.com/upgrad_edu/?hl=en" target="_blank"><img src="assets/images/logo-instagram.png" class="social-media-icons" /></a>' +
        '<a href="https://twitter.com/upGrad_edu" target="_blank"><img src="assets/images/logo-twitter.png" class="social-media-icons" /></a>' +
    '</div>' +
    '<a class="contact-us" onclick="openContactUsModal()"><span>Contact Us</span></a>' +
    '<div class="up-arrow-container">' +
        '<img src="assets/images/icon-arrow-up.png" class="up-arrow-icon" onclick="upArrowClick()"/>' +
    '</div>';

    document.getElementById('footer').innerHTML += footertemplate;
}
