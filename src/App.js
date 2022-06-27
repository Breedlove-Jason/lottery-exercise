import "./App.css";
import Ball from "./components/LottoBalls/Ball.component";
import Lottery from "./components/LottoPick/Lottery.componenet";

function App() {
  return (
    <div className="App">
      <Lottery title={"Mini Daily"} maxNum={10} maxBalls={3} />
      <Lottery title={"Quick Pick"} maxNum={40} maxBalls={6} />
    </div>
  );
}

export default App;
