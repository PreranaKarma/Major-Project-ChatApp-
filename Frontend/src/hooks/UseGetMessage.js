import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/UseConversation'
import toast from 'react-hot-toast';

const UseGetMessage = () => {
    const [loading, setLoading] = useState(false)
    const {messages, setMessages, selectConversation} = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)

            try {
                const res = await fetch (`http://localhost:5000/api/messages/${selectConversation._id}`);
                const data = await res.json();
                if(data.error) throw new Error(data.error)
                setMessages(data)
            } catch (error) {
                toast.error(error.message)
            }finally {
                setLoading(false)
            }
        }
        if(selectConversation?._id) getMessages()
    },[selectConversation?._id,setMessages])

    return {messages, loading}
}

export default UseGetMessage
