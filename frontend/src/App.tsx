import Layout from './Layout'
import { Routes, Route } from "react-router";
import Map from './pages/Map';
import Alerts from './pages/Alerts';
import SafetyGuides from './pages/SafetyGuides';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="map" element={<Map />}/>
          <Route path="alerts" element={<Alerts />}/>
          <Route path="safety-guides" element={<SafetyGuides />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
