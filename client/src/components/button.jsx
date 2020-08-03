import React, { Fragment, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { ItemsContext } from "./../App";
import moment from "moment";
import Calendar from "react-calendar";
import Popup from "reactjs-popup";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css"; // Make sure to import the default stylesheet

function Example(props) {
  const [count, setCount] = useContext(ItemsContext);
  const [userInput, setUserInput] = useState("");
  function increment() {
    // Here, we invoke the callback with the new value
    setCount(count + 1);
  }
  function decrement() {
    // Here, we invoke the callback with the new value
    setCount(count - 1);
  }
  function pop() {
    return <Calendar />;
  }
  return (
    <div>
      <Button onClick={increment} variant="primary" size="lg" active></Button>
      {/* <Button onClick={pop} variant="primary" size="lg" active>
        {moment().subtract(count, "days").format(" dddd DD/MM/YYYY")}
      </Button> */}
      <Popup
        trigger={
          <button>
            {" "}
            {moment().subtract(count, "days").format(" dddd DD/MM/YYYY")}
          </button>
        }
        position="bottom center"
      >
        <div>
          <InfiniteCalendar width={400} height={300} disabledDays={[0, 6]} />
        </div>
      </Popup>
      <Button onClick={decrement} variant="primary" size="lg" active></Button>
    </div>
  );
}

export default Example;
