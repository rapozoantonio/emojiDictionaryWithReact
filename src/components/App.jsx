import React from "react";
import Card from "./Card.jsx";
import emojipedia from "../emojipedia.js";



function App(props) {
  return (
    <div>
      <h1>
        <span>Antonio's most used emojis</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((props) => { return(

            <Card 
                  key={props.id}
                  id={props.id}
                  emoji={props.emoji}
                  name={props.name}
                  meaning={props.meaning}
            />

          );
        }
      )};
      </dl>
    </div>
  );
}

export default App;