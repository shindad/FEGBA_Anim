///GLOBAL VARIABLES///

//Global variables that control which toggled class categories load new html data from JS or not
var swordD = false, lanceD = false, axeD = false, bowD = false, cavD = false, flyD = false, lordD = false, mageD = false, monsterD = false, dancerD = false, spellD = false;

//Global Variables that control which classes load new html data from JS or not
var assD = false;

var imgPath = "feugit/assets/images/";

///END GLOBAL VARIABLES///

///CONSTRUCTORS///

//Creates an object of the class animation to be placed on the page
function Anim(feClass, URL, dlName) {
    this.feClass = feClass;
    this.URL = URL;
    this.dlName = dlName;
    this.makeCard = function () {
        var colDiv = $("<div>");
        colDiv.addClass("col-md-4 col-sm-6 col-12");

        var animImg = $("<img>");
        animImg.addClass("gif");
        animImg.attr({
            src: this.URL + ".png",
            "data-state": "still",
            "data-animate": this.URL + ".gif",
            "data-still": this.URL + ".png"
        });

        var animName = $("<a>");
        animName.addClass("animName");
        animName.html(this.feClass);
        animName.attr({
            href: this.URL + ".7z",
            download: this.dlName
        });

        colDiv.append(animImg, "<br>", animName);
        return colDiv;
    };
};

///CONSTRUCTORS///

///FUNCTIONS///

//Builds the images and downloader info for each animation
function makeCard(feClass, URL, dlName) {
    var colDiv = $("<div>");
    colDiv.addClass("col-md-4 col-sm-6 col-12");

    var animImg = $("<img>");
    animImg.addClass("gif");
    animImg.attr({
        src: URL + ".png",
        "data-state": "still",
        "data-animate": URL + ".gif",
        "data-still": URL + ".png"
    });

    var animName = $("<a>");
    animName.addClass("animName");
    animName.html(feClass);
    animName.attr({
        href: URL + ".7z",
        download: dlName
    });

    colDiv.append(animImg, "<br>", animName);
    return colDiv;
};

//When clicked, builds the Assassin gif section.
//The bottom half will be called with another function later as it is reusable.
function assfiller() {
    //initialize temporary path for calling all assassin animations
    var assPath = imgPath + "swords/assassin/";

    var assassins = [
        assFGT = new Anim("Assassin F GreenTea", assPath + "f_gt", "Assassin_F_GRT.7z"),
        assFHL = new Anim("Assassin F Hoodless Skirt", assPath + "f_hl_pony", "Assassin_F_Skirt.7z"),
        assPPY = new Anim("Assassin F Pants Ponytail", assPath + "f_pants_pony", "Assassin_F_Pants.7z"),
        assMHL = new Anim("Assassin M Hoodless+Bow", assPath + "m_hl_b", "Assassin_M_HL.7z"),
        assMJGT = new Anim("Assassin Jaffar Greentea", assPath + "m_jaf_gt", "Assassin_Jaff_GRT.7z"),
        assMJSH = new Anim("Assassin Jaffar Shirt+Bow", assPath + "m_jaf_sh_b", "Assassin_Jaff_Shirt_Bow.7z")
    ];

    var fRow = $("<div>");
    fRow.addClass("row assRow")

    for (var i = 0; i < assassins.length; i++) {
        fRow.append(assassins[i].makeCard());
    };

    $("#swordFill").append(fRow);
};

//Builds the list of clickable buttons made from clicking class types
function animOptions(classList, headerName, filledDiv) {

    //Most top-level div prior to inserting into an existing div
    var rowDiv = $("<div>");
    rowDiv.addClass("row");
    rowDiv.html(headerName);

    //Div that contains all the buttons
    var colDiv = $("<div>");
    colDiv.addClass("col-12");

    //Builds all the buttons in a loop based on number of classes in the category clicked
    for (var i = 0; i < classList.length; i++) {
        var nuButt = $("<button>");
        nuButt.addClass("btn btn-light m-1");
        nuButt.attr("type", "button");
        nuButt.attr("data-prof", classList[i]);
        nuButt.text(classList[i]);

        $(colDiv).append(nuButt);
    };

    $(rowDiv).append(colDiv);
    $(filledDiv).append(rowDiv);
};

///END FUNCTIONS///

///EVENT LISTENERS///

//Major listener for values populated by category selection
$(".container").on("click", ".btn-light", function () {
    switch (this.getAttribute("data-prof")) {
        case "Squire":
            break;
        case "Assassin":
            $(".assRow").toggle();
            if (!assD) {
                assD = true;
                assfiller();
            };
            break;
    };
});

//Animates the images when clicked
$(".container").on("click", ".gif", function () {
    var state = $(this).attr("data-state");

    //Check if gif is set to PNG. If set, run this. Sets to GIF.
    if (state === "still") {
        $(this).attr({
            "src": $(this).attr("data-animate"),
            "data-state": "animate"
        });

    //If the gif is currently looping, run this. Sets to PNG.
    } else {
        $(this).attr({
            "src": $(this).attr("data-still"),
            "data-state": "still"
        });
    };
});

