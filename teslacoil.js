elements.tesla_coil = {
    name: "Tesla Coil",

    color: "#4b4b55",

    behavior: behaviors.WALL,

    category: "special",

    state: "solid",

    density: 7800,

    insulate: true,

    colorObject: {
        r: 75,
        g: 75,
        b: 85
    },

    desc: "Generuje wyładowania elektryczne.",

    tick: function(pixel) {

        if (Math.random() < 0.15) {

            var amount = Math.floor(Math.random() * 3) + 1;

            for (var i = 0; i < amount; i++) {

                var angle = Math.random() * Math.PI * 2;
                var distance = Math.floor(Math.random() * 6) + 1;

                var x = Math.round(
                    pixel.x + Math.cos(angle) * distance
                );

                var y = Math.round(
                    pixel.y + Math.sin(angle) * distance
                );

                if (!outOfBounds(x,y) && isEmpty(x,y)) {
                    createPixel("electric", x, y);
                }
            }
        }
    }
};
