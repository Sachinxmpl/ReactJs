import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Header } from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import PostList from './components/postList'
import Form from './components/form'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'


function App() {
  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    <PostListProvider>
      <div className='appcontainer'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {
            selectedTab == "Home" ? <PostList /> : <Form />
          }
          <Footer />
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
