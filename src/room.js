import React, { useState } from "react";
import Box from "./box";

const TodoApp = () => {
  const [room1, setRoom1] = useState(true);
  const [room2, setRoom2] = useState(false);
  const [room3, setRoom3] = useState(false);
  const [room4, setRoom4] = useState(false);

  return (
    <div>
      <Box room={1} checked={room1} click={e => setRoom1(e.target.checked)} />
      <Box room={2} checked={room2} click={e => setRoom2(e.target.checked)} />
      <Box room={3} checked={room3} click={e => setRoom3(e.target.checked)} />
      <Box room={4} checked={room4} click={e => setRoom4(e.target.checked)} />
    </div>
  );
};
export default TodoApp;
