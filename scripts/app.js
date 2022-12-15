
// For smooth page transitions.

function slide(direction) {

    const pages = document.querySelectorAll(".page");
    const xSpacing = 100;
    let timestamp = 1;
    let xPosition = (direction === "leave" ? -1 : 0);

    function move() {
        pages.forEach(
            pages => (pages.style.transform = `translateX(${xPosition * timestamp}%)`)
        )
        timestamp += 1;
        if (timestamp <= xSpacing) {
            window.requestAnimationFrame(move)
        }
    }

    window.requestAnimationFrame(move);

    if (direction === "home")
        setTimeout(() => window.history.go(-1), 1000);
}


// For tabs that can be opened and closed.

function setButtons(flipName, panelName, bars, buttons) {

    for (let i = 0; i < buttons; i++) {
        bars[i] = [`#${flipName}${i+1}`, `#${panelName}${i+1}`];
        $(`#${panelName}${i+1}`).hide();
    }

    bars.forEach(bar => {
        $(bar[0]).click(() =>
            $(bar[1]).slideToggle("slow")
        );
    })
}

$(document).ready(function(){

    let bars1 = [];
    const buttons1 = 16;

    let bars2 = [];
    const buttons2 = 10;

    let bars3 = [];
    const buttons3 = 10;

    let bars4 = [];
    const buttons4 = 1;

    let bars5 = [];
    const buttons5 = 1;

    let bars6 = [];
    const buttons6 = 1;

    let bars7 = [];
    const buttons7 = 1;

    let bars8 = [];
    const buttons8 = 1;

    let bars9 = [];
    const buttons9 = 1;

    setButtons("flip", "panel", bars1, buttons1);
    setButtons("flipSL", "panelSL", bars2, buttons2);
    setButtons("flipL", "panelL", bars3, buttons3);

    setButtons("otherflipSL", "otherpanel", bars4, buttons4);
    setButtons("otherflipSL", "otherpanelSL", bars5, buttons5);
    setButtons("otherflipSL", "otherpanelSLCopy", bars6, buttons6);
    setButtons("otherflipSL", "otherpanelSLOtherCopy", bars7, buttons7);
    setButtons("otherflipSL", "otherpanelL", bars8, buttons8);

    setButtons("flipSL", "panelL", bars9, buttons9);

});


// Control menu for smartphone-sized screens.

function openMenu() {
    window.scrollTo(0, 0);
    $("#menubarButton").hide();
    $("#menubar").show();
}

function closeMenu() {
    window.history.go();
}
