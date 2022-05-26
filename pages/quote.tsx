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
        <Box className={styles.titleBox} round='small' justify='center' direction='row-responsive' width='24cm' height='8cm' border={{ color: 'red', size: 'small'}}>
          <Text>
            Get a free estimate on your cleaning needs!
          </Text>
        </Box>
        <Box className={styles.formbox} round='small' gap='large' pad='medium' alignSelf='center' direction='column' width='14cm' margin={{ top: '2cm'}} border={{ color: 'black', size: 'small'}}>
          <Form>
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

<Box direction='column' gap='small' basis='60%' width="medium" round="medium" pad='small' height="16cm" border={{ color: 'black', size: 'medium' }} className={styles.formbox}>
        <Form className={styles.form}>
          <FormField name='firstName' label='First Name'>
            <TextInput name='firstName' />
          </FormField>
          <FormField name='lastName' label='Last Name'>
            <TextInput name='lastname' />
          </FormField>
        </Form>
      </Box>