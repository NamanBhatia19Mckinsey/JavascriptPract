const getBestScore = (Games) => {
    let bestScore = -1;
    Games.forEach((game) => {
        let currScore = getScore(game);
        if(currScore > bestScore) {
            bestScore = currScore;
        }
    });
    return bestScore;
}

const getScore = (Rolls) => {
    let frames = [];
    let index =0;
    for(index =0;index<=Rolls.length;index+=2) {
        let first = Rolls[index];
        let second = Rolls[index+1];
        if(first === 10 || first + second == 10) {
            frames.push([first,second,Rolls[index+2]]);
        } else if(first + second < 10) {
            frames.push([first,second]);
        }
    }
    if(Rolls[index] === 10 || Rolls[index + 1] + Rolls[index] === 10) {
        //spare
        frames.push([Rolls[index],Rolls[index+1],Rolls[index+2]]);
    } else if(Rolls[index] + Rolls[index+1] < 10){
        //open frame
        frames.push([Rolls[index],Rolls[index+1]]);
    }
    let scores = 0;
    frames.forEach((frame) => {
        frame.forEach((pins)=> {
            scores += pins;
        });
    });
    return scores;
}

console.log(getScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), getBestScore([[10, 5, 5, 9, 0], [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]]));
module.exports = { getBestScore, getScore };