import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login"
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons"
import "./App.css"
import { useState } from "react"

function App() {
  const [profile, setProfile] = useState(null)
  const [provider, setProvider] = useState(null) // Mantém o controle de qual provedor foi usado

  const handleLogout = () => {
    setProfile(null)
    setProvider(null)
  }

  return (
    <>
      {!profile ? (
        <>
          <LoginSocialFacebook
            appId={import.meta.env.VITE_FB_APP_ID}
            onResolve={(response) => {
              console.log("Facebook response:", response)
              setProfile(response.data)
              setProvider("facebook")
            }}
            onReject={(error) => {
              console.log(error)
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>

          <LoginSocialGoogle
            client_id={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            onResolve={(response) => {
              console.log("Google response:", response)
              setProfile(response.data)
              setProvider("google") //
            }}
            onReject={(error) => {
              console.log(error)
            }}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>
        </>
      ) : (
        ""
      )}

      {profile ? (
        <div>
          <img
            src={
              provider === "facebook"
                ? profile.picture.data.url
                : provider === "google"
                ? profile.picture
                : ""
            }
            alt="Profile"
          />
          <h1>{profile.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default App
