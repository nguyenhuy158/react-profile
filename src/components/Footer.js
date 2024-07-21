import React, { useState } from "react";
import Button from '@mui/material/Button';
import toast, { Toaster } from 'react-hot-toast';
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check'; // Import CheckIcon
import ThemeToggleButton from '../ThemeToggleButton';

import Grid from '@mui/material/Grid';
// import  Item  from '@mui/material/Item';

function Footer() {
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility

  const saveToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("128.199.72.16");
      toast('Saved to clipboard🥳');
      setShowAlert(true); // Show the alert on success
      setTimeout(() => setShowAlert(false), 3000); // Hide the alert after 3 seconds
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <footer>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          item
          xs={6}
        >
          <Button size="small" variant="text" color="secondary" onClick={saveToClipboard}>huyit08</Button>
          {/* {showAlert && (
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Saved to clipboard🥳
            </Alert>
          )} */}
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          item
          xs={6}
        >
          <Toaster />
          <ThemeToggleButton />
        </Grid>
      </Grid>


    </footer>
  );
}

export default Footer;
