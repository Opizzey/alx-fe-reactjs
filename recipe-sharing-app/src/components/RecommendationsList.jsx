import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div style={{ marginTop: '32px' }}>
      <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '16px' }}>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <div style={{ color: '#aaa', fontStyle: 'italic' }}>No recommendations yet.</div>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ background: '#18181b', color: '#fff', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '16px 20px', border: '1px solid #333', marginBottom: '14px' }}>
            <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem', fontWeight: 700 }}>{recipe.title}</h3>
            <p style={{ margin: 0, fontSize: '1rem', color: '#e5e5e5' }}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
