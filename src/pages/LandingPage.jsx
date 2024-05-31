import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Typography,
  Button,
  useTheme,
  Box,
  Stack,
  Grid,
  Hidden,
  Divider,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import StarIcon from "@mui/icons-material/Star";

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import CarouselMUIRepeat from "../components/carousel/CarouselMUIRepeat";

function LandingPage() {
  const theme = useTheme();
  const boxRef = useRef();
  const featureRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  const [backgroundImage, setBackgroundImage] = useState(
    'url("images/feature-1.jpg")'
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -100% 0px", // Trigger when the heading is about to appear at the bottom of the screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const featureIndex = featureRefs.current.findIndex(
            (ref) => ref.current === entry.target
          );
          switch (featureIndex) {
            case 0:
              setBackgroundImage('url("images/feature-1.jpg")');
              break;
            case 1:
              setBackgroundImage('url("images/feature-2.jpg")');
              break;
            case 2:
              setBackgroundImage('url("images/feature-3.jpg")');
              break;
            default:
              setBackgroundImage('url("images/feature-1.jpg")');
          }
        }
      });
    }, observerOptions);

    featureRefs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <Box>
      {/* Header Section */}
      <header>
        <ResponsiveAppBar />
      </header>

      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url('images/cover.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: { xs: "50vh", sm: "50vh", md: "100vh", lg: "100vh" },
          p: 0,
        }}>
        <Container>
          <Stack
            sx={{
              spacing: 3,
              my: 5,
              width: { xs: "100%", sm: "50%" },
              display: "flex",
              color: theme.palette.primary.contrastText,
            }}>
            <Typography variant="h1" gutterBottom>
              Fast
              <br /> Reliable <br />
              Sustainable
            </Typography>
            <Typography variant="body1" paragraph>
              Amphaul is the all-in-one solution for waste management,
              nationwide. Book same day service online in minutes, or chat with
              our team to discuss customized solutions.
            </Typography>
            <Button variant="contained">Schedule Pickup</Button>
          </Stack>
        </Container>
      </Box>
      {/* Our Clients */}
      <Box
        component="section"
        sx={{
          textAlign: "center",
          py: 8,
          px: { xs: 2, sm: 4, md: 8 },
          backgroundColor: theme.palette.primary.main,
          minHeight: { xs: "20vh", sm: "20vh", md: "40vh" },
        }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <Stack spacing={1} alignItems="center" marginBottom="60px">
            <Typography variant="h2" gutterBottom color="#ffffff">
              Proudly Serving
            </Typography>
          </Stack>
          <CarouselMUIRepeat />
        </Stack>
      </Box>

      {/* About Us Section */}
      <Box component="section">{/* About Us content goes here */}</Box>

      {/* Features Section */}
      <Box component="section">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {/* Feature 1 */}
            <Hidden smUp>
              <Box
                width="100%"
                sx={{
                  backgroundImage: `url("images/feature-1.jpg")`,
                  height: "33.33vh",
                }}></Box>
            </Hidden>
            <Stack
              direction="column"
              spacing={2}
              p={{ xs: 4, sm: 8, md: 16 }}
              height={{ xs: "auto", sm: "100vh" }}
              justifyContent="center"
              textAlign={{ xs: "center", sm: "left" }}
              ref={featureRefs.current[0]}>
              <Typography variant="h2">Waste Management On-Demand</Typography>
              <Typography variant="body1">
                Solve your waste management worries with the click of a button.
                Our fully digital service makes it simple to organize
                sustainable pickup for any waste you want to remove and recycle
                from your site, including: cardboard, bulky items, food waste,
                medical waste and hazardous waste.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Button>Book Now</Button>
                <Button>Chat With Us</Button>
              </Stack>
            </Stack>

            {/* Feature 2 */}
            <Hidden smUp>
              <Box
                sx={{
                  backgroundImage: `url("images/feature-2.jpg")`,
                  height: "33.33vh",
                }}></Box>
            </Hidden>
            <Stack
              direction="column"
              spacing={2}
              p={{ xs: 4, sm: 8, md: 16 }}
              height={{ xs: "auto", sm: "100vh" }}
              justifyContent="center"
              textAlign={{ xs: "center", sm: "left" }}
              ref={featureRefs.current[1]}>
              <Typography variant="h2">Flexible & Customizable</Typography>
              <Typography variant="body1">
                Whether you’re scheduling a one-off pickup, searching for a
                reliable regular provider or solving a waste emergency, we’ll
                find the solution to perfectly suit your needs.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Button>Book Now</Button>
                <Button>Chat With Us</Button>
              </Stack>
            </Stack>

            {/* Feature 3 */}
            <Hidden smUp>
              <Box
                sx={{
                  backgroundImage: `url("images/feature-3.jpg")`,
                  height: "33.33vh",
                }}></Box>
            </Hidden>
            <Stack
              direction="column"
              spacing={2}
              p={{ xs: 4, sm: 8, md: 16 }}
              height={{ xs: "auto", sm: "100vh" }}
              justifyContent="center"
              textAlign={{ xs: "center", sm: "left" }}
              ref={featureRefs.current[2]}>
              <Typography variant="h2">Efficient & Reliable</Typography>
              <Typography variant="body1">
                Our services are designed to be both efficient and reliable,
                ensuring that your waste management needs are met with
                professionalism and care.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Button>Book Now</Button>
                <Button>Chat With Us</Button>
              </Stack>
            </Stack>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} sm={6}>
              <Box
                ref={boxRef}
                width="100%"
                sx={{
                  position: "sticky",
                  top: 0,
                  backgroundImage: backgroundImage,
                  height: "100vh",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "background-image 0.5s ease-in-out", // Smooth transition for background image
                }}></Box>
            </Grid>
          </Hidden>
        </Grid>
      </Box>

      {/* How it works Section */}
      <Box
        component="section"
        sx={{
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.primary.contrastText,
          py: { xs: 4, sm: 8, md: 12 },
        }}>
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            px={{ xs: 0, sm: 4, md: 16 }}>
            <Hidden smDown>
              <Box
                sx={{
                  width: { xs: "100%", sm: "33.33%" },
                }}>
                <Box
                  sx={{
                    backgroundImage: `url("images/cover.jpg")`,
                    height: "100%",
                  }}></Box>
              </Box>
            </Hidden>
            <Box
              sx={{
                pl: { xs: 0, sm: 4, md: 8 },
                width: { xs: "100%", sm: "66.66%" },
              }}>
              <Stack spacing={3}>
                <Typography variant="subtitle1">How Amphaul Work</Typography>
                <Typography variant="h2">
                  Solving your waste management woes is as simple as 1,2,3!
                </Typography>
              </Stack>
              <Timeline
                sx={{
                  my: 4,
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0,
                  },
                }}>
                <TimelineItem>
                  <TimelineOppositeContent hidden></TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Stack direction="row">
                      <Typography variant="subtitle1" width="80%">
                        Enter your ZIP code,
                        <strong>
                          {" "}
                          then choose a convenient time and date for pickup
                        </strong>
                      </Typography>
                      <Typography
                        variant="h2"
                        color={theme.palette.primary.lightest}>
                        01
                      </Typography>
                    </Stack>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent hidden></TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Stack direction="row">
                      <Typography variant="subtitle1" width="80%">
                        Get<strong> an instant, upfront</strong> quote
                      </Typography>
                      <Typography
                        variant="h2"
                        color={theme.palette.primary.lightest}>
                        02
                      </Typography>
                    </Stack>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent hidden></TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Stack direction="row">
                      <Typography variant="subtitle1" width="80%">
                        Make a booking<strong> in seconds</strong>
                      </Typography>
                      <Typography
                        variant="h2"
                        color={theme.palette.primary.lightest}>
                        03
                      </Typography>
                    </Stack>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
              <Stack spacing={3}>
                <Typography variant="h3">It's that easy!</Typography>
                <Typography variant="subtitle2">
                  Once you've made your booking, we'll provide you with the
                  contact information of your reliable waste management
                  provider. If you have any questions or want to make a change,
                  you can easily contact us directly by SMS, call or email.
                </Typography>
              </Stack>
              <Button sx={{ mt: 3 }}>Try it Now!</Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Testimonial Section */}
      <Box
        component="section"
        sx={{ backgroundColor: theme.palette.primary.light }}>
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{ py: { xs: 4, sm: 8, md: 12 } }}
            spacing={3}>
            {/* Review 1 */}
            <Stack
              spacing={3}
              sx={{
                backgroundColor: theme.palette.primary.main,
                p: 4,
                borderRadius: 2,
              }}>
              <Box>
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    <StarIcon sx={{ color: "gold" }}></StarIcon>
                  </span>
                ))}
              </Box>
              <Typography variant="subtitle2">
                The work was perfect. And so was the personality of the workers.
                An A+ experience.
              </Typography>
              <Typography variant="subtitle1">Guest Customer</Typography>
            </Stack>
            {/* Review 2 */}
            <Stack
              spacing={3}
              sx={{
                backgroundColor: theme.palette.primary.main,
                p: 4,
                borderRadius: 2,
              }}>
              <Box>
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    <StarIcon sx={{ color: "gold" }}></StarIcon>
                  </span>
                ))}
              </Box>
              <Typography variant="subtitle2">
                The work was perfect. And so was the personality of the workers.
                An A+ experience.
              </Typography>
              <Typography variant="subtitle1">Guest Customer</Typography>
            </Stack>
            {/* Review 3 */}
            <Stack
              spacing={3}
              sx={{
                backgroundColor: theme.palette.primary.main,
                p: 4,
                borderRadius: 2,
              }}>
              <Box>
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    <StarIcon sx={{ color: "gold" }}></StarIcon>
                  </span>
                ))}
              </Box>
              <Typography variant="subtitle2">
                The work was perfect. And so was the personality of the workers.
                An A+ experience.
              </Typography>
              <Typography variant="subtitle1">Guest Customer</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Contact Section */}
      <section>{/* Contact content goes here */}</section>

      {/* Footer Section */}
      <Box
        component="footer"
        sx={{
          backgroundColor: theme.palette.primary.main,
        }}>
        <Container
          sx={{
            px: { sm: 4, md: 16 },
            py: { xs: 4, sm: 8, md: 12 },
          }}>
          <Grid
            container
            spacing={3}
            sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Grid item xs={12} sm={6}>
              <Stack spacing={3}>
                <Typography variant="subtitle1">Let's Get Started</Typography>
                <Typography variant="h2">
                  Radically Simplified Waste Management
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display="flex"
              justifyContent="center"
              alignItems="center">
              <Stack spacing={1}>
                <Button>Book Now</Button>
                <Button>Chat With Us</Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Divider />
        <Container
          sx={{
            py: { xs: 4, sm: 8, md: 12 },
          }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <Stack spacing={4}>
                <img
                  src="logo.webp"
                  alt="logo"
                  className="filtered-image"
                  width="50%"
                />
                <Stack spacing={2} width="66.66%">
                  <Typography variant="subtitle1">Address</Typography>
                  <Typography variant="body1">
                    2261 Market Street, #4061 San Francisco, CA 94114
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Stack spacing={4}>
                <Typography variant="subtitle1">Business</Typography>
                <Typography variant="body1">Lorem Ipsum 1</Typography>
                <Typography variant="body1">Lorem Ipsum 2</Typography>
                <Typography variant="body1">Lorem Ipsum 3</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Stack spacing={4}>
                <Typography variant="subtitle1">About Us</Typography>
                <Typography variant="body1">Lorem Ipsum 1</Typography>
                <Typography variant="body1">Lorem Ipsum 2</Typography>
                <Typography variant="body1">Lorem Ipsum 3</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Stack spacing={4}>
                <Typography variant="subtitle1">Providers</Typography>
                <Typography variant="body1">Lorem Ipsum 1</Typography>
                <Typography variant="body1">Lorem Ipsum 2</Typography>
                <Typography variant="body1">Lorem Ipsum 3</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Stack spacing={4}>
                <Typography variant="subtitle1">Support</Typography>
                <Typography variant="body1">Lorem Ipsum 1</Typography>
                <Typography variant="body1">Lorem Ipsum 2</Typography>
                <Typography variant="body1">Lorem Ipsum 3</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Typography
          variant="body1"
          xs={{ pb: 4, textAlign: { xs: "left", sm: "center" } }}>
          © 2024 Amhaul. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default LandingPage;
