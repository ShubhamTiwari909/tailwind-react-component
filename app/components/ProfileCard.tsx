"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";

type SocialIcon = {
  id: number;
  href: string;
  icon: JSX.Element;
};

type ProfileCardProps = {
  imageSrc: string;
  username: string;
  socialIcons: SocialIcon[];
  description: string;
  followHandler: () => void;
  messageHandler: () => void;
};

const ProfileCard = ({
  imageSrc,
  username,
  socialIcons,
  description,
  followHandler,
  messageHandler,
}: ProfileCardProps) => {
  return (
    <div className="rounded-2xl bg-slate-100/40 border border-t-0 w-80 lg:w-[360px]">
      <div>
        <Image
          src={imageSrc}
          alt="Astronaut"
          width={360}
          height={300}
          quality={100}
          className="object-cover rounded-tl-2xl rounded-tr-2xl"
        />
      </div>
      <div className="font-sans px-8 pt-8 border-slate-200 mb-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-center mb-6">
          {username}
        </h2>
        <ul className="flex flex-wrap justify-center items-center gap-6 mb-6">
          {socialIcons.map((item) => {
            return (
              <Link
                key={item.id}
                target="_blank"
                rel="noreferrer"
                href={item.href}
              >
                {item.icon}
              </Link>
            );
          })}
        </ul>
        <p className="text-center text-slate-800">{description}</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 pb-8 px-8">
        <button
          className="px-6 py-2.5 flex-1 rounded-full border-none bg-pink-500 text-slate-100"
          onClick={() => followHandler()}
        >
          Follow
        </button>
        <button
          className="px-6 py-2.5 flex-1 rounded-full border-none bg-slate-500 text-slate-100"
          onClick={() => messageHandler()}
        >
          Message
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
