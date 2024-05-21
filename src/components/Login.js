import { GoogleLogin } from 'react-google-login'

const clientId = '771024504474-ol0f4kdof0juma3s4n932apofoe542da.apps.googleusercontent.com'

function Login({ setLoginData }) {
    const onSuccess = (res) => {
        console.log('LOGIN SUCCESS! Current User : ', res?.profileObj)
        setLoginData(res.profileObj)
    }

    const onFailure = (res) => {
        console.log('LOGIN FAILED! res : ', res)
    }

    return (
        <div className='signInButton'>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login