import { useEffect, useState } from "react";

export default function useVisualMode(initial){
  const [mode,setMode]= useState(initial)
  const [history, setHistory] = useState([initial]);
  

  // audebut first 
  // transition pour second sans replace : first, second 
  // transition avec remplace : first , third 
  const transition = (newMode,replace=false) => {
    setMode(newMode)
     if (replace) {
       const newHistory = [...history]
       newHistory.pop()
       newHistory.push(newMode)
       setHistory(newHistory)
      } else {
        setHistory([...history,newMode])
      }
  }
  
  //the last history to be the newMode 
  // history to have the last item removed 
  // setMode last item of history 
  // setHistory  old history - last item 
  const back = () => {
    if (history.length > 1) {
      const newHistory = [...history]
      newHistory.pop()
      const backMode = newHistory[newHistory.length - 1]
      setMode(backMode)
      setHistory(newHistory)
    }
  }

  return {
   mode, transition, back 
  }
}

