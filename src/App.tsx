import ScrollyCanvas from "./components/ScrollyCanvas";
import AboutMe from "./components/AboutMe";
import WhatIBring from "./components/WhatIBring";
import SkillsTools from "./components/SkillsTools";
import AIWorkflow from "./components/AIWorkflow";
import TheElefhant from "./components/TheElefhant";
import GrowthAndImpact from "./components/GrowthAndImpact";
import LaunchPosts from "./components/LaunchPosts";
import SocialAnalytics from "./components/SocialAnalytics";

export default function App() {
  return (
    <main className="bg-[#121212] min-h-screen selection:bg-white/30 selection:text-white">
      <ScrollyCanvas />
      <AboutMe />
      <WhatIBring />
      <SkillsTools />
      <TheElefhant />
      <GrowthAndImpact />
      <LaunchPosts />
      <SocialAnalytics />
      <AIWorkflow />
    </main>
  );
}
