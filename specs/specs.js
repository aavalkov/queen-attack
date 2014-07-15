describe('queenAttack', function() {
  it('is false if the coordinates are not horizontally, vertically, or diagonally in line with each other', function() {
    queenAttack([1, 1], [2, 3]).should.equal(false);
  });
   it('is true if the coordinates are horizontally in line with each other', function() {
    queenAttack([1, 1], [4, 1]).should.equal(true);
  });
   it('is true if the coordinates are vertically in line with each other', function(){
   	queenAttack([4, 6], [4, 8]).should.equal(true);
  });
   it('is true if the coordinates are diagonally in line with each other', function(){
   	queenAttack([2, 2], [5,5]).should.equal (true);
   });
});