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

    category: "machines",
    state: "solid",
    density: 7800,

    insulate: true,

    desc: "Tesla Coil - wymaga zasilania elektrycznego.",


    reactions: {
        electric: {
            elem1: ["plasma", "fire"],
            elem2: null
        }
    },


    tick: function(pixel) {

        var powered = false;


        // sprawdzanie sąsiadów
        for (var dx = -1; dx <= 1; dx++) {
            for (var dy = -1; dy <= 1; dy++) {

                if (dx == 0 && dy == 0) continue;

                var x = pixel.x + dx;
                var y = pixel.y + dy;


                if (!outOfBounds(x,y)) {

                    var other = pixelMap[y][x];


                    if (other && other.charge) {
                        powered = true;
                    }

                    // przewodniki bez electric
                    if (other && elements[other.element] &&
                        elements[other.element].conduct) {
                        powered = true;
                    }
                }
            }
        }


        // jeżeli jest zasilona
        if (powered) {

            pixel.powered = true;


            // tworzenie wyładowań
            if (Math.random() < 0.2) {

                var x = pixel.x + Math.floor(Math.random()*7)-3;
                var y = pixel.y + Math.floor(Math.random()*7)-3;


                if (!outOfBounds(x,y) && isEmpty(x,y)) {

                    createPixel("electric",x,y);

                }
            }

        }
    }
};


console.log("TESLA COIL MOD LOADED");
