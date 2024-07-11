import { Lincode } from "./Content/Lincode";
import { OpenAdvertisement } from "../Pages/OpenAdvertisement";
import Message from "../Pages/Message";
import { Route, Routes } from "react-router-dom";
import Layuot from "./Layuot/Layuot";
import AddAdvertisement from "../Pages/add-advertisement";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layuot />}>
          <Route path="/" element={<Lincode />} />
          <Route path="/advertisement" element={<OpenAdvertisement />} />
          <Route path="/message" element={<Message />} />
          <Route path="/add/advertisement" element={<AddAdvertisement />} />
      </Route>
    </Routes>
  );
};
