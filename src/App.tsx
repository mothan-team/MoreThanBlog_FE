import AppRoutes from "./AppRoutes";
import { Nav } from "components/Nav";
import { Footer } from "components/Footer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="py-0 px-20 text-gray-600 tracking-wide">
        <Nav />
        <main>
          <AppRoutes />
        </main>
        <Switch>
          <Route path="/about">
            <Footer />
          </Route>
          <Route path="/contact">
          </Route>
          <Route path="/">
            <Footer />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
    //test git
  );
}

export default App;
