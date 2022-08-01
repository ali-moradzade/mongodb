const mongoose = require('mongoose');
const PostSchema = require('./post');

const Scheme = mongoose.Schema;

const UserSchema = new Scheme({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        validate: {
            validator: (name) => name.length > 2,
            message: "Name must be longer than 2 characters."
        },
    },
    posts: [
        PostSchema
    ],
    likes: Number,
    blogPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'blogPost',
        }
    ],
});

UserSchema.virtual('postCount').get(function () {
    return this.posts.length;
});

UserSchema.pre('remove', function (next) {
    // this === joe
    const BlogPost = mongoose.model('blogPost');

    BlogPost.remove({_id: {$in: this.blogPosts}})
        .then(() => next());
});

const User = mongoose.model('user', UserSchema);
module.exports = User;

