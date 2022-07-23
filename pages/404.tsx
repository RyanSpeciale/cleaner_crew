import React from 'react'
import { Box, Text } from "grommet"
import classes from '../styles/404.module.scss'


type Props = {}

const NotFound = (props: Props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: "50px"}}>
      <Box className='bg-green-300' gap='medium' pad='large' border={{ size: 'small', color: 'black'}}  basis='50%' justify='center' alignContent='center' align='center' alignSelf='center' width='small' height='small' round='small'>
        <Text  size='large'>Whooooppppsss...</Text>
        <Text alignSelf='center' size='medium'>It appears that you are either trying to access something you are not supposed to or it does not exist</Text>
      </Box>
    </div>
  )
}

export default NotFound