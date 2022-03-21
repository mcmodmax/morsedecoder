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
    basic.showNumber(Morsetabelle.length)
    if (Morsetabelle.length == 1) {
        if (Morsetabelle.shift() == 1) {
            radio.sendString("E")
            basic.showString("E")
        } else {
            radio.sendString("T")
            basic.showString("T")
        }
    } else if (Morsetabelle.length == 2) {
        if (0 == 3) {
        	
        } else if (0 == 3) {
        	
        } else if (0 == 3) {
        	
        } else if (0 == 3) {
        	
        }
    } else if (Morsetabelle.length == 3) {
    	
    } else if (Morsetabelle.length == 4) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    Morsetabelle.push(3)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
let Morsetabelle: number[] = []
radio.setGroup(55)
