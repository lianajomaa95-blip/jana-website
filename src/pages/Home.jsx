import Hero from '../components/Hero'
import Credentials from '../components/Credentials'
import About from '../components/About'
import Services from '../components/Services'
import FeaturedAreas from '../components/FeaturedAreas'
import ContactCTA from '../components/ContactCTA'

function Home() {
  return (
    <>
      <Hero />
      <Credentials />
      <About />
      <Services />
      <FeaturedAreas />
      <ContactCTA />
    </>
  )
}

export default Home