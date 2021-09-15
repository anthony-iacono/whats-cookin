import { expect } from 'chai';
import Pantry from '../src/classes/Pantry';

describe.only('Pantry', function () {
  let pantry = new Pantry();

  beforeEach(function() {

  })

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  })

  it('should be an instance of Pantry', function() {
    expect(pantry).to.be.an.instanceof(Pantry);
  })

})
