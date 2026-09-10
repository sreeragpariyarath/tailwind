import { Header } from "./components/Header"
import Hero from "./components/Hero"
// import Sidebar from "./components/Sidebar"

function App() {
  const showSidebar=()=>{

  }
  return (
    <div className="bg-linear-to-b from-[#F4F1EC] to-[#FFFFFF] h-screen">
      <div className="mx-auto max-w-[105rem] px-10">
        <Header />
        <Hero/>
      </div>
      {/* <Sidebar/> */}
    </div>
  )
}

export default App
