import "./App.css";
import Profile from "./Component/profile";
 

function App() {
  return (
    <>
 
 <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Profile
        name="Jane Doe"
        title="UI/UX Designer"
        image="https://randomuser.me/api/portraits/women/44.jpg"
        backgroundImage="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80"
        bio="Designing interfaces with empathy and simplicity."
        followers={1250}
        likes={3200}
        photos={85}
      />
    </div>
    </>
  );
}

export default App;
