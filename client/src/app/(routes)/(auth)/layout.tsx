import Image from "next/image";
import Logo from "../../assets/logo1.png";
import Link from "next/link";
import React, { ReactNode } from "react";
import AuthFooter from "../../components/layout/auth-footer";

type Props = { children: ReactNode };

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-between gap-8">
      <Link href="/">
        <Image className="mx-auto" src={Logo} alt="logo" height="100" />
      </Link>
      {children}
      <AuthFooter />
    </div>
  );
};

export default AuthLayout;
