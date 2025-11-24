import React, { useState } from "react";
import { fetchUsers } from "../services/githubService";


const Search = () => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUsers([]);
        setPage(1);
        try {
            const { users: fetchedUsers, hasMore: more } = await fetchUsers({ username, location, minRepos, page: 1 });
            setUsers(fetchedUsers);
            setHasMore(more);
        } catch {
            setError("Looks like we can't find any users");
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = async () => {
        const nextPage = page + 1;
        setLoading(true);
        try {
            const { users: fetchedUsers, hasMore: more } = await fetchUsers({ username, location, minRepos, page: nextPage });
            setUsers((prev) => [...prev, ...fetchedUsers]);
            setPage(nextPage);
            setHasMore(more);
        } catch {
            setError("Looks like we can't find any more users");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto mt-8">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Location (optional)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="number"
                    placeholder="Minimum repositories (optional)"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                />
                <div className="flex gap-2">
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                        Search
                    </button>
                    <button
                        type="reset"
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
                        onClick={() => {
                            setUsername("");
                            setLocation("");
                            setMinRepos("");
                            setUsers([]);
                            setError(null);
                            setPage(1);
                        }}
                    >
                        Clear
                    </button>
                </div>
            </form>
            {loading && <p className="text-blue-400 mt-4">Loading...</p>}
            {error && <p className="text-red-400 mt-4">{error}</p>}
            {users.length > 0 && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {users.map((user) => (
                        <div key={user.id} className="border border-gray-700 p-4 rounded-lg bg-gray-900 flex flex-col items-center">
                            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
                            <h2 className="text-lg font-bold mt-2 text-white">{user.login}</h2>
                            <p className="text-gray-400 text-sm">{user.location || "Location: N/A"}</p>
                            <p className="text-gray-400 text-sm">Repos: {user.public_repos ?? "N/A"}</p>
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 text-blue-400 hover:underline"
                            >
                                View GitHub Profile
                            </a>
                        </div>
                    ))}
                </div>
            )}
            {hasMore && !loading && (
                <div className="flex justify-center mt-4">
                    <button onClick={handleLoadMore} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Search;