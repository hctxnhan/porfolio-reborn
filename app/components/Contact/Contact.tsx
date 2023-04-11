import { Heading } from "@/src/components/Heading";
import { Section } from "../Section";

export function Contact() {
  return (
    <Section>
      <div className="flex h-full flex-col items-center justify-center">
        <Heading size={"h1"} fontFamily={"alumniSans"} weight={"bold"}>
          <p className="uppercase">Working together?🤙</p>
          <p className="text-4xl uppercase tracking-wide">
            {`Let's make something great.`}
          </p>
        </Heading>
        <button className="aspect-square -translate-y-16 transform rounded-full bg-teal-600 bg-opacity-70 p-8 text-2xl shadow-lg shadow-slate-700 backdrop-blur-[2px]">
          Contact me
        </button>
      </div>
      <div className="absolute bottom-0 left-0 flex w-full">
        <button className="flex-1 p-8 border-2 border-x-[1px] border-l-0 backdrop-blur-sm">Facebook</button>
        <button className="flex-1 p-8 border-2 border-x-[1px] backdrop-blur-sm">Gmail</button>
        <button className="flex-1 p-8 border-2 border-x-[1px] backdrop-blur-sm">Youtube</button>
        <button className="flex-1 p-8 border-2 border-x-[1px] border-r-0 backdrop-blur-sm">Phone</button>
      </div>
    </Section>
  );
}
