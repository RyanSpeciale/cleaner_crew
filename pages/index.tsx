import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Box, Button } from 'grommet'
import { Text } from 'grommet'
import SlideShow from '../components/SlideShow'
import Link from 'next/link'





const Home: NextPage = () => {
  return (
    <div>
      <Box  direction='row-responsive' justify='center' gap='large' className={styles.container}>
        <SlideShow />
        <Box className={styles.main2} direction='column' gap='medium' border={{ style: 'solid', color: 'black', size: 'medium' }} height='medium' width='15cm' round='medium' pad='large'>
          <Text className={styles.text} alignSelf='center' size='large' weight='bold'>
            Serving Kenosha and surrounding areas since 2018...
          </Text>
          <Text className={styles.text} alignSelf='center' size='large'>
            We Provide both residential and commercial cleanings.
          </Text>
          <Text className={styles.text} alignSelf='center' size='large'>
            Weekly, Bi-Weekly, and Monthly services available.
          </Text>
          <Link href={'/quote'} passHref>
            <Button className={styles.button} primary color='black' margin={{ top: '0.8cm'}} alignSelf='center' justify='center' label='Get a Free Quote'/>
          </Link>
        </Box>
      </Box>
    </div>
  )
}

export default Home
