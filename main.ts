input.onButtonPressed(Button.A, function () {
    Morsetabelle.push(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    if (Morsetabelle.length == 1) {
        if (Morsetabelle.shift() == 1) {
            radio.sendString("E")
            basic.showString("E")
        } else if (Morsetabelle.shift() == 2) {
            radio.sendString("T")
            basic.showString("T")
        }
    } else if (Morsetabelle.length == 2) {
    	
    } else if (Morsetabelle.length == 3) {
    	
    } else if (Morsetabelle.length == 4) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    Morsetabelle.push(2)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
let Morsetabelle: number[] = []
radio.setGroup(456)
