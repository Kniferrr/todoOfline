import TaskComponents from "@/components/TaskComponents/TaskComponents";
import { Providers } from "@/lib/providers";

export default function Home() {
  return (
    <main>
      <Providers>
        <TaskComponents />
      </Providers>
    </main>
  );
}
