import { button, value, level } from './variables.mjs'
import { update } from './update.mjs'

export function levels(){

    // Unlocking Buttons
    level.lvlButton.addEventListener("click", function(event)
    {
        event.preventDefault()
        
        if(value.val1 >= 50 && button.btn2.disabled){
            value.val1 -= 50
            button.btn2.disabled = false

            level.lvlAmount = 2
            level.lvlCostAmount = 100
        }

        if(value.val2 >= 100 && button.btn3.disabled){
            value.val2 -= 1
            button.btn3.disabled = false

            level.lvlAmount = 3
            level.lvlCostAmount = 200
        }

        if(value.val3 >= 200 && button.btn4.disabled){
            value.val3 -= 200
            button.btn4.disabled = false

            level.lvlAmount = 4
            level.lvlCostAmount = 200
        }

        if(value.val4 >= 300 && button.btn5.disabled){
            value.val4 -= 300
            button.btn5.disabled = false

            level.lvlAmount = 5
            level.lvlCostAmount = 450
        }

        if(value.val5 >= 450 && button.btn6.disabled){
            value.val5 -= 450
            button.btn6.disabled = false

            level.lvlAmount = 6
            level.lvlCostAmount = 600
        }

        if(value.val6 >= 600 && button.btn7.disabled){
            value.val6 -= 600
            button.btn7.disabled = false

            level.lvlAmount = 7
            level.lvlCostAmount = "MaxLevel"
        }

        update()
    })
}