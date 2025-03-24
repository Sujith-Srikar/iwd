import {AuroraBackground} from "./ui/aurora-background";
import { motion } from "motion/react";
import {
  SignedOut,
  SignInButton,
} from "@clerk/clerk-react";

function HeroSection() {
  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Protect and licence you IP
          </div>
          <div className="font-extralight text-base md:text-3xl dark:text-neutral-200 py-4">
            Empower your creative works with an invisible layer of security
          </div>
          <SignedOut>
            <SignInButton>
              <button className="bg-black dark:bg-white cursor-pointer rounded-full w-fit text-white dark:text-black px-6 py-2">
                Get Started
              </button>
            </SignInButton>
          </SignedOut>
        </motion.div>
      </AuroraBackground>
    </>
  );
}

export default HeroSection
