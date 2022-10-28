import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./pages/HomePage";
import CoinsPage from "./pages/CoinsPage";

import { styled } from "@mui/system";

function App() {
  // const useStyles = makeStyles({
  //   App: {
  //     backgroundColor: "#14161a",
  //     color: "white",
  //     minHeight: "100vh",
  //   },
  // });
  const MyComponent = styled("div")({
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  });

  return (
    <BrowserRouter>
      <MyComponent>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinsPage />} />
        </Routes>
      </MyComponent>
    </BrowserRouter>
  );
}

export default App;
