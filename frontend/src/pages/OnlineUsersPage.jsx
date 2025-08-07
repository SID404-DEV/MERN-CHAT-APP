import { useState } from "react";

const OnlineUsersPage = () => {
  const [OnlineUsers, setOnlineUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOnlineUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/users/online"); // update to match your backend route

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      setOnlineUsers(data.users); // or `data` depending on your backend response
    } catch (err) {
      setError(err.message);
      setOnlineUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <button
        className="btn btn-primary mb-4"
        onClick={fetchOnlineUsers}
        disabled={loading}
      >
        {loading ? "Loading..." : "Show Online Users"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {OnlineUsers.length > 0 && (
        <ul className="space-y-2">
          {OnlineUsers.map((user) => (
            <li key={user._id} className="bg-base-200 p-2 rounded">
              {user.fullName} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OnlineUsersPage;
