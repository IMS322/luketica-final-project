import { value, increases } from './variables.mjs'
import { update } from './update.mjs'

export function increase() {
    // Per Click Increaser
    increases.burger.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val1 >= (increases.burger.perClick + 1) * 12){
            value.val1 -= (increases.burger.perClick + 1) * 12
            increases.burger.perClick += 1
            console.log("increase")

            update()
        }
    })

    increases.cook.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val2 >= (increases.cook.perClick + 2) * 12){
            value.val2 -= (increases.cook.perClick + 2) * 12
            increases.cook.perClick += 1
            update()
        }
    })

    increases.manager.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val3 >= (increases.manager.perClick + 3) * 12){
            value.val3 -= (increases.manager.perClick + 3) * 12
            increases.manager.perClick += 1
            update()
        }
    })

    increases.packer.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val4 >= (increases.packer.perClick + 4) * 12){
            value.val4 -= (increases.packer.perClick + 4) * 12
            increases.packer.perClick += 1
            update()
        }
    })

    increases.butcher.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val5 >= (increases.butcher.perClick + 5) * 12){
            value.val5 -= (increases.butcher.perClick + 5) * 12
            increases.butcher.perClick += 1
            update()
        }
    })

    increases.rancher.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val6 >= (increases.rancher.perClick + 6) * 12){
            value.val6 -= (increases.rancher.perClick + 6) * 12
            increases.rancher.perClick += 1
            update()
        }
    })

    increases.scientist.auto.addEventListener("click", function(event)
    {
        event.preventDefault()

        if(value.val7 >= (increases.scientist.perClick + 7) * 12){
            value.val7 -= (increases.scientist.perClick + 7) * 12
            increases.scientist.perClick += 1
            update()
        }
    })
}