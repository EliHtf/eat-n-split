import React from "react";
import ListItem from "./ListItem";

const List = ({ friends, onSelect, selectedFriend }) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <ListItem
            key={friend.id}
            friend={friend}
            selectedFriend={selectedFriend}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </>
  );
};

export default List;
