import SampleButtons from "@/components/guides/buttons";
import ColorScheme from "@/components/guides/colorscheme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between p-24">
      <SampleButtons/>
      <ColorScheme />
    </main>
  );
}
