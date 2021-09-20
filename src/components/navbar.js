import { AppBar, Toolbar, Typography } from '@mui/material';
import { StyledLink } from './navbar.styles';

export default function Navbar () {
  return (
    <AppBar position='static' style={{ background: '#000000' }}>
      <Toolbar id='back-to-top-anchor' style={{ padding: '0 10%'}}>
        <Typography variant='h4' component='div' sx={{ flexGrow: 1, fontFamily: 'Oleo Script' }}>
          <StyledLink to="/">Spacestagram</StyledLink>
        </Typography>

        <StyledLink to="/search">SEARCH</StyledLink>
      </Toolbar>
    </AppBar>
  )
}