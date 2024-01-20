import { useState } from 'react'
import './App.css'
import UseStorage from './Usestorage'

function App() {

  const [content, setContent] = UseStorage('content', '');

  return (
    <>
      <div>
        <input
          type="text"
          style={{
            width: '25vw',
            padding: '6px',
            textIndent: '8px',
            fontSize: 'large',
          }}
          value={content} 
          onChange={(e) => {
            console.log(e.target.value);
            setContent(e.target.value);
          }}
        />
      </div>
    </>
  );
}

export default App;