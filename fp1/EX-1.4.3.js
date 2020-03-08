var battleShip = {
    map: [[]],
    title: "Battleship",
    counter: 0,
    markPosition: function (x, y) {
        this.counter++;
        return this.map[x][y];
    },
    checkShot: function (markPosition) {
        if (markPosition == 1) {
            console.log("O tiro acerta");
        } else {
            console.log("O tiro falha");
        }
    },
    addShip: function (x, y) {
        this.map[x][y] = 1;
    }
}

battleShip.addShip(0,0);
battleShip.checkShot(battleShip.markPosition(0,0));
battleShip.checkShot(battleShip.markPosition(0,1));
console.log(battleShip.counter);