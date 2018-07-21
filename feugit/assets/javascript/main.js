///GLOBAL VARIABLES///

//Global variables that control which toggled class categories load new html data from JS or not
var swordD = false, lanceD = false, axeD = false, bowD = false, cavD = false, flyD = false, lordD = false, mageD = false, monsterD = false, dancerD = false, spellD = false;

//Global Variables that control which classes load new html data from JS or not
var assD = false, heroD = false, mercD = false, myrmD = false, rogueD = false, swmD = false, thiefD = false;
var recD = false, solD = false, halD = false;
var bersD = false, brigD = false, fgtrD = false, journD = false, pirD = false, warD = false;
var archD = false, ballD = false, nomD = false, nomTD = false, ranD = false, snipD = false;

//Global Variable that contains the base pathway that all images follow
var imgPath = "feugit/assets/images/";

///END GLOBAL VARIABLES///

///CONSTRUCTORS///

//Creates an object of the class animation to be placed on the page
//weapons needs to be sent in as an array
function Anim(feClass, URL, dlName, weapons, source) {
    this.feClass = feClass;
    this.URL = URL;
    this.dlName = dlName;
    this.makeCard = function () {
        var colDiv = $("<div>");
        colDiv.addClass("col-md-4 col-sm-6 col-12 my-2");

        //All Image data
        var animImg = $("<img>");
        animImg.addClass("gif col-12");
        animImg.attr({
            src: this.URL + ".png",
            "data-state": "still",
            "data-animate": this.URL + ".gif",
            "data-still": this.URL + ".png"
        });

        var midRow = $("<div>");
        midRow.addClass("col-12")

        //Link and name of animation
        var animName = $("<a>");
        animName.addClass("animName centerText");
        animName.html(this.feClass);
        animName.attr({
            href: this.URL + ".7z",
            download: this.dlName
        });
    
        var botRow = $("<div>");
        botRow.addClass("col-12 botRow");

        //insert weapon icons
        var icons = $("<span>");
        icons.addClass("iconmt")
        if (weapons) {
            for (var i = 0; i < weapons.length; i++) {
                var icon = $("<img>");
                icon.attr("src", imgPath + "global/" + weapons[i] + ".gif");
                icon.addClass("imgIcon mt-0");
                icons.append(icon);
            };
        };

        //Author
        var authDiv = $("<span>");
        authDiv.html(source);
        authDiv.addClass("authorText centerText");

        //Holds mid and botrow for uniform bg.
        var textSect = $("<div>");
        textSect.addClass("cardbg")

        midRow.append(animName)
        botRow.append(icons, authDiv);

        textSect.append(midRow, botRow);

        //All together
        colDiv.append(animImg, textSect);
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
        assFGT = new Anim("Assassin F", assPath + "f_gt", "Assassin_F_GRT.7z", ['sword'], "Greentea, DerTheVaporeon"),
        assFHL = new Anim("Assassin F Hoodless Skirt", assPath + "f_hl_pony", "Assassin_F_Skirt.7z", ["sword"], "Moocavo, Riku"),
        assPPY = new Anim("Assassin F Pants Ponytail", assPath + "f_pants_pony", "Assassin_F_Pants.7z", ["Sword"], "Keks_Krebs"),
        assMHL = new Anim("Assassin M Hoodless", assPath + "m_hl_b", "Assassin_M_HL.7z", ["sword", "bow"], "Keks_Krebs, Peerless"),
        assMJGT = new Anim("Assassin Jaffar", assPath + "m_jaf_gt", "Assassin_Jaff_GRT.7z", ["sword"], "Greentea, Nuramon"),
        assMJSH = new Anim("Assassin Jaffar Shirt", assPath + "m_jaf_sh_b", "Assassin_Jaff_Shirt_Bow.7z", ["sword", "bow"]),
        assMJCSA = new Anim("Assassin Jaffar CSAFix", assPath + "m_jaf_csa_b", "Assassin_Jaff_CSAfix_Bow.7z", ["sword", "bow"], "SD9k"),
        assMJO = new Anim("Assassin Jojaffar", assPath + "m_jaf_jojo", "Assassin Jojaffar.7z", ["sword", "bow"], "DerTheVaporeon, SD9k"),
        assMJOG = new Anim("Assassin Jaffar Rip", assPath + "m_jaf_og_b", "Assassin_Jaff_Rip_Bow.7z", ["sword", "bow"], "IS, SD9k"),
        assML = new Anim("Assassin Legault", assPath + "m_leg", "Assassin_Legault.7z", ["sword"], "IS"),
        assMMGT = new Anim("Assassin Matthew", assPath + "m_mat_gt", "Assassin_Matt_GRT.7z", ["sword"], "Greentea, Pikmin")
    ];

    fillerTail("Assassins", "assRow", assassins, "#swordFill");
};

