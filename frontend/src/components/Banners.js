import { useTheme } from "@emotion/react";
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography, useMediaQuery, Button, ImageList, ImageListItem } from "@mui/material";
import leftBannerImage from '../images/left-banner-image.jpg';
import rightBannerImageFirst from '../images/baner-right-image-01.jpg';
import rightBannerImageSecond from '../images/baner-right-image-02.jpg';
import rightBannerImageThird from '../images/baner-right-image-03.jpg';
import rightBannerImageFourth from '../images/baner-right-image-04.jpg';
import { Img } from "./CustomComponents";
import { Link } from "react-router-dom";

export default function BannersComponent() {
  const theme = useTheme();
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up("md"));
  const mlBreackpointBetween = useMediaQuery(theme.breakpoints.between('md','lg'));
  const smBreakpointDown = useMediaQuery(
    theme.breakpoints.down('sm'))
    const itemData = [
      {
        title: 'Smartphone',
        description: 'Best Choice For SmartPhone',
        body: 'Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.',
        img: rightBannerImageFirst,
        scrollTo: 'women-section'
      },
      {
        title: 'Smart Watch',
        description: 'Best Choice For Watches',
        body: 'Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.',
        img: rightBannerImageSecond,
        scrollTo: 'men-section'
      },
      {
        title: 'Action Camera',
        description: 'Best Choice For Action Camera',
        body: 'Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.',
        img: rightBannerImageThird,
        scrollTo: 'kids-section'
      },
      {
        title: 'Laptop',
        description: 'Best Choice for Laptop',
        body: 'Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.',
        img: rightBannerImageFourth,
        scrollTo: 'accessories-section'
      }
    ];

  const InnerBox = styled(Box)({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'white'
  });
  const HoverBox = styled(Box)({
    position: 'absolute',
    top: '15px',
    right: '15px',
    left: '15px',
    bottom: '15px',
    textAlign: 'center',
    backgroundColor: 'rgba(42, 42, 42, 0.97)',
    opacity: 0,
    visibility: 'visible',
    transition: 'all 0.5s',
    '&:hover': {
      opacity: 1
    }
  });

  return (

    <Grid
      container
      columSpacing={0.1}
      sx={{
        mx: "auto",
        px: 2,
        pb: 10,
        maxWidth: mdBreakpointUp ? null : 790
      }}
    >
      <Grid
        item md>
          <Box
            sx = {{
              my: 2,
            position: 'relative',
            mb: `${mdBreakpointUp ? null : '-18px'}`
            }}
            >
              <InnerBox sx={{ left: '10%', pr: 3 }}>
                <Typography gutterBottom
              variant="h2"
              sx={{ fontWeight: 700 }}>
                  We are Shop for Electronics
                  
                </Typography>
                <Typography
              variant="subtitle1"
              sx={{ mb: '30px' }}
            >
              Custom, responsive &amp; adaptive Material-UI Template
            </Typography>
                <Link to="/product">
                  <Button
                    variant="outlined"
                  >
                    Shop Now
                    </Button>
                </Link>
              </InnerBox>
                <Img
                  component="img"
                  src={leftBannerImage}
                alt="Left Banner"
                style={
                  mdBreakpointUp ? { width: '99.7%' } : { width: '100%' }}
                />
          </Box>
        </Grid>
        <Grid
          item md xs={12} sx = {{ mx: 'auto' }}>
            <ImageList sx = {{ width: '100%' }} cols = {2}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <InnerBox sx = {{ width: '100%', textAlign: 'center' }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700 }}
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    >
                    {item.description}
                    </Typography>
                    </InnerBox>
                    <HoverBox>
                      <InnerBox
                      sx = {{
                        transform: 'translate(-50%, -50%)',
                        left: '50%',
                        width: '100%'
                      }}
                      >
                      {smBreakpointDown ? null : (
                        <Typography
                        variant = {mlBreackpointBetween ? 'h5' : 'h4'}
                        sx = {{ fontWeight: 700 }}>
                          {item.title}
                        </Typography>
                      )}
                      <Typography
                      variant = "body2"
                      sx = {{ p: '0px 20px', mb:'20px' }}>
                        {item.description}
                      </Typography>
                      <Button
                      variant = "outlined"
                      color = "secondary"
                      style={
                        mlBreackpointBetween || smBreakpointDown ? {padding: '8px 16px', fontSize: '11px' } : {}
                      }
                      >
                        Shop Now
                      </Button>
                      </InnerBox>
                    </HoverBox>
                  <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"/>
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
    </Grid>
  )
}
 