import { ClassNames } from "@emotion/react";
import {
  Grid,
  Pagination,
  PaginationItem,
  Paper,
  Avatar,
  Typography,
  Stack,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/reviews.module.scss";
import { prisma } from '../utils/prisma'
import { Box, Button, Form, FormField, TextArea, TextInput, Spinner } from "grommet";


const Reviews = ({ reviews }: any) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(true);
  
  


  function refreshPage() {
    window.location.reload();
  }

  const onSubmitHandler = async () => {
    setLoading(true);
    const data = await axios.post('/api/review', {
      name: name,
      title: title,
      body: body,
      verified: false
    })
    setTitle('')
    setName('')
    setBody('')
    setLoading(false)
    refreshPage()
  }

  const resetForm = () => {
    setTitle('')
    setName('')
    setBody('')
  }

  useEffect(() => {
    setLoading(false)
  }, [])
  
  if (loading) {
    return (
      <div className={styles.Spinner}>
        <Spinner size="xlarge" />
      </div>
    )
  }

  return (
    <Grid
      container
      direction="column"
      spacing={4}
      justifyContent="center"
      alignItems="center"
      sx={{ padding: "5px", margin: "15px" }}
      className={styles.mainContainer}
    >
      <Grid item justifyContent="center" sx={{ backgroundColor: 'whitesmoke', marginBottom: '10vh'}}>
        <Box direction="column" gap="medium">
          <h1 className='text-2xl'>We value our client's feedback more than anything.</h1>
          <h3 className='text-xl'>Please leave review below and check what other's have said about us!</h3>
        </Box>
      </Grid>
      <Grid item>
        <Box direction='column' gap="small" alignContent="center" background='white' width='medium' border={{ color: 'black', size: 'medium'}} round="medium" pad='medium'>
          <FormField label='Your Name'>
            <TextInput value={name} onChange={event => setName(event.target.value)}  />
          </FormField>
          <FormField label='Give your review a title'>
            <TextInput value={title} onChange={event => setTitle(event.target.value)}  />
          </FormField>
          <FormField>
            <TextArea value={body} placeholder='Give us your thoughts!' onChange={(event) => setBody(event.target.value)} />
          </FormField>
          <Box direction="row" gap="medium" pad='medium' justify="center">
            <Button primary size='large' onClick={onSubmitHandler}>Submit</Button>
            <Button primary size='large' onClick={resetForm}>Reset</Button>
          </Box>
        </Box>
      </Grid>
      <Grid item spacing={2} justifyContent="center" alignItems="center">
        <Grid
          container
          direction="row"
          spacing={3}
          flex={2}
          justifyContent="center"
          alignItems="center"
          className={styles.reviewsContainer}
        >
          {reviews.map((review: any) => (
            <Grid
              item
              key={review.id}
              justifyContent="center"
              alignItems="center"
              className={styles.singleReview}
            >
              <Paper
                className={styles.reviewPaper}
                sx={{
                  padding: "20px",
                  borderRadius: "20px",
                  border: "2px solid black",
                }}
                elevation={10}
              >
                <Stack direction="column" spacing={2}>
                  <Typography>{review.name}</Typography>
                  <Typography>{review.title}</Typography>
                  <br></br>
                  <Typography>{review.body}</Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export async function getStaticProps() {
  
  const data = await prisma.review.findMany({
    take: 10
  })
  

  return {
    props: { reviews: data } // will be passed to the page component as props
  };
}
export default Reviews;
