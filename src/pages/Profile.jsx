import React, { use, useState } from "react";
import ProfileInfo from "../components/ProfileComponets/ProfileInfo";
import UpdateProfileForm from "../components/ProfileComponets/UpdateProfileForm";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const { user } = use(AuthContext);
  return (
    <div>
      <main className="flex-1">
        <section className="py-20 px-4 md:px-10 lg:px-20 bg-base-300">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-black text-neutral text-center">
              My Profile
            </h1>
            <div className="mt-12 bg-white rounded-xl shadow-xl p-8 md:p-12 space-y-5">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <img
                    src={user?.photoURL}
                    alt="U"
                    className="w-40 h-40 rounded-full border-4 border-secondary shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-neutral">
                    {user?.displayName}
                  </h2>
                  <p className="mt-2 text-lg text-neutral/80">{user?.email}</p>
                </div>
              </div>

              {showUpdateForm ? (
                <UpdateProfileForm setShowUpdateForm={setShowUpdateForm} />
              ) : (
                <>
                  <div className="w-full flex justify-end">
                    <button
                      onClick={() => setShowUpdateForm(true)}
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary/90 text-white text-lg font-bold leading-normal hover:bg-primary shadow-lg"
                    >
                      Update profile
                    </button>
                  </div>
                  <ProfileInfo user={user} />
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
