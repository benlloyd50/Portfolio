document.addEventListener("DOMContentLoaded", function () {
    console.log("loaded up");
    add_hyperlink_to_id("gotogithub", "github.com/benlloyd50");
    add_hyperlink_to_id("gotolinkedin", "linkedin.com/in/benjamin-lloyd-927a46180/");
    add_hyperlink_to_id("gotoyoutube", "youtube.com/@Ben_Lloyd");
});


function add_hyperlink_to_id(id, link) {
    const divElement = document.getElementById(id);

    divElement.addEventListener('click', function () {
        window.location.href = 'https://' + link;
    });
}