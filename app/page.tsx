import Hero from '@/components/hero'
import Services from '@/components/services'
import AboutUs from '@/components/about-us'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <AboutUs />
      <Footer />
    </main>
  )
}

