import React from "react";
import emojipedia from "../emojipedia";
import Card from "../Card";

//1. First check what portion of the code is repetitive
// Create tha props to replace the hardcoded data
// Then you will be having an entity which you might have to repeate itslef
// this is the perfect candidate for the repetition of the cards
// In this case you might want to use the map fucntion of the array in the javascript
// then you need to map through the data list and then render each of the  elements for which you will be
// assigning the property

function createCard(emojipedia) {
  return (
    <Card
      id={emojipedia.id}
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
