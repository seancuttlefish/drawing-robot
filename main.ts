radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . . .
            . . # . .
            . . . # .
            `)
        minibit.rotatems(mbRobotDirection.Left, 20, time)
        basic.clearScreen()
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . # . . .
            . . # . .
            . . . # .
            . . # . .
            . # . . .
            `)
        minibit.rotatems(mbRobotDirection.Right, 20, time)
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
        basic.showLeds(`
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            `)
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
    basic.pause(time)
    basic.showNumber(ID)
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
    basic.pause(time)
    basic.showNumber(ID)
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
    basic.pause(time)
    basic.showNumber(ID)
})
let time = 0
let ID = 0
ID = 1
time = 375
radio.setGroup(ID)
basic.showNumber(ID)
basic.forever(function () {
	
})
