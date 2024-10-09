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

    // if randomNumber was 0
    if (randomNumber == 0) {
    basic.showIcon(IconNames.SmallSquare)
    }

    // if randomNumber was 1
    if (randomNumber == 1) {
    basic.showIcon(IconNames.Square)
    }

    // if randomNumber was 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }})

//score 
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    score + 1 
})

input.onButtonPressed(Button.B, function () {
    basic.showString("The score is")
    basic.showNumber(score)
})
