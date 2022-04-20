import "./App.css";
import { useRoutes } from "react-router-dom"
import { routes } from "config";
import { ScrollToTop } from "utilities";
import { Navbar, Footer } from "components"
function App() {
  const routeElement = useRoutes(routes)
  return (
    <>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        {routeElement}
      </div>
      <Footer />
    </>
  );
}

export default App;
