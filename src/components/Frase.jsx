import React from "react";
import { makeStyles } from "@material-ui/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types'
const useStyles = makeStyles({
  fraseContainer: {
    padding: "3rem",
    backgroundColor: "white",
    borderRadius: "10px",
    maxWidth: "800px",
    marginTop: "10rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    position: "relative"
  },
  fraseStyles: {
    "&::before": {
      content: "open-quote",
      fontFamily: 'sans-serif',
      fontSize: "10rem",
      color: "black",
      position: "absolute",
      left:"-3px",
      top:"-2rem"
    },
  },
});
const Frase = ({ frase }) => {
  const classes = useStyles();
  const fraseClass = "mb-0 " + classes.fraseStyles;

  return (
    <div className={classes.fraseContainer}>
      <blockquote className="blockquote text-center">
        <p className={fraseClass}><strong>{frase.quote}</strong></p>
        <footer className="blockquote-footer text-right">{frase.author}</footer>
      </blockquote>
    </div>
  );
};

Frase.propTypes = {
    frase: PropTypes.object.isRequired
}
export default Frase;
