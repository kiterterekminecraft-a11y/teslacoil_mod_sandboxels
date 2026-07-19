// Tesla Coil mod for Sandboxels

elements.tesla_coil = {
    color: "#4b4b55",
    behavior: behaviors.WALL,
    category: "machines",
    state: "solid",
    density: 7800,
    insulate: true,

    tick: function(pixel) {

        // mała szansa na wyładowanie co tick
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

                // zabezpieczenie przed wyjściem poza mapę
                if (!outOfBounds(x,y) && isEmpty(x,y)) {
                    createPixel("electric", x, y);
                }
            }
        }
    },

    desc: "Generuje wyładowania elektryczne."
};
