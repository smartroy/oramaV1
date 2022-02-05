import React from 'react'
import InfoWithPic from './landingComponents/InfoWithPic'
import InfoCards from './landingComponents/InfoCards'
import InfoCardsSlideUp from './landingComponents/InfoCardsSlideUp'
import OramaHeader from './landingComponents/OramaHeader'
import ScrollToTop from './landingComponents/ScrollToTop'
import OramaTimeline from './landingComponents/OramaTimeline'
import OramaTimelineUK from './landingComponents/OramaTimelineUK'
import TextOverPic from './landingComponents/TextOverPic'
import PicGrid from './landingComponents/PicGrid'
import OramaNews from './landingComponents/OramaNews'
import { infoContents } from './pageContent/infoContents'
import { techInfo } from './pageContent/techInfo'
import { ecoInfos } from './pageContent/oramaEco'
import { timelineContents } from './pageContent/timelineContent'
import { newsContent } from './pageContent/newsContents'
import { partners } from './pageContent/partners'
import { artWorks } from './pageContent/artWorks'
import MVPModal from './landingComponents/MVPModal'


function LandingPage() {


    const headerData = {
        title: "Orama",
        paragraph: "The Future of NTFs'"
    }
    const textOverPicData = {
        title: "We Love Art, AI and Blockchain",
        text: "We are an innovative and creative team of veterans in blockchain development that also happen to be savvy in AI and its related infrastructure, with proven big corporation track record"
    }
    return (
        <div>
            <InfoWithPic infoContent={infoContents[0]}></InfoWithPic>
            <InfoWithPic infoContent={infoContents[1]}></InfoWithPic>
            <InfoWithPic infoContent={infoContents[2]}></InfoWithPic>
            {/* <SlidingCards></SlidingCards> */}
            <InfoCardsSlideUp cardsInfo={ecoInfos}></InfoCardsSlideUp>
            <MVPModal></MVPModal>
            <TextOverPic data={textOverPicData}></TextOverPic>
            <InfoCards cardsInfo={techInfo}></InfoCards>
            <PicGrid pics={artWorks}></PicGrid>
            <OramaTimelineUK timelineInfo={timelineContents}></OramaTimelineUK>
            {/* <OramaTimeline timelineInfo={timelineContents}></OramaTimeline> */}
            <OramaNews news={newsContent}></OramaNews>

            <PicGrid pics={partners}></PicGrid>
        </div>
    )
}

export default LandingPage
