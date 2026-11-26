import Navbar from "./component/Navbar"
import Parent from "./component/Parent"
import Counter from "./component/Counter"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Service from "./pages/Service"
import Login from "./Auth/Login"

const App = () => {
  // const message = "<script>alert('Hacked!!!')</scri
  return (
    <> {/* Fragment Tag*/}
      {/* <Counter/>
      <br /> <br />
      <Login /> */}
      {/* {message} */}
      <Navbar />
      {/* <Parent /> */}
      {/* <Home/>
      <About/>
      <Service/>
      <Contact/> */}
    </>
  )
}

export default App