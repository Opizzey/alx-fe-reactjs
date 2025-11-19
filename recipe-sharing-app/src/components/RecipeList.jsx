import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {recipes.length === 0 ? (
        <div style={{ color: '#aaa', fontStyle: 'italic', marginTop: '18px', textAlign: 'center' }}>No recipes yet. Add one above!</div>
      ) : (
        recipes.map(recipe => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', width: '100%' }}>
            <div style={{ background: '#18181b', color: '#fff', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '20px 24px', border: '1px solid #333', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', transition: 'box-shadow .2s', cursor: 'pointer' }}>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.25rem', fontWeight: 700 }}>{recipe.title}</h3>
              <p style={{ margin: 0, fontSize: '1rem', color: '#e5e5e5' }}>{recipe.description}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default RecipeList;
