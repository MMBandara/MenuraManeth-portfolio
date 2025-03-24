import NavbarComponent from "./components/navbar";
import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"
import { Container } from "react-bootstrap"
import GitHubRepos from "./components/projects"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <NavbarComponent />
      <About />
      <Container fluid className="bg-light py-3">
        <GitHubRepos username="MMBandara" />
      </Container>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
