import "./App.css";
import Layout from "./components/Layout";
import PageHome from "./pages/PageHome";

function App() {
  return (
    <div className="container_nav">
      <PageHome />
      <div className="containerLay">
        <Layout />
      </div>
    </div>
  );
}

export default App;
