import Button from "./Button";

const ListItem = ({ friend, selectedFriend, onSelect }) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt="img" />
        <h3>{friend.name}</h3>
        {friend.balance > 0 && (
          <p style={{ color: "green" }}>
            {friend.name} owes you {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance < 0 && (
          <p style={{ color: "red" }}>
            You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <Button clickHandler={() => onSelect(friend)}>
          {selectedFriend?.id === friend.id ? "close" : "Select"}
        </Button>
      </li>
    </>
  );
};

export default ListItem;
