import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <Image src={''} alt=""/>
        <h1>Bingo Guides</h1>
        <ul>
          <button>Color Sceheme</button>
          <button>Code</button>
          <button>Resource</button>
        </ul>
        
      </nav>
    </main>
  );
}
