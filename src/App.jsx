import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import { routesConfig, componentMapping } from "./components/routes/Routes";
function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              {routesConfig.map((route) => {
                const Component = componentMapping[route.component];
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Component />}
                  />
                );
              })}
            </Route>
          </Routes>
        </Suspense>
      </Router>

     
    </>
  );
}

export default App;
