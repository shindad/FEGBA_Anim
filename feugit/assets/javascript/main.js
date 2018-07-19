///GLOBAL VARIABLES///

//Global variables that control which toggled class categories load new html data from JS or not
var swordD = false, lanceD = false, axeD = false, bowD = false, cavD = false, flyD = false, lordD = false, mageD = false, monsterD = false, dancerD = false, spellD = false;

//Global Variables that control which classes load new html data from JS or not
var assD = false, heroD = false, mercD = false, myrmD = false, rogueD = false, swmD = false, thiefD = false;
var recD = false, solD = false, halD = false;


//Global Variable that contains the base pathway that all images follow
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

//Handles the final part of animation filler sections
function fillerTail(header, row, clArr, divIns) {
    var fRow = $("<div>");
    fRow.addClass("row centerText " + row);

    var headerDiv = $("<div>");
    headerDiv.html(header);
    headerDiv.addClass("col-12 centerText " + row);

    for (var i = 0; i < clArr.length; i++) {
        fRow.append(clArr[i].makeCard());
    };

    $(divIns).append(headerDiv, fRow);
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
        assMJSH = new Anim("Assassin Jaffar Shirt+Bow", assPath + "m_jaf_sh_b", "Assassin_Jaff_Shirt_Bow.7z"),
        assMJCSA = new Anim("Assassin Jaffar CSAFix+Bow", assPath + "m_jaf_csa_b", "Assassin_Jaff_CSAfix_Bow.7z"),
        assMJO = new Anim("Assassin Jojaffar", assPath + "m_jaf_jojo", "Assassin Jojaffar.7z"),
        assMJOG = new Anim("Assassin Jaffar Rip+Bow", assPath + "m_jaf_og_b", "Assassin_Jaff_Rip_Bow.7z"),
        assML = new Anim("Assassin Legault", assPath + "m_leg", "Assassin_Legault.7z"),
        assMMGT = new Anim("Assassin Matthew Greentea", assPath + "m_mat_gt", "Assassin_Matt_GRT.7z")
    ];

    fillerTail("Assassins", "assRow", assassins, "#swordFill");
};

function heroFiller() {
    var herPath = imgPath + "swords/hero/";

    var heroes = [
        heroFE = new Anim("Hero F Echidna", herPath + "f_echi", "Hero_F_Echidna.7z"),
        heroFA = new Anim("Hero F Alt", herPath + "f_jap_alt", "Hero_F_Alt.7z"),
        heroMA = new Anim("Hero M Coat", herPath + "m_arm", "Hero_M_Coat.7z"),
        heroML = new Anim("Hero M_Lance", herPath + "m_l", "Hero_M_Lance.7z")
    ];

    fillerTail("Heroes", "heroRow", heroes, "#swordFill");
};

function mercFiller() {
    var mercPath = imgPath + "swords/mercenary/";

    var mercenaries = [
        mercFEir = new Anim("Mercenary F Beta Eirika", mercPath + "f_be_eir", "Merc_F_Eir.7z"),
        mercFBEi = new Anim("Mercenary F TBA Dei", mercPath + "f_blindei", "Merc_F_TBADei.7z"),
        mercFRus = new Anim("Mercenary F Clark", mercPath + "f_russ", "Merc_F_Clark.7z"),
        mercMArm = new Anim("Mercenary M Armored Alusq", mercPath + "m_arm_al", "Merc_M_Arm.7z"),
        mercMEld = new Anim("Mercenary M Eldritch Pal", mercPath + "m_eld_pal", "Merc_M_Eld.7z"),
        mercMFE6 = new Anim("Mercenary M FE6", mercPath + "m_fe6", "Merc_M_FE6.7z"),
        mercMGrS = new Anim("Mercenary M Greatsword", mercPath + "m_gs", "Merc_M_GS.7z"),
        mercMPal = new Anim("Mercenary M Repalette", mercPath + "m_pal", "Merc_M_Pal.7z"),
        mercMPKA = new Anim("Mercenary M + PrKil Axe", mercPath + "m_pk_a", "Merc_M_Axe.7z"),
        mercMSqr = new Anim("Squire Mercenary Alt", mercPath + "m_sq", "Squire.7z")
    ];
    fillerTail("Mercenaries", "mercRow", mercenaries, "#swordFill");
};

