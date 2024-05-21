import { GoogleLogout } from "react-google-login"

const clientId = '771024504474-ol0f4kdof0juma3s4n932apofoe542da.apps.googleusercontent.com'

function Logout({ setLoginData }) {
    const onSuccess = () => {
        console.log('Log out successful!')
        setLoginData()
    }

    return (
        <div className="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={'LogOut'}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout