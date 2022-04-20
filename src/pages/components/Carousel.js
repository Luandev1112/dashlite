import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

import BasicCarousel from "../../components/partials/carousel/Basic";
import ControlsCarousel from "../../components/partials/carousel/Controls";
import CaptionsCarousel from "../../components/partials/carousel/Captions";
import FadeCarousel from "../../components/partials/carousel/Fade";


import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";

const CarouselPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Carousel" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Carousel
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                A slideshow component for cycling through elements or slides of text—like a carousel. To use it{" "}
                <code>
                  Import
                  {` {Carousel, CarouselItem, CarouselControl, CarouselIndicators } `}
                  from "reactstrap"
                </code>
                . Visit the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/carousel"} target="_blank" rel="noreferrer">
                  Reactstrap
                </a>{" "}
                library for detailed instructions.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic Examples</BlockTitle>
              <p>
                Carousels don’t automatically normalize slide dimensions. You may need to use additional utilities to
                appropriate function.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <BasicCarousel />
          </PreviewCard>
          <CodeBlock language="jsx">
            {`const items = [
  {
    src: SlideA,
    altText: 'Slide 1'
  },
  {
    src: SlideB,
    altText: 'Slide 2'
  },
  {
    src: SlideC,
    altText: 'Slide 3'
  }
];

const BasicCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {slides}
    </Carousel>
  );
}
`}
          </CodeBlock>
        </Block>
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">With Controls &amp; Indicators</BlockTitle>
              <p>You can add the indicators to the carousel, as well as the previous and next controls too.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ControlsCarousel />
          </PreviewCard>
          <CodeBlock language="jsx">
            {`const items = [
  {
    src: SlideA,
    altText: 'Slide 1'
  },
  {
    src: SlideB,
    altText: 'Slide 2'
  },
  {
    src: SlideC,
    altText: 'Slide 3'
  }
];

const BasicCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}
            `}
          </CodeBlock>
        </Block>
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">With Captions</BlockTitle>
              <p>
                Add captions to your slides easily with the <code>.carousel-caption</code> element within any{" "}
                <code>.carousel-item</code>. They can be easily hidden on smaller viewports, as shown below, with
                optional <a href="ut">display utilities</a>. We hide them initially with <code>.d-none</code> and bring
                them back on medium-sized devices with <code>.d-md-block</code>.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <CaptionsCarousel />
          </PreviewCard>
          <CodeBlock language="jsx">
            {`const items = [
  {
    src: SlideA,
    altText: 'Slide 1',
    captionHead: 'First slide label',
    captionText: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    src: SlideB,
    altText: 'Slide 2',
    captionHead: 'Second slide label',
    captionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    src: SlideC,
    altText: 'Slide 3',
    captionHead: 'Third slide label',
    captionText: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
  }
];

const BasicCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="text-white"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.captionText} captionHeader={item.captionHead} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}`}
          </CodeBlock>
        </Block>
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Crossfade Effect</BlockTitle>
              <p>
                Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a
                slide.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <FadeCarousel />
          </PreviewCard>
          <CodeBlock language="jsx">
            {`const items = [
  {
    src: SlideA,
    altText: 'Slide 1'
  },
  {
    src: SlideB,
    altText: 'Slide 2'
  },
  {
    src: SlideC,
    altText: 'Slide 3'
  }
];

const BasicCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className="carousel-fade"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default CarouselPage;
