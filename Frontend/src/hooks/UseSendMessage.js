import React, { useState } from 'react';
import useConversation from '../zustand/UseConversation';
import toast from "react-hot-toast";

const UseSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

const sendMessage = async (message) => {
    setLoading(true);
    try {
        const token = localStorage.getItem("token");
        console.log("Token from localStorage:", token);
        if (!token) {
            toast.error("No token found!");
            setLoading(false);
            return;
        }

        const decodedToken = JSON.parse(atob(token.split('.')[1])); // Get payload from JWT
        const senderId = decodedToken.id;

        console.log("📦 Token from localStorage:", token);
        console.log("📨 Sending message:", message);
        console.log("👤 Sender ID:", senderId);
        console.log("📨 Sending to ID:", selectedConversation._id);

        const res = await fetch(`http://localhost:5000/api/message/send/${selectedConversation._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message,
                senderId, // ✅ Add senderId here
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || "Something went wrong!");
        }

        setMessages([...messages, data]);
    } catch (error) {
        console.error("❌ Send message error:", error.message);
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
};


    return { sendMessage, loading };
};

export default UseSendMessage;



