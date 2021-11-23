class Utils {
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static randomSort() {
        return 0.5 - Math.random();
    }
}

class TileManager {
    TILE_COUNT = 9;
    tiles = [];
    container = null;

    constructor() {
        this.container = document.getElementById('container');

        for (let i = 0; i !== this.TILE_COUNT; i++) {
            this.tiles.push({ 
                id: i + 1, 
                color: `color-${Utils.getRandomInt(1, 4)}` 
            });
        }
    }

    shuffle() {
        this.tiles = this.tiles.sort(Utils.randomSort);
        this.render();
    }

    sort() {
        this.tiles = this.tiles.sort((left, right) => left.id - right.id);
        this.render();
    }

    clear() {
        while(this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    }

    draw() {
        for (let tile of this.tiles) {
            let div = document.createElement('div');
            let innerDiv = document.createElement('div');
            
            div.classList.add('item', tile.color);

            innerDiv.classList.add('item-text');
            innerDiv.textContent = tile.id;

            div.appendChild(innerDiv);
            this.container.appendChild(div);
        }
    }

    render() {
        this.clear();
        this.draw();
    }
}

const tileManager = new TileManager();

window.onload = () => {
    tileManager.render();
}