function heroFiller() {
    var herPath = imgPath + "swords/hero/";

    var heroes = [
        heroFE = new Anim("Hero F FE6", herPath + "f_echi", "Hero_F_Echidna.7z", ["sword", "axe"], "IS"),
        heroFA = new Anim("Hero F Alt", herPath + "f_jap_alt", "Hero_F_Alt.7z", ["sword", "axe"], "St jack"),
        heroMA = new Anim("Hero M Armor", herPath + "m_arm", "Hero_M_Armor.7z", ["sword", "axe"]),
        heroMC = new Anim("Hero M Coat", herPath + "m_coat", "Hero_M_Coat.7z", ["sword", "axe"], "IS"),
        heroML = new Anim("Hero M", herPath + "m_l", "Hero_M_Lance.7z", ["sword", "lance", "axe"], "IS, Pushwall")
    ];

    fillerTail("Heroes", "heroRow", heroes, "#swordFill");
};

function mercFiller() {
    var mercPath = imgPath + "swords/mercenary/";

    var mercenaries = [
        mercFEir = new Anim("Mercenary F Beta Eirika", mercPath + "f_be_eir", "Merc_F_Eir.7z", ["sword"], "Eldritch Abomination"),
        mercFBEi = new Anim("Mercenary F", mercPath + "f_blindei", "Merc_F_TBADei.7z", ["sword"], "TheBlindArcher, Dei"),
        mercFRus = new Anim("Mercenary F Thin", mercPath + "f_russ", "Merc_F_Clark.7z", ["sword"], "Russel Clark"),
        mercMArm = new Anim("Mercenary M Armored", mercPath + "m_arm_al", "Merc_M_Arm.7z", ["sword"], "Alusq"),
        mercMEld = new Anim("Mercenary M Repalette", mercPath + "m_eld_pal", "Merc_M_Eld.7z", ["sword"], "Eldritch Abomination"),
        mercMFE6 = new Anim("Mercenary M FE6", mercPath + "m_fe6", "Merc_M_FE6.7z", ["sword"], "IS"),
        mercMGrS = new Anim("Mercenary M Greatsword", mercPath + "m_gs", "Merc_M_GS.7z", ["sword"], "SD9k"),
        mercMPal = new Anim("Mercenary M Repalette", mercPath + "m_pal", "Merc_M_Pal.7z", ["sword"]),
        mercMPKA = new Anim("Mercenary M", mercPath + "m_pk_a", "Merc_M_Axe.7z", ["sword", "axe"], "IS, Princess Kilvas"),
        mercMSqr = new Anim("Squire M", mercPath + "m_sq", "Squire.7z", ["sword"], "Russel Clark, A Random Player, Kobazco")
    ];
    fillerTail("Mercenaries", "mercRow", mercenaries, "#swordFill");
};

function myrmFiller() {
    var myrmPath = imgPath + "swords/myrmidon/";

    var myrmidons = [
        myrmF = new Anim("Myrmidon F", myrmPath + "f", "Myrm_F.7z", ["sword"], "IS"),
        myrmFM = new Anim("Myrmidon F Lyn/Merc", myrmPath + "f_max", "Myrm_F_Max.7z", ["sword"], "Max"),
        myrmM = new Anim("Myrmidon M", myrmPath + "m", "Myrm_M.7z", ["sword"], "IS"),
        myrmGuy = new Anim("Myrmidon Guy", myrmPath + "m_guy", "Myrm_Guy.7z", ["sword"], "IS"),
        myrmMJk = new Anim("Myrmidon M Jacket", myrmPath + "m_jack", "Myrm_Jacket.7z", ["sword"], "Juby, Fuzz94, Pikimin"),
        myrmJosh = new Anim("Myrmidon Joshua", myrmPath + "m_joshua", "Myrm_Joshua.7z", ["sword"], "SD9K")
    ];
    fillerTail("Myrmidons", "myrmRow", myrmidons, "#swordFill");
};

