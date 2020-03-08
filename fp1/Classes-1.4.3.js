class BattleShip{
    constructor(title){
        this.map = [[]];
        this.title = title;
        this.counter = 0;
    }

    markPosition(indexX, indexY) {
        this.counter++;
        return this.map[indexX][indexY];
    }

    checkShot(markPosition) {
        if (markPosition == 1) {
            console.log("O tiro acerta");
        } else {
            console.log("O tiro falha");
        }
    }

    addShip(indexX, indexY) {
        this.map[indexX][indexY] = 1;
    }

}

var battle = new BattleShip("BattleShip");
battle.addShip(0,0);
battle.checkShot(battle.markPosition(0,0));
console.log(battle.counter);