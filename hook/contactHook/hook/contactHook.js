import Cookies from "js-cookie";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import UseValidationSchema  from "@/Utilites"

const useContactHook = () => {
  
  const { handleSubmit, control, errors } = UseValidationSchema({
    fields: ["firstname", "email" , 'phone'],
  });

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (data &&  Cookies.get('hour')) {
      setLoading(true)
      const response = await fetch(
        "https://formsubmit.co/ajax/adhamelmalawany@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone:data.phone,
            Object : data?.objectInput,
            description: data?.desc,
            day: Cookies.get('day'),
            month:Cookies.get('month'),
            hour:Cookies.get('hour')
          }),
        }
      );

      if (response.ok) {
        setLoading(false)
        enqueueSnackbar("Form submitted successfully", { variant: "success" });
        Cookies.remove('day'),
        Cookies.remove('month'),
        Cookies.remove('hour')
        
      } else {
        enqueueSnackbar("Failed to submit form", { variant: "error" });
      }
    } else {
      return enqueueSnackbar("please select date");
    }
  };

  const onSubmitContact = async () => {
    if (data ) {
      setLoading(true)
      const response = await fetch(
        "https://formsubmit.co/ajax/adhamelmalawany@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone:data.phone,
            Object : data?.objectInput,
            description: data?.desc,
          }),
        }
      );

      if (response.ok) {
        setLoading(false)
        enqueueSnackbar("Form submitted successfully", { variant: "success" });
        
      } else {
        enqueueSnackbar("Failed to submit form", { variant: "error" });
      }
    } 
  };

  const onSubmitError = () => {
    // return enqueueSnackbar("there are some wrong information");
  };

  const handleInputChange = (field = "", obj, value) => {
    setData((prevUserAuth) => ({ ...prevUserAuth, ...obj }));
    field.onChange(value);
  };

  const setDataFun = (dateTime) => {
    setData((prevUserAuth) => ({ ...prevUserAuth, ...dateTime }));
  };

  return {
    handleSubmit,
    control,
    errors,
    onSubmit,
    onSubmitError,
    handleInputChange,
    setDataFun,
    loading,
    onSubmitContact
  };
};

export default useContactHook;
