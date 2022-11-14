import {
    Typography,
    TypographyProps,
    InputBase,
    Button,
    ButtonProps,
    Box,
    BoxProps
  } from '@mui/material/';
  import { styled as defaultStyled } from '@mui/material/styles';
  import { styled as legacyStyled } from '@mui/material/styles';
  import LoadingButton from '@mui/lab/LoadingButton';

  export const Img = defaultStyled('img')({
    width: '100%',
    overflow: 'hidden'
  });