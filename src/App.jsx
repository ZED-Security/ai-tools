import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TreeNode from './components/TreeNode';

export default function App() {
  const [treeData, setTreeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/ai-tools/data/aiTools.json')
      .then(response => {
        setTreeData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading OSINT Data...</div>;

  const Header = () => {
    return (
      <header className='header'>
        <div className='container'>
          <p>AI Tools</p>
        </div>
      </header>
    );
  }
  return (
    <>
      <Header />
      <div className='content'>
        {treeData ? <TreeNode node={treeData} /> : <p>No data found.</p>}
      </div>
    </>
  );
}