function myrmFiller() {
    var myrmPath = imgPath + "swords/myrmidon/";

    var myrmidons = [
        myrmF = new Anim("Myrmidon F", myrmPath + "f", "Myrm_F.7z"),
        myrmFM = new Anim("Myrmidon F Lyn/Merc Max", myrmPath + "f_max", "Myrm_F_Max.7z"),
        myrmM = new Anim("Myrmidon M", myrmPath + "m", "Myrm_M.7z"),
        myrmGuy = new Anim("Myrmidon Guy", myrmPath + "m_guy", "Myrm_Guy.7z"),
        myrmMJk = new Anim("Myrmidon M Jacket", myrmPath + "m_jack", "Myrm_Jacket.7z"),
        myrmJosh = new Anim("Myrmidon Joshua", myrmPath + "m_joshua", "Myrm_Joshua.7z")
    ];
    fillerTail("Myrmidons", "myrmRow", myrmidons, "#swordFill");
};

function rogueFiller() {
    var roguePath = imgPath + "swords/rogue/";

    var rogues = [
        rogF = new Anim("Rogue F", roguePath + "f", "Rogue_F.7z"),
        rogFP = new Anim("Rogue F Ponytail", roguePath + "f_p", "Rogue_F_PT.7z"),
        rogM = new Anim("Rogue M + Staff", roguePath + "m_st", "Rogue_M_Staff.7z")
    ];
    fillerTail("Rogues", "rogueRow", rogues, "#swordFill");
};

function swMasterFiller() {
    var swdMPath = imgPath + "swords/swordmaster/";

    var swordmasters = [
        swmF = new Anim("Swordmaster F", swdMPath + "f", "SwM_F.7z"),
        swmF6 = new Anim("Swordmaster F FE6", swdMPath + "f_fe6", "SwM_F_FE6.7z"),
        swmFLH = new Anim("Swordmaster F Long Hair", swdMPath + "f_lh_cl", "SwM_F_LH.7z"),
        swmFSH = new Anim("Swordmaster F Short Hair", swdMPath + "f_sh_cl", "SwM_F_SH.7z"),
        swmM = new Anim("Swordmaster M", swdMPath + "m", "SwM_M.7z"),
        swmM6 = new Anim("Swordmaster M FE6", swdMPath + "m_fe6", "SwM_M_FE6.7z"),
        swmMX = new Anim("Swordmaster M FE10", swdMPath + "m_fex", "SwM_M_FEX.7z"),
        swmGy = new Anim("Swordmaster Guy", swdMPath + "m_guy", "SwM_Guy.7z"),
        swmGyE = new Anim("Swordmaster Guy Eldritch", swdMPath + "m_guy_eld", "SwM_Guy_Eldritch.7z"),
        swmJS0 = new Anim("Swordmaster Joshua SD", swdMPath + "m_js_halt", "SwM_Joshua_SD.7z"),
        swmJS1 = new Anim("Swordmaster Joshua", swdMPath + "m_js_hat", "SwM_Joshua.7z"),
        swmLL = new Anim("Swordmaster Lloyd", swdMPath + "m_ll", "SwM_Lloyd.7z"),
        swmLGT = new Anim("Swordmaster Lloyd GreenTea", swdMPath + "m_ll_gt", "SwM_Lloyd_GrT.7z"),
        swmTB = new Anim("TrueBlade M", swdMPath + "m_tb", "Trueblade.7z")
    ];
    fillerTail("Swordmasters", "swordMRow", swordmasters, "#swordFill");
};

function thiefFiller() {
    var thiefPath = imgPath + "swords/thief/";

    var thieves = [
        thF6 = new Anim("Thief Cath", thiefPath + "f_fe6", "Th_F_E6.7z"),
        thFL = new Anim("Thief Leila", thiefPath + "f_lei", "Th_F_Leila.7z"),
        thFP = new Anim("Thief F Ponytail", thiefPath + "f_p", "Th_F_Pony.7z"),
        thMM = new Anim("Thief Matthew", thiefPath + "m_at", "Th_M_Matthew.7z"),
        thMC = new Anim("Thief Chad", thiefPath + "m_chad", "Th_M_Chad.7z"),
        thML = new Anim("Thief Legault", thiefPath + "m_leg", "Th_Legault.7z"),
        thMDS = new Anim("Thief FEDS", thiefPath + "m_feds", "Th_M_FEDS.7z")
    ];
    fillerTail("Thieves", "thiefRow", thieves, "#swordFill");
};

