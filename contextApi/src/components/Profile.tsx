import { useUserContext } from "../useContext/context";

const Profile = () => {
  const value = useUserContext();
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md text-3xl">
      <div>Profile Name : {value.user?.name}</div>
      <button
      className="bg-blue-400 text-white px-4 py-2 hover:bg-blue-600 m-2 rounded-2xl"
        onClick={() =>
          value.setUser({
            isStudent: !value.user?.isStudent,
            name: "John Doe",
          })
        }
      >
        set to John Doe
      </button>
    </div>
  );
};

export default Profile;