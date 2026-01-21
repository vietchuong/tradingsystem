import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ProgramPillars from "@/components/ProgramPillars";
import RCalc from "@/components/RCalc";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <PainPoints />
            <ProgramPillars />
            <RCalc />
            <SocialProof />
            <Footer />
        </main>
    );
}
