
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function InfoCardsSlideUp(props) {
    const cardNum = [1, 2];
    const infos = props.cardsInfo.content;

    const cardStyle = {
        borderRadius: 5,
        '&:hover': {
            elevation: 5
        }
    }
    const cards = infos.map((info, idx) =>
        <Grid item container xs={info.xsWidth} md={info.mdWidth} justifyContent="center" className="slideUpCardHolder">
            <Card sx={{ maxWidth: 500, borderRadius: "15px" }} elevation={5}>
                <CardMedia
                    component="img"
                    height="140"
                    image={info.imgSrc}
                    alt="pic"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Roboto', textAlign: 'Center' }}>
                        {info.title}
                    </Typography>
                    {/* <Typography variant="p" color="text.secondary"
                        className="ecoIntro" style={{
                            fontFamily: 'Roboto', wordWrap: 'break-word', hyphens: 'auto', width: "100%",
                            height: "45px"
                        }}>

                        {info.content}

                    </Typography> */}
                </CardContent>

            </Card>
            <Card sx={{ maxWidth: 500, borderRadius: "15px" }} className="cardOver" elevation={5}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Roboto', textAlign: 'Center' }}>
                        {info.title}
                    </Typography>
                    <Typography variant="p" color="text.secondary" className="cardOver-content"
                        style={{
                            fontFamily: 'Roboto', wordWrap: 'break-word', hyphens: 'auto', width: "100%",
                            height: "45px"
                        }}>

                        {info.content}

                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
    const [cardStart, setCardStart] = useState(0);
    const divId = props.cardsInfo.id ? props.cardsInfo.id : ""
    return (

        <div className="cardInfo-box" id={divId}>
            <div className="cardInfo-content-box">
                <Box sx={{ flexGrow: 1 }} justifyContent="center"
                >
                    <Grid container spacing={2} justifyContent="center">
                        {cards}
                    </Grid>
                </Box>
            </div>
        </div>

    )
}

export default InfoCardsSlideUp
