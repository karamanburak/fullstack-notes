import GoBack from "@/components/GoBack";
import React from "react";

export const metadata = {
  title: "Profile Page",
  description: "This is Profile page",
};

const Profile = () => {
  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold underline text-center">
        Hello, this is Profile Page
      </h1>
      <GoBack />
    </div>
  );
};

export default Profile;
