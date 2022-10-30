radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Ghost)
    basic.pause(2000)
    basic.clearScreen()
})
radio.setGroup(77)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendNumber(0)
})
