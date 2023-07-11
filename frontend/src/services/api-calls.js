import { USER_ID_LOCAL_KEY } from '../constants';

const BACKEND_URL = 'http://127.0.0.1:5000';

// * BOARD

export async function boardPost(body) {
  const userId = localStorage.getItem(USER_ID_LOCAL_KEY);
  const response = await fetch(`${BACKEND_URL}/boards`, {
    method: 'POST',
    body: JSON.stringify({ ...body, userId }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    return undefined;
  }
  console.log(response);
  return response.json();
}

export async function boardsFetch() {
  const userId = localStorage.getItem(USER_ID_LOCAL_KEY);
  const response = await fetch(`${BACKEND_URL}/boards?userId=${userId}`);
  if (!response.ok) {
    return undefined;
  }
  console.log(response);
  return response.json();
}

// * CATEGORIES

export async function categoryPost(body) {
  const userId = localStorage.getItem(USER_ID_LOCAL_KEY);
  const response = await fetch(`${BACKEND_URL}/categories`, {
    method: 'POST',
    body: JSON.stringify({ ...body, userId }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    return undefined;
  }
  console.log(response);
  return response.json();
}


//todo
export async function categoriesFetch({ boardId }) {
  try {
    const response = await fetch(`/boards/${boardId}/categories`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log('Failed to fetch categories');
      return [];
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

//

export async function itemPost(body) {
  const userId = localStorage.getItem(USER_ID_LOCAL_KEY);
  const response = await fetch(`${BACKEND_URL}/items`, {
    method: 'POST',
    body: JSON.stringify({ ...body, userId }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    return undefined;
  }
  console.log(response);
  return response.json();
}

//todo
export async function itemsFetch({ categoryId }) {
  try {
    const response = await fetch(`/categories/${categoryId}/items`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log('Failed to fetch items');
      return [];
    }
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
}
//

export async function userPost(body) {
  const response = await fetch(`${BACKEND_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    return undefined;
  }
  console.log(response);
  return response.json();
}

export async function login(body) {
  const { username, password } = body;
  const response = await fetch(`${BACKEND_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    return undefined;
  }
  console.log(response);
  return response.json();
}

export function logout() {
  localStorage.removeItem('authToken');
}

