import React, { Component } from 'react';
import {
  UncontrolledCarousel,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Image from 'next/image'
import Dream from '../../images/Dream.png'

const items = [
  {
    src: '/image/BodiSatta.jpeg'
  },
  {
    src: '/image/Ankita.jpeg'
  },
  {
    src: '/image/Divya.jpeg'
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
        <UncontrolledCarousel items={items} className='caousal-photo' indicators={false} />
      </div>
    );
  }
}

export default Carousal;