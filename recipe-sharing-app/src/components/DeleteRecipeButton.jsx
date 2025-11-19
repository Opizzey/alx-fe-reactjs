import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ padding: '8px 16px', background: '#c00', color: '#fff', border: 'none', borderRadius: '6px', marginTop: '18px', cursor: 'pointer' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
