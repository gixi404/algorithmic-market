import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

function useDataUser (isAuthenticated){
    const {user, getAccessTokenSilently} = useAuth0()
    const [profile, setProfile] = useState('')

    const sendData = async(data) =>{
        const info = {
          token : {data},
          user: user
        };
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(info),
        };
        try{ 
          const res = await fetch('http://localhost:3001/guardartoken',requestOptions)
          if(!res.ok){
            throw new Error('la solicitud falló')
          }
          const json = await res.json()
          console.log(json)
        }catch(e){
          console.error(e.message)
        }
}

    const getToken = async() => {
        if(isAuthenticated){
            try{
                const accessToken = await getAccessTokenSilently();
                sendData(accessToken)
                const User ={user: user, token: accessToken}
                window.localStorage.setItem(
                    'loggedUser', JSON.stringify(User)
                )
                setProfile(User)
            }
            catch(e){
                throw new Error('no se puedo obtene el token')
            }
        }
    }
    useEffect(()=>{
        if(isAuthenticated){
            getToken()
        }
    },[])
        return {profile}
}
export default useDataUser
