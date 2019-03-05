// click event for gray button

// click event for white button

function switchGray() {
    // change background to gray
    // change font to white
    let switchGray = $("body");
    switchGray.css("background-color", "gray");
    switchGray.css("color","white");
}

function switchWhite() {
    // change background to white
    // change font to black
    let switchWhite = $("body");
    switchWhite.css("background-color", "white");
    switchWhite.css("color","black");

}


//event
$('#grayButton').on('click', switchGray);
$('#whiteButton').on('click', switchWhite);
