import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrees } from './services/fetch-utils';

export default function ListPage() {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    async function fetch() {
      const data = await getTrees();
      setTrees(data);
    }
    fetch();
  }, []);

  return (
    <div>
      {trees.map((tree) => (
        <Link key={tree.id}>
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
