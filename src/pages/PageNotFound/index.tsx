import { Button, Link } from '@mui/material';
import React from 'react';

function PageNotFound() {

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button><Link href={"/"}>Home</Link></Button>
    </div>
  );
};

export default PageNotFound;
