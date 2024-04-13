import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import apiLink from '../../baseUrl';

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  
    const logout = async () => {
        setLoading(true);
        try
        {
            const res = await fetch(`/${apiLink}/auth/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            if(data.error)
            {
                throw new Error(data.error);
            }

            localStorage.removeItem('chat-user');
            setAuthUser(null);
        }
        catch(error)
        {
            toast(error.message);
        }
        finally
        {
          setLoading(false);
        }
    }

    return {loading, logout};

}

export default useLogout