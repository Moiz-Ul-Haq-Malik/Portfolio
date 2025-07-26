import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// componet Import
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt8 xl:pb-24">
          {/* text */}

          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Wordpress Developer <span className="text-accent">.</span>
            </span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Moiz Ul Haq </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm passionate about creating beautiful digital experiences and
              skilled in a wide range of programming languages and technologies.
            </p>

            {/* buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="#" // Path to the PDF file in the public directory
                download="#" // File name for the download
                className="uppercase flex items-center gap-2"
              >
                <Button variant="outline" size="lg">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full 
                  flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
