import Image from "next/image";
import Link from "next/link";
import React from "react";

type LogoProps = {
  className?: string;
  profileImg?: string;
};

const Logo: React.FC<LogoProps> = ({
  className,
  profileImg = "/images/profile-img.png",
}) => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
        <Image
          src={profileImg}
          alt="Profile Picture"
          className="w-full h-auto rounded-full"
          width={64}
          height={64}
        />
      </div>
      <span className="font-bold text-xl">DevAndre</span>
    </Link>
  );
};

export default Logo;
