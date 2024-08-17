
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../store/slices/boardSlice';
import List from './List';

const Board = () => {
  const [newListTitle, setNewListTitle] = useState('');
  const [isAddingList, setIsAddingList] = useState(false);
  const lists = useSelector(state => state.board.lists);
  const dispatch = useDispatch();

  const handleAddList = () => {
    if (newListTitle.trim() !== '') {
      dispatch(addList(newListTitle));
      setNewListTitle('');
      setIsAddingList(false);
    }
  };

  const handleCancel = () => {
    setIsAddingList(false);
    setNewListTitle('');
  };

  return (
    <BoardContainer>
      {lists.map(list => (
        <List key={list.id} list={list} />
      ))}
      <AddListContainer>
        {isAddingList ? (
          <>
            <AddListInput
              type="text"
              placeholder="Название списка"
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
            />
            <AddListButton onClick={handleAddList}>Добавить ещё одну колонку</AddListButton>
            <CancelButton onClick={handleCancel}>Отмена</CancelButton>
          </>
        ) : (
          <AddListButton onClick={() => setIsAddingList(true)}>Добавить список</AddListButton>
        )}
      </AddListContainer>
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
  display: flex;
  padding: 20px;
`;

const AddListContainer = styled.div`
  margin-right: 20px;
  width: 200px;
`;

const AddListInput = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100%;
`;

const AddListButton = styled.button`
  margin-top: 5px;
  padding: 10px;
  background-color: #3b3b39;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
`;

const CancelButton = styled.button`
  margin-top: 5px;
  padding: 10px;
  background-color: #de544f;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
`;
