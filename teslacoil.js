console.log("TESLA COIL MOD START");

elements.tesla_coil = {
    name: "Tesla Coil",

    color: "#4b4b55",

    colorObject: {
        r:75,
        g:75,
        b:85
    },

    behavior: behaviors.WALL,

    category: "machines",
    state: "solid",

    density: 7800,
    insulate: true,

    desc: "Tesla Coil wymagająca zewnętrznego zasilania.",


    reactions: {
        electric: {
            elem1: "fire",
            elem2: "plasma"
        }
    },


    tick: function(pixel) {

        var powered = false;


        // sprawdzanie rzeczy obok
        for(var dx=-1; dx<=1; dx++) {
            for(var dy=-1; dy<=1; dy++) {

                if(dx==0 && dy==0) continue;


                var x = pixel.x + dx;
                var y = pixel.y + dy;


                if(outOfBounds(x,y)) continue;


                var other = pixelMap[y][x];


                if(!other) continue;


                // ignorujemy electric
                if(other.element == "electric") continue;


                // tylko rzeczy, które mają charge
                if(other.charge && other.charge > 0) {
                    powered = true;
                }

            }
        }


        // jeżeli dostała zasilanie
        if(powered) {

            pixel.color = "#ffff99";


            if(Math.random() < 0.2) {

                var x = pixel.x + Math.floor(Math.random()*7)-3;
                var y = pixel.y + Math.floor(Math.random()*7)-3;


                if(!outOfBounds(x,y) && isEmpty(x,y)) {
                    createPixel("electric",x,y);
                }

            }

        } else {

            pixel.color = "#4b4b55";

        }

    }
};


console.log("TESLA COIL MOD LOADED");
