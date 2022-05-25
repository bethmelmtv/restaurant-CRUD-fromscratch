import React, { useState, useEffect } from 'react';
import { getTreebyId, updateTree, deleteTree } from './services/fetch-utils';
import { useParams, useHistory } from 'react-router-dom';

export default function UpdatePage() {
  const [formTreeName, setFormTreeName] = useState('');
  const [formLongevity, setFormLongevity] = useState('');
  const [formHeight, setFormHeight] = useState('');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function fetch() {
      const tree = await getTreebyId(id);
      setFormTreeName(tree.name);
      setFormLongevity(tree.longevity);
      setFormHeight(tree.height);
    }
    fetch();
  }, [id]);

  async function handleDeleteClick() {
    await deleteTree(id);
    history.push('./list');
  }

  async function handleUpdate(e) {
    e.preventDefault();

    await updateTree(id, {
      name: formTreeName,
      longevity: formLongevity,
      city: formHeight,
    });
    history.push('/list');
  }

  return (
    <div>
      <form>
        <h2>Update Your Tree</h2>
        <label>
          Name
          <input value={formTreeName} onChange={(e) => setFormTreeName(e.target.value)}></input>
        </label>
        <label>
          Longevity
          <input value={formLongevity} onChange={(e) => setFormLongevity(e.target.value)}></input>
        </label>
        <label>
          Height
          <input value={formHeight} onChange={(e) => setFormHeight(e.target.value)}></input>
        </label>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </form>
    </div>
  );
}
