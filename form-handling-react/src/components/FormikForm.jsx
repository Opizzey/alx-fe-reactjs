import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
        setTimeout(() => {
          setStatus('Registration successful!');
          setSubmitting(false);
          resetForm();
        }, 500);
      }}
    >
      {({ isSubmitting, status }) => (
        <Form className="max-w-md mx-auto p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Register (Formik)</h2>
          {status && <div className="text-green-500 mb-2">{status}</div>}
          <div className="mb-4">
            <label className="block mb-1">Username</label>
            <Field
              type="text"
              name="username"
              className="w-full border px-3 py-2 rounded"
            />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full border px-3 py-2 rounded"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full border px-3 py-2 rounded"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
