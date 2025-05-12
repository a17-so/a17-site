'use client';

import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';


export default function Home() {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest",
      description: "We'll be in touch shortly about the private beta.",
    });
  };

  return (
   <div className="flex flex-col min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)] scroll-smooth">
   <main className="flex flex-col items-center text-center gap-12 w-full flex-grow justify-start min-h-screen">
     <div className="flex flex-col justify-center min-h-screen w-full">
        {/* Header Section */}
        <pre className="font-mono mr-6" style={{ fontFamily: 'monospace' }}>
        {`
                              111111      7777777777777777777
                             1::::::1    7::::::::::::::::::7
                            1:::::::1   7::::::::::::::::::7
                            111:::::1   777777777777:::::::7
            aaaaaaaaaaaaa      1::::1              7::::::7 
            a::::::::::::a     1::::1             7::::::7  
            aaaaaaaaa:::::a    1::::1            7::::::7   
                     a::::a    1::::l           7::::::7    
              aaaaaaa:::::a    1::::l          7::::::7     
            aa::::::::::::a    1::::l         7::::::7      
          a::::aaaa:::::::a    1::::l        7::::::7       
          a::::a    a:::::a    1::::l       7::::::7        
          a::::a    a:::::a 111::::::111   7::::::7         
          a:::::aaaa::::::a 1::::::::::1  7::::::7          
          a::::::::::aa:::a 1::::::::::1 7::::::7           
            aaaaaaaaaaaaaaa  11111111111 77777777            
                                                 
          `}
        </pre>

        
        
        <div className="flex flex-col items-center gap-2 mb-32">
          <h1 className="mb-2 text-center">
            the innovation lab rethinking{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              Consumer Products
            </code>
            .
          </h1>
          <h1 className="text-center tracking-[-.01em]">
            manufacturing cultural gravity.
          </h1>
        </div>


        {/* Quick Links */}
        <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
        >
          <Image
            className="invert"
            aria-hidden
            src="/portfolio.svg"
            alt="Portfolio icon"
            width={16}
            height={16}
          />
          portfolio
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#manifesto"
        >
          <Image
            className="invert"
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          manifesto
        </a>

          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://x.com/ChebiumAbhay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/x.svg"
              alt="Advaith X Profile"
              width={16}
              height={16}
            />
            abhay →
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://x.com/fwadzter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/x.svg"
              alt="Advaith X Profile"
              width={16}
              height={16}
            />
            advaith →
          </a>
        </div>
     </div>

        {/* manifesto section */}
        <motion.section
          id="manifesto"
          className="min-h-screen py-64 px-6 md:px-12 max-w-3xl mx-auto text-left text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            manifesto
          </h2>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-base md:text-lg font-bold">
              consumer everything.
            </p>

            <p className="text-sm md:text-base">
              a17 is building anything and everything in the consumer space with the potential to shift behavior, hijack attention, and bend culture (negatively or positively) and pull in millions. we're not in the business of moralizing impact. We're in the business of magnitude. being iconic and lives touched are our two most important KPI's.
            </p>

            <p className="text-sm md:text-base">
              we are a creative studio + analytical lab at the same time. we launch things that spark obsession, controversy, mimicry, and movement.
            </p>

            <p className="text-sm md:text-base">
              our thesis: cultural relevance is the most underpriced asset in tech. we're here to exploit it.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              we build, scale, invest in, and acquire consumer ventures across:
              <br /><br />
              {"-"} viral apps<br />
              {"-"} consumer hardware<br />
              {"-"} AR tech<br />
              {"-"} brands
            </p>

            <p className="text-sm md:text-base">
              join the waitlist below for the portfolio drop.
            </p>
          </motion.div>

          <motion.form 
            className="mt-12 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-secondary border-0"
              required
            />
            <Button type="submit" className="bg-white text-black shrink-0">
              Send
            </Button>
          </motion.form>
        </motion.section>

        <motion.section
          id="hiring"
          className="min-h-screen py-64 px-6 md:px-12 max-w-3xl mx-auto text-left text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            hiring
          </h2>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-base md:text-lg font-bold">
              based in sf
            </p>

            
            <p className="text-sm md:text-base">
              our team is a tight-knit group of technical founders with deep experience across consumer marketing and building product. we work to win.
            </p>

            <p className="text-sm md:text-base">
              to apply email us at <a href="mailto:abhay@a17.so" className="underline font-bold">abhay@a17.so</a> with what you're good at.
            </p>

            <p className="text-base md:text-lg font-bold">
              we are looking for:
            </p>

            <p className="text-sm md:text-base">
              - polymaths<br />
              - philosophers<br />
              - growth hackers<br />
              - engineers<br />
              - :)  
            </p>
          </motion.div>
        </motion.section>

      </main>

    
    </div>
  );
}
