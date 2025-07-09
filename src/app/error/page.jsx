import Header from "@/app/_components/header";
export default function ErrorPage() {
  return (
    <div>
      <Header />
      <h2>Stand in Error Page</h2>
      <p>
        You may have entered the wrong password, or tried to create an account
        with an email that is already registered.
      </p>
    </div>
  );
}
