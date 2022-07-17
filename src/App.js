import Main from "./components/Main";

import { Apps, GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <div className="app-container">
      <GlobalStyle />
      <h1>List Pokemon</h1>
      <Main />
    </div>
  );
};
export default App;
