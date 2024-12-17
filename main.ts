function Left (duration: number) {
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        . . . # .
        `)
    minibit.rotatems(mbRobotDirection.Left, 20, duration)
    basic.showNumber(ID)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Left(timeunit)
    } else if (receivedNumber == 2) {
        Right(timeunit)
    } else if (receivedNumber == 3) {
        Forward(timeunit)
    }
})
function Forward (duration: number) {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        `)
    minibit.goms(mbDirection.Forward, 20, duration)
    basic.showNumber(ID)
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    Right(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    Forward(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    Left(1)
})
function Right (duration: number) {
    basic.showLeds(`
        . # . . .
        . . # . .
        . . . # .
        . . # . .
        . # . . .
        `)
    minibit.rotatems(mbRobotDirection.Right, 20, duration)
    basic.showNumber(ID)
}
let timeunit = 0
let ID = 0
ID = 1
timeunit = 375
radio.setGroup(ID)
basic.showNumber(ID)
basic.forever(function () {
	
})
