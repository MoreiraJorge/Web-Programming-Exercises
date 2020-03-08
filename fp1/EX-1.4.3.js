var battleShip = {
    map: [1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1],
    title: "Battleship",
    counter: 0,
    markPosition: function(index){
        this.counter++;
        return this.map[index];
    },
    checkShot: function(markPosition){
        if(markPosition == 1){
            console.log("O tiro acerta");
        } else {
            console.log("O tiro falha");
        }
    }
}


battleShip.checkShot(battleShip.markPosition(0));
battleShip.checkShot(battleShip.markPosition(1));
battleShip.checkShot(battleShip.markPosition(2));
console.log(battleShip.counter);