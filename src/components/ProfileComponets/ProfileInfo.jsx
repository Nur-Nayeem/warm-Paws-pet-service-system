import React from "react";

const ProfileInfo = ({ user }) => {
  return (
    <div className="mt-10 border-t border-gray-200 pt-8 space-y-6">
      <div>
        <label className="text-sm font-bold text-neutral/60">Full Name</label>
        <p className="mt-1 text-lg text-neutral">{user?.displayName}</p>
      </div>
      <div>
        <label className="text-sm font-bold text-neutral/60">Email</label>
        <p className="mt-1 text-lg text-neutral">{user?.email}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
