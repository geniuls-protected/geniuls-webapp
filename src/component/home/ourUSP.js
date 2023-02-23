import React from 'react';
import Image from 'next/image';
import { Container, Link, Box, Grid, Heading, Text } from 'theme-ui';
import { IoIosArrowForward } from 'react-icons/io';
import feature1 from './assets/service-1.svg';
import feature2 from './assets/service-2.svg';
import feature3 from './assets/service-3.svg';
import feature4 from './assets/service-4.svg';
import feature5 from './assets/service-5.svg';
import feature6 from './assets/service-6.svg';

const PRODUCT_FEATURE = {
  posts: [
    {
      icon: feature1,
      // title: 'Email Hosting',
      text:
        'Unlike traditional courses our program is designed by taking account of a unique requirements and skills of the student.'
    },
    {
      icon: feature2,
      // title: 'Dedicated Hosting',
      text:
        'One Head Mentor, one Buddy Mentor + Extra skills Mentors(Data Science, Full stack, Projects, Resume Building, etc) are assigned 24X7 to a student. This Program is not a 9-5 Learning Classes Platform, its molded according to students needs.'
    },
    {
      icon: feature3,
      // title: 'VPS Services',
      text:
        'There is no time boundation to get success from Geniuls (Some students are placed within 4 weeks of enrolling in the program), while for Masai School or any other programs they take 7- 8 months of training, train on their own pace, where they don’t take account the urgency of students and their precious time. The curriculum of Geniuls has a edge here.'
    },
    {
      icon: feature4,
      // title: 'WP Website Builder',
      text:
        'Even after placement, our mentors will be in touch with you for switching companies which leads to better package and better position.'
    }
  ],
};

export default function OurUSP() {
    const { sectionTitle, posts } = PRODUCT_FEATURE;
  return (
    <div style={{backgroundColor:'#F9FAFC'}} id='usp'>
      <div className='container'>
      <Box sx={styles.section}>
      <Container>
        <h4 style={{textAlign:'center'}}>Our USP&apos;s</h4>
        <div style={{paddingTop:'20px'}}/>

        <Grid sx={styles.grid}>
          {posts.map(({ icon, title, text }, index) => (
            <Box key={`feature-key-${index}`} sx={styles.items}>
              <Box className="image">
                <Image src={icon} alt={title} width="70" height="70" />
              </Box>
              <Box sx={styles.itemContent}>
                {/* <Heading as="h3">
                  {title}
                </Heading> */}
                <Text as="p">{text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
    </div>
    </div>
    )
  }

  const styles = {
    section: {
      pt: ['70px', null, null, null, '100px', null, '150px'],
      pb: ['40px', null, null, null, '70px', null, '90px'],
      backgroundColor: '#F9FAFC',
    },
    grid: {
      gridColumnGap: '30px',
      gridTemplateColumns: ['1fr', null, '1fr 1fr', null, '1fr 1fr 1fr'],
    },
    items: {
      display: 'flex',
      mb: ['30px', null, null, null, null, null, '60px'],
      '.image': {
        flexShrink: '0',
        width: '70px',
        height: '70px',
        mr: ['20px', null, null, '30px'],
      },
    },
    itemContent: {
      h3: {
        fontSize: ['17px', null, null, null, '18px'],
        color: '#0F2137',
        fontWeight: 700,
        lineHeight: 1,
        alignItems: 'center',
        display: 'inline-flex',
        flexWrap: 'wrap',
        span: {
          backgroundColor: '#28A5FF',
          fontSize: '13px',
          color: '#fff',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          lineHeight: '26px',
          borderRadius: '30px',
          letterSpacing: '-0.5px',
          px: '10px',
          ml: ['10px', null, '10px', '10px'],
          mt: ['0', null, '5px', '0'],
        },
      },
      p: {
        color: '#343D48',
        fontSize: ['14px', null, null, '16px'],
        lineHeight: 1.87,
        mt: '5px',
        mb: '10px',
      },
      a: {
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '15px',
        color: '#3183FF',
        fontWeight: 500,
        transition: 'all 500ms ease',
        '&:hover': {
          color: 'black',
        },
        svg: {
          fontSize: '17px',
          ml: '5px',
        },
      },
    },
  };
  