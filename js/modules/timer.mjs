import { value, clickers } from './variables.mjs'
import { update } from './update.mjs'

// Updates value by autoclickers amount
export function timer(){
    value.val1 += clickers.burger.ai
    value.val2 += clickers.cook.ai
    value.val3 += clickers.manager.ai
    value.val4 += clickers.packer.ai
    value.val5 += clickers.butcher.ai
    value.val6 += clickers.rancher.ai
    value.val7 += clickers.scientist.ai

    update()
}

setInterval(timer, 4000)