function rogueFiller() {
    var roguePath = imgPath + "swords/rogue/";

    var rogues = [
        rogF = new Anim("Rogue F", roguePath + "f", "Rogue_F.7z", ["sword"], "eCut, Skitty"),
        rogFP = new Anim("Rogue F Ponytail", roguePath + "f_p", "Rogue_F_PT.7z", ["sword"], "TempMael"),
        rogM = new Anim("Rogue M", roguePath + "m_st", "Rogue_M_Staff.7z", ["sword", "staff"], "IS, ukulelej"),
        rogMP = new Anim("Rogue M Repalette", roguePath + "m_p", "Rogue_M_Repal.7z", ["sword"], "Feaw")
    ];
    fillerTail("Rogues", "rogueRow", rogues, "#swordFill");
};

function swMasterFiller() {
    var swdMPath = imgPath + "swords/swordmaster/";

    var swordmasters = [
        swmF = new Anim("Swordmaster F", swdMPath + "f", "SwM_F.7z", ["sword"], "IS"),
        swmF6 = new Anim("Swordmaster F FE6", swdMPath + "f_fe6", "SwM_F_FE6.7z", ["sword"], "IS"),
        swmFLH = new Anim("Swordmaster F Long Hair", swdMPath + "f_lh_cl", "SwM_F_LH.7z", ["sword"], "Russel Clark"),
        swmFSH = new Anim("Swordmaster F Short Hair", swdMPath + "f_sh_cl", "SwM_F_SH.7z", ["sword"], "Russell Clark"),
        swmM = new Anim("Swordmaster M", swdMPath + "m", "SwM_M.7z", ["sword"], "IS"),
        swmM6 = new Anim("Swordmaster M FE6", swdMPath + "m_fe6", "SwM_M_FE6.7z", ["sword"], "IS"),
        swmMX = new Anim("Swordmaster M FE10", swdMPath + "m_fex", "SwM_M_FEX.7z", ["sword"], "The Blind Archer"),
        swmGy = new Anim("Swordmaster Guy", swdMPath + "m_guy", "SwM_Guy.7z", ["sword"], "IS"),
        swmGyE = new Anim("Swordmaster Guy Alt", swdMPath + "m_guy_eld", "SwM_Guy_Eldritch.7z", ["sword"], "Eldritch Abomination"),
        swmJS0 = new Anim("Swordmaster Joshua", swdMPath + "m_js_halt", "SwM_Joshua_SD.7z", ["sword"], "SD9K"),
        swmJS1 = new Anim("Swordmaster Joshua", swdMPath + "m_js_hat", "SwM_Joshua.7z", ["sword"], "SD9K"),
        swmLL = new Anim("Swordmaster Lloyd", swdMPath + "m_ll", "SwM_Lloyd.7z", ["sword"], "IS, Glenn"),
        swmLGT = new Anim("Swordmaster Lloyd Alt", swdMPath + "m_ll_gt", "SwM_Lloyd_GrT.7z", ["sword"], "Greentea, DerTheVaporeon"),
        swmTB = new Anim("TrueBlade M", swdMPath + "m_tb", "Trueblade.7z", ["sword"], "Cybaster")
    ];
    fillerTail("Swordmasters", "swordMRow", swordmasters, "#swordFill");
};

function thiefFiller() {
    var thiefPath = imgPath + "swords/thief/";

    var thieves = [
        thF6 = new Anim("Thief Cath", thiefPath + "f_fe6", "Th_F_E6.7z", ["sword"], "IS"),
        thFP = new Anim("Thief Cath Repalette", thiefPath + "f_p", "Th_F_Pony.7z", ["sword"], "Eldritch Abomination"),
        thFL = new Anim("Thief Leila", thiefPath + "f_lei", "Th_F_Leila.7z", ["sword"], "IS"),
        thMM = new Anim("Thief Matthew", thiefPath + "m_at", "Th_M_Matthew.7z", ["sword"], "IS"),
        thMC = new Anim("Thief Chad", thiefPath + "m_chad", "Th_M_Chad.7z", ["sword"], "IS"),
        thML = new Anim("Thief Legault", thiefPath + "m_leg", "Th_Legault.7z", ["sword"], "IS"),
        thMDS = new Anim("Thief FEDS", thiefPath + "m_feds", "Th_M_FEDS.7z", ["sword"], "DerTheVaporeon")
    ];
    fillerTail("Thieves", "thiefRow", thieves, "#swordFill");
};

