import { Alumni_Sans } from "next/font/google";
import Image from "next/image";

const sixCaps = Alumni_Sans({
  subsets: ["latin"],
});

export function Hero() {
  return (
    <div className="relative flex h-[100vh] w-full snap-start items-center justify-center overflow-x-clip">
      <div className="absolute grid w-[60vw] grid-cols-5 gap-4">
        <div className="z-20 col-span-2 flex flex-col justify-center gap-2">
          <h1 className="text-sm uppercase">Hi there, I am Thanh Nhan</h1>
          <p
            className={`text-4xl font-semibold tracking-wide ${sixCaps.className}`}
          >
            Skilled full-stack web developer specializing in Javascript stack.
            Based in Ho Chi Minh. 👋
          </p>
        </div>
        <div className="z-10 col-span-3 -rotate-6 transform">
          <Image
            src={"/images/hero.jpg"}
            alt="Thanh Nhan"
            height={700}
            width={700}
            className="scale-[1.25] transform object-contain object-center"
          />
        </div>
      </div>
      <p className="absolute bottom-0 left-0 -translate-x-32 -rotate-6 transform whitespace-nowrap text-[450px] font-semibold animate-[marqueeone_15s_linear_infinite]">
        FULLSTACK WEB DEVELOPER
      </p>
      <p className="absolute bottom-0 left-0 -translate-x-32 -rotate-6 transform whitespace-nowrap text-[450px] font-semibold delay-[15000] animate-[marqueetwo_15s_linear_infinite]">
        FULLSTACK WEB DEVELOPER
      </p>
    </div>
  );
}
