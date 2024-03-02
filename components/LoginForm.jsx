'use client';

import { initialValues, validationSchema } from '@/schemas/login';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        router.push('/dashboard');
      } else {
        throw new Error(data.message || 'Eroare la autentificare');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="mb-4 w-full max-w-xs">
          <div className="mb-4">
            <Field
              type="email"
              name="email"
              placeholder="Adresă de email"
              className="block w-full max-w-xs rounded-md border border-gray-300 p-2 shadow-sm transition duration-150 ease-in-out focus:border-blue-500 focus:ring-blue-500"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-xs text-red-500"
            />
          </div>
          <div className="mb-4">
            <Field
              type="password"
              name="password"
              placeholder="Parolă"
              className="block w-full max-w-xs rounded-md border border-gray-300 p-2 shadow-sm transition duration-150 ease-in-out focus:border-blue-500 focus:ring-blue-500"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-xs text-red-500"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="focus:shadow-outline w-full max-w-xs rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none"
          >
            Autentificare
          </button>
        </Form>
      )}
    </Formik>
  );
}
