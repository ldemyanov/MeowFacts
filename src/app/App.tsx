import { Provider } from "react-redux";
import { store } from "./store";
import { Wrapper } from "../enities/ui";
import { MainPage } from "../pages";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <MainPage />
      </Wrapper>
    </Provider>
  );
};

export default App;
