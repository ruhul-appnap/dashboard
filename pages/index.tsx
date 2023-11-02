import Image from "next/image";

import { useGetUser } from "@/repo/api-hooks/useGetUser";

export default function Home() {
  const { data: userData } = useGetUser(1, {});

  return (
    <main className="w-screen border flex items-center justify-center">
      <section className="space-y-3 w-full ">
        {userData?.data.map((user) => (
          <article className="py-4 bg-slate-800 text-gray-400 rounded-md px-4 shadow-lg flex items-center space-x-4">
            <p className="font-extrabold">{user.id}</p>
            <Image
              src={user.avatar}
              width={50}
              height={50}
              className="rounded-full"
              alt="user-profile"
            />

            <div key={user.id}>
              {user.first_name} {user.last_name}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
