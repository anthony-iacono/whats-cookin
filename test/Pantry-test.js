import { expect } from 'chai';
import Pantry from '../src/classes/Pantry';
import sampleUsersData from '../src/data/sampleUsersData'

describe.only('Pantry', function () {
  let pantry;

  beforeEach(function() {
    pantry = new Pantry(sampleUsersData[0].pantry);
  })

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  })

  it('should be an instance of Pantry', function() {
    expect(pantry).to.be.an.instanceof(Pantry);
  })

  it('should store ingredient data', function() {
    expect(pantry.ingredients).to.equal(sampleUsersData[0].pantry);
  })

  it('should store the user ID', function() {
    expect(pantry.id).to.equal()
  })

  it('should be able to hold needed ingredients', function() {
    pantry.neededIngredients.push({name: 'rice', amount: 2});
    expect(pantry.neededIngredients).to.deep.equal([{name: 'rice', amount: 2}])
  })

  it('should be able to check whether user\'s pantry has enough ingredients to cook a given meal', function() {
    expect(pantry.checkForEnoughIngredients()).to.be.true;
  })

})
