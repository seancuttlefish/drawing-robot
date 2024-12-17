basic.showIcon(IconNames.Heart)
minibit.setLedColor(0xff0000)
basic.forever(function () {
    minibit.goms(mbDirection.Forward, 20, 1000)
    minibit.rotatems(mbRobotDirection.Left, 20, 1000)
})
