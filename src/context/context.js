import React from 'react';

const DataContext = React.createContext();

export const ContextProvider = DataContext.Provider;
export const ContextConsumer = DataContext.Consumer;

export default DataContext;
