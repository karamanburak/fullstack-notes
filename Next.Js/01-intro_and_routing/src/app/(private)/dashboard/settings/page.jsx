import GoBack from "@/components/GoBack";
import React from "react";

export const metadata = {
  title: "Settings Page",
  description: "This is Settings page",
};

const Settings = () => {
  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold underline text-center">
        Hello, this is Settings Page
      </h1>
      <GoBack />
    </div>
  );
};

export default Settings;
