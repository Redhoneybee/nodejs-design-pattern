const { properties } = require("stampit");

const stampit = require('stampit');

const character = stampit()
    .props({
        name: 'anonymouse',
        lifePoints: 100,
        x: 0,
        y: 0
    });


const mover = stampit()
    .methods({
        move(xIncr, yIncr) {
            this.x += xIncr;
            this.y += yIncr;
            console.log(`${this.name} moved to [${this.x}, ${this.y}]`)
        }
    });

const slasher = stampit()
    .methods({
        slash(direction) {
            console.log(`${this.name} slashed to the ${direction}`)
        }
    });

const shooter = stampit()
    .props({
        bullets: 6
    })
    .methods({
        shoot(direction) {
            if (this.bullets > 0) {
                --this.bullets;
                console.log(`${this.name} shoot to the ${direction}`)
            }
        }
    });

const runner = stampit.compose(character, mover);
const samural = stampit.compose(character, mover, slasher);
const sniper = stampit.compose(character, shooter);
const gunslinger = stampit.compose(character, mover, shooter);
const westernSamural = stampit.compose(character, samural);

const gojiro = westernSamural();
gojiro.name = "Gojiro Kiryu";
gojiro.move(1, 0);
gojiro.slash('left');
gojiro.slash('right');