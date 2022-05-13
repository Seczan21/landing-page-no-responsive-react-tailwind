import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
function App() {
  return (
    <div className="h-screen min-w-full bg-gray-300 px-16 py-8  ">
      <div className="w-full h-full bg-white shadow-lg rounded-md md:w-1/2 md:h-1/2  ">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