//Lance Fillers

function recFiller() {
    var recPath = imgPath + "lances/recruit/";

    var recruits = [
        reF8 = new Anim("Recruit Amelia", recPath + "f", "Recruit_F.7z")
    ];
    fillerTail("Recruits", "recRow", recruits, "#lanceFill");
};

function soldFiller() {
    var soldPath = imgPath + "lances/soldier/";

    var soldiers = [
        solF = new Anim("Soldier F", soldPath + "f", "Soldier_F.7z"),
        solFU = new Anim("Soldier F Alusq", soldPath + "f_alu", "Soldier_F_Alusq.7z"),
        solFA = new Anim("Soldier Amelia", soldPath + "f_am", "Soldier_Amelia.7z"),
        solM = new Anim("Soldier M", soldPath + "m", "Soldier_M.7z"),
        solMU = new Anim("Soldier M Alusq", soldPath + "m_alu", "Soldier_M_Alusq.7z")
    ];
    fillerTail("Soldiers", "solRow", soldiers, "#lanceFill");
};

function halbFiller() {
    var halbPath = imgPath + "lances/halberdier/";

    var halberdiers = [
        halF2 = new Anim("Halberdier F v2", halbPath + "f_2", "Halb_F_v2.7z"),
        halM2 = new Anim("Halberdier M v2", halbPath + "m_2", "Halberdier_M_v2.7z"),
        halMB = new Anim("Halberdier M Bone", halbPath + "m_bone", "Halberdier_M_Bone.7z"),
        halMO = new Anim("Halberdier M Old", halbPath + "m_old", "Halberdier_M_Old.7z"),
        dragM = new Anim("Dragoon M", halbPath + "m_drag", "Dragoon.7z")
    ];
    fillerTail("Halberdiers", "halRow", halberdiers, "#lanceFill");
};

///END FUNCTIONS///

///EVENT LISTENERS///

//Major listener for values populated by category selection
$(".container").on("click", ".btn-light", function () {
    switch (this.getAttribute("data-prof")) {

        //Swords
        case "Assassin":
            $(".assRow").toggle();
            if (!assD) {
                assD = true;
                assfiller();
            };
            break;

        case "Hero":
            $(".heroRow").toggle();
            if (!heroD) {
                heroD = true;
                heroFiller();
            };
            break;

        case "Mercenary":
            $(".mercRow").toggle();
            if (!mercD) {
                mercD = true;
                mercFiller();
            };
            break;

        case "Myrmidon":
            $(".myrmRow").toggle();
            if (!myrmD) {
                myrmD = true;
                myrmFiller();
            };
            break;

        case "Rogue":
            $(".rogueRow").toggle();
            if (!rogueD) {
                rogueD = true;
                rogueFiller();
            };
            break;

        case "Swordmaster":
            $(".swordMRow").toggle();
            if (!swmD) {
                swmD = true;
                swMasterFiller();
            };
            break;

        case "Thief":
            $(".thiefRow").toggle();
            if (!thiefD) {
                thiefD = true;
                thiefFiller();
            };
            break;

        //Lances
        case "Recruit":
            $(".recRow").toggle();
            if (!recD) {
                recD = true;
                recFiller();
            };
            break;

        case "Soldier":
            $(".solRow").toggle();
            if (!solD) {
                solD = true;
                soldFiller();
            };
            break;

        case "Halberdier":
            $(".halRow").toggle();
            if (!halD) {
                halD = true;
                halbFiller();
            };
            break;

        //case
    };
});

$("")

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
                var swordOpts = ["Mercenary", "Hero", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Rogue"];
                animOptions(swordOpts, "Sword Infantry", "#swordFill");
            };
            break;

        case "lances":
            $("#lanceFill").toggle();
            if (!lanceD) {
                lanceD = true;
                var lanceOpts = ["Recruit", "Soldier", "Halberdier"];
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