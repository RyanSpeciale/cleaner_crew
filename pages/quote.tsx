import React from 'react';
import { Button, Form, FormField, TextInput, Text } from 'grommet';
import { Box } from 'grommet';
import styles from '../styles/quote.module.scss'



interface Props {}

const Quote = () => {
  const [values, setValues] = React.useState({})
  
  
  return (
    <div className={styles.mainDiv}>
      <Box justify='center' direction='column'>
        <Box className={styles.titleBox} round='small' pad='large' justify='center' direction='row-responsive' width='24cm' height='8cm' border={{ color: 'black', size: 'small'}}>
          <Text size='large'>
            Getting a quote gives you a set price for the services you would like. All quotes are done in-person at the location the services would be provided. An in-person quote would consist of meeting your housekeeper, going over the specific details of what services your housekeeper would be providing, and figuring out a schedule that best accommodates you. Please feel free to request an in-person quote by submitting the form below.
          </Text>
        </Box>
        <Box className={styles.formbox} round='small' gap='large' pad='medium' alignSelf='center' direction='column' width='14cm' margin={{ top: '2cm'}} border={{ color: 'black', size: 'small'}}>
          <Form>
            <Text alignSelf='center' textAlign='center' className={styles.time}>We will respond within 48 hours</Text>
            <FormField label='First Name'>
              <TextInput />
            </FormField>
            <FormField label='Last Name'>
              <TextInput  />
            </FormField>
            <FormField label='Full Address'>
              <TextInput />
            </FormField>
            <FormField label='Contact Phone Number'>
              <TextInput />
            </FormField>
            <FormField label='Email'>
              <TextInput />
            </FormField>
            <Box direction='row-responsive' justify='center' >
              <Button primary label='Submit' />
            </Box>
          </Form>
        </Box>
      </Box>
    </div>
  )
}

export default Quote;

