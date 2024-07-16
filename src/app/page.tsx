import Login from "./(auth)/login/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <header>
        <Login />
      </header>
    </main>
  );
}
