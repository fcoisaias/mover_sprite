let HEROE = game.createSprite(0, 2)
let villano = game.createSprite(3, randint(0, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        HEROE.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.A)) {
        HEROE.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        HEROE.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        HEROE.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (HEROE.isTouching(villano)) {
        villano.delete()
        music.playMelody("C D E F G A B C5 ", 120)
        game.gameOver()
    }
})
