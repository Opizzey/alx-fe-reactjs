
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  background: '#f3f4f6'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '520px',
        background: 'rgba(35,35,38,0.98)',
        borderRadius: '18px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.22)',
        padding: '44px 36px',
        margin: '40px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 800, marginBottom: '28px', color: '#fff', letterSpacing: '-1px' }}>Recipe Sharing App</h1>
        <AddRecipeForm />
        <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid #333', width: '100%' }} />
        <RecipeList />
      </div>
    </div>
  );
}

export default App;
