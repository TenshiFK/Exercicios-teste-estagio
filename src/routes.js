import Exercicio2 from "./Exercícios/Ex2"
import { Route, Routes } from "react-router-dom";
import Exercicio3 from "./Exercícios/Ex3";
import Exercicio4 from "./Exercícios/Ex4";

export default function RoutesApp(){

    return(
        <Routes>
            <Route path="/" element={<Exercicio2/>}/>   
            <Route path="/exercicio3" element={<Exercicio3/>}/>
            <Route path="/exercicio4" element={<Exercicio4/>}/>
        </Routes>
    )
}