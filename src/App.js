import './App.css';
import GlassBox from './components/GlassBox';
import Socials from './components/Socials';



function App() {
  return (
    <div className="w-full h-full min-h-[100vh] flex flex-col items-center bg-red-200">
      <GlassBox />
      <Socials />
    </div>
  );
}

export default App;
