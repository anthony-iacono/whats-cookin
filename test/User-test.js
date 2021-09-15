import { expect } from 'chai';
import User from '../src/classes/User';
import sampleUsersData from '../src/data/sampleUsersData';


describe('User', function() {
  let user;
  beforeEach(function() {
    user = new User(sampleUsersData[0]);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be a instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should be able to hold a name', function() {
    expect(user.name).to.equal("Saige O'Kon");
  });

  it('should have and id', function() {
    expect(user.id).to.equal(sampleUsersData[0].id);
  })

  it('should have a pantry', function() {
    expect(user.pantry).to.deep.equal(sampleUsersData[0].pantry);
  })

  it('should be able to hold the ids of favorited recipes', function() {
    user.addToFavorites(15564);
    expect(user.favorites).to.deep.equal([15564]);
  })

  it('should be able to remove a favorite', function() {
    user.addToFavorites(15564);
    expect(user.favorites).to.deep.equal([15564]);
    user.removeFromFavorites(15564);
    expect(user.favorites).to.deep.equal([]);
  })

  it('should be able to hold the ids of recipes to cook', function() {
    user.addToCookList(15564);
    expect(user.recipesToCook).to.deep.equal([15564])
  })

  it('should be able to remove a recipe to cook', function() {
    user.addToCookList(15564);
    expect(user.recipesToCook).to.deep.equal([15564]);
    user.removeFromCookList(15564);
    expect(user.recipesToCook).to.deep.equal([]);
  })
})
