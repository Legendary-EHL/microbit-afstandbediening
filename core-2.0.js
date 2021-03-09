function xyjoy () {
    xpositie = pins.analogReadPin(AnalogPin.P0)
    if (xpositie > 444 && xpositie < 570) {
        xpositie = 0
    } else {
        xpositie = Math.map(xpositie, 0, 1023, -255, 255)
    }
    ypositie = pins.analogReadPin(AnalogPin.P1)
    if (ypositie > 444 && ypositie < 570) {
        ypositie = 0
    } else {
        ypositie = Math.map(ypositie, 0, 1023, -255, 255)
    }
}
let ypositie = 0
let xpositie = 0
radio.setGroup(9)
xpositie = 0
ypositie = 0
basic.forever(function () {
    xyjoy()
    radio.sendValue("x", xpositie)
    radio.sendValue("y", ypositie)
    basic.showIcon(IconNames.Yes)
})
