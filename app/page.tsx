import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ChatDemo from "@/components/ChatDemo";
import Demo from "@/components/Demo";
import Agents from "@/components/Agents";
import Results from "@/components/Results";
import Industries from "@/components/Industries";
import Voices from "@/components/Voices";
import Team from "@/components/Team";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <ChatDemo />
        <Demo />
        <Agents />
        <Results />
        <Industries />
        <Voices />
        <Team />
      </main>
      <FinalCta />
    </>
  );
}
