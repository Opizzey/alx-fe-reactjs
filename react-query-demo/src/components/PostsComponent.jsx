import { useQuery } from 'react-query';

function fetchPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
}

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    'posts',
    fetchPosts,
    { staleTime: 60000 }
  );

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : 'Refetch Posts'}
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
