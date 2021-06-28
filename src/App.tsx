import AppRoutes from "./AppRoutes";
import { Nav } from "components/Nav";

function App() {
  return (
    <div className="py-0 px-8 sm:px-12 lg:px-16 xl:px-20 text-gray-600 tracking-wide">
      <Nav />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App
