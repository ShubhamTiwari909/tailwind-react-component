"use client"
import React from "react";
import ProfileCard from "../../components/ProfileCard";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const socialIcons = [
  {
    id: 1,
    href: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/",
    icon: <FaLinkedinIn />,
  },
  {
    id: 3,
    href: "https://x.com/",
    icon: <FaXTwitter />,
  },
  {
    id: 4,
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
];

const page = () => {
  return (
    <div className="grid place-items-center h-screen">
      <ProfileCard
        imageSrc="https://c4.wallpaperflare.com/wallpaper/260/77/314/astronaut-4k-background-hd-image-wallpaper-preview.jpg"
        username="Shubham Tiwari"
        socialIcons={socialIcons}
        description="Voluptate voluptate id nostrud est anim commodo enim commodo sint deserunt incididunt irure reprehenderit irure."
        followHandler={() => console.log("Follow")}
        messageHandler={() => console.log("Message")}
      />
    </div>
  );
};

export default page;
