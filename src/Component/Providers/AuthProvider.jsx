import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
import app from "../Firebase/firebase.config";




const auth = getAuth(app);


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signInUser = (email, password) => { 
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const signWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const signWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    
    


    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signWithGoogle,
        signWithGithub,
    };


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;