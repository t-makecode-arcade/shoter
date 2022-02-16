controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (weponright == 1) {
        mySprite.setImage(img`
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . b b b b b . 
            . b b b b b . 
            . b b b b b . 
            . b b b b b . 
            . 4 . 4 . . . 
            . 4 4 4 . . . 
            . . . 4 . . . 
            . . . 4 . . . 
            . . 4 4 4 . . 
            . 4 . . . 4 . 
            . 4 . . . 4 . 
            . 4 . . . 4 . 
            `)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (weponleft == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 50)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (weponleft == 1) {
        mySprite.setImage(img`
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . . b b b b b 
            . . b f b f b 
            . . b f b f b 
            . . 4 4 4 4 4 
            . . b 4 4 4 4 
            b b b b 4 . . 
            . . . b 4 . . 
            . . . . 4 . . 
            . . . . 4 . . 
            . . . 4 . 4 . 
            . . 4 . . . 4 
            . . 4 . . . 4 
            . . 4 . . . 4 
            `)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (weponright == 1) {
        mySprite.setImage(img`
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            b b b b b . . 
            b f b f b . . 
            b f b f b . . 
            4 4 4 4 4 . . 
            4 4 4 4 b . . 
            . . 4 b b b b 
            . . 4 b . . . 
            . . 4 . . . . 
            . . 4 . . . . 
            . 4 . 4 . . . 
            4 . . . 4 . . 
            4 . . . 4 . . 
            4 . . . 4 . . 
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (weponright == 1) {
        mySprite.setImage(img`
            . . . . . . . 
            . b b b b b . 
            . b f b f b . 
            . b f 4 f b . 
            . 4 4 4 4 4 . 
            . 4 4 4 4 4 . 
            . . b 4 . . . 
            . . b 4 . . . 
            . . b 4 . . . 
            . . 4 4 4 . . 
            . . 4 . 4 . . 
            . . 4 . 4 . . 
            . . 4 . 4 . . 
            . . 4 . 4 . . 
            . . . . . . . 
            . . . . . . . 
            `)
    }
})
let wepondown = 0
let weponup = 0
let projectile: Sprite = null
let weponleft = 0
let weponright = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`army man`, SpriteKind.Player)
controller.moveSprite(mySprite)
let weponall = 1
forever(function () {
    if (weponall == 1) {
        weponup = 1
        wepondown = 1
        weponleft = 1
        weponright = 1
    }
})
