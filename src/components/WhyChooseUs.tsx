"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const MusicSchoolContent = [
    {
        title: "Harmonious Journey",
        description: 
            "Embark on a Harmonious Journey through sound. This collection of tracks weaves together a tapestry of melodies and rhythms that will take you on an auditory adventure. Perfect for background music during work or study sessions, or just to unwind and enjoy the music.",
    },
    {
        title: "Beats of Serenity",
        description: 
            "Find your peace with Beats of Serenity. This album features a mix of chillout and downtempo tracks that create a calming atmosphere. Whether you are meditating, practicing yoga, or just relaxing, these soothing beats will help you find your inner calm.",
    },
    {
        title: "Acoustic Reflections",
        description: 
            "Enjoy the pure and soulful sounds of Acoustic Reflections. This album highlights the beauty of acoustic instruments, with tracks featuring guitar, piano, and strings. Ideal for intimate gatherings, quiet evenings, or any time you want to appreciate the simplicity of acoustic music.",
    },
    {
        title: "Electronic Horizons",
        description: 
            "Explore new sonic landscapes with Electronic Horizons. This album blends futuristic electronic sounds with atmospheric elements, creating a unique listening experience. Perfect for parties, workouts, or when you want to immerse yourself in cutting-edge music.",
    },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={MusicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs
