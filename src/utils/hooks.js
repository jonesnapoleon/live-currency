import { useState, useEffect, useCallback } from "react";
import { BREAKPOINT_WIDTH, LATEST_CURRENCY_API_URL } from "./constant";

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
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    constraints.forEach((constraint) => {
      if (value !== "") {
        if (!constraint.check(value)) {
          setIsSubmittable(false);
          setMessage(constraint.message);
          setErrorClassName("form-error");
        } else {
          setIsSubmittable(true);
          setMessage(defaultMessage);
          setErrorClassName("");
        }
      }
      if (value.length === 0) setMessage(defaultMessage);
    });
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
    onChange: handleChange,
    message,
    isSubmittable,
    errorClassName,
  };
};

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return width;
};

export const useIsMobile = () => {
  const width = useWidth();
  return width < BREAKPOINT_WIDTH;
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });
  const setValueInLocalStorage = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, setValueInLocalStorage];
};

export const useFetch = (url = LATEST_CURRENCY_API_URL, method = "get") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const doFetch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url, { method });
      const json = await res.json();
      setData(json);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [method, url]);

  useEffect(() => {
    doFetch();
  }, [doFetch]);
  return { data, error, loading };
};
