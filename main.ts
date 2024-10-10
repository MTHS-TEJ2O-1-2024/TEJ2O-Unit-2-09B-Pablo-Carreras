/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Pablo
 * Created on: Sep 2024
 * This program ...
*/


// variables
let score: number = 0
let randomNumber: number = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if randomNumber was 0 is rock
    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(2000)
        basic.showIcon(IconNames.Happy)
    }

    // if randomNumber was 1 is paper
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
        basic.pause(2000)
        basic.showIcon(IconNames.Happy)
    }

    // if randomNumber was 2 is scossors 
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(2000)
        basic.showIcon(IconNames.Happy)
    }
})

//score 
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    score = (score + 1)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString(" Score : " + score)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})