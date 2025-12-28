import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={30}
        height={30}
        className="w-10 h-10"
      />
    </div>
  );
};

export default Logo;