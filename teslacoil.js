runAfterLoad(function() {

    elements.tesla_coil = {
        color: ["#555555", "#888888", "#bbbbbb"],
        category: "machines",
        state: "solid",
        behavior: behaviors.WALL,

        conduct: 1,
        hardness: 1,

        desc: "Tesla Coil - creates electrical discharges.",

        tick: function(pixel) {

            if (Math.random() < 0.1) {

                let x = pixel.x + Math.floor(Math.random()*7)-3;
                let y = pixel.y + Math.floor(Math.random()*7)-3;

                if (isEmpty(x,y)) {
                    createPixel("electric", x, y);
                }
            }
        }
    };

});
