import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <main className="flex-col items-center justify-center">
      <h1 className="text-xl text-red-300">
        Homely - A house rental application.
      </h1>
      <Button>Click me</Button>
      <div className="mx-auto">
      </div>
    </main>
  );
}
