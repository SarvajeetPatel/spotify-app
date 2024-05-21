import './App.css';
import AudioPlayer from './components/AudioPlayer';

function App() {
  console.log(window.location.href)
  return (
    <>
      {(window.location.href !== 'http://localhost:3000/') ?
        <h1> Access Denied! huhh </h1>
        :
        <AudioPlayer />
      }
    </>
  );
}

export default App;
