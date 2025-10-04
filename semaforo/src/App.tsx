import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState<"red" | "yellow" | "green">("red");
  const [tiempoValue, setTiempoValue] = useState(5);
  const [tiempo, setTiempo] = useState(5);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setTiempo(prev => {
        if (prev <= 1) {
          setColor(prevColor => {
            if (prevColor === "red") return "yellow";
            if (prevColor === "yellow") return "green";
            return "red";
          });
          return tiempoValue; 
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [tiempoValue]);

  
  const resetTimer = (seconds: number) => {
    setTiempoValue(seconds);
    setTiempo(seconds);
    setColor("red");
  };

  return (
    <div className="flex items-center space-x-8">
      <div className="flex flex-col items-center space-y-4 shadow-lg">
        <p className="text-white text-xl mt-2">Tiempo: {tiempo}s</p>

        <div className={`w-20 h-20 rounded-full ${color === "red" ? "bg-red-700" : "bg-red-700/50"}`}></div>
        <div className={`w-20 h-20 rounded-full ${color === "yellow" ? "bg-yellow-400" : "bg-yellow-400/50"}`}></div>
        <div className={`w-20 h-20 rounded-full ${color === "green" ? "bg-green-600" : "bg-green-600/50"}`}></div>
      </div>

      <div className="flex flex-col space-y-4">
        <button className="btn btn-primary" onClick={() => resetTimer(5)}>5 segundos</button>
        <button className="btn btn-secondary" onClick={() => resetTimer(10)}>10 segundos</button>
      </div>
    </div>
  );
}

export default App;
