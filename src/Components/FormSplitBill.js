import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSplit(e) {
    e.preventDefault();
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form onSubmit={handleSplit} className="form-split-bill">
      <h2>split a bill with {selectedFriend.name}</h2>

      <label>💰Bill value</label>
      <input
        type="number"
        onChange={(e) => setBill(Number(e.target.value))}
        value={bill}
      />

      <label>🧍‍♀️Your expense</label>
      <input
        type="number"
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
        value={paidByUser}
      />

      <label>👭{selectedFriend.name}'s expense:</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑Who is paying the bill?</label>
      <select
        onChange={(e) => setWhoIsPaying(e.target.value)}
        defaultValue={whoIsPaying}
        id="id">
        <option value="user">you</option>
        <option value="friend">another</option>
      </select>

      <Button clickHandler={handleSplit}>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
