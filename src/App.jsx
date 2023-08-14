import Header from "./components/header";
import Content from "./components/content";
import Spaceship from "./components/spaceship";

function App() {
  return (
    <div className="App w-full h-screen flex flex-col bg-grayDark">
      <Header />
      <Content />
      <Spaceship />
    </div>
  );
}

export default App;
