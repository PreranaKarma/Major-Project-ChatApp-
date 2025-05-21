// import { createContext, useContext, useState } from "react";


// export const AuthContext = createContext ();

// export const useAuthContext = () => {
//     return useContext(AuthContext);
// }

// export const AuthContextProvider = ({ children }) => {
//     const [authUser,setAuthUser] = useState(
//         JSON.parse(localStorage.getItem("chat-user")) || null
//     );
//     const token = authUser?.token;

//     return <AuthContext.Provider value={{authUser,setAuthUser}}>
//         {children}

//     </AuthContext.Provider>
// }


import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const getStoredUser = () => {
  try {
    const storedUser = localStorage.getItem("chat-user");
    if (!storedUser || storedUser === "undefined") return null;
    return JSON.parse(storedUser);
  } catch {
    return null;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(getStoredUser());
  // You can access token via authUser?.token if needed
  const token = authUser?.token;

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, token }}>
      {children}
    </AuthContext.Provider>
  );
};



