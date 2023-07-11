import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  categoriesFetch,
  categoryPost,
  itemPost,
  itemsFetch,
} from '../services/api-calls';

const Category = ({ label, id }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await itemsFetch({ categoryId: id });
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [id]);

  return (
    <div>
      <h2>{label}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

function Board() {
  const { id: boardId } = useParams();
  const [label, setLabel] = useState('');
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleAddCategory = async () => {
    const category = await categoryPost({ label, boardId });
    setCategories([...categories, category]);
    setLabel('');
  };

  const handleAddItem = async () => {
    await itemPost({ name, categoryId, imageURL, boardId });
    setCategories([]);
    const updatedCategories = await categoriesFetch({ boardId });
    setCategories(updatedCategories);

    setCategoryId('');
    setImageURL('');
    setName('');
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const updatedCategories = await categoriesFetch({ boardId });
      setCategories(updatedCategories);
    };

    fetchCategories();
  }, [boardId]);

  return (
    <div>
      {label}
      <id></id>
    </div>
  );
}

export default Board;