//Lance Fillers

function recFiller() {
    var recPath = imgPath + "lances/recruit/";

    var recruits = [
        reF8 = new Anim("Recruit Amelia", recPath + "f", "Recruit_F.7z", ["lance"], "IS")
    ];
    fillerTail("Recruits", "recRow", recruits, "#lanceFill");
};

function soldFiller() {
    var soldPath = imgPath + "lances/soldier/";

    var soldiers = [
        solF = new Anim("Soldier F", soldPath + "f", "Soldier_F.7z", ["lance"], "Dr0zz"),
        solFU = new Anim("Soldier F", soldPath + "f_alu", "Soldier_F_Alusq.7z", ["lance"], "Alusq"),
        solFA = new Anim("Soldier Amelia", soldPath + "f_am", "Soldier_Amelia.7z", ["lance"], "Spud"),
        solM = new Anim("Soldier M", soldPath + "m", "Soldier_M.7z", ["lance"], "IS"),
        solMU = new Anim("Soldier M", soldPath + "m_alu", "Soldier_M_Alusq.7z", ["lance"], "Alusq")
    ];
    fillerTail("Soldiers", "solRow", soldiers, "#lanceFill");
};

function halbFiller() {
    var halbPath = imgPath + "lances/halberdier/";

    var halberdiers = [
        halF2 = new Anim("Halberdier F v2", halbPath + "f_2", "Halb_F_v2.7z", ["lance"], "The Blind Archer"),
        halM2 = new Anim("Halberdier M v2", halbPath + "m_2", "Halb_M_v2.7z", ["lance"], "The Blind Archer"),
        halMB = new Anim("Halberdier M", halbPath + "m_bone", "Halb_M_Bone.7z", ["lance"], "Bonestorm"),
        halMO = new Anim("Halberdier M", halbPath + "m_old", "Halb_M_Old.7z", ["lance"], "The Blind Archer"),
        dragM = new Anim("Dragoon M", halbPath + "m_drag", "Dragoon.7z", ["lance"], "Mercenary Lord")
    ];
    fillerTail("Halberdiers", "halRow", halberdiers, "#lanceFill");
};

function bersFiller() {
    var bersPath = imgPath + "axes/berserker/";

    var berserkers = [
        beFSK = new Anim("Berserker F", bersPath + "f_skit_e", "Bers_F_Skitty.7z", ["axe"], "eCut, Skitty"),
        bersk = new Anim('Berserker M', bersPath + 'm', 'Bers_M.7z', ["axe"], "IS"),
        beSwd = new Anim('Berserker M', bersPath + 'm_sw', 'Bers_Swd.7z', ["sword"], "Assassin Leila"),
        beDar = new Anim("Berserker Dart", bersPath + "m_dart", "Bers_Dart.7z", ["axe"], "Greentea, DerTheVaporeon"),
        beHKY = new Anim("Berserker Hawkeye", bersPath + "m_hk", "Bers_Hawkeye.7z", ["axe"], "IS"),
        beHKZ = new Anim("Berserker M Hawkzerker", bersPath + "m_hz", "Bers_M_HZ.7z", ["axe"], "The Blind Archer"),
        bePal = new Anim("Berserker Repalette", bersPath + "m_pal", "Bers_M_Pal.7z", ["axe"], "Blue Druid"),
        beYet = new Anim('Berserker M Yeti', bersPath + 'm_yeti', 'Bers_Yeti.7z', ["axe"], "BwdYeti, Shadow of Chaos"),
        beBrg = new Anim("Mounted Brigand M", bersPath + "m_brig_bow", "Mtd_Brig_M.7z", ["axe", "bow"], "Spud")
    ];
    fillerTail("Berserkers", "bersRow", berserkers, "#axeFill");
};

