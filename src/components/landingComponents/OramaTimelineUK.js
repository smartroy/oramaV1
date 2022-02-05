import React from 'react'
import Grid from '@mui/material/Grid'
function OramaTimelineUK(props) {
    const timelineItems = props.timelineInfo.slice(0, -1);
    const timelineContent = timelineItems.map((item, idx) =>

        <Grid item container md={3} justifyContent="center" className="orama-timeline-grid-item" >
            {/* <div className="orama-timeline-grid-item"> */}
            <div className="uk-card uk-card-default uk-card-hover uk-margin-medium-bottom uk-overflow-auto ">
                <div className="uk-card-body">
                    <div className="uk-card-title">
                        <h3 >{item.title}</h3>
                    </div>

                    <p style={{ fontFamily: 'Roboto' }}>
                        {item.content}
                    </p>
                </div>
            </div>
            {/* </div> */}
        </Grid>

    )
    return (
        <div className="orama-timeline-box">
            <div className="orama-timeline-content-box">
                <div className="orama-timeline-title">
                    <h1 style={{ paddingLeft: '0.5em' }}>Roadmap</h1>
                </div>
                <Grid container spacing={2} justifyContent="center">
                    {timelineContent}
                </Grid>
            </div>
        </div>
    )
}

export default OramaTimelineUK
