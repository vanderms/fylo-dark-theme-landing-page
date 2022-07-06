import selectors from './get-started-form.module.scss';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

export function GetStartedForm() {

  const formikProps = {
    initialValues: { email: '' },
    validationSchema: Yup.object({
        email: Yup.string()
          .email('Error, please check your email')
          .required('Error, please check your email')
    }),
    onSubmit: (values: {email: string}, actions: FormikHelpers<{email: string}>) => {
      console.log(JSON.stringify(values));
      actions.setSubmitting(false);
      actions.resetForm();
    }
  }

  return (
    <Formik {...formikProps}>
      <Form className={selectors['get-started-form']} data-component='form_get-started'>
        <div className={selectors["input-container"]}>
          <Field
            id='get-started-email'
            className={selectors['email']}
            type='text'
            name='email'
            placeholder='email@example.com'
          />
          <label htmlFor='get-started-email'>
            <span className={selectors["label-text"]}>Email</span>
            <span className={selectors["error-message"]}><ErrorMessage name='email'/></span>
          </label>
        </div>
        <button type="submit" className={selectors['submit']}>Get Started For Free</button>
      </Form>
    </Formik>
  );
}

