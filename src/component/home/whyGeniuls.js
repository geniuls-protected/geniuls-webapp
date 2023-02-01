import catalog from '../../images/catalog.png'
import Image from 'next/image';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
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
        <div className="container" style={{marginLeft:'100px', marginRight:'10px'}}>
        <h4><bold><mark>Why Geniuls?</mark></bold></h4>
        <div style={{paddingTop:'40px'}}/>
        <Flex >
          {posts.map(({ stepNo, title, text }, index) => (
            <Box  key={`feature-post-key-${index}`}>
              <Box className="image">
                <div className='numberCircle'>{stepNo}</div>
              </Box>
              <Box>
                <Heading as="h3">{title}</Heading>
                <Text as="p">{text}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
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
  