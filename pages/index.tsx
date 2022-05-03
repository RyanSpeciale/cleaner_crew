import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Box } from 'grommet'
import { Text } from 'grommet'
import { Grid } from 'grommet'




const Home: NextPage = () => {
  return (
    <div>
      <Box  direction='row-responsive' justify='center' gap='large' className={styles.container}>
        <Box className={styles.main} height='medium' width='medium' round='medium' pad='medium'>
          <Text weight='bold' size='large'>Serving Kenosha and surrounding areas since 2018</Text>
        </Box>
        <Box className={styles.main} height='medium' width='medium' round='medium' pad='medium'>
          <Text>This is where we can list services</Text>
        </Box>
      </Box>
    </div>
  )
}

export default Home
