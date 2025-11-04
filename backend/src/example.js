import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '../.env') })

await initDatabase()

const posts = [
  {
    title: "The Way of Harmony",
    contents: "True victory is victory over oneself. The art of peace begins with you.",
    author: "Morihei Ueshiba",
    tags: ['philosophy', 'martial-arts']
  },
  {
    title: "Mindfulness in Motion",
    contents: "When walking, walk. When eating, eat. Be fully present in each moment.",
    author: "Thich Nhat Hanh",
    tags: ['mindfulness', 'zen']
  },
  {
    title: "The Beginner's Mind",
    contents: "In the beginner's mind there are many possibilities, but in the expert's mind there are few.",
    author: "Shunryu Suzuki",
    tags: ['zen', 'philosophy']
  },
  {
    title: "Flow State",
    contents: "The best moments in our lives are not passive or relaxing. They occur when a person's body or mind is stretched to its limits.",
    author: "Mihaly Csikszentmihalyi",
    tags: ['psychology', 'performance']
  },
  {
    title: "Practice Makes Progress",
    contents: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
    author: "Bruce Lee",
    tags: ['martial-arts', 'wisdom']
  },
  {
    title: "Finding Balance",
    contents: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
    tags: ['wisdom', 'life-lessons']
  }
]

// Save all posts to the database
for (const postData of posts) {
  const post = new Post(postData)
  await post.save()
  console.log(`Saved: ${post.title}`)
}

// Retrieve and display all posts
const dbPosts = await Post.find()
console.log('\nAll posts in database:')
console.log(dbPosts)