function brigFiller() {
    var brigPath = imgPath + "axes/brigand/";

    var brigands = [
        brigF = new Anim("Brigand F", brigPath + "f", "Brig_F.7z", ["axe"], "eCut, Skitty"),
        brgMA = new Anim("Brigand M Armored", brigPath + "m_arm", "Brig_M_Armored.7z", ["axe"], "The Blind Archer"),
        brgME = new Anim("Brigand M Hairy", brigPath + "m_eld", "Brig_M_Eld.7z", ["axe"], "Eldritch Abomination"),
        brgMM = new Anim("Brigand M", brigPath + "m_mag", "Brig_M_Magic.7z", ["axe", "light", "dark", "fire"], "IS, Blue Druid")
    ];
    fillerTail("Brigands", "brigRow", brigands, "#axeFill");
};

function fgtrFiller() {
    var fgtrPath = imgPath + "axes/fighter/";

    var fighters = [
        ftFLH = new Anim("Fighter F Long Hair", fgtrPath + "f_lh_bm", "Fighter_F_LH.7z", ["axe"], "Black Mage, Temp, Eliwan"),
        ftFSH = new Anim("Fighter F Short Hair", fgtrPath + "f_sh_bm", "Fighter_F_SH.7z", ["axe"], "Black Mage, Temp, Eliwan"),
        ftMe9 = new Anim("Fighter M FE10", fgtrPath + "m_fe9", "Fighter_M_FE9.7z", ["axe"], "Mageknight404"),
        ftM9P = new Anim("Fighter M FE10 Palette Fix", fgtrPath + "m_fe9p", "Fighter_M_FE9P.7z", ["axe"], "Mageknight404, Glenwing"),
        ftMer = new Anim("Fighter M Merc", fgtrPath + "m_merc", "Fighter_M_Merc.7z", ["axe"], "Maiser6"),
        ftSwd = new Anim("Fighter M", fgtrPath + "m_sw", "Fighter_M_Sw.7z", ["axe", "sword"], "IS, Vilk")
    ];
    fillerTail("Fighters", "fgtrRow", fighters, "#axeFill");
};

function journeyFiller() {
    var jPath = imgPath + "axes/journeyman/";

    var jmen = [
        jman = new Anim("Journeyman M", jPath + "m", "Journeyman.7z", ["axe"], "IS")
    ];
    fillerTail("Journeymen", "journeyRow", jmen, "#axeFill");
};

function pirateFiller() {
    var pPath = imgPath + "axes/pirate/";

    var pirates = [
        pim = new Anim("Pirate M", pPath + "m", "Pirate.7z", ["axe"], "IS"),
        pimp = new Anim("Pirate M Repalette", pPath + "m_p", "Pirate_Pal.7z", ["axe"], "Skitty"),
        pimpw = new Anim("Pirate M Repalette", pPath + "m_pwan", "Pirate_PWAN.7z", ["axe"], "Eliwan"),
        pimSw = new Anim("Pirate M", pPath + "m_sw", "Pirate_Sw.7z", ["sword"], "Pimpstick")
    ];
    fillerTail("Pirates", "pirRow", pirates, "#axeFill");
};

function warFiller() {
    var wPath = imgPath + "axes/warrior/";

    var warriors = [
        warF = new Anim("Warrior F", wPath + "f_t", "Warrior_F.7z", ["axe", "bow"], "TempMael"),
        warM = new Anim("Warrior M", wPath + "m", "Warrior.7z", ["axe", "bow"], "IS")
    ];
    fillerTail("Warriors", "warRow", warriors, "#axeFill");
};

//Bows

function archerFiller() {
    var archPath = imgPath + "bows/archer/";

    var archers = [
        arcFe6 = new Anim("Archer F FE6", archPath + "f_e6", "Archer_F_FE6.7z", ["bow"], "IS"),
        ArcFOG = new Anim("Archer F", archPath + "f", "Archer_F.7z", ["bow"], "IS"),
        arcFNe = new Anim("Archer Neimi", archPath + "f_nei", "Archer_Neimi.7z", ["bow"], "Feaw"),
        arcFRe = new Anim("Archer Rebecca", archPath + "f_reb", "Archer_Rebecca.7z", ["bow"], "IS"),
        arcFSk = new Anim("Archer F Skirt", archPath + "f_skt", "Archer_F_Skirt.7z", ["bow"], "George Reds"),
        ArcMOG = new Anim("Archer M", archPath + "m", "Archer_M.7z", ["bow"], "IS"),
        arcMCa = new Anim("Archer M Cape", archPath + "m_cape", "Archer_M_Cape.7z", ["bow"], "Yangfly Master"),
        arcMe5 = new Anim("Archer M FE5", archPath + "m_fe5", "Archer_M_FE5.7z", ["bow"], "Pushwall"),
        arcMe6 = new Anim('Archer M FE6', archPath + 'm_fe6', 'Archer_M_FE6.7z', ["bow"], "IS")
    ];
    fillerTail("Archers", "archRow", archers, "#bowFill");
};

