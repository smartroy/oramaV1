import React from 'react'

function OramaTimeline(props) {
    const oramaEvents = [1, 2, 3, 4, 5];
    const timelineItems = props.timelineInfo.slice(0, -1);
    const timelineItemLast = props.timelineInfo[props.timelineInfo.length - 1];
    const timelineContent = timelineItems.map((item, idx) =>
        <div className="uk-timeline-item">
            <div className="uk-timeline-content">
                <div className="uk-card uk-card-default uk-card-hover uk-margin-medium-bottom uk-overflow-auto">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                            <h3 className="uk-card-title" style={{ fontFamily: 'Roboto' }}>
                                {item.title}
                            </h3>
                            {/* <span className="uk-label uk-label-success uk-margin-auto-right">Feature</span> */}
                        </div>
                    </div>
                    <div className="uk-card-body">
                        <h5 style={{ fontFamily: 'Roboto' }}>
                            {item.content}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
    const timelineContentLast =
        <div className="uk-timeline-item-last">
            <div className="uk-timeline-content">
                <div className="uk-card uk-card-default uk-card-hover uk-margin-medium-bottom uk-overflow-auto">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                            <h3 className="uk-card-title" style={{ fontFamily: 'Roboto' }}>
                                {timelineItemLast.title}
                            </h3>

                        </div>
                    </div>
                    <div className="uk-card-body">
                        <h5 style={{ fontFamily: 'Roboto' }}>
                            {timelineItemLast.content}
                        </h5>
                    </div>
                </div>

            </div>
        </div>


    return (
        <div className="orama-timeline-box">
            <div className="orama-timeline-content-box">
                <h1 style={{ paddingLeft: '0.5em' }}>Timeline</h1>
                <div className="uk-container uk-padding">

                    <div className="uk-timeline">
                        {timelineContent}
                        {timelineContentLast}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OramaTimeline
