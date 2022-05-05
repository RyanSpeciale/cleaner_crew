import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Box, Button } from 'grommet'
import { Text } from 'grommet'
import { Paragraph } from 'grommet'




const Home: NextPage = () => {
  return (
    <div>
      <Box  direction='row-responsive' justify='center' gap='large' className={styles.container}>
        <Box className={styles.main} direction='column' border={{ style: 'solid', color: 'black', size: 'medium' }} gap='small' height='medium' width='medium' round='medium' pad='medium'>
          <Text className={styles.serving} alignSelf='center'  weight='bold' size='large'>Serving Kenosha and surrounding areas since 2018...</Text>
        </Box>
        <Box className={styles.main2} direction='column' gap='medium' border={{ style: 'solid', color: 'black', size: 'medium' }} height='medium' width='15cm' round='medium' pad='large'>
          <Text className={styles.text} alignSelf='center' size='large'>
            We do both Commercial and Residential cleaning.
          </Text>
          <Text className={styles.text} alignSelf='center' size='large'>
            Weekly, Bi-Weekly, and Monthly services available.
          </Text>
          <Text className={styles.text} alignSelf='center' size='large'>
            We do everything from the bathroom to the garage!
          </Text>
          <Button className={styles.button} primary color='black' alignSelf='center' justify='center' label='Get a Free Quote'/>
        </Box>
      </Box>
    </div>
  )
}

export default Home
