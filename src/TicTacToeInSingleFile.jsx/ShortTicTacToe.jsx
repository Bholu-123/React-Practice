import { useState } from "react"
import "./App.css"
import TicTacToe from "./components/TicTacToe"
import useTicTacToe from "./hooks/use-tic-tac-toe"

function ShortTicTacToe (){
    const{board,calculateWinner,resetGame,getStatusMessage} = useTicTacToe()
return <TicTacToe/>
}
export default ShortTicTacToe