function ballFiller() {
    var ballPath = imgPath + "bows/ballistae/";

    var ballistae = [
        BF_Lo = new Anim("Ballista Louise", ballPath + "f_l", "Ballista_Louise.7z", ["bow"], "St Jack"),
        BF_LH = new Anim("Ballista F Long-Hair", ballPath + "f_lh", "Ballista_F_LH.7z", ["bow"], "IS"),
        BF_Re = new Anim("Ballista Rebecca", ballPath + "f_r", "Ballista_Rebecca.7z", ["bow"], "St Jack"),
        BM_Wi = new Anim("Ballista Wil", ballPath + "m_w", "Ballista_Wil.7z", ["bow"], "Greentea, qiuzf007"),
        BM_WoA = new Anim("Ballista Wolt Armored", ballPath + "m_wo_arm", "Ballista_Wolt_Arm.7z", ["bow"], "St Jack"),
        BM_Wo = new Anim("Ballista Wolt", ballPath + "m_wo", "Ballista_Wolt.7z", ["bow"], "IS")
    ];
    fillerTail("Ballistae", "ballRow", ballistae, "#bowFill");
};

function nomFiller() {
    var nomPath = imgPath + "bows/nomad/";

    var nomads = [
        nomF = new Anim("Nomad F", nomPath + "f", "Nomad_F.7z", ["bow"], "IS"),
        nomM = new Anim("Nomad M", nomPath + "m", "Nomad_M.7z", ["bow"], "IS"),
        nomMg = new Anim("Nomad M Generic", nomPath + "m_gen", "Nomad_M_Gen.7z", ["bow"], "eCut")
    ];
    fillerTail("Nomads", "nomRow", nomads, "#bowFill");
};

function nomTFiller() {
    var nomTPath = imgPath + "bows/nomad_trooper/";

    var nom_troopers = [
        ntFOG = new Anim("Nmd Trooper F", nomTPath + "f", "Nmd_Tpr_F.7z", ["bow", "sword"], "IS"),
        ntFFx = new Anim("Nmd Trooper F Fix", nomTPath + "f_fix", "Nmd_Tpr_F_Fix.7z", ["bow", "sword"]),
        ntMF6 = new Anim("Nmd Trooper M FE6", nomTPath + "m_e6", "Nmd_Tpr_M_FE6.7z", ["bow", "sword"], "IS"),
        ntMOG = new Anim("Nmd Trooper M", nomTPath + "m", "Nmd_Tpr_M.7z", ["bow", "sword"], "IS"),
        NtMFx = new Anim("Nmd Trooper M BowFix", nomTPath + "m_fix_b", "Nmd_Tpr_M_BowFix.7z", ["bow"])
    ];
    fillerTail("Nomad Troopers", "nomTRow", nom_troopers, "#bowFill");
};

function rangerFiller() {
    var ranPath = imgPath + "bows/ranger/";

    var rangers = [
        ranFL = new Anim("Ranger F + Lance", ranPath + "f_l", "Ranger_F_Lnc.7z", ["bow", "sword", "lance"]),
        ranFR = new Anim("Ranger Rebecca", ranPath + "f_reb", "Ranger_Rebecca.7z", ["bow", "sword"], "Teraspark"),
        ranFT = new Anim("Ranger F Twintails", ranPath + "f_tt", "Ranger_F_TT.7z", ["bow", "sword"], "GoofyfanG56"),
        ranML = new Anim("Ranger M + Lance", ranPath + "m_l", "Ranger_M_Lnc.7z", ["bow", "sword", "lance"], "Skitty, Feaw")
    ];
    fillerTail("Ranger", "rangRow", rangers, "#bowFill");
};

