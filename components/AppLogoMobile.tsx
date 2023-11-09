import Image from "next/image";
import LogoImage from "@/public/images/Logo.png";
import Link from "next/link";

const AppLogoMobile = () => {
  return (
    <Link href="/">
      <Image src={LogoImage} alt="Logo" width={150} height={120} priority />
    </Link>
  );
};

export default AppLogoMobile;
