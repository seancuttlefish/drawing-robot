radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . . .
            . . # . .
            . . . # .
            `)
        minibit.rotatems(mbRobotDirection.Left, 20, 375)
        basic.clearScreen()
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . # . . .
            . . # . .
            . . . # .
            . . # . .
            . # . . .
            `)
        minibit.rotatems(mbRobotDirection.Right, 20, 375)
        basic.clearScreen()
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
        minibit.goms(mbDirection.Forward, 20, 1500)
        basic.clearScreen()
    } else if (receivedNumber == 4) {
        minibit.goms(mbDirection.Reverse, 20, 1500)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        . . . # .
        `)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        `)
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . . .
        . . # . .
        . . . # .
        . . # . .
        . # . . .
        `)
    radio.sendNumber(2)
})
let ID = 1
radio.setGroup(ID)
basic.showNumber(ID)
basic.forever(function () {
	
})
