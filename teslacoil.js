elements.tesla_coil = {
    color: ["#777777","#999999","#bbbbbb"],
    category: "machines",
    state: "solid",
    behavior: behaviors.WALL,
    conduct: 1,
    insulate: false,
    hardness: 1,

    tick: function(pixel) {

        // Działa tylko gdy jest naładowana
        if (pixel.charge) {

            for (let dx = -3; dx <= 3; dx++) {
                for (let dy = -3; dy <= 3; dy++) {

                    if (Math.random() < 0.08) {

                        let x = pixel.x + dx;
                        let y = pixel.y + dy;

                        if (isEmpty(x, y)) {
                            createPixel("electric", x, y);
                        }
                    }
                }
            }
        }

        doElectricity(pixel);
    }
};