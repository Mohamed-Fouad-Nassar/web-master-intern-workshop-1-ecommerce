import Spinner from "../components/Spinner";
import { useAppSelector } from "../store/hooks";

export default function Profile() {
  const { isLoading, user } = useAppSelector((state) => state.auth);

  return (
    <section className="flex-1 p-4 rounded bg-gray-50">
      <h2 className="text-2xl font-medium">Profile</h2>

      {isLoading ? (
        <div className="mt-20">
          {" "}
          <Spinner />
        </div>
      ) : (
        <div className="mt-10 flex flex-col gap-4 items-center">
          <img
            src={user?.avatar}
            alt="user-profile-avatar"
            className="w-32 h-32 rounded-full"
          />

          <div className="w-full max-w-96 space-y-1.5">
            <span className="block">Full Name</span>
            <p className="px-4 py-2 bg-gray-200 rounded">
              {user?.firstName} {user?.lastName}
            </p>
          </div>
          <div className="w-full max-w-96 space-y-1.5">
            <span className="block">Email</span>
            <p className="px-4 py-2 bg-gray-200 rounded">{user?.email}</p>
          </div>
        </div>
      )}
    </section>
  );
}
