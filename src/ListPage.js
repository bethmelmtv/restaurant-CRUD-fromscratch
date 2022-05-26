import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrees } from './services/fetch-utils';

export default function ListPage() {
  const [trees, setTrees] = useState([]);
  //why does this need to be an array? an array of trees? to be mapped over?
  useEffect(() => {
    async function fetch() {
      const data = await getTrees();
      setTrees(data);
    }
    fetch();
  }, []); //what is a dependency array

  return (
    <div>
      {trees.map((tree) => (
        <Link key={tree.id} to={`/items/${tree.id}`}>
          <div>
            <p>{tree.name}</p>
            <p>{tree.longevity}</p>
            <p>{tree.length}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
