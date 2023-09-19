import React, { useState } from "react";
import { v4 } from "uuid";
import Button from "./Button";

const FormAddFriend = ({ friends, setFriends, setShowAddFriend }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleAddFriend = (e) => {
    e.preventDefault();
    if (!name || !imageUrl) return;
    setFriends([
      ...friends,
      { id: v4(), name: name, image: imageUrl, balance: 0 },
    ]);
    setShowAddFriend((showAddForm) => !showAddForm);
  };
  return (
    <form action="#" className="form-add-friend">
      <label>👫Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼Image URL</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      <Button clickHandler={handleAddFriend}>Add</Button>
    </form>
  );
};

export default FormAddFriend;
