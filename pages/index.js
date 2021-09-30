import { Button, Container, Grid, Box, Heading } from 'theme-ui'

export default function App(props) {
  return (
    <Container py={4}>
      <Heading as="h3" sx={{textAlign: 'center', fontSize: 4}}>Maths AA HL</Heading>
      <Heading as="h1" sx={{textAlign: 'center', fontSize: 6}}>Formula Booklet</Heading>
      <Heading>#1: Number & Algebra</Heading>
      <Grid columns={2}>
        <Box>
        un =u1+(n−1)d
        </Box>
      </Grid>
    </Container>
  )
}
