
function showcontact(){
    $("#contact_container").css("display","inherit");
    var contactContainer = document.getElementById("contact_container");
    contactContainer.scrollIntoView({ behavior: 'smooth' });
}

function closecontact(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(function() {
        $("#contact_container").css("display", "none");
    }, 800); // Adjust the delay time as needed
}

const menu = document.getElementById('menu');

// Make the menu visible after a delay
setTimeout(function() {
    menu.style.opacity = 1;
}, 2000); // 2 seconds delay