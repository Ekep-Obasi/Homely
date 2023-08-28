import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="border-t-2 container w-100 flex justify-between py-5 lg:w-full">
      <div className="flex gap-5">
        <Link className="text-sm text-blue-400 hover:underline" href="/">
          Terms
        </Link>
        <Separator orientation="vertical" />
        <Link className="text-sm text-blue-400 hover:underline" href="/">
          Privacy
        </Link>
      </div>
      <Link className="text-sm" href="/">
        Copyright @ 2023. All rights reserved
      </Link>
    </footer>
  );
}
