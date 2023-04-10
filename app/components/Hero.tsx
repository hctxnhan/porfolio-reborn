import Image from "next/image";
import { Alumni_Sans } from "next/font/google";
const sixCaps = Alumni_Sans({
  subsets: ["latin"],
});

export function Hero() {
  return (
    <div className="relative flex h-[100vh] w-full items-center justify-center overflow-hidden">
      <div className="absolute grid w-[60vw] grid-cols-5 gap-4">
        <div className="z-20 col-span-2 flex flex-col justify-center gap-2">
          <h1 className="text-sm uppercase">Hi there, I am Thanh Nhan</h1>
          <p
            className={`text-3xl font-semibold tracking-wide ${sixCaps.className}`}
          >
            Skilled full-stack web developer specializing in Javascript stack.
            Based in Ho Chi Minh.
          </p>
        </div>
        <div className="z-10 col-span-3">
          <Image
            src={"/images/hero.jpg"}
            alt="Thanh Nhan"
            height={700}
            width={700}
            className="scale-[1.25] transform object-contain object-center"
          />
        </div>
      </div>
      <p className="absolute bottom-0 left-0 -translate-x-32 -rotate-6 transform whitespace-nowrap text-[450px] font-semibold">
        FULLSTACK WEB DEVELOPER
      </p>
    </div>
  );
}
