"use client";
import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
} 

export default function Home() {
  const {data, error, isLoading} = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  })

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">React query in next js</h1>
      <ul className="mt-4">
        {data.map((post: { id: number; title: string }) => (
          <li key={post.id} className="mb-2">
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
