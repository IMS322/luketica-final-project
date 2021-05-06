import { button, value, increases } from './variables.mjs'
import { update } from './update.mjs'

export function addButtons() {
    // Adding to Count
    button.btn1.addEventListener("click", function(event)
    {
        event.preventDefault()

        value.val1 += increases.burger.perClick
        update()
    })

    button.btn2.addEventListener("click", function(event)
    {
        event.preventDefault()
            
        value.val2 += increases.cook.perClick 
        update()
    })

    button.btn3.addEventListener("click", function(event)
    {
        event.preventDefault()
            
        value.val3 += increases.manager.perClick
        update()
    })

    button.btn4.addEventListener("click", function(event)
    {
        event.preventDefault()
            
        value.val4 += increases.packer.perClick 
        update()
    })

    button.btn5.addEventListener("click", function(event)
    {
        event.preventDefault()
            
        value.val5 += increases.butcher.perClick
        update()
    })

    button.btn6.addEventListener("click", function(event)
    {
        event.preventDefault()
            
        value.val6 += increases.rancher.perClick
        update()
    })

    button.btn7.addEventListener("click", function(event)
    {
        event.preventDefault()
            
        value.val7 += increases.scientist.perClick
        update()
    })
}