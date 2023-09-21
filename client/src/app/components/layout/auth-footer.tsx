import Link from "next/link";
import { Separator } from "../ui/separator";

export default function AuthFooter() {
  return (
    <footer className="border-t-2 sm:container w-100 absolute bottom-0 flex justify-between py-5 lg:w-full flex-wrap space-x-1 space-y-1 mx-auto">
      <div className="flex gap-5">
        <Link className="text-sm text-blue-400 hover:underline" href="/">
          Terms
        </Link>
        <Separator orientation="vertical" />
        <Link className="text-sm text-blue-400 hover:underline" href="/">
          Privacy
        </Link>
      </div>
      <Link className="text-sm text-slate" href="/">
        Copyright @ 2023. All rights reserved
      </Link>
    </footer>
  );
}
