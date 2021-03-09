radio.setGroup(9)
let richting = 0
basic.forever(function () {
    radio.sendValue("richting", richting)
    if (pins.analogReadPin(AnalogPin.P0) < 100) {
        richting = 1
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P0) > 900) {
        richting = 2
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) < 100) {
        richting = 3
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 900) {
        richting = 4
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        richting = 0
        basic.showIcon(IconNames.Square)
    }
})
