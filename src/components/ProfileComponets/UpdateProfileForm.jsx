import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/Context";

const UpdateProfileForm = ({ setShowUpdateForm }) => {
  const { updateUserProfile, user } = use(AuthContext);
  const [error, setError] = useState("");

  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    let name = e.target.name.value.trim();
    let photourl = e.target.photourl.value.trim();

    if (!name.length && !photourl.length) {
      setError("Enter name or photo url first");
      toast.error("Enter name or photo url first");
      return;
    }
    if (!name.length && photourl.length) {
      name = user?.displayName;
    } else if (name.length && !photourl.length) {
      photourl = user?.photoURL;
    }
    updateUserProfile(name, photourl)
      .then(() => {
        toast.success("Update profile successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
    setShowUpdateForm(false);
  };

  return (
    <form onSubmit={handleUpdateUserProfile}>
      <div className="mt-10 border-t border-gray-200 pt-8 space-y-6">
        <h2 className="text-3xl text-neutral font-semibold">
          Update Your Profile:
        </h2>
        <div>
          <label className="text-sm font-bold text-neutral/60">Full Name</label>
          <input
            className="w-full h-12 px-5 pr-4 rounded-lg border-2 border-secondary/50  bg-white text-accent focus:outline-none"
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label className="text-sm font-bold text-neutral/60">Photo URL</label>
          <input
            className="w-full h-12 px-5 pr-4 rounded-lg border-2 border-secondary/50  bg-white text-accent focus:outline-none"
            type="text"
            name="photourl"
            placeholder="Enter Photo URL"
          />
        </div>
        <p className="text-red-500">{error}</p>
        <div className="flex justify-center sm:justify-start pt-6 gap-2.5">
          <button
            type="button"
            onClick={() => setShowUpdateForm(false)}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-neutral/90 text-white text-lg font-medium leading-normal hover:bg-neutral shadow-lg"
          >
            Cancel
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary/90 text-white text-lg font-bold leading-normal hover:bg-primary shadow-lg">
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateProfileForm;
