import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useContext } from 'react'
import { AuthContext } from './provider/AuthProvider'

function App() {
  const { useLoader } = useContext(AuthContext);

  if (useLoader) {
    return <div className='w-full h-screen flex justify-center items-center'>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }

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
