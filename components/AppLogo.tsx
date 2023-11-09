import Image from "next/image";
import LogoImage from "@/public/images/Logo.png";

const AppLogo = () => {
  return <Image src={LogoImage} alt="Logo" width={180} height={150} priority />;
};

export default AppLogo;
