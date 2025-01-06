function Left (degrees: number) {
    basic.showArrow(ArrowNames.West)
    minibit.rotatems(mbRobotDirection.Left, speed, degrees)
    basic.showNumber(ID)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Left(100)
    } else if (receivedNumber == 2) {
        Right(100)
    } else if (receivedNumber == 3) {
        Forward(300)
    } else if (receivedNumber == 4) {
        Backward(100)
    } else if (receivedNumber == 5) {
        Stop()
    }
})
function Forward (distance: number) {
    basic.showArrow(ArrowNames.North)
    minibit.goms(mbDirection.Forward, speed, distance)
    basic.showNumber(ID)
}
function Right (degrees: number) {
    basic.showArrow(ArrowNames.East)
    minibit.rotatems(mbRobotDirection.Right, speed, degrees)
    basic.showNumber(ID)
}
function Stop () {
    minibit.stop(mbStopMode.Brake)
    busy = 0
    basic.showNumber(ID)
}
function Backward (distance: number) {
    basic.showArrow(ArrowNames.South)
    minibit.goms(mbDirection.Reverse, speed, distance)
    basic.showNumber(ID)
}
let speed = 0
let busy = 0
let ID = 0
ID = 1
busy = 0
radio.setGroup(ID)
speed = 70
basic.showNumber(ID)
basic.forever(function () {
	
})
