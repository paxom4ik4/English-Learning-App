import * as React from 'react';

const Loader: React.FC = () => (
  <div className="spinner-border text-danger" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

export default Loader;
