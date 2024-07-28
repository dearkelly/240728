let 方位 = 0
basic.forever(function () {
    方位 = input.compassHeading()
    if (方位 < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (方位 < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (方位 < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (方位 < 315) {
        basic.showArrow(ArrowNames.West)
    }
})
