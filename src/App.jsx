import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <main className='max-w-[1440px] md:w-4/5 mx-auto'>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-369px)]'>
          <Outlet></Outlet>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
