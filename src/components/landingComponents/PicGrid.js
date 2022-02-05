import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

function PicGrid(props) {
    const pics = props.pics.pics
    const title = props.pics.title
    const picSize = props.pics.size
    const picData = [1, 2, 3, 4]

    const picContent = pics.map((pic, idx) =>
        <Grid item container xs={6} md={picSize} justifyContent="center">

            <Card sx={{ maxWidth: 345 }}
                style={{ borderRadius: "10px", backgroundColor: "#aaaaaa" }}>
                <CardHeader

                    subheader={`@${pic.author}`}
                    style={{ textAlign: "right" }}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={pic.src}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary"
                        style={{ textAlign: "left", backgroundColor: "yellow" }}>
                        Price: {pic.price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
    return (
        <div className="picGrid-box" id="oramaPartner">
            <div className="picGrid-content-box" style={{ textAlign: "center" }}>
                <div className="picGrid-title">
                    <h1 style={{ paddingLeft: '0.5em' }}>{title}</h1>
                </div>
                <Box sx={{ flexGrow: 1 }} justifyContent="center">
                    <Grid container spacing={2} justifyContent="center">
                        {picContent}
                    </Grid>

                </Box>
            </div>

        </div>
    )
}

export default PicGrid
