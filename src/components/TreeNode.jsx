import React, { useState } from 'react';

export default function TreeNode({ node, level = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const toggleExpand = () => {
    if (hasChildren) setExpanded(!expanded);
  };

  return (
    <div className="tree-node" style={{ paddingLeft: `${level * 20}px` }}>
      <div className={`node-label ${hasChildren ? 'clickable' : ''}`} onClick={toggleExpand}>
        {hasChildren ? (
          <span className="icon">{expanded ? '▼' : '▶'}</span>
        ) : (
          <span className="icon">•</span>
        )}

        {node.url ? (
          <a
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
            className="node-link"
          >
            {node.name}
          </a>
        ) : (
          <span className="node-text">{node.name}</span>
        )}
      </div>

      {hasChildren && expanded && (
        <div className="node-children">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
