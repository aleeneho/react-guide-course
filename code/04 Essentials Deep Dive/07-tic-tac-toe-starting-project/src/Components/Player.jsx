import React from 'react';
import { useState } from 'react';

export default function Player({initialName, symbol, isActive, onChangeName}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = React.useState(false);

  function handleEditClick(){
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing); // schedules a state update to the opposite of the current value
    setIsEditing(editing => !editing); // schedules a state update to true

    if (isEditing) {
    onChangeName(symbol, playerName);
    }
  }
  
  function handleChange(event) {
    // console.log(event)
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = <input type='text' required value={playerName} onChange={handleChange} />;
    // btnCaption = 'Save';
  }

  return (
  <li className={isActive ? 'active' : undefined}>
    <span className='player'>
      {editablePlayerName}
      <span className='player-symbol'>{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>
  );
}
