document.addEventListener("DOMContentLoaded", function () {
    console.log("loaded up");
    add_hyperlink_to_id("gotogithub", "github.com/benlloyd50");
    add_hyperlink_to_id("gotolinkedin", "linkedin.com/in/benjamin-lloyd-927a46180/");
    add_hyperlink_to_id("gotoyoutube", "youtube.com/@Ben_Lloyd");

    add_anchorlink_to_id("gotoprojects", "#projects");
    add_anchorlink_to_id("gotoresume", "#resume");
    add_anchorlink_to_id("gotocontact", "#contact");

    add_hyperlink_to_id("p1", "github.com/benlloyd50/flask-realtime-chat");
    add_hyperlink_to_id("p2", "github.com/benlloyd50/textist");
    add_hyperlink_to_id("p3", "github.com/benlloyd50/BlackJack-v1");
    add_hyperlink_to_id("p4", "github.com/benlloyd50/comfort_rpg");
    add_hyperlink_to_id("p5", "github.com/benlloyd50/rust_rpg/");
    add_hyperlink_to_id("p6", "benlloyd50.itch.io/notanotherkittyplatformer");
    add_hyperlink_to_id("p7", "benlloyd50.itch.io/seed-up-a-fast-paced-farming-game");
});

function add_anchorlink_to_id(id, link) {
    const divElement = document.getElementById(id);

    divElement.addEventListener('click', function () {
        window.location.href = link;
    });
}

function add_hyperlink_to_id(id, link) {
    const divElement = document.getElementById(id);

    divElement.addEventListener('click', function () {
        window.location.href = 'https://' + link;
    });
}