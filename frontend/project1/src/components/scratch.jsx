import { PostList } from './components/PostList'
import { CreatePost } from './components/CreatePost'

const testposts = [
  {
    title: "The Way of Harmony",
    contents: "True victory is victory over oneself. The art of peace begins with you.",
    author: "Morihei Ueshiba"
  },
  {
    title: "Mindfulness in Motion",
    contents: "When walking, walk. When eating, eat. Be fully present in each moment.",
    author: "Thich Nhat Hanh"
  },
  {
    title: "The Beginner's Mind",
    contents: "In the beginner's mind there are many possibilities, but in the expert's mind there are few.",
    author: "Shunryu Suzuki"
  },
  {
    title: "Flow State",
    contents: "The best moments in our lives are not passive or relaxing. They occur when a person's body or mind is stretched to its limits.",
    author: "Mihaly Csikszentmihalyi"
  },
  {
    title: "Practice Makes Progress",
    contents: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
    author: "Bruce Lee"
  },
  {
    title: "Finding Balance",
    contents: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein"
  }
]

function App() {
  

  return (
    <CreatePost
      />
  )
}

export { App }