import { useEffect } from "react";
import "@/App.css";

function App() {
  useEffect(() => {
    // Redirect to the Valentine HTML pages
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="App">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFF8E7 0%, #FAF0E6 50%, #FFE8E8 100%)'
      }}>
        <p style={{ 
          fontSize: '1.5rem', 
          color: '#800020',
          fontFamily: 'Inter, sans-serif'
        }}>
          Redirecting to Valentine Message Creator...
        </p>
      </div>
    </div>
  );
}

export default App;
