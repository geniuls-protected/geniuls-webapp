import catalog from '../../images/catalog.png'
import Image from 'next/image';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import scribble from '../../images/scribble.png'
import image1 from './assets/features-1.svg';
import image2 from './assets/features-2.svg';
import image3 from './assets/features-3.svg';

const FEATURES_DATA = {
  title: 'Go beyond ultimate features',
  text: 'Ideal solutions for you',
  posts: [
    {
      stepNo: '01',
      title: 'Pay after you get placed!',
      text: 'Eliminating Monetary Risk of Higher Education',
    },
    {
      stepNo: '02',
      title: 'No pre-requirements!',
      text: 'Any college, Any CGPA, Any degree',
    },
    {
      stepNo: '03',
      title: 'Up to date curriculum',
      text: 'Understanding of Workspace and updated Technology(missing in Freshers Hired by Companies from college)',
    },
  ],
};

export default function WhyGeniuls() {
    const { title, text, posts } = FEATURES_DATA;
  return (
    <>
        <div className="container">
          <div class='work-heading why-layout'><bold>Why Geniuls?</bold></div>
          <Image src={scribble} class='scribble-img why-layout'/>
          <div class='why-layout'>
            <div class='row'>
            <div class='col-4 why-box'>
              <div class='numberCircle'>01</div>
              <div class='why-head'>Pay after you get placed!</div>
              <div class='why-sub'>Eliminating Monetary Risk of <br/> Higher Education</div>
            </div>
            <div class='col-4 why-box'>
              <div class='numberCircle'>02</div>
              <div class='why-head'>No pre-requirements!</div>
              <div class='why-sub'>Any college, Any CGPA, Any degree</div>
            </div>
            <div class='col-4 why-box'>
              <div class='numberCircle'>03</div>
              <div class='why-head'>Up to date curriculum</div>
              <div class='why-sub'>Understanding of Workspace and updated <br/> Technology(missing in Freshers Hired <br/>by Companies from college)</div>
            </div>
          </div>
          </div>
        </div>
    </>
  )
}   

const styles = {
    section: {
      overflow: 'hidden',
      pt: ['70px', null, null, '100px'],
      pb: ['40px', null, null, '70px'],
    },
    container: {},
    flex: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    sectionTitle: {
      textAlign: 'center',
      mb: ['40px', null, null, '70px'],
      h2: {
        color: '#0F2137',
        fontWeight: 500,
        fontSize: ['22px', null, null, '24px'],
        lineHeight: 1,
        letterSpacing: '-0.5px',
        mt: '15px',
      },
      p: {
        color: 'secondary',
        fontSize: '16px',
        lineHeight: 1.87,
      },
    },
    post: {
      mb: '30px',
      mx: ['0', null, null, null, null, '15px'],
      display: 'flex',
      flex: ['0 0 100%', null, null, '0 0 calc(33.333% - 30px)'],
      flexDirection: ['column', null, null, null, 'row'],
      justifyContent: ['center', null, 'flex-start'],
      textAlign: ['center', null, null, 'left'],
      '>.image': {
        flexShrink: 0,
        width: '70px',
        height: '70px',
        mx: ['auto', null, null, '0'],
      },
    },
    postContent: {
      ml: ['0', null, null, null, '30px'],
      mt: ['20px', null, null, null, '0'],
      h3: {
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: 1,
        color: '#0F2137',
        mb: '15px',
      },
      p: {
        color: '#343D48',
        lineHeight: 1.87,
        fontSize: ['14px', null, null, '16px'],
        maxWidth: ['100%', '300px', null, '100%'],
        mx: [null, 'auto', null],
      },
    },
  };
  