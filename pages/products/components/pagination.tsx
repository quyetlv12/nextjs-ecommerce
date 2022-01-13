import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';

export default function PaginationSize() {
  const handleChangePage = (page:any) =>{
    console.log(page.target);
  }
  return (
    <Container>
      <Stack spacing={2} justifyContent="center">
        <Pagination count={10} size="large" onClick={(e)=>handleChangePage(e)}/>
      </Stack>
    </Container>
  );
}
