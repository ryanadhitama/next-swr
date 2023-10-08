import { useUnicorns } from "@/libs/hooks/unicorn";

export default function Home() {
  const { data } = useUnicorns();
  return (
    <div>
      {data?.map((item) => (
        <div>{item?.name}</div>
      ))}
    </div>
  );
}
