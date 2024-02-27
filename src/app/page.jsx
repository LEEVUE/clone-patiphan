import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Vercel from '../../public/vercel.svg'
import Container from './components/Container'

export default function Home() {
  return (
    <main>
     <Container>
      <Navbar />
        <div className="flex-grow text-center p-10">
          <h3 className="text-5xl">NextJS Dashboard</h3>
          <p>become full-stack developer with nextjs</p>
          <div className="flex justify-center my-10">
            <Image src={Vercel} width={300} height={0} />
          </div>
        </div>
        <Footer />
     </Container>
    </main>
  );
}

