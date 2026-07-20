import React from "react";

const Profile = () => {
  return (
    <div
      tabIndex="1"
      className="flex focus-within:ring-2 focus-within:ring-black/20 cursor-pointer items-center gap-2 select-none p-3 hover:bg-black/5 rounded-md duration-150"
    >
      <div className="size-10">
        <img
          className="size-full rounded-full object-cover"
          src="/images/avatar.jpg"
          alt="User Avatar"
        />
      </div>
      <div>
        <p className="text-sm font-bold">Sarah Danes</p>
        <p className="text-xs text-gray-600">manager</p>
      </div>
    </div>
  );
};

export default Profile;
