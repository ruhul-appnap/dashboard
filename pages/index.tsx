import { useGetUser } from "@/repo/api-hooks/useGetUser";

export default function Home() {
  const { data: userData, isLoading, isFetching } = useGetUser(1, {});

  return (
    <main>
      <section>
        {userData?.data.map((user) => (
          <div>
            {user.id} {user.first_name} {user.last_name}
          </div>
        ))}
      </section>
    </main>
  );
}
