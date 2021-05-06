import { button, counter, value, level, playerData, clickers} from './variables.mjs'
import { update } from './update.mjs'

export function data() {
    // Data Transfering
    playerData.save.addEventListener("click", function(event)
    {
        event.preventDefault()

        localStorage.setItem("BurgerCount", value.val1)
        localStorage.setItem("RestaurantCount", value.val2)
        localStorage.setItem("GroceryStoreCount", value.val3)
        localStorage.setItem("FactoryCount", value.val4)
        localStorage.setItem("SlaughterHouseCount", value.val5)
        localStorage.setItem("CowFarmCount", value.val6)
        localStorage.setItem("BreedingFacilityCount", value.val7)

        localStorage.setItem("level", level.lvlAmount)
        localStorage.setItem("levelCost", level.lvlCostAmount)

        localStorage.setItem("BurgerAI", clickers.burger.ai)
        localStorage.setItem("CookAI", clickers.cook.ai)
        localStorage.setItem("ManagerAI", clickers.manager.ai)
        localStorage.setItem("PackerAI", clickers.packer.ai)
        localStorage.setItem("ButcherAI", clickers.butcher.ai)
        localStorage.setItem("RancherAI", clickers.rancher.ai)
        localStorage.setItem("ScientistAI", clickers.scientist.ai)
    })

    playerData.load.addEventListener("click", function(event)
    {
        event.preventDefault()

        value.val1 = parseInt(localStorage.getItem("BurgerCount"))
        counter.ct1.value = parseInt(localStorage.getItem("BurgerCount"))

        value.val2 = parseInt(localStorage.getItem("RestaurantCount"))
        counter.ct2.value = parseInt(localStorage.getItem("RestaurantCount"))
        
        value.val3 = parseInt(localStorage.getItem("GroceryStoreCount"))
        counter.ct3.value = parseInt(localStorage.getItem("GroceryStoreCount"))
        
        value.val4 = parseInt(localStorage.getItem("FactoryCount"))
        counter.ct4.value = parseInt(localStorage.getItem("FactoryCount"))

        value.val5 = parseInt(localStorage.getItem("SlaughterHouseCount"))
        counter.ct5.value = parseInt(localStorage.getItem("SlaughterHouseCount"))

        value.val6 = parseInt(localStorage.getItem("CowFarmCount"))
        counter.ct6.value = parseInt(localStorage.getItem("CowFarmCount"))

        value.val7 = parseInt(localStorage.getItem("BreedingFacilityCount"))
        counter.ct7.value = parseInt(localStorage.getItem("BreedingFacilityCount"))

        level.lvlAmount = parseInt(localStorage.getItem("level"))
        level.lvlCostAmount = parseInt(localStorage.getItem("levelCost"))

        clickers.burger.ai = parseInt(localStorage.getItem("BurgerAI"))
        clickers.cook.ai = parseInt(localStorage.setItem("CookAI"))
        clickers.manager.ai = parseInt(localStorage.setItem("ManagerAI"))
        clickers.packer.ai = parseInt(localStorage.setItem("PackerAI"))
        clickers.butcher.ai = parseInt(localStorage.setItem("ButcherAI"))
        clickers.rancher.ai = parseInt(localStorage.setItem("RancherAI"))
        clickers.scientist.ai = parseInt(localStorage.setItem("ScientistAI"))

        update()
    })

    playerData.reset.addEventListener("click", function(event)
    {
        event.preventDefault()

        localStorage.setItem("BurgerCount", 0)
        value.val1 = 0
        counter.ct1.value = 0

        localStorage.setItem("RestaurantCount", 0)
        value.val2 = 0
        counter.ct2.value = 0
        button.btn2.disabled = true

        localStorage.setItem("GroceryStoreCount", 0)
        value.val3 = 0
        counter.ct3.value = 0
        button.btn3.disabled = true

        localStorage.setItem("FactoryCount", 0)
        value.val4 = 0
        counter.ct4.value = 0
        button.btn4.disabled = true

        localStorage.setItem("SlaughterHouseCount", 0)
        value.val5 = 0
        counter.ct5.value = 0
        button.btn5.disabled = true

        localStorage.setItem("CowFarmCount", 0)
        value.val6 = 0
        counter.ct6.value = 0
        button.btn6.disabled = true

        localStorage.setItem("BreedingFacilityCount", 0)
        value.val7 = 0
        counter.ct7.value = 0
        button.btn7.disabled = true

        localStorage.setItem("level", 1)
        localStorage.setItem("levelCost", 1)

        level.lvlAmount = 1
        level.lvlCostAmount = 1

        localStorage.setItem("BurgerAI", 0)
        localStorage.setItem("CookAI", 0)
        localStorage.setItem("ManagerAI", 0)
        localStorage.setItem("PackerAI", 0)
        localStorage.setItem("ButcherAI", 0)
        localStorage.setItem("RancherAI", 0)
        localStorage.setItem("ScientistAI", 0)

        clickers.burger.ai = 0
        clickers.cook.ai = 0
        clickers.manager.ai = 0
        clickers.packer.ai = 0
        clickers.butcher.ai = 0
        clickers.rancher.ai = 0
        clickers.scientist.ai = 0

        update()
    })
}