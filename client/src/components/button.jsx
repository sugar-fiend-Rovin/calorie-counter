import React, { Fragment, useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { ItemsContext } from "./home";
import moment from "moment";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Calendar from "react-calendar";
import Popup from "reactjs-popup";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css"; // Make sure to import the default stylesheet
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Example(props) {
  const [count, setCount] = useContext(ItemsContext);
  console.log(count);
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   setCount(count);
  // });
  function increment() {
    // Here, we invoke the callback with the new value
    setCount(moment(count).subtract(-1, "days"));
    console.log(count.format("MM-DD-YYYY"));
  }
  function decrement() {
    // Here, we invoke the callback with the new value
    setCount(moment(count).subtract(1, "days"));
    console.log(count.format("MM-DD-YYYY"));
  }
  function pop() {
    return <Calendar />;
  }
  return (
    <div style={{ marginBottom: "30px" }}>
      <ButtonGroup aria-label="Basic example">
        <button
          type="button"
          onClick={decrement}
          className="btn btn-primary btn-lg active"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {/* <Button onClick={pop} variant="primary" size="lg" active>
        {count.format("DD-MM-YYYY")}
      </Button> */}
        <Popup
          trigger={
            <button type="button" className="btn btn-primary btn-lg active">
              {count.format("ddd MM-DD-YYYY")}
            </button>
          }
          position="bottom center"
        >
          <div>
            <InfiniteCalendar
              onSelect={(date) => setCount(moment(date))}
              width={400}
              height={300}
              disabledDays={[0, 6]}
            />
          </div>
        </Popup>
        <button
          type="button"
          onClick={increment}
          className="btn btn-primary btn-lg active"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>{" "}
      </ButtonGroup>
    </div>
  );
}

export default Example;
