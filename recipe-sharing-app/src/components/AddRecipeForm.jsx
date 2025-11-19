import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'stretch', marginBottom: '24px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ padding: '12px', fontSize: '1.08rem', borderRadius: '8px', border: '1px solid #444', background: '#18181b', color: '#fff', marginBottom: '2px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ padding: '12px', fontSize: '1.08rem', borderRadius: '8px', border: '1px solid #444', background: '#18181b', color: '#fff', resize: 'vertical', minHeight: '60px', marginBottom: '2px' }}
      />
      <button type="submit" style={{ padding: '12px 0', background: 'linear-gradient(90deg,#6366f1,#2563eb)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', marginTop: '4px' }}>Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
