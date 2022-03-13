import { useState, useEffect, useCallback } from "react";
import { BREAKPOINT_WIDTH, LATEST_CURRENCY_API_URL } from "./constant";
import axios from "axios";

export const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => setValue(e.target.value);
  return { value, onChange: handleChange };
};

export const useValidationFormInput = (
  initialValue,
  constraints,
  defaultMessage = ""
) => {
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState("");
  const [isSubmittable, setIsSubmittable] = useState(false);
  const [errorClassName, setErrorClassName] = useState("");
  useEffect(() => {
    for (let constraint of constraints) {
      if (value !== "") {
        if (!constraint.check(value)) {
          setIsSubmittable(false);
          setMessage(constraint.message);
          setErrorClassName("form-error");
          return;
        } else {
          setIsSubmittable(true);
          setMessage(defaultMessage);
          setErrorClassName("");
        }
      }
      if (value.length === 0) setMessage(defaultMessage);
    }
  }, [
    value,
    constraints,
    isSubmittable,
    message,
    defaultMessage,
    errorClassName,
  ]);
  useEffect(() => {
    if (isSubmittable && value !== "") setErrorClassName("");
  }, [value, isSubmittable]);
  return {
    value,
    setValue,
    message,
    isSubmittable,
    errorClassName,
  };
};

export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return { width, isMobile: width < BREAKPOINT_WIDTH };
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );
  const setValueInLocalStorage = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, setValueInLocalStorage];
};

export const useFetch = (shouldFetch = true, url = LATEST_CURRENCY_API_URL) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const doFetch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      if (res?.data?.error?.code) throw new Error(res?.data?.error?.info);
      setData(res?.data);
    } catch (e) {
      setError(e?.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    shouldFetch && doFetch();
  }, [doFetch, shouldFetch]);
  return { data, error, loading };
};
