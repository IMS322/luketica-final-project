// Start server on terminal node with this = http-server -c-1
import { addButtons } from './modules/addButtons.mjs'
import { levels } from './modules/levels.mjs'
import { timer } from './modules/timer.mjs'
import { autoClickers } from './modules/autoClickers.mjs'
import { increase } from './modules/increase.mjs'
import { data } from './modules/data.mjs'
import { update } from './modules/update.mjs'

addButtons()
levels()
timer()
autoClickers()
increase()
data()
update()