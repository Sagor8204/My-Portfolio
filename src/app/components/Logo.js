import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-10 h-10 flex items-center justify-center">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={40}
        height={40}
        className="w-10 h-10"
      />
    </div>
  );
};

export default Logo;