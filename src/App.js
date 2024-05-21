import { useEffect, useState } from 'react';
import './App.css';
import AudioPlayer from './components/AudioPlayer';
import { gapi } from 'gapi-script';
import Login from './components/Login';
import Logout from './components/Logout';

const clientId = '771024504474-ol0f4kdof0juma3s4n932apofoe542da.apps.googleusercontent.com'

function App() {
  const [loginData, setLoginData] = useState()
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }
    gapi.load('client:auth2', start)
  })

  return (
    <>
      <div>
        {loginData ?
          <>
            <div className='logout-button'>
              <Logout setLoginData={setLoginData} />
            </div>
            <video loop autoPlay muted className='bg-video'>
              <source src={require('./assets/background-video.mp4')} type='video/mp4' />
            </video>
            <AudioPlayer />
          </> : <Login setLoginData={setLoginData} />
        }
      </div>
    </>
  );
}

export default App;