//When a nav Link is clicked, toggle a section and load data if it hasn't yet been loaded.
$(".nav-link").click(function () {

    /*This wasn't broken into function calls because I didn't want
    the "[x]opts" arrays to be global variables.
    At a later point in time it may be useful to redo this section
    with calls to a function that performs the repeatable elements*/
    switch (this.id) {

        case "about":
            $("#aboutFill").toggle();
            break;

        //Each case is pulled from the id of each nav.
        case "swords":
            //The relevant DIV gets toggled to on when first clicked
            $("#swordFill").toggle();
            /*Checks if the JS to build the class list has been run or not
            by checking the global "[x]D" variable. This will always be boolean true
            following the initial load, preventing the placement of more buttons.*/
            if (!swordD) {
                swordD = true;
                var swordOpts = ["Squire", "Mercenary", "Hero", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Rogue"];
                animOptions(swordOpts, "Sword Infantry", "#swordFill");
            };
            break;

        case "lances":
            $("#lanceFill").toggle();
            if (!lanceD) {
                lanceD = true;
                var lanceOpts = ["Recruit", "Soldier", "Dragoon", "Halberdier"];
                animOptions(lanceOpts, "Lance Infantry", "#lanceFill");
            };
            break;

        case "axes":
            $("#axeFill").toggle();
            if (!axeD) {
                axeD = true;
                var axeOpts = ["Journeyman", "Brigand", "Mounted Brigand", "Pirate", "Berserker", "Fighter", "Warrior", "Phantom"];
                animOptions(axeOpts, "Axe Infantry", "#axeFill");
            };
            break;

        case "bows":
            $("#bowFill").toggle();
            if (!bowD) {
                bowD = true;
                var bowOpts = ["Archer", "Ballistae", "Lyn-Archer", "Nomad", "Nomad Trooper", "Ranger", "Sniper"];
                animOptions(bowOpts, "Bow Units", "#bowFill");
            };
            break;

        case "knights":
            $("#knightFill").toggle();
            if (!cavD) {
                cavD = true;
                var knightOpts = ["Knight", "General", "Great Knight", "Baron", "Emperor", "Black Knight", "Marshall", "Cavalier", "Paladin", "Grand Paladin", "Master Knight"];
                animOptions(knightOpts, "Knights and Cavalry", "#knightFill");
            };
            break;

        case "fliers":
            $("#flierFill").toggle();
            if (!flyD) {
                flyD = true;
                var flierOpts = ["Pegasus Knight", "Falcoknight", "Griffon Knight", "Wyvern Rider", "Wicked Wyvern", "Wyvern Lord", "Wyvern Knight"]
                animOptions(flierOpts, "Flying Units", "#flierFill");
            };
            break;

        case "lords":
            $("#lordFill").toggle();
            if (!lordD) {
                lordD = true;
                var lordOpts = ["Eirika Lord", "Eirika Great Lord", "Eliwood Lord", "Eliwood Knight Lord", "Ephraim Lord", "Ephraim Great Lord", "Fencer", "Greil Lord", "Harbinger", "Hector Lord", "Hector Great Lord", "Ike Ranger", "Ike Vanguard", "Karina Fencer", "Lyn Lord", "Lyn Blade Lord", "Mage Lord", "Marth", "Roy", "Squire", "King"]
                animOptions(lordOpts, "Lords", "#lordFill");
            };
            break;

        case "mages":
            $("#magicFill").toggle();
            if (!mageD) {
                mageD = true;
                var mageOpts = ["Pupil", "Mage", "Sage", "Mage Knight", "Archsage", "Brunnya Holy Sage", "High Magus", "Light Mage", "Monk", "Valkyrie", "Bishop", "Patriarch", "Shaman", "Druid", "Dark Knight", "Summoner", "Dark Druid", "Necromancer", "Troubadour", "Priest", "Cleric"]
                animOptions(mageOpts, "Magic Practicioners", "#magicFill");
            };
            break;

        case "monsters":
            $("#monsterFill").toggle();
            if (!monsterD) {
                monsterD = true;
                var monsterOpts = ["Dragon", "Manakete", "Ghost", "Bael", "Centaur", "Cyclops", "Gargoyle", "Mogall", "Gorgon", "Skeleton", "Zombie", "Succubus"]
                animOptions(monsterOpts, "Creatures, Monsters, Manaketes", "#monsterFill");
            };
            break;

        case "dancers":
            $("#dancerFill").toggle();
            if (!dancerD) {
                dancerD = true;
                var danceOpts = ["Bard", "Dancer", "Magic Seal", "Merlinus"]
                animOptions(danceOpts, "Bards, Dancers, Magic Seal, and Transporter", "#dancerFill");
            };
            break;

        case "spells":
            $("#spellFill").toggle();
            if (!spellD) {
                spellD = true;
                var spellOpts = ["Aircalibur", "Aqua", "Aqua Edge", "Arcthunder", "Artemis", "Aura", "Crimson Eye", "Donbettyr", "Bolganone"]
                animOptions(spellOpts, "Spells", "#spellFill");
            };
            break;
    };
});

///END EVENT LISTENERS///

///ON-LOAD ARGUMENTS///

$(document).ready(function () {
    //hide all the sections on load
    $(".category").hide();
});

///END///