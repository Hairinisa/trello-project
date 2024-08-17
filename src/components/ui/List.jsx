import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCard } from "../../store/slices/boardSlice";
import { FaPen } from "react-icons/fa";

const List = ({ list }) => {
  const [cardText, setCardText] = useState("");
  const dispatch = useDispatch();

  const handleAddCard = () => {
    if (cardText.trim() !== "") {
      dispatch(addCard({ listId: list.id, cardText }));
      setCardText("");
    }
  };

  
  return (
    <ListContainer>
      <h3>{list.title}</h3>
      {list.cards.map((card) => (
        <Card key={card.id}>{card.text}</Card>
      ))}
      <AddCardInput
        type="text"
        placeholder="Добавить карточку"
        value={cardText}
        onChange={(e) => setCardText(e.target.value)}
      />
      <AddCardButton onClick={handleAddCard}>Добавить карточку <FaPen /></AddCardButton>
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  background-color: #f4f5f7;
  border-radius: 3px;
  padding: 10px;
  margin-right: 20px;
  width: 200px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
`;

const AddCardInput = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100%;
`;

const AddCardButton = styled.button`
  margin-top: 5px;
  padding: 5px;
  background-color: #48552d;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
`;
