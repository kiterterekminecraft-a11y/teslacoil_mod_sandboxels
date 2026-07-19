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

    density:7800,

    insulate:true,

    desc:"Tesla Coil - po zasileniu tworzy plazmę i ogień.",


    tick:function(pixel) {

        var powered = false;


        // sprawdzanie zasilenia
        for(var dx=-1; dx<=1; dx++) {
            for(var dy=-1; dy<=1; dy++) {


                if(dx==0 && dy==0) continue;


                var x=pixel.x+dx;
                var y=pixel.y+dy;


                if(outOfBounds(x,y)) continue;


                var other=pixelMap[y][x];


                if(!other) continue;


                // ignorujemy electric
                if(other.element=="electric") continue;


                // zasilone elementy
                if(other.charge && other.charge>0) {
                    powered=true;
                }

            }
        }


        // TESLA WŁĄCZONA
        if(powered) {


            pixel.color="#ffff99";


            // tworzenie ognia i plazmy
            if(Math.random()<0.2) {


                var x=pixel.x+Math.floor(Math.random()*7)-3;
                var y=pixel.y+Math.floor(Math.random()*7)-3;


                if(!outOfBounds(x,y) && isEmpty(x,y)) {


                    createPixel("plasma",x,y);


                }


                if(!outOfBounds(x,y+1) && isEmpty(x,y+1)) {


                    createPixel("fire",x,y+1);


                }

            }


        }

        // WYŁĄCZONA
        else {

            pixel.color="#4b4b55";

        }

    }
};


console.log("TESLA COIL MOD LOADED");
