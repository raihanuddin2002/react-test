import Footer from "./components/footer/Footer"
import DisplayItems from "./components/home/DisplayItems"
import FeatuesSavings from "./components/home/FeatuesSavings"
import HeroSection from "./components/home/HeroSection"
import PhotographySection from "./components/home/PhotographySection"
import Products from "./components/home/Products"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <DisplayItems />
      <PhotographySection />
      <Products />
      <FeatuesSavings />
      <Footer />
    </>
  )
}

export default App
