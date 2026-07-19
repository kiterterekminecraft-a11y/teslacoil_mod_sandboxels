console.log("TESLA COIL MOD START");

elements.tesla_coil = {
    name: "Tesla Coil",

    color: "#4b4b55",

    colorObject: {
        r: 75,
        g: 75,
        b: 85
    },

    behavior: behaviors.WALL,

    category: "special",
    state: "solid",

    density: 7800,
    insulate: true,

    desc: "Generuje wyładowania elektryczne.",

    tick: function(pixel) {

        // 50% szansy na wyładowanie co klatkę
        if (Math.random() < 0.5) {

            var x = pixel.x + Math.floor(Math.random() * 9) - 4;
            var y = pixel.y + Math.floor(Math.random() * 9) - 4;


            if (!outOfBounds(x,y) && isEmpty(x,y)) {

                createPixel("electric", x, y);

                console.log("Tesla fired!");

            }
        }
    }
};

console.log("TESLA COIL MOD LOADED");
