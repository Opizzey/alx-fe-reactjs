import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search recipes..."
      onChange={e => setSearchTerm(e.target.value)}
      style={{
        width: '100%',
        padding: '12px',
        fontSize: '1.08rem',
        borderRadius: '8px',
        border: '1px solid #444',
        background: '#18181b',
        color: '#fff',
        marginBottom: '18px'
      }}
    />
  );
};

export default SearchBar;
