// import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUpCard from "./components/SignUpCard";
import SignInCard from "./components/SignInCard";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/signup" element={<SignUpCard />} />
        <Route path="/auth/signin" element={<SignInCard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
