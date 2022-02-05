import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
function OramaNews(props) {
    const styleLeft = {

        borderRadius: '5px',
        width: '90%',
        textAlign: 'justify',
        border: "none",
        boxShadow: "none",
        margin: 'auto',
        fontFamily: 'Roboto'

    }
    const styleRight = {
        maxHeight: '30rem',
        borderRadius: '5px',
        width: '90%',
        textAlign: 'justify',
        border: "none",
        boxShadow: "none",
        fontFamily: 'Roboto'
    }
    const styleTitle = {
        fontFamily: 'Chivo',
        fontSize: '1.8rem',
        lighHeight: '1rem',
        fontWeight: '700',
        margin: '1rem 0px 1rem',
        textTransform: 'capitalize',


    }
    const styleContent = {
        fontFamily: 'Roboto',
        fontSize: '1.2rem'
    }
    const styleLabel = {
        backgroundColor: '#C7F1ED',
        // width: 'fit-content',
        display: 'inline-block',
        // paddingLeft: '0.3em',
        // paddingRight: '0.3em',
        // paddingTop: '0.2em',
        // paddingBottom: '0.2em',
        // marginRight: '1em',
        // marginBottom: '1em',
        fontFamily: 'Roboto',
        textTransform: 'uppercase',
        fontSize: '0.8rem',
        fontWeight: '700',
        padding: '0px 0.6rem',
        marginRight: '0.6rem',
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"

    }
    const contentLeft = props.news.newsWithPic
    const newsCardLeft = <div >
        <Card style={styleLeft}>

            <CardContent>
                <Typography gutterBottom variant="p" component="div" style={styleLabel}>
                    {contentLeft.media}
                </Typography>
                <Typography gutterBottom variant="p" component="div" style={styleLabel}>
                    {contentLeft.date}
                </Typography>
                <Typography style={styleTitle} component="div">
                    <h4 style={styleTitle}> {contentLeft.title} </h4>
                </Typography>
                <Typography style={styleContent} color="text.secondary">
                    {contentLeft.content}
                    <a href={contentLeft.link} target="_blank" rel="noopener noreferrer">
                        More
                    </a>
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="140"
                image={contentLeft.pic}
                alt="CAN tech"
                style={{ maxWidth: "95%", margin: "auto", borderRadius: '5px' }}
            />
        </Card>
    </div>

    const contentRight = props.news.news
    const newsCardRight = contentRight.map((news, idx) =>
        <Card style={styleRight}>
            <CardContent>
                <Typography gutterBottom variant="p" component="div" style={styleLabel}>
                    {news.media}
                </Typography>
                <Typography gutterBottom variant="p" component="div" style={styleLabel}>
                    {news.date}
                </Typography>
                <Typography style={styleTitle} component="div">
                    <h4 style={styleTitle}> {news.title} </h4>
                </Typography>
                <Typography style={styleContent} color="text.secondary">
                    {news.content}
                    <a href={news.link} target="_blank" rel="noopener noreferrer">
                        More
                    </a>
                </Typography>
            </CardContent>

        </Card>
    )
    const left = <Grid item xs={12} md={6} container justifyContent="center">
        {newsCardLeft}
    </Grid>


    const right =
        <Grid item xs={12} md={6} container justifyContent="center" >


            {newsCardRight}
        </Grid>
    return (
        <div className="OramaNews-box" id="oramaNews">
            <div className="OramaNews-content-box">
                <div className="title" style={{ paddingLeft: '1.1em' }}><h1>News</h1></div>

                <Grid container justifyContent="center" spacing={1}>
                    {left}
                    {right}
                </Grid>
            </div>
        </div>
    )
}

export default OramaNews
