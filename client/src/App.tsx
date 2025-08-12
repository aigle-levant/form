import { Routes, Route } from "react-router-dom";
import Default from "./layout/Default";
import Aadhar from "./pages/Aadhar";
import PAN from "./pages/PAN";
import Success from "./pages/Success";

export default function App() {
  return (
    <Routes>
      <Route element={<Default />}>
        <Route path="/" element={<Aadhar />} />
        <Route path="/pan" element={<PAN />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
