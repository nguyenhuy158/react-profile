import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



const Contacts = forwardRef((props, ref) => {
  const { listSocials } = { ...props };
  return (
    <section ref={ref} id="contact" className="link-to-nav">
      {/* {console.log('cout << "Give the world a reason to remember your name."')} */}

      <Box component="section" sx={{ p: 2 }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={5}>

          {/* <!-- social --> */}
          {listSocials.map((e, index) => (
            <Grid item key={index}>
              {/* <AnchorIcon e /> */}
              <a href={e.url} target="_blank">
                {e.icon}
              </a>
            </Grid>
          ))}

        </Grid>
      </Box>

    </section>
  );
});

Contacts.propTypes = {
  listSocials: PropTypes.array,
};

Contacts.defaultProps = {
  listSocials: [],
};

export default Contacts;
