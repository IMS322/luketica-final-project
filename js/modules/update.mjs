import { counter, value, level, clickers, increases, achievements } from './variables.mjs'

export function update(){
    //Counter Values
    counter.ct1.value = value.val1
    counter.ct2.value = value.val2
    counter.ct3.value = value.val3
    counter.ct4.value = value.val4
    counter.ct5.value = value.val5
    counter.ct6.value = value.val6
    counter.ct7.value = value.val7

    //Level
    level.lvlDocument.innerHTML = level.lvlAmount
    level.lvlCost.innerHTML = level.lvlCostAmount

    //Auto Clickers
    clickers.burger.amount.innerHTML = clickers.burger.ai
    clickers.burger.cost.innerHTML = (clickers.burger.ai + 1) * 6

    clickers.cook.amount.innerHTML = clickers.cook.ai
    clickers.cook.cost.innerHTML = (clickers.cook.ai + 2) * 6

    clickers.manager.amount.innerHTML = clickers.manager.ai
    clickers.manager.cost.innerHTML = (clickers.manager.ai + 3) * 6

    clickers.packer.amount.innerHTML = clickers.packer.ai
    clickers.packer.cost.innerHTML = (clickers.packer.ai + 4) * 6

    clickers.butcher.amount.innerHTML = clickers.butcher.ai
    clickers.butcher.cost.innerHTML = (clickers.butcher.ai + 5) * 6

    clickers.rancher.amount.innerHTML = clickers.rancher.ai
    clickers.rancher.cost.innerHTML = (clickers.rancher.ai + 6) * 6

    clickers.scientist.amount.innerHTML = clickers.scientist.ai
    clickers.scientist.cost.innerHTML = (clickers.scientist.ai + 7) * 6

    
    //Clicker Increase
    increases.burger.amount.innerHTML = increases.burger.perClick
    increases.burger.cost.innerHTML = (increases.burger.perClick + 1) * 12

    increases.cook.amount.innerHTML = increases.cook.perClick
    increases.cook.cost.innerHTML = (increases.cook.perClick + 2) * 12

    increases.manager.amount.innerHTML = increases.manager.perClick
    increases.manager.cost.innerHTML = (increases.manager.perClick + 3) * 12

    increases.packer.amount.innerHTML = increases.packer.perClick
    increases.packer.cost.innerHTML = (increases.packer.perClick + 4) * 12

    increases.butcher.amount.innerHTML = increases.butcher.perClick
    increases.butcher.cost.innerHTML = (increases.butcher.perClick + 5) * 12

    increases.rancher.amount.innerHTML = increases.rancher.perClick
    increases.rancher.cost.innerHTML = (increases.rancher.perClick + 6) * 12

    increases.scientist.amount.innerHTML = increases.scientist.perClick
    increases.scientist.cost.innerHTML = (increases.scientist.perClick + 7) * 12

    //Achievements
    if(value.val1 >= 1){
        achievements.ach1.style.color = "purple"
        achievements.achievementsRecieved++
    }

    if(level.lvlAmount >= 2){
        achievements.ach2.style.color = "purple"
        achievements.achievementsRecieved++
    }

    if(clickers.burger.ai >= 1 || clickers.cook.ai >= 1 || clickers.manager.ai >= 1 || clickers.packer.ai >= 1 || clickers.butcher.ai >= 1 || clickers.rancher.ai >= 1 || clickers.scientist.ai >= 1){
        achievements.ach3.style.color = "purple"
        achievements.achievementsRecieved++
    }

    if(increases.burger.perClick >= 2 || increases.cook.perClick >= 2 || increases.manager.perClick >= 2 || increases.packer.perClick >= 2 || increases.butcher.perClick >= 2 || increases.rancher.perClick >= 2 || increases.scientist.perClick >= 2){
        achievements.ach4.style.color = "purple"
        achievements.achievementsRecieved++
    }

    if(value.val1 >= 100 || value.val2 >= 100 || value.val3 >= 100 || value.val4 >= 100 || value.val5 >= 100 || value.val6 >= 100 || value.val7 >= 100){
        achievements.ach5.style.color = "purple"
        achievements.achievementsRecieved++
    }

    if(clickers.burger.ai >= 10 & clickers.cook.ai >= 10 & clickers.manager.ai >= 10 & clickers.packer.ai >= 10 & clickers.butcher.ai >= 10 & clickers.rancher.ai >= 10 & clickers.scientist.ai >= 10){
        achievements.ach6.style.color = "purple"
        achievements.achievementsRecieved++
    }

    if(increases.burger.perClick >= 10 & increases.cook.perClick >= 10 & increases.manager.perClick >= 10 & increases.packer.perClick >= 10 & increases.butcher.perClick >= 10 & increases.rancher.perClick >= 10 & increases.scientist.perClick >= 10){
        achievements.ach7.style.color = "purple"
        achievements.achievementsRecieved++
    }

    if(level.lvlAmount >= 7){
        achievements.ach8.style.color = "purple"
        achievements.achievementsRecieved++
    }

    if(value.val1 >= 100 & value.val2 >= 100 & value.val3 >= 100 & value.val4 >= 100 & value.val5 >= 100 & value.val6 >= 100 & value.val7 >= 100){
        achievements.ach9.style.color = "purple"
        achievements.achievementsRecieved++
    }

    if(value.val1 >= 10000){
        achievements.ach10.style.color = "purple"
        achievements.achievementsRecieved++
    }

    if(achievements.achievementsRecieved == 10){
        achievements.ach11.style.color = "purple"
    }
}