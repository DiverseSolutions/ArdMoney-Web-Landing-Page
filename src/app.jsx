import Navigation from './components/nav.jsx'
import IntroSection from './components/introSection.jsx'
import FeaturesSection from './components/featuresSection.jsx'
import VideoSection from './components/videoSection.jsx'

export function App(props) {
  return (
    <>
      <div class="bg-primary text-white">
        <Navigation />
        <IntroSection />
        <FeaturesSection />
        <VideoSection />
      </div>
    </>
  )
}
