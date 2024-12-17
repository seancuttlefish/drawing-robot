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
let ID = 0
ID = 1
let timeunit = 375
radio.setGroup(ID)
basic.showNumber(ID)
basic.forever(function () {
    Left(300)
    Forward(300)
    Right(600)
    Forward(300)
})
