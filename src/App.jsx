import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from  './App.module.css';
import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Baggio25.png',
      name: 'Rodrigo Baggio',
      role: 'Quality Analylist',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},        
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},        
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-03-01 10:43'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Rocket',
      role: 'Educator @Rocketseat',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},        
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},        
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-03-03 14:43'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},        
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},        
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-03-06 11:43'),
  },
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
