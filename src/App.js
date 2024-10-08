import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ExampleComponent from './components/ExampleComponent';

const App = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center">My React App</h1>
      <Routes>
        <Route path="/" element={<ExampleComponent />} />
      </Routes>
    </div>
  );
};

export default App;
