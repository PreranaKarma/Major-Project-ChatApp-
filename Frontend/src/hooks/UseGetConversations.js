import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const UseGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      const userRaw = localStorage.getItem("chat-user");

      // Step 1: Check if user data exists
      if (!userRaw) {
        toast.error("Unauthorized - No User Found");
        return;
      }

      const user = JSON.parse(userRaw);
      const token = user?.token;

      // Step 2: Validate token
      if (!token) {
        toast.error("Unauthorized - No Token Found");
        return;
      }

      setLoading(true);

      try {
        // Step 3: Make API call with token
        const res = await fetch("http://localhost:5000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        // Step 4: Handle errors
        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch conversations");
        }

        // Step 5: Set data
        setConversations(data);
        console.log("Fetched Conversations:", data);

      } catch (error) {
        toast.error(error.message || "Something went wrong");
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default UseGetConversations;
