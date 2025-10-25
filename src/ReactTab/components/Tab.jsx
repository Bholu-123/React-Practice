import React, { useState, useEffect } from 'react';

// Tabs Component
const Tabs = ({ children, value, defaultValue, onChange }) => {
  const [activeValue, setActiveValue] = useState(defaultValue);

  useEffect(() => {
    if (value !== undefined) {
      setActiveValue(value);
    }
  }, [value]);

  const handleTabChange = (newValue) => {
    if (onChange) {
      onChange(newValue);
    } else {
      setActiveValue(newValue);
    }
  };

  return (
    <div className="tabs">
      {React.Children.map(children, (child) => {
        if (child.type === TabList) {
          return React.cloneElement(child, {
            activeValue,
            onChange: handleTabChange,
          });
        } else if (child.type === TabPanel) {
          return React.cloneElement(child, {
            activeValue,
          });
        } else {
          return child;
        }
      })}
    </div>
  );
};

const TabList = ({ children, activeValue, onChange }) => {
  return (
    <div className="tab-list">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isActive: child.props.value === activeValue,
          onClick: () => onChange(child.props.value),
          isDisabled: child.props.disabled, // Pass the correct prop
        })
      )}
    </div>
  );
};

// TabItem Component
const TabItem = ({ children, isActive, onClick, isDisabled }) => {
  return (
    <button
      className={`tab-item ${isActive ? 'active' : ''} ${
        isDisabled ? 'disabled' : ''
      }`}
      // onClick={isDisabled ? undefined : onClick}
      onClick={onClick}
      // disabled={isDisabled}
    >
      {children}
    </button>
  );
};

// TabPanel Component
const TabPanel = ({ children, activeValue, value }) => {
  const isActive = activeValue === value;

  if (!isActive) {
    return null;
  }

  return (
    <div className={`tab-panel ${isActive ? 'active' : 'inactive'}`}>
      {children}
    </div>
  );
};

export { Tabs, TabList, TabItem, TabPanel };
