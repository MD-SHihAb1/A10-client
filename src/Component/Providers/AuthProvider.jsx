import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
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

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }


    const signInUser = (email, password) => { 
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
           setUser(currentUser)
           console.log('observing user', currentUser)
           setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])





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
        logOut,
    };


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;