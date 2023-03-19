import './App.css'

import NewNavigation from './components/NewNavigation'
{/* import Navigation from './components/Navigation' */}
import Hero from './components/Hero'
import Features from './components/Features'
import Intergrations from './components/Intergrations'
import Testemonials from './components/Testemonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {

  return (
    <div className="App">

      <NewNavigation />

      {/* <Navigation /> */}

      <Hero />

      <Features />

      <Intergrations />

      <Testemonials />

      <Pricing />

      <Contact />

    </div>
  )
}

export default App
