import BlogList from "../(home)/_components/BlogList";
import Jumbotron from "../(home)/_components/Jumbotron";

export default function Home() {
  return (
    <main className="container mx-auto px-4 pb-100">
      <Jumbotron/>
      <BlogList/>
    </main>
  );
}
