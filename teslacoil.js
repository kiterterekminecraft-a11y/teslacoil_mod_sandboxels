elements.tesla_coil = {
    color: ["#555555", "#888888", "#bbbbbb"],
    category: "machines",
    state: "solid",

    name: "Tesla Coil",

    behavior: behaviors.WALL,

    conduct: 1,
    hardness: 1,
    insulate: false,

    tick: function(pixel) {

        // lekki efekt grzania wokół cewki
        for (let i = 0; i < 3; i++) {

            let dx = Math.floor(Math.random() * 7) - 3;
            let dy = Math.floor(Math.random() * 7) - 3;

            let x = pixel.x + dx;
            let y = pixel.y + dy;

            if (isEmpty(x,y) && Math.random() < 0.35) {

                createPixel("electric", x, y);

            }

            else if (!isEmpty(x,y)) {

                let target = pixelMap[y][x];

                if (target && target.temp !== undefined) {
                    target.temp += 20;
                }

            }
        }

    }
};


// nazwa do wyszukiwarki
elements.tesla_coil.desc =
"Tesla Coil - generates electrical discharges and heat.";


// ikonka w menu
elements.tesla_coil.category = "machines";
