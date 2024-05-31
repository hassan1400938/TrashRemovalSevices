import React, { useEffect, useState } from "react";
import { Box, IconButton, Slide, Stack, useMediaQuery } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Client from "./Client";
import clientData from "../../helper/clients.json";

function CarouselMUIRepeat() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");

  // Media queries to determine the number of cards per page based on screen size
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  const cardsPerPage = isMobile ? 1 : isTablet ? 3 : 4;

  const duplicateCards = clientData.map((client) => (
    <Client key={client.id} client={client} />
  ));

  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    setCards(duplicateCards);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "auto",
        width: "100%",
        marginTop: "40px",
      }}>
      <IconButton
        onClick={handlePrevPage}
        sx={{ margin: { xs: 1, sm: 3, md: 5 } }}
        disabled={currentPage === 0}>
        <NavigateBeforeIcon />
      </IconButton>
      <Box overflow="hidden">
        {cards.map((card, index) => (
          <Box
            key={`card-${index}`}
            sx={{
              width: "100%",
              height: "100%",
              display: currentPage === index ? "block" : "none",
            }}>
            <Slide direction={slideDirection} in={currentPage === index}>
              <Stack
                spacing={8}
                direction="row"
                alignContent="center"
                justifyContent="center"
                sx={{ width: "100%", height: "100%" }}>
                {cards.slice(
                  index * cardsPerPage,
                  index * cardsPerPage + cardsPerPage
                )}
              </Stack>
            </Slide>
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handleNextPage}
        sx={{ margin: { xs: 1, sm: 3, md: 5 } }}
        disabled={
          currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1
        }>
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
}

export default CarouselMUIRepeat;
