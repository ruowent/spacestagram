import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';

import { Container, TitleContainer, Title, Image, Video, ButtonContainer, Textbox, Description } from './card.styles';

export default function Card({
  apodData: { date, explanation, url, title, media_type, copyright },
  // like,
  // setLike,
}) {

  const [like, setLike] = useState(false);
  const [showText, setShowText] = useState(false);

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <Title>{date}</Title>
      </TitleContainer>

      {media_type === 'image' && <Image src={url} alt={title}/>}
      {media_type === 'video' && <Video src={url} title={title}/>}

      <ButtonContainer>
        <IconButton aria-label='Like' onClick={() => setLike(!like)}>
          {like ?
            <FavoriteIcon fontSize='large' color='error'/> :
            <FavoriteBorderIcon fontSize='large'/>}
        </IconButton>
        <IconButton aria-label='Share'>
          <SendIcon fontSize='large'/>
        </IconButton>
        <Description onClick={() => setShowText(!showText)}>
          {showText ? 'SHOW LESS' : 'SHOW MORE'}
        </Description>
      </ButtonContainer>

      <Textbox>
        {copyright && <p>©{copyright}</p>}
        {showText && explanation}
      </Textbox>
    </Container>
  )
};