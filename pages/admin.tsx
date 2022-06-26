import React from "react";
import { prisma } from '../utils/prisma';
import { Grid, Button, Typography, ButtonGroup, Paper,  } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import styles from '../styles/admin.module.scss';



const admin = () => {
  return (
    <div className={styles.mainDiv}>
      <Grid container>
        
      </Grid>
    </div>
  );
};

export default admin;


export async function getServerSideProps() {

  return {
    props: {}
  }
}
