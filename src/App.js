import ProfileContainer from "./components/profile/ProfileContainer";
import {Route, Routes} from 'react-router-dom'
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="container">
     <ProfileContainer/>
      <Routes>
        <Route path="/profile/:id" element={<Profile/>}/>
     </Routes>
    </div>
  );
}

export default App;
