import { Provider } from "react-redux";
import { store } from "./store";
import { Wrapper } from "../enities/ui";
import { DetailPage, MainPage } from "../pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <BrowserRouter basename="/MeowFacts/">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/detail/:id/:imgId" element={<DetailPage />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Provider>
  );
};

export default App;
