import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username.trim()) {
            setLoading(true);
            setError(null);
            setUser(null);
            try {
                const data = await fetchUserData(username.trim());
                setUser(data);
            } catch {
                setError("Looks like we cant find the user");
            } finally {
                setLoading(false);
                setUsername("");
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ padding: "0.5rem", width: "250px" }}
                />
                <button type="submit" style={{ marginLeft: "0.5rem", padding: "0.5rem 1rem" }}>
                    Search
                </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {user && (
                <div style={{ marginTop: "1rem", border: "1px solid #eee", padding: "1rem", borderRadius: "8px", maxWidth: "350px" }}>
                    <img src={user.avatar_url} alt={user.login} style={{ width: "80px", borderRadius: "50%" }} />
                    <h2 style={{ margin: "0.5rem 0" }}>{user.name || user.login}</h2>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        View GitHub Profile
                    </a>
                </div>
            )}
        </>
    );
};

export default Search;