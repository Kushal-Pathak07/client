import React, { useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';
import apiLink from '../../baseUrl';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const {messages, setMessages, selectedConversation} = useConversation();

  const sendMessage = async (message) => {
      setLoading(true);
      try
      {
        const res = await fetch(`/${apiLink}/messages/send/${selectedConversation._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message
            })
        })
        const data = await res.json();
        if(data.error)
        {
            throw new Error(data.error);
        }

        setMessages([...messages, data]); //updating messages in conversation
      }
      catch(error)
      {
        toast.error(error.message);
      }
      finally
      {
        setLoading(false);
      }
  }
  return {loading, sendMessage};
}

export default useSendMessage