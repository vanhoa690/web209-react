import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/ProductDetail";

const routeConfig = [
  {
    path: "/",
    element: <Homepage />,
  },
  { path: "product/:id", element: <ProductDetail /> },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
