import { RouterProvider } from "react-router-dom";
import styles from "./App.module.scss";
import { CustomerProvider } from "./components/contexts/customerContext";
import { router } from "./components/router/router";

const App = () => {
  return (
    <div className={styles.App}>
      <CustomerProvider>
        <RouterProvider router={router} />
      </CustomerProvider>
    </div>
  );
};

export default App;