function sniperFiller() {
    var snipPath = imgPath + "bows/sniper/";

    var snipers = [
        sniF6 = new Anim("Sniper F FE6", snipPath + "f_e6", "Sniper_F_FE6.7z", ["bow"], "IS"),
        sniF = new Anim("Sniper F", snipPath + "f", "Sniper_F.7z", ["bow"], "IS"),
        sniFQ = new Anim("Sniper F Quiver", snipPath + "f_quiv_reb", "Sniper_F_Quiv.7z", ["bow"], "Nuramon"),
        sniFQR = new Anim("Sniper Rebecca Quiver", snipPath + "f_quiv_reb", "Sniper_Reb_Quiv.7z", ["bow"], "Nuramon, Temp"),
        sniFR = new Anim("Sniper Rebecca", snipPath + "f_reb", "Sniper_Rebecca.7z", ["bow"], "Temp, Wan"),
        huntM = new Anim("Hunter M", snipPath + "hunt", "Hunter.7z", ["bow"], "Deranger"),
        sniM6 = new Anim("Sniper M FE6", snipPath + "m_e6", "Sniper_M_FE6.7z", ["bow"], "IS"),
        sniM = new Anim("Sniper M", snipPath + "m", "Sniper_M.7z", ["bow"], "IS"),
        sniMH = new Anim("Sniper M Hat", snipPath + "m_hat", "Sniper_M_Hat.7z", ["bow"], "Swain"),
        sniMQG = new Anim("Sniper M Generic + Quiver Nuramon", snipPath + "m_quiv_gen", "Sniper_M_Quiv_Gen.7z", ["bow"], "Nuramon, Swain"),
        sniMQ = new Anim("Sniper M Quiver Nuramon", snipPath + "m_quiv", "Sniper_M_Quiv.7z", ["bow"], "Nuramon"),
        sniMWi = new Anim("Sniper Wil", snipPath + "m_wil", "Sniper_M_Wil.7z", ["bow"], "Greentea, DerTheVaporeon")
    ];
    fillerTail("Sniper", "snipRow", snipers, "#bowFill");
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

        //Axes
        case "Berserker":
            $(".bersRow").toggle();
            if (!bersD) {
                bersD = true;
                bersFiller();
            };
            break;

        case "Brigand":
            $(".brigRow").toggle();
            if (!brigD) {
                brigD = true;
                brigFiller();
            }
            break;
        
        case "Fighter":
            $(".fgtrRow").toggle();
            if (!fgtrD) {
                fgtrD = true;
                fgtrFiller();
            };
            break;
        
        case "Journeyman":
            $(".journeyRow").toggle();
            if (!journD) {
                journD = true;
                journeyFiller();
            };
            break;

        case "Pirate":
            $(".pirRow").toggle();
            if (!pirD) {
                pirD = true;
                pirateFiller();
            };
            break;
        
        case "Warrior":
            $(".warRow").toggle();
            if (!warD) {
                warD = true;
                warFiller();
            };
            break;

        //Bows
        case "Archer":
            $(".archRow").toggle();
            if (!archD) {
                archD = true;
                archerFiller();
            };
            break;
        
        case "Ballistae":
            $(".ballRow").toggle();
            if (!ballD) {
                ballD = true;
                ballFiller();
            };
            break;

        case "Nomad":
            $(".nomRow").toggle();
            if (!nomD) {
                nomD = true;
                nomFiller();
            };
            break;

        case "Nomad Trooper":
            $(".nomTRow").toggle();
            if (!nomTD) {
                nomTD = true;
                nomTFiller();
            };
            break;

        case "Ranger":
            $(".rangRow").toggle();
            if (!ranD) {
                ranD = true;
                rangerFiller();
            };
            break;

        case "Sniper":
            $(".snipRow").toggle();
            if (!snipD) {
                snipD = true;
                sniperFiller();
            };
            break;

        //next
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
                var axeOpts = ["Journeyman", "Brigand", "Pirate", "Berserker", "Fighter", "Warrior"];
                animOptions(axeOpts, "Axe Infantry", "#axeFill");
            };
            break;

        case "bows":
            $("#bowFill").toggle();
            if (!bowD) {
                bowD = true;
                var bowOpts = ["Archer", "Ballistae", "Nomad", "Nomad Trooper", "Ranger", "Sniper"];
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