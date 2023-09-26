import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { getCurrentUser } from "./utils/firebase/firebase.utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  // actually the dispatch never changes, but we need to pass it as a dependency to useEffect to avoid a warning
  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentUser().then((userAuth) => {
      console.log("userAuth", userAuth);
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;
