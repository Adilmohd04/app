import Cardstun from "@/Components/Cardstun";
import Header from "@/Components/Header";
import ImageCard from "@/Components/ImageCard";
import Lineup from "@/Components/Lineup";
import RunningCard from "@/Components/RunningCard";
import Sentence from "@/Components/Sentence";
import TextSpace from "@/Components/TextSpace";
import Timeline from "@/Components/Timeline";
import Image from "next/image";
import Test from "@/Components/Test";
import Work from "@/Components/Work";
import Vacancy from "@/Components/Vacancy";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
   <>
   <Header/>
   <ImageCard/>
   <Sentence/>
   <RunningCard/>
   <Cardstun/>
   <Timeline/>
   <TextSpace/>
   <Lineup/>
   <Test/>
   <Work/>
   <Vacancy/>
   <Footer/>
   </>
  );
}
