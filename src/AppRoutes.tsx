import { Route, Switch } from "react-router-dom";
import { About } from "screens/About";
import { Articles } from "screens/Articles";
import { Contact } from "screens/Contact";
import { NotFoundScreen } from "screens/NotFound";
import { Footer } from "components/Footer";


interface LayoutComponentProps {
  children: React.ReactNode;
}

const LayoutComponent = ({ children }: LayoutComponentProps) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

function AppRoutes() {
  return (
    <Switch>
      <Route path="/about">
        <LayoutComponent>
          <About />
        </LayoutComponent>
      </Route>
      <Route path="/contact" component={Contact} />
      <Route path="/" exact>
        <LayoutComponent>
          <Articles />
        </LayoutComponent>
      </Route>
      <Route path="*">
        <LayoutComponent>
          <NotFoundScreen />
        </LayoutComponent>
      </Route>
    </Switch>
  );
}

export default AppRoutes;
