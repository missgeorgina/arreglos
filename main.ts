player.onChat("arcoiris", function (num1) {
    location = positions.add(
    player.position(),
    pos(1, 0, 0)
    )
    if (num1 == 1) {
        for (let value of color) {
            blocks.place(value, location)
            location = positions.add(
            location,
            pos(0, 1, 0)
            )
        }
    } else {
        for (let value of color1) {
            blocks.place(value, location)
            location = positions.add(
            location,
            pos(0, 1, 0)
            )
        }
    }
})
let location: Position = null
let color1: number[] = []
let color: number[] = []
gameplay.setWeather(RAIN)
player.say("El jugador creará dos tipos de arcoíris")
player.say("Escribe \"arcoíris 1\" para ver un arcoíris de colores")
player.say("Escribe \"arcoíris <cualquier número>\" para ver un arcoíris texturizado")
color = [
RED_CONCRETE,
ORANGE_CONCRETE,
YELLOW_CONCRETE,
LIME_CONCRETE,
LIGHT_BLUE_CONCRETE,
BLUE_CONCRETE,
PURPLE_CONCRETE
]
color1 = [
RED_GLAZED_TERRACOTTA,
ORANGE_GLAZED_TERRACOTTA,
YELLOW_GLAZED_TERRACOTTA,
GREEN_GLAZED_TERRACOTTA,
LIGHT_BLUE_GLAZED_TERRACOTTA,
BLUE_GLAZED_TERRACOTTA,
PURPLE_GLAZED_TERRACOTTA
]
