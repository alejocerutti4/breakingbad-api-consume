import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/styles";
import Frase from "./components/Frase";

const useStyles = makeStyles({
  buttonStyles: {
    background:
      "linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%)",
    backgroundSize: "400px",
    fontFamily: "Roboto",
    color: "#fff",
    marginTop: "3rem",
    marginBottom:"1rem",
    padding: "1rem 3rem",
    fontSize: "1.5rem",
    border: "2px solid black",
    textTransform: "uppercase",
    transition: "background-size .5s ease",

    "&:hover": {
      backgroundSize:"280px"
    },
  },
  generalContainer:{
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function App() {
  const classes = useStyles();
  const [frase, guardarFrase] = useState({})
  

  // Cargar una frase
  useEffect(()=>{
    consultarAPI()
  },[])
  const consultarAPI = async () => {
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
    const data = await api.json()
    const frase = data[0]
    guardarFrase(frase)
  }
  return (
    <div className={classes.generalContainer}>
      <Frase 
      frase={frase}
      />
      <button 
      className={classes.buttonStyles}
      onClick={consultarAPI}
      >Obtener Frase</button>
    </div>
  );
}

export default App;
