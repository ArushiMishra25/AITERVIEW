import Image from 'next/image';
import Banner from './dashboard/_components/Home/Banner';
import HomePageHeader from './dashboard/_components/Home/HomePageHeader';
import Service from './dashboard/_components/Home/Service';
import HowItWork from './dashboard/_components/Home/HowItWork';
import CallToAction from './dashboard/_components/Home/CallToAction';
import Faq from './dashboard/_components/Home/Faq';
import Testimonials from './dashboard/_components/Home/Stats';
import Footer from './dashboard/_components/Home/Footer';

export default function Home() {
  return (
    <div>
      <HomePageHeader />
      <div>
        <Banner />
      </div>
      <div>
        <CallToAction />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <HowItWork />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
