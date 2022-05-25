import React, { useState } from 'react';
import { createTree } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const [formTreeName, setFormTreeName] = useState('');
  const [formLongevity, setFormLongevity] = useState('');
  const [formHeight, setFormHeight] = useState('');
  const history = useHistory(); //what does this do?

  async function handleCreate(e) {
    e.preventDefault();
    await createTree({
      name: formTreeName,
      longevity: formLongevity,
      height: formHeight,
    });
    history.push('./list');
  }
  return (
    <div>
      <h2>Add a Tree</h2>
      <form onSubmit={handleCreate}>
        <label>
          Name
          <input value={formTreeName} onChange={(e) => setFormTreeName(e.target.value)} />
        </label>

        <label>
          Longevity
          <input value={formLongevity} onChange={(e) => setFormLongevity(e.target.value)} />
        </label>

        <label>
          Height
          <input value={formHeight} onChange={(e) => setFormHeight(e.target.value)} />
        </label>
        <button>Submit Your Tree</button>
      </form>
    </div>
  );
}
