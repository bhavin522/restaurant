import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WelcomeSection from './components/WelcomeSection'
import FeaturedDishes from './components/FeaturedDishes'
import BookTableButton from './components/BookTableButton'
import MapSection from './components/MapSection'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <FeaturedDishes />
      <BookTableButton />
      <MapSection />
    </div>
  )
}

export default App
