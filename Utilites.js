// useValidationSchema.ts
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const useValidationSchema = ({ fields }) => {
  
  const schema = yup.object().shape({
    ...(fields.includes('firstname') && {
      firstname: yup
        .string()
        .trim() // Remove leading and trailing whitespaces
        .required('requried')
        .min(2, 'more tham 2')
        .max(254, 'less than 254')
    }),

    ...(fields.includes('phone') && {
      phone: yup
        .number()
        .required('requried')
    }),

    ...(fields.includes('email') && {
      email: yup
        .string()
        .email('emial is required')
        .required('emial is required')
        .max(254, 'emial is required')
        .matches(
          /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'emial is required'
        )
        .test('no-leading-dot', 'emial is required' , (value) => {
          return !value || value[0] !== '.';
        }),
    })
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  }= useForm({
    resolver: yupResolver(schema),
  })

  return {
    handleSubmit,
    control,
    errors,
  }
}

export default useValidationSchema
