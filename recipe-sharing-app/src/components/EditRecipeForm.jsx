import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [editing, setEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipe.id, { title, description });
    setEditing(false);
  };

  return (
    <div style={{ marginTop: '24px' }}>
      {editing ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', minHeight: '60px' }}
          />
          <div>
            <button type="submit" style={{ padding: '8px 16px', marginRight: '10px' }}>Save</button>
            <button type="button" onClick={() => setEditing(false)} style={{ padding: '8px 16px' }}>Cancel</button>
          </div>
        </form>
      ) : (
        <button onClick={() => setEditing(true)} style={{ padding: '8px 16px', marginTop: '8px' }}>Edit Recipe</button>
      )}
    </div>
  );
};

export default EditRecipeForm;
