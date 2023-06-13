import Home from "./routes/home/home.component";
import { Outlet, Route, Routes } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am Navigation bar</h1>
      </div>
      {/* Outlet is for rendering child components in subroutes */}
      <Outlet />
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
