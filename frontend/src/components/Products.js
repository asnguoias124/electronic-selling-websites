import { Typography, useTheme, useMediaQuery, IconButton, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Carousel } from '@trendyol-js/react-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { styled } from '@mui/system';

const CarouselButton = styled(IconButton)({
    padding: 8,
    top: '30%',
    borderRadius: 0,
    border: '1px solid #2a2a2a',
    opacity: 0.6,
    '&:hover': {
      opacity: 1
    }
  });
  
  const CustomButton = styled(Button)({
    fontSize: '13px',
    textTransform: 'none',
    border: '1px solid #2a2a2a',
    borderRadius: 0,
    padding: '12px 25px',
    display: 'inline-block',
    fontWeight: '500',
    transition: 'all .3s',
    backgroundColor: '#fff',
    color: '#2a2a2a',
    fontFamily: 'Poppins',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#2a2a2a'
    }
  });

export default function ProducttsComponent(){
    const theme = useTheme();
    const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Container maxWidth = {lgBreakpointUp? 'lg' : 'md'}
        sx = {{pr : 10}}
        >
          <Box sx={{ px: 3, pb: 10 }} id="men-section">
            <Box  sx={{ mb: 6 }}>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                        Smartphones
                </Typography>
                <Typography variant="subtitle1"
                    color="#a1a1a1"
                    fontStyle="italic">
                Details to details is what makes We different from
            the other themes.
                </Typography>
              </Box>
                <Carousel
                show={3}
                slide={1}
                transition={0.5}
                swiping={true}
                swipeOn={0.1}
                rightArrow={
                  <CarouselButton area-label="rightarrow" size="small">
                    <ArrowForwardIosIcon />
                  </CarouselButton>
                  }
                  leftArrow={
                  <CarouselButton area-label="leftarrow" size="small">
                    <ArrowBackIosIcon />
                  </CarouselButton>
                  }
                >
                </Carousel>
                

        </Box>

        </Container>
    )}