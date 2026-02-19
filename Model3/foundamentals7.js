const basketballGame = {
score: 0,
fouls: 0,
freeThrow() {
this.score++;
return this;
},
basket() {
this.score += 2;
return this;
},
threePointer() {
this.score += 3;
return this;
},
foul() {
this.fouls++;
return this;
},
halfTime() {
console.log('Halftime score is '+this.score+' with '+this.fouls+' fouls.');
}
}
//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
basketballGame.freeThrow().basket().threePointer().foul().halfTime();