"use client";

import React, { ReactElement, ReactNode, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

type BentoTiltProps = {
  children: ReactNode;
  className: string;
};

export const BentoTilt = ({ children, className = "" }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: any) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

type BentoCardProps = {
  src: string;
  title: string;
  description: string;
};

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="font-zentry text-4xl font-black uppercase md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circularWeb text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circularWeb text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <BentoTilt className="relative mb-7 h-96 w-full overflow-hidden rounded-md border border-white/20 md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title="radiant"
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="relative col-span-2 row-span-1 overflow-hidden rounded-md border border-white/20 transition-transform duration-300 ease-out md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title="zigma"
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>

          <BentoTilt className="relative col-span-2 row-span-1 ms-32 overflow-hidden rounded-md border border-white/20 transition-transform duration-300 ease-out md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title="nexus"
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </BentoTilt>

          <BentoTilt className="relative col-span-2 me-14 overflow-hidden rounded-md border border-white/20 transition-transform duration-300 ease-out md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title="azul"
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </BentoTilt>

          <BentoTilt className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="buppercase special-font max-w-64 font-zentry text-4xl font-black text-black md:text-6xl">
                More coming soon.
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
