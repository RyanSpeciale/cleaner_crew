import React from "react";
import { prisma } from '../../lib/prisma';
import { Grid, Button, Typography, ButtonGroup, Paper,  } from "@mui/material";
import styles from '../../styles/admin.module.scss'
import { withSessionSsr } from "../../lib/withSession";




const admin = ({ reviews }: any) => {
  return (
    <div className={styles.mainDiv}>
      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <h1>You made it to the dashboard, so you are logged in</h1>
      </Grid>
    </div>
  );
};

export default admin;


export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;
    if (!user) {
      return {
        notFound: true
      }
    }

    const reviews = await prisma.review.findMany()

    return {
      props: {
        user: req.session.user,
        reviews: { reviews }
      }
    }
  }
)
