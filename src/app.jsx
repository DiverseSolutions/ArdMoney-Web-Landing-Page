import Navigation from './components/nav.jsx'
import IntroSection from './components/introSection.jsx'
import FeaturesSection from './components/featuresSection.jsx'
import VideoSection from './components/videoSection.jsx'
import ArdMoneyFeaturesSection from './components/ardMoneyFeaturesSection.jsx'
import BlogSection from './components/blogSection.jsx'
import CommunitySection from './components/communitySection.jsx'
import Footer from './components/footer.jsx'

export function App() {
  return (
    <>
        <div class="bg-primary text-white">
          <Navigation />
          <IntroSection />
          <FeaturesSection />
          <VideoSection />
          <ArdMoneyFeaturesSection />
          <BlogSection />
          <CommunitySection />
          <Footer />
        </div>
    </>
  )
}
