// useYearPicker.js
import { useState, useCallback } from 'react';
import dayjs from 'dayjs';

export const useYearPicker = ({
  initialStartYear = dayjs().year(),
  initialEndYear = dayjs().add(1, 'year').year(),
  onStartYearChange,
  onEndYearChange
}) => {
  const [startYear, setStartYear] = useState(dayjs(initialStartYear?.toString()));
  const [endYear, setEndYear] = useState(dayjs(initialEndYear?.toString()));
  const [error, setError] = useState(false);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handleStartYearChange = useCallback((year) => {
    const newValue = dayjs(year.toString());
    if (!newValue.isValid()) {
      setError(true);
      return;
    }
    
    setStartYear(newValue);
    onStartYearChange?.(newValue.year());
    setShowStartPicker(false);
    setError(false);
  }, [onStartYearChange]);

  const handleEndYearChange = useCallback((year) => {
    const newValue = dayjs(year.toString());
    if (!newValue.isValid()) {
      setError(true);
      return;
    }
    
    // Validate that end year is after start year
    if (year < startYear.year()) {
      setError(true);
      return;
    }
    
    setEndYear(newValue);
    onEndYearChange?.(newValue.year());
    setShowEndPicker(false);
    setError(false);
  }, [onEndYearChange, startYear]);

  const handleReset = useCallback(() => {
    const currentYear = dayjs().year();
    const defaultStartYear = dayjs(currentYear.toString());
    const defaultEndYear = dayjs((currentYear + 1).toString());
    
    setStartYear(defaultStartYear);
    setEndYear(defaultEndYear);
    onStartYearChange?.(defaultStartYear.year());
    onEndYearChange?.(defaultEndYear.year());
    setError(false);
  }, [onStartYearChange, onEndYearChange]);

  const toggleStartPicker = useCallback(() => {
    setShowStartPicker(prev => !prev);
    setShowEndPicker(false);
  }, []);

  const toggleEndPicker = useCallback(() => {
    setShowEndPicker(prev => !prev);
    setShowStartPicker(false);
  }, []);

  return {
    startYear,
    endYear,
    error,
    showStartPicker,
    showEndPicker,
    handleStartYearChange,
    handleEndYearChange,
    handleReset,
    toggleStartPicker,
    toggleEndPicker
  };
};

export default useYearPicker;