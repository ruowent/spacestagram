import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

// import {FavoriteIcon, FavoriteBorderIcon} from '@mui/icons-material';
import { Container, Title, Image, ButtonContainer, Textbox, Description } from './card.styles';

export default function Card({
  apodData: { date, explanation, url, title },
  // like,
  // setLike,
}) {

  const [like, setLike] = useState(false);
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setLike(!like)
  };

  return (
    <Container>
      <Title>
        <h4>{title}</h4>
        <h5>{date}</h5>
      </Title>
      <Image src={url} alt={title}/>
      <ButtonContainer>
        <IconButton aria-label='Like' onClick={handleClick}>
          {like ?
            <FavoriteIcon fontSize='large' color='error'/> :
            <FavoriteBorderIcon fontSize='large'/>}
        </IconButton>
        <Description onClick={() => setShowText(!showText)}>Show Description...</Description>
      </ButtonContainer>
      <Textbox>
        
        {showText && explanation}
      </Textbox>
    </Container>
  )
};