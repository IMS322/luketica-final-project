import { value, clickers } from './variables.mjs'
import { update } from './update.mjs'

export function autoClickers() {
    // Auto Clicker AI
    clickers.burger.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val1 >= (clickers.burger.ai + 1) * 6){
            value.val1 -= (clickers.burger.ai + 1) * 6
            clickers.burger.ai += 1
            update()
        }
    })

    clickers.cook.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val2 >= (clickers.cook.ai + 2) * 6){
            value.val2 -= (clickers.cook.ai + 2) * 6
            clickers.cook.ai += 1
            update()
        }
    })

    clickers.manager.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val3 >= (clickers.manager.ai + 3) * 6){
            value.val3 -= (clickers.manager.ai + 3) * 6
            clickers.manager.ai += 1
            update()
        }
    })

    clickers.packer.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val4 >= (clickers.packer.ai + 4) * 6){
            value.val4 -= (clickers.packer.ai + 4) * 6
            clickers.packer.ai += 1
            update()
        }
    })

    clickers.butcher.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val5 >= (clickers.butcher.ai + 5) * 6){
            value.val5 -= (clickers.butcher.ai + 5) * 6
            clickers.butcher.ai += 1
            update()
        }
    })

    clickers.rancher.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val6 >= (clickers.rancher.ai + 6) * 6){
            value.val6 -= (clickers.rancher.ai + 6) * 6
            clickers.rancher.ai += 1
            update()
        }
    })

    clickers.scientist.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val7 >= (clickers.scientist.ai + 7) * 6){
            value.val7 -= (clickers.scientist.ai + 7) * 6
            clickers.scientist.ai += 1
            update()
        }
    })
}