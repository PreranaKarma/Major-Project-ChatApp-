import React, { useState } from 'react'
import useConversation from '../zustand/UseConversation'
import toast from "react-hot-toast";

const UseSendMessage = () => {

    const [loading, setLoading] = useState(false)
    const {messages, setMessages, selectedConversation} = useConversation ();

    const sendMessage = async (message) => {
        setLoading(true)
        try {

            const token = localStorage.getItem("token"); // or wherever you're storing the auth token
            console.log("Token:", token); // 🔍 Debug

            const res = await fetch (`http://localhost:5000/api/message/send/${selectedConversation._id}`,{
                method:'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${token}`  // ✅ Add this line
                },
                body:JSON.stringify({message})
            })
            const data = await res.json()
            if(data.error) throw new Error(data.error)

            setMessages([...messages, data])
        } catch (error) {
            toast.error(error.message);
        }finally {
            setLoading(false)
        }
    }
     

    return {sendMessage, loading}
}

export default UseSendMessage





