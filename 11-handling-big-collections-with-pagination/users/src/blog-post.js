const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
        validate: {
            validator: (title) => title.length > 2,
        }
    },
    content: {
        type: String,
        required: [true, 'Content is required.'],
        validate: {
            validator: (content) => content.length > 2,
        }
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comment',
        }
    ]
});

const BlogPost = mongoose.model('blogPost', BlogPostSchema);
module.exports = BlogPost;
