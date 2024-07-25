import { useState } from 'react';

// import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
// import CoreConcept from './components/CoreConcept.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
// import TabButton from './components/TabButton.jsx';
// import { EXAMPLES } from './data.js';
import Examples from './components/Examples.jsx';

function App() {
  
  return (
    <div>
      <Header />
      <main>
       <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
