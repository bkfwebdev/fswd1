import { initDatabase } from './db/init.js';
import { Post } from './db/models/post.js'

await initDatabase();

const post = new Post({
    title: 'Test Title',
    author: 'Test Author',
    contents: 'this is a test post',
    tags: ['fullstack','webdevelopment'],
})
await post.save()

const dbpost = await Post.find()
console.log(dbpost)

