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

})
