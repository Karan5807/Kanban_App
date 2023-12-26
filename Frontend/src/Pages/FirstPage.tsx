import React from 'react'
import { Button, Grid, Typography } from "@mui/material";


function FirstPage() {
  return (
    <Grid container>
      <Grid container justifyContent={"center"}>
        <Typography variant='h3' fontFamily={"Oxygen"}>Welcome to Kanban Board</Typography>
      </Grid>
      <Grid container justifyContent={"center"} mt={4}>
        <Button variant='contained' color='error'>Get Started</Button>
      </Grid>
    </Grid>

  )
}

export default FirstPage;