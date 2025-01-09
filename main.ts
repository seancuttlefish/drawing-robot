function Left (degrees: number) {
    basic.showArrow(ArrowNames.West)
    minibit.rotatems(mbRobotDirection.Left, speed, degrees)
    basic.showNumber(ID)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Left(200)
    } else if (receivedNumber == 2) {
        Right(200)
    } else if (receivedNumber == 3) {
        Forward(200)
    } else if (receivedNumber == 4) {
        Backward(200)
    } else if (receivedNumber == 5) {
        Spin()
    } else if (receivedNumber == 6) {
        Stop()
    }
})
function Forward (distance: number) {
    basic.showArrow(ArrowNames.North)
    minibit.goms(mbDirection.Forward, speed, distance)
    basic.showNumber(ID)
}
function Spin () {
    temp = 800
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    minibit.rotatems(mbRobotDirection.Right, speed, temp)
    basic.showNumber(ID)
}
function Right (degrees: number) {
    basic.showArrow(ArrowNames.East)
    minibit.rotatems(mbRobotDirection.Right, speed, degrees)
    basic.showNumber(ID)
}
function Stop () {
    minibit.stop(mbStopMode.Brake)
    basic.showNumber(ID)
}
function Backward (distance: number) {
    basic.showArrow(ArrowNames.South)
    minibit.goms(mbDirection.Reverse, speed, distance)
    basic.showNumber(ID)
}
let counter = 0
let distance = 0
let temp = 0
let speed = 0
let ID = 0
ID = 1
radio.setGroup(ID)
speed = randint(30, 80)
basic.showNumber(ID)
basic.forever(function () {
    distance = minibit.sonar(mbPingUnit.Centimeters)
    basic.showNumber(distance)
    if (distance > 0 && distance < 160 && distance < 10) {
        if (Math.randomBoolean()) {
            minibit.setLedColor(0xff0000)
            Left(180)
        } else {
            Right(180)
        }
        minibit.setLedColor(0x0000FF)
        counter = 0
    } else {
        minibit.setLedColor(0x18E600)
        Forward(180)
        counter += 1
    }
    if (counter == 4) {
        minibit.setLedColor(0xFFFF00)
        Spin()
        counter = 0
    }
})
