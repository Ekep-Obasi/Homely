import Image from "next/image";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-xl text-red-300">
        Homely - A house rental application.
      </h1>
      <Button>Click me</Button>
    </main>
  );
}
