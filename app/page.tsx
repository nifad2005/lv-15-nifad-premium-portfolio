import Image from "next/image";
import Essence from "./components/home/Essence";
import Crafts from "./components/home/Crafts";
import Principle from "./components/home/Principle";

export default function Home() {
  return (
    <>
    <main className="w-full min-h-96 py-50
       flex flex-col gap-8
    " >
        <Essence/>
        <Crafts/>
        <Principle/>
    </main>
    </>
  );
}
