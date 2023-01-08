import { Article } from "./components/Article";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const SirokoApp = () => {
  return (
    <>
      <div className="container">
        <header>
          <Header />
        </header>

        <main>
          <section>
            <Article />
          </section>
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
