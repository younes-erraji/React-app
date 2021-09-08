import Nav from "./components/nav";
import Main from "./components/main";
import Content from "./components/content";
import { Footer } from "./components/footer";

function App() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <main>
        <Main />
      </main>
      <div className="content">
        <Content />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
