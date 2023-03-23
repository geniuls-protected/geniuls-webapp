import React, { Component } from 'react';
import {
  UncontrolledCarousel
} from 'reactstrap';

const items = [
  {
    src: '/image/BodiSatta_Carousel.jpg'
  },
  {
    src: '/image/Ankita_Carousel.jpg'
  },
  {
    src: '/image/Sachin_Carousel.jpg'
  },
  {
    src: '/image/Divya_Carousel.jpg'
  }
];

class Carousal extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {

    return (
      <div>
        <UncontrolledCarousel items={items} className='caousal-photo'/>
      </div>
    );
  }
}

export default Carousal;
// import React from "react";
// import styled from "styled-components";

// const Container = styled.div`

// width: 630px;
// flex: flexbox;
// flex-direction: column;
// height 357px;
// // padding:10px;
// margin-top: 100px;
// margin-right: 100px;
// border: 2px dashed black;
// align-items: right;
// justify-content: flex-end;
// `;

// const Rightcontainer = () =>{

//   return(
//       <Container>
//           <Heading>Name Surname,50LPA</Heading>

//           <Content>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia iste aperiam culpa sapiente dolorem facilis, esse eius repellendus nulla fugiat adipisci voluptate incidunt perspiciatis eveniet.
//           </Content>
//       </Container>
//   )

// }


// export default Rightcontainer