"use client";

import { useState, useEffect } from "react";

interface UserPayload {
  // Define the properties of your user payload
}

export default function useToken() {
  const getToken = () => {
    return typeof window !== "undefined" ? sessionStorage.getItem("token") : "";
  };

  const getUserPayload = () => {
    let user: UserPayload | null = null;

    if (typeof window !== "undefined") {
      const userString = sessionStorage.getItem("user_payload");

      if (userString) {
        try {
          user = JSON.parse(userString);
        } catch (error) {
          console.error("Error parsing user payload:", error);
        }
      }
    }

    return user;
  };

  const [token, setToken] = useState(getToken());
  const [userPayload, setUserPayload] = useState(getUserPayload());

  const saveToken = (userToken: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("token", userToken);
      setToken(userToken);
    }
  };

  // Use useEffect to update the userPayload state after the component mounts
  useEffect(() => {
    setUserPayload(getUserPayload());
  }, []);

  return {
    setToken: saveToken,
    token,
    userPayload,
  };
}
