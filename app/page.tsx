import Hero from '@/components/hero'
import Services from '@/components/services'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Footer />
    </main>
  )
}

