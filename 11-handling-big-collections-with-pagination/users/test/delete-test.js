const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({name: 'Joe'});
        joe.save().then(() => {
            done();
        });
    });

    function assertUserNull(operation, done) {
        operation
            .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    }

    it('model instance remove', (done) => {
        assertUserNull(joe.remove(), done);
    });

    it('class method deleteOne', (done) => {
        assertUserNull(User.deleteOne({name: 'Joe'}), done);
    });

    it('class method deleteMany', (done) => {
        assertUserNull(User.deleteMany({}), done);
    });
 1
    it('class method remove', (done) => {
        assertUserNull(User.remove({name: 'Joe'}), done);
    });

    it('class method findAndRemove', (done) => {
        assertUserNull(User.findOneAndRemove({name: 'Joe'}), done);
    });

    it('class method findByIdAndRemove', (done) => {
        assertUserNull(User.findByIdAndRemove(joe._id), done);
    });
});
