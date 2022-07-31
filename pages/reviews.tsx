import { ClassNames } from "@emotion/react";
import {
  Grid,
  Pagination,
  PaginationItem,
  Paper,
  Avatar,
  Modal,
  Typography,
  Stack,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/reviews.module.scss";
import { prisma } from "../lib/prisma";
import {
  Box,
  Form,
  FormField,
  TextArea,
  TextInput,
  Spinner,
  Carousel,
} from "grommet";
import { Button } from "react-bootstrap";
import { Rating } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { SettingsInputComponent, SettingsPowerRounded } from "@mui/icons-material";
import SubmittedModal from "../components/SubmittedModal";

const Reviews = ({ reviews }: any) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("")
  const [rating, setRating] = React.useState<number | null>(3);
  const [open, setOpen] = useState(false)

  

  const onSubmitHandler = async () => {
    const data = await axios.post("/api/review", {
      name: name,
      title: title,
      body: body,
      rating: rating,
      verified: false,
    })
     .then((response) => {
      console.log(response)
      resetForm()
      setOpen(true)
     })
     .catch((error) => {
      console.log(error)
      setError(error)
     })
  };

  const resetForm = () => {
    setTitle("");
    setName("");
    setBody("");
    setRating(0);
  };


  return (
    <Grid
      container
      direction="column"
      spacing={4}
      sx={{ padding: "5px", margin: "15px" }}
      className={styles.mainContainer}
    >
      <Modal open={open}>
        <SubmittedModal />
      </Modal>
      <Grid item>
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "white",
              width: "40%",
              padding: "5px",
              borderRadius: "10px",
              border: "2px solid black",
            }}
          >
            <Typography align="center" variant="h5">
              We value our client&apos;s feedback more than anything else.
            </Typography>
            <Typography align="center" variant="h6">
              Leave us a review, and while your at it check out what other&apos;s
              have said!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" spacing={20}>
          <Grid item>
            <Box
              direction="column"
              gap="small"
              alignContent="center"
              background="white"
              width="medium"
              border={{ color: "black", size: "medium" }}
              round="medium"
              pad="medium"
            >
              <Typography fontWeight="bold" align="center" variant="h6">
                Leave us a review!
              </Typography>
              <FormField label="Your Name">
                <TextInput
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </FormField>
              <FormField label="Give your review a title">
                <TextInput
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </FormField>
              <FormField>
                <TextArea
                  value={body}
                  placeholder="Give us your thoughts!"
                  onChange={(event) => setBody(event.target.value)}
                />
              </FormField>
              <Box
                direction="row"
                justify="center"
                alignContent="center"
                basis="center"
              >
                Give us a rating.
              </Box>
              <Box
                direction="row"
                justify="center"
                alignContent="center"
                basis="center"
              >
                <Rating
                  value={rating}
                  onChange={(event, newRating) => {
                    setRating(newRating);
                  }}
                />
              </Box>
              <Box direction="row" gap="xlarge" pad="medium" justify="center">
                <Button onClick={onSubmitHandler}>Submit</Button>
                <Button onClick={resetForm}>Reset</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Carousel fill >
                {reviews?.map((review: any) => (
                  <Paper key={review.id} elevation={10} sx={{ backgroundColor: 'white', height: '300px', width: '500px', padding: '5px', display: 'flex', flexDirection: 'column', border: '2px solid black'}}>
                    <FormatQuoteIcon fontSize="large" />
                    <h3 className="text-center font-serif text-3xl font-bold mb-3">{review.title}</h3>
                    <Rating readOnly value={review.rating} className="justify-center mb-4" size='large' />
                    <h4 className="text-center mb-4 font-serif font-bold">{review.name}</h4>
                    <h6 className="text-center font-mono">{review.body}</h6>
                    <FormatQuoteIcon fontSize="large" sx={{ justifyContent: 'flex-end', position: 'absolute', right: 0, bottom: 0}} />
                  </Paper>
                ))}
              </Carousel>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export async function getStaticProps() {
  const data = await prisma.review.findMany({
    take: 10,
    where: {
      verified: true
    }
  });

  return {
    props: { reviews: data }, // will be passed to the page component as props
  };
}
export default Reviews;

// <Grid
//           container
//           direction="row"
//           spacing={3}
//           flex={2}
//           justifyContent="center"
//           alignItems="center"
//           className={styles.reviewsContainer}
//         >
//           {reviews.map((review: any) => (
//             <Grid
//               item
//               key={review.id}
//               justifyContent="center"
//               alignItems="center"
//               className={styles.singleReview}
//             >
//               <Paper
//                 className={styles.reviewPaper}
//                 sx={{
//                   padding: "20px",
//                   borderRadius: "20px",
//                   border: "2px solid black",
//                 }}
//                 elevation={10}
//               >
//                 <Stack direction="column" spacing={2}>
//                   <Typography>{review.name}</Typography>
//                   <Typography>{review.title}</Typography>
//                   <br></br>
//                   <Typography>{review.body}</Typography>
//                   <Rating value={review.rating} readOnly />
//                 </Stack>
//               </Paper>
//             </Grid>
//           ))}
//

{
  /* <Box direction='column' gap="small" alignContent="center" background='white' width='medium' border={{ color: 'black', size: 'medium'}} round="medium" pad='medium'>
          <FormField label='Your Name'>
            <TextInput value={name} onChange={event => setName(event.target.value)}  />
          </FormField>
          <FormField label='Give your review a title'>
            <TextInput value={title} onChange={event => setTitle(event.target.value)}  />
          </FormField>
          <FormField>
            <TextArea value={body} placeholder='Give us your thoughts!' onChange={(event) => setBody(event.target.value)} />
          </FormField>
          <Box direction='row' justify="center" alignContent="center" basis="center">
            Give us a rating.
          </Box>
          <Box direction='row' justify="center" alignContent="center" basis="center">
            <Rating value={rating} onChange={(event, newRating) => { setRating(newRating)}} />
          </Box>
          <Box direction="row" gap="xlarge" pad='medium' justify="center">
            <Button onClick={onSubmitHandler}>Submit</Button>
            <Button onClick={resetForm}>Reset</Button>
          </Box>
        </Box> */
}
