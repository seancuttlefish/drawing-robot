function Left (degrees: number) {
    basic.showArrow(ArrowNames.West)
    minibit.rotatems(mbRobotDirection.Left, 20, degrees)
    basic.showNumber(ID)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Left(300)
    } else if (receivedNumber == 2) {
        Right(300)
    } else if (receivedNumber == 3) {
        Forward(300)
    }
})
function Forward (distance: number) {
    basic.showArrow(ArrowNames.North)
    minibit.goms(mbDirection.Forward, 20, distance)
    basic.showNumber(ID)
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
function Right (degrees: number) {
    basic.showArrow(ArrowNames.East)
    minibit.rotatems(mbRobotDirection.Right, 20, degrees)
    basic.showNumber(ID)
}
function Stop () {
    minibit.stop(mbStopMode.Brake)
    status = 0
}
function Backward (distance: number) {
    basic.showArrow(ArrowNames.South)
    minibit.goms(mbDirection.Reverse, 20, distance)
    basic.showNumber(ID)
}
let status = 0
let ID = 0
ID = 1
status = 1
radio.setGroup(ID)
basic.showNumber(ID)
basic.forever(function () {
    Left(300)
    Forward(300)
    Right(300)
    Backward(300)
})
