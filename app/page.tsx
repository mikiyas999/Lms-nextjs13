import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button variant="link">send</Button>
      <p className="text-xl font-semibold text-red-500">hello world </p>
    </div>
  );
}
