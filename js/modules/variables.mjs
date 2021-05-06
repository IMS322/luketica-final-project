// btn = button
var button = {
    btn1: document.getElementById("btn1"),
    btn2: document.getElementById("btn2"),
    btn3: document.getElementById("btn3"),
    btn4: document.getElementById("btn4"),
    btn5: document.getElementById("btn5"),
    btn6: document.getElementById("btn6"),
    btn7: document.getElementById("btn7"),
}

// ct = counter
var counter = {
    ct1: document.getElementById("ct1"),
    ct2: document.getElementById("ct2"),
    ct3: document.getElementById("ct3"),
    ct4: document.getElementById("ct4"),
    ct5: document.getElementById("ct5"),
    ct6: document.getElementById("ct6"),
    ct7: document.getElementById("ct7"),
}

// val = value
var value = {
    val1: 0,
    val2: 0,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
}

// lvl = level
var level = {

    lvlDocument: document.getElementById("level"),
    lvlAmount: 1,

    lvlButton: document.getElementById("levelButton"),
    lvlCost: document.getElementById("levelCost"),
    lvlCostAmount: 50,
}

var playerData = {
    save: document.getElementById("save"),
    load: document.getElementById("load"),
    reset: document.getElementById("reset"),
}

var clickers = {
    burger: {
        auto: document.getElementById("burgerAuto"),
        amount: document.getElementById("burgerAmount"),
        cost: document.getElementById("burgerCost"),
        ai: 0,
    },

    cook: {
        auto: document.getElementById("cookAuto"),
        amount: document.getElementById("cookAmount"),
        cost: document.getElementById("cookCost"),
        ai: 0,
    },

    manager: {
        auto: document.getElementById("managerAuto"),
        amount: document.getElementById("managerAmount"),
        cost: document.getElementById("managerCost"),
        ai: 0,
    },

    packer: {
        auto: document.getElementById("packerAuto"),
        amount: document.getElementById("packerAmount"),
        cost: document.getElementById("packerCost"),
        ai: 0,
    },

    butcher: {
        auto: document.getElementById("butcherAuto"),
        amount: document.getElementById("butcherAmount"),
        cost: document.getElementById("butcherCost"),
        ai: 0,
    },

    rancher: {
        auto: document.getElementById("rancherAuto"),
        amount: document.getElementById("rancherAmount"),
        cost: document.getElementById("rancherCost"),
        ai: 0,
    },

    scientist: {
        auto: document.getElementById("scientistAuto"),
        amount: document.getElementById("scientistAmount"),
        cost: document.getElementById("scientistCost"),
        ai: 0,
    },
}

var increases = {
    burger: {
        auto: document.getElementById("burgerClickAuto"),
        amount: document.getElementById("burgerClickAmount"),
        cost: document.getElementById("burgerClickCost"),
        perClick: 1,
    },

    cook: {
        auto: document.getElementById("cookClickAuto"),
        amount: document.getElementById("cookClickAmount"),
        cost: document.getElementById("cookClickCost"),
        perClick: 1,
    },

    manager: {
        auto: document.getElementById("managerClickAuto"),
        amount: document.getElementById("managerClickAmount"),
        cost: document.getElementById("managerClickCost"),
        perClick: 1,
    },

    packer: {
        auto: document.getElementById("packerClickAuto"),
        amount: document.getElementById("packerClickAmount"),
        cost: document.getElementById("packerClickCost"),
        perClick: 1,
    },

    butcher: {
        auto: document.getElementById("butcherClickAuto"),
        amount: document.getElementById("butcherClickAmount"),
        cost: document.getElementById("butcherClickCost"),
        perClick: 1,
    },

    rancher: {
        auto: document.getElementById("rancherClickAuto"),
        amount: document.getElementById("rancherClickAmount"),
        cost: document.getElementById("rancherClickCost"),
        perClick: 1,
    },

    scientist: {
        auto: document.getElementById("scientistClickAuto"),
        amount: document.getElementById("scientistClickAmount"),
        cost: document.getElementById("scientistClickCost"),
        perClick: 1,
    },
}

var achievements = {
    ach1: document.getElementById("achievement1"),
    ach2: document.getElementById("achievement2"),
    ach3: document.getElementById("achievement3"),
    ach4: document.getElementById("achievement4"),
    ach5: document.getElementById("achievement5"),
    ach6: document.getElementById("achievement6"),
    ach7: document.getElementById("achievement7"),
    ach8: document.getElementById("achievement8"),
    ach9: document.getElementById("achievement9"),
    ach10: document.getElementById("achievement10"),
    ach11: document.getElementById("achievement11"),

    achievementsRecieved: 0,
}
export {button, counter, value, level, playerData, clickers, increases, achievements}