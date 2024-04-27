import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loadding, setLoadding] = useState(true)

    const createUser = (email, password, photo, name)=>{
        setLoadding(true);
        return createUserWithEmailAndPassword(auth, email,  password, photo, name)
    };

    
    const singIn = (email, password)=>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = ()=>{
        setLoadding(true)
        return signInWithPopup(auth, googleProvider)
    }; 

    const handleGithubeSign=()=>{
        setLoadding(true)
        return signInWithPopup(auth, githubProvider)
    };

    const logOut = ()=>{
        setLoadding(true)
        return signOut(auth);
    }


    useEffect(()=>{
        const clear = onAuthStateChanged(auth, currentUser =>{
             console.log(currentUser);
             setUser(currentUser)
             setLoadding(false);
             
         })
         // clear state 
         return () =>{
             clear()
         }
     },[])

    const userInfo ={
        user,
        loadding,
        createUser,
        singIn,
        signInWithGoogle,
        handleGithubeSign,
        logOut,

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;