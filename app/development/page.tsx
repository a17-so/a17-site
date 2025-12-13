import React from "react";
import Particles from "../../components/particles";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        a17
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">

        <div className="flex flex-col space-y-2">

          <h2 className="text-sm text-zinc-300">
            the &nbsp;<span className="italic text-zinc-200 font-bold text-md">consumer</span>&nbsp;&nbsp;&nbsp;everything company. starting with apps.
          </h2>

          <h2 className="text-sm text-zinc-300">
            {" "}
          </h2>
          <h2 className="text-sm text-zinc-300">
            {" "}
          </h2>
          

          <h2 className="text-sm text-zinc-300">
            we take on projects where software can create&nbsp;
            <span className="italic text-zinc-200 font-bold text-md">meaningful impact</span>
            &nbsp;at scale.
          </h2>


          <h2 className="text-sm text-zinc-500">
            a17 inc. © 2025
          </h2>
          <h2 className="text-sm text-zinc-300">
            {" "}
          </h2>
          <h2 className="text-sm text-zinc-300">
            {" "}
          </h2>
          <h2 className="text-sm text-zinc-300">
            {" "}
          </h2>

          <h2 className="text-sm text-zinc-700">
            talk to us <a href="mailto:abhay@a17.so" className="italic underline">here</a>.
          </h2>

        </div>
        </div>


    </div>
  );

}
