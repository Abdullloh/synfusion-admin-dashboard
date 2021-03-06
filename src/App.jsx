import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
function App() {
  const activeMenu = true;
  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              style={{ background: "blue", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed dark:bg-secondary-dark-bg bg-white">
            Sidebar
          </div>
        ) : (
          <div className="w-0">Siedbar w-0</div>
        )}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
            ${activeMenu ? "md:ml-72" : " min-h-screen flex-2"}`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            Navbar
          </div>
        </div>
        <Routes>
          {routes.apps.map((route) => (
            <Route {...route} />
          ))}
          {routes.dashboard.map((route) => (
            <Route {...route} />
          ))}
          {routes.charts.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
