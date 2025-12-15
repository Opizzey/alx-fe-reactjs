import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg flex flex-col items-center gap-12 p-8 mx-auto">
        <div className="w-full flex flex-col items-center gap-12">
          <RegistrationForm />
          <hr className="w-full my-8" />
          <FormikForm />
        </div>
      </div>
    </div>
  );
}

export default App;
