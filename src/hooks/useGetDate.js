import { useState, useEffect } from 'react';

const useGetDate = () => {
  const [date, setDate] = useState({
    year: '',
    month: '',
    day: '',
  });

  useEffect(() => {
    const newDate = new Date();

    setDate({
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      day: newDate.getDate(),
    });
  }, []);

  return date;
};

export default useGetDate;
