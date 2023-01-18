const { getBestScore, getScore } = require('./ballGame.js');

const games = [
  [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
  [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
describe('Ball Game for best core Evaluation', () => {
  describe('Best score evaluator', () => {
    it('Should return the best score when input is a 2d array of numbers', () => {
      expect(getBestScore(games)).toBe(90);
    });
  });
  describe('Ball Game for getting score evaluation', () => {
    it('Should get the score of the game when input is a array of numbers', () => {
      expect(getScore(games[0])).toBe(90);
    });
    it('Should get the score of the game when input is a array of numbers', () => {
      expect(getScore(games[2])).toBe(16);
    });
    
  });
});
