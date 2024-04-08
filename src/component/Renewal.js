import React from 'react'
import './Renewal.css'

export default function Renewal() {
  return (
    <>
    <div className="header2">
        <h2>Renewal Form</h2>
    </div>
    <div className="renewal">
        <form action="">
            <input type="text" placeholder="BusPass id" />
            <button type="submit">Submit</button>
        </form>
    </div>
    </>
  );
}
