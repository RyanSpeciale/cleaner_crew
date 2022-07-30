import React, { useEffect } from 'react'
import { Box, Typography} from '@mui/material'
import { useRouter } from 'next/router'




const SubmittedModal = () => {
  const router = useRouter()

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])
  
  
  
  return (
    <div>
      <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thank you for your review submission!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You will now be redirected to the homepage.
          </Typography>
        </Box>
    </div>
  )
}

export default SubmittedModal