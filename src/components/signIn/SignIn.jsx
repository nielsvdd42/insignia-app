import { signInWithGooglePopup, createUserDocumentFromAuth  } from "../../utils/firebase/firebase.utils"
import { Button } from "react-bootstrap";
function SignIn(){
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }
    return <div className="signInPage"><div className="signInContainer">
        <Button variant='light' size="lg" onClick={logGoogleUser}>Sign in with Google</Button>
    </div></div>
}

export default SignIn