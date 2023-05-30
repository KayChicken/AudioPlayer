import s from './App.module.css';
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

function App() {
  return (
    <div className={s.background}>
      <AudioPlayer/>
    </div>
  );
}

export default App;
