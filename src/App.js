import javascriptQuizData from './data/quizData';
import './App.css';
import {useState} from "react";
import win from "./win.gif";
import lose from "./lose.gif";
import { Navigation } from './components/Navigation';


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score,setScore] = useState(0);

  function handleClick(option){
    const currentQuizData = javascriptQuizData[currentQuestion];
    if(option === currentQuizData.correctAnswer)
          setScore(score+1);

          setCurrentQuestion(currentQuestion+1);
  }
  return (
    <div className="App">
      <Navigation />
      <div className="main-div">
    {
      currentQuestion < javascriptQuizData.length ? (
        <>
        <div>
          <h1 className="ques">{javascriptQuizData[currentQuestion].question}</h1>
          <div className="option">
            {javascriptQuizData[currentQuestion].options.map((option,index)=> (
              <button key={index} onClick={()=>handleClick(option)}>{option}</button>
            ))}
          </div>
        </div>
        </>
      ) :
      (
        <>
           <h1 className='submit-h1'>Quiz Completed</h1>
           <p>Your Score is : <span className='score'>{score}</span></p>
           {score >= 4 ?<> <h3 className='winner'>Winner!</h3>
           <img src={win} alt="win" />
           </> :<> <h3 className='loser'>Better luck next time </h3>
           <img src={lose} alt="looser" />
           </>}
        </>
      ) 
    }
    </div>
    </div>
  );
}

export default App;
