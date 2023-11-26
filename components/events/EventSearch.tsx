import React, { useRef } from "react";
import classes from "./events-search.module.css";

function EventSearch(props: {
  onSearch: (year: number, month: number) => void;
}) {
  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);

  function submitHandler(event: React.FormEvent<any>) {
    event.preventDefault();

    const selectedYear = yearRef.current?.value || 0;
    const selectedMonth = monthRef.current?.value || 0;

    props.onSearch(+selectedYear, +selectedMonth);
  }

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="year">Year</label>
            <select id="year" ref={yearRef}>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="month">Month</label>
            <select id="month" ref={monthRef}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <button>Search</button>
        </div>
      </form>
    </>
  );
}

export default EventSearch;
