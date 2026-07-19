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

        // szansa na wyładowanie
        if (Math.random() < 0.2) {

            var x = pixel.x + Math.floor(Math.random()*11)-5;
            var y = pixel.y + Math.floor(Math.random()*11)-5;

            if (!outOfBounds(x,y) && isEmpty(x,y)) {

                createPixel("electric", x, y);

            }
        }
    }
};

console.log("TESLA COIL MOD LOADED");
