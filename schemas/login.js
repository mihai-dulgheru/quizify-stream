import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Adresa de email nu este validă')
    .trim()
    .lowercase()
    .max(255)
    .required('Adresa de email este obligatorie'),
  password: Yup.string().required('Parola este obligatorie'),
});

const initialValues = {
  email: '',
  password: '',
};

export { initialValues, validationSchema };
