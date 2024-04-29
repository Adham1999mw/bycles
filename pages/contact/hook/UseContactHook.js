import useValidationSchema from "@/Utilites";
import Cookies from "js-cookie";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";

const UseContactHook = () => {
  const { handleSubmit, control, errors } = useValidationSchema({
    fields: ["firstname", "email"],
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
            // Add other form fields as needed
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

  const onSubmitError = () => {
    return enqueueSnackbar("there are some wrong information");
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
    loading
  };
};

export default UseContactHook;
