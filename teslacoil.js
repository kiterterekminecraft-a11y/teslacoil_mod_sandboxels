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


    // Tesla nie jest przewodem
    insulate:true,
    conduct:0,


    desc:"Tesla Coil - po zasileniu tworzy ogień i plazmę.",



    tick:function(pixel) {


        var powered = false;



        // sprawdzanie sąsiadów
        for(var dx=-1; dx<=1; dx++) {
            for(var dy=-1; dy<=1; dy++) {


                if(dx===0 && dy===0) continue;


                var x=pixel.x+dx;
                var y=pixel.y+dy;


                if(outOfBounds(x,y)) continue;


                var other=pixelMap[y][x];


                if(!other) continue;



                // ignorujemy electric
                if(other.element==="electric") continue;



                // sprawdzamy aktywne zasilanie
                if(other.charge && other.charge>0) {

                    powered=true;

                }

            }
        }



        if(powered) {


            pixel.color="#ffff99";



            // tworzenie plazmy i ognia
            if(Math.random()<0.2) {


                var x=pixel.x+Math.floor(Math.random()*5)-2;
                var y=pixel.y+Math.floor(Math.random()*5)-2;



                if(!outOfBounds(x,y) && isEmpty(x,y)) {

                    createPixel("plasma",x,y);

                }



                if(!outOfBounds(x,y+1) && isEmpty(x,y+1)) {

                    createPixel("fire",x,y+1);

                }

            }


        } else {


            pixel.color="#4b4b55";


        }


    }

};


console.log("TESLA COIL MOD LOADED");
