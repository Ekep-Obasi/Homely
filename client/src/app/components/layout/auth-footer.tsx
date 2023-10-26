import Link from "next/link";
import { Separator } from "../ui/separator";

export default function AuthFooter() {
  return (
    <footer className="w-full">
      <div className="flex justify-between py-5 flex-wrap gap-2 p-5 border-t-2 sm:container">
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
      </div>
    </footer>
  );
}
