const chai = require('chai')
const assert = require('chai').assert
const rockPaperScissors = require('../src/index')


describe('Unit tests for rock paper scissors', () => {

  it('Should return WIN for rock vs scissors', done => {
    assert.equal(rockPaperScissors.play('rock', 'scissors'), 'WIN')
    done()
  })

  it('Should return TIE for rock vs rock', done => {
    assert.equal(rockPaperScissors.play('rock', 'rock'), 'TIE')
    done()
  })

  it('Should return LOSE for scissors vs rock', done => {
    assert.equal(rockPaperScissors.play('scissors', 'rock'), 'LOSE')
    done()
  })

  it('Should throw error for invalid moves', done => {
    assert.throws(() => {rockPaperScissors.play(false, 'rock')}, Error)
    done()
  })

  it('Should lowercase moves if uppercase', done => {
    assert.equal(rockPaperScissors.play('Rock', 'PAPER'), 'LOSE')
    done()
  })

  it('Should print a message', done => {
    let res = rockPaperScissors.message({name: 'Lars', move: 'scissors'}, {name: 'Steve', move: 'paper'})
    assert.equal(typeof res, 'string')
  })

})
