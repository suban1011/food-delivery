"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    // 1. Try to get the token from cookies or local storage
    const token = Cookies.get("token") || localStorage.getItem("token");
    console.log(token);
    // 2. Redirect to register page if no token is found
    if (!token) {
      router.push("/restaurant");
    }
  }, [router]);
  return <div>Dashboard</div>;
};

export default Dashboard;
