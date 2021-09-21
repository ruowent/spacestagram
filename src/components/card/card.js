import React, { useState } from 'react';

import { Snackbar, IconButton } from '@mui/material';
import {
  Close as CloseIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { Container, TitleContainer, Title, Text, Image, Video, ButtonContainer, Buttons, Textbox, Description } from './card.styles';

export default function Card({ apodData }) {

  const { date, explanation, url, title, media_type, copyright } = apodData;
  const [like, setLike] = useState(false);
  const [showText, setShowText] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const snackbarAction = (
    <IconButton
      size='small'
      aria-label='close'
      color='inherit'
      onClick={handleClose}
    >
      <CloseIcon fontSize='small' />
    </IconButton>
  );

  const handleShare = async (url) => {
    await navigator.clipboard.writeText(url);
    setOpenSnackbar(true);
  }

  const handleLike = () => {
    setLike(!like);
    localStorage.setItem('Likes', apodData);
  }

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <Title>{date}</Title>
      </TitleContainer>

      {media_type === 'image' && <Image src={url} alt={title}/>}
      {media_type === 'video' && <Video src={url} title={title}/>}

      <ButtonContainer>
        <Buttons>
          <IconButton aria-label='Like' onClick={handleLike}>
            {like ?
              <FavoriteIcon fontSize='large' color='error'/> :
              <FavoriteBorderIcon fontSize='large'/>}
          </IconButton>
          <IconButton aria-label='Share'>
            <SendIcon fontSize='large' onClick={() => handleShare(url)}/>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={handleClose}
              message='URL Copied. Ready to Share!'
              action={snackbarAction}
            />
          </IconButton>
        </Buttons>
        <Description onClick={() => setShowText(!showText)}>
          {showText ? 'SHOW LESS' : 'SHOW MORE'}
        </Description>
      </ButtonContainer>

      <Textbox>
        {copyright && <Text>©{copyright}</Text>}
        {showText && explanation}
      </Textbox>
    </Container>
  )
};