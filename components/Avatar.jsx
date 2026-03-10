import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/image.png"
        alt="Sahil Kumar Chaudhary profile photo"
        width={737}
        height={678}
        priority
        className="translate-z-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
