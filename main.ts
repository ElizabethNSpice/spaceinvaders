input.onButtonPressed(Button.A, function () {
    ammo = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y) - 1)
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        ammo.change(LedSpriteProperty.Y, -1)
    }
    if (ammo.isTouching(enemy)) {
        ammo.delete()
        enemy.delete()
        game.addScore(1)
    }
    if (ammo.isTouchingEdge()) {
        ammo.delete()
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    player.change(LedSpriteProperty.X, 1)
})
let enemy: game.LedSprite = null
let ammo: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let winCondition = 10
game.setScore(0)
basic.forever(function () {
    if (game.score() == winCondition) {
        game.gameOver()
    }
})
basic.forever(function () {
    while (game.score() <= winCondition) {
        enemy = game.createSprite(randint(0, 4), 0)
        basic.pause(5000)
        enemy.delete()
    }
})
