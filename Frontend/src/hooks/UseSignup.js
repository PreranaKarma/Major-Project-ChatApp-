import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext'; 

const UseSignup = () => {
  const [loading, setLoading] = useState(false);
  const {authUser,setAuthUser} = useAuthContext()

  const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullname, username, password, confirmPassword, gender });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, username, password, confirmPassword, gender }),
      });

      if (!res.ok) {
        const errorData = await res.text(); // get error text (not JSON)
        throw new Error(errorData || "Something went wrong");
      }

      const data = await res.json(); // now it is safe to parse JSON
      console.log(data);
      toast.success("Signup successful!");

      localStorage.setItem("chat-user",JSON.stringify(data))

      setAuthUser(data)

    } catch (error) {
      console.error(error);
      toast.error(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default UseSignup;

// Helper function
function handleInputErrors({ fullname, username, password, confirmPassword, gender }) {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error('Please fill in all fields');
    return false;
  }

  if (password !== confirmPassword) {
    toast.error('Passwords do not match');
    return false;
  }

  if (password.length < 6) {
    toast.error('Password must be at least 6 characters');
    return false;
  }

  return true;
}

