import { Navbar } from 'components/navbar/navbar'
import { CallToActionSection } from 'components/sections/call-to-action/call-to-action-section'
import { FeaturesSection } from 'components/sections/features/features-section'
import { Footer } from 'components/sections/footer/footer'
import { HeroSection } from 'components/sections/hero/hero-section'
import { ProductiveSection } from 'components/sections/productive/productive-section'
import { TestimonialsSection } from 'components/sections/testimonials/testimonials-section'
import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {

  const name = "Fylo landing page with dark theme and features grid";
  const title = name;
  const description = "Challenge Fylo landing page with dark theme and features grid, by Frontend Mentor";
  const url = "https://exquisite-seahorse-90d530.netlify.app/";

  return (
    <>
      <Head>
           {/* <!-- Site Name, Title, and Description to be displayed --> */}
        <meta
          property="og:site_name"
          content={ name }
        />
        <meta property="og:title" content={ title } />
        <meta
          property="og:description"
          content={ description }
        />
        {/* <!-- Image to display -->  */}
        <meta
          property="og:image"
          content={ url + "preview.jpg" }
        />

        {/* <!-- No need to change anything here -->  */}
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* <!-- Website to visit when clicked social medias-->  */}
        <meta
          property="og:url"
          content={ url }
        ></meta> 
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"></link>
        
        <title>{ title }</title>     
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductiveSection/>  
        <TestimonialsSection />
        <CallToActionSection/>
      </main>
      <Footer/>
     
    </>
  )
}

export default Home
