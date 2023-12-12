// ProgressBar.js

import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const ProgressBar = ({ value }) => {
  return (
    <div style={{ width: '50%', margin: '20px auto', textAlign: 'center' }}>
      <Typography variant="h6">{`${Math.round(value)}%`}</Typography>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{ height: 20, borderRadius: 10 }}
      />
    </div>
  );
};

export default ProgressBar;