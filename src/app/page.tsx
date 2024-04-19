import {
  CaseStudies,
  ExplainerVideos,
  Footer,
  Header,
  HomeFirstCover,
  HomeSecondCover,
  Portfolio,
  Process,
  Services,
  Testimonials,
} from '@/sections'
import { Spacer } from '../components'

export default async function Home() {
  const spacerHeights = {
    firstType: {
      mobile: '4vh',
      tablet: '5vh',
      desktop: '6vh',
    },
    secondType: {
      mobile: '6vh',
    },
    ThirdType: {
      mobile: '4vh',
      desktop: '2vh',
    },
    FourthType: {
      mobile: '5vh',
      tablet: '4vh',
      desktop: '6vh',
    },
    FifthType: {
      mobile: '5vh',
    },
  }

  return (
    <>
      {/* HEADER section - NAV Bar */}
      <Header />

      <main>
        {/* HOME section */}
        <Spacer height={spacerHeights.firstType} />
        <HomeFirstCover />
        <Spacer height={spacerHeights.secondType} />
        <HomeSecondCover />
        <Spacer height={spacerHeights.secondType} />

        {/* SERVICES section */}
        <Services />
        <Spacer height={spacerHeights.secondType} />
        <ExplainerVideos />
        <Spacer height={spacerHeights.secondType} />
        <Process />
        <Spacer height={spacerHeights.secondType} />

        {/* PORTFOLIO section */}
        <Portfolio />
        <Spacer height={spacerHeights.secondType} />

        {/* CASE-STUDIES section */}
        <CaseStudies />
        <Spacer height={spacerHeights.FifthType} />

        {/* TESTIMONIALS section */}
        <Testimonials />
        <Spacer height={spacerHeights.FourthType} />
      </main>

      {/* FOOTER section - Contact Form */}
      <Footer />
    </>
  )
}
