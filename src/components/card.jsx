import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';

// import {FavoriteIcon, FavoriteBorderIcon} from '@mui/icons-material';
import { Container, Image } from './card.styles';

export default function Card({ apodData: { date, explanation, url, title } }) {

  return (
    <Container>
      <div className='card-title'>
        <h1>{title}</h1>
        <h2>{date}</h2>
      </div>
      <Image src={url} alt={title}/>
      <div className='card-buttons'>
        <IconButton aria-label="Like">
          <FavoriteBorderIcon />
        </IconButton>
      </div>
      <div className='card-textbox'>
        <p>{explanation}</p>
      </div>
    </Container>
  )
};