import AppRoutes from "./AppRoutes";
import { Nav } from "components/Nav";
import { Footer } from "components/Footer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
      <div className="py-0 px-20 text-gray-600 tracking-wide">
        <Nav />
        <main>
          <AppRoutes />
        </main>
      </div>
  );
}

export default App;
