import axios from 'axios';


// Advanced search using GitHub Search API
export const fetchUsers = async ({ username, location, minRepos, page = 1 }) => {
    let query = [];
    if (username) query.push(`${username} in:login`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>=${minRepos}`);
    const q = query.join(" ");
    const per_page = 8;
    const url = `https://api.github.com/search/users?q=${encodeURIComponent(q)}&per_page=${per_page}&page=${page}`;
    const response = await axios.get(url);
    // For each user, fetch details for location and public_repos
    const users = await Promise.all(
        response.data.items.map(async (user) => {
            const details = await axios.get(user.url);
            return { ...user, ...details.data };
        })
    );
    const hasMore = response.data.total_count > page * per_page;
    return { users, hasMore };
};