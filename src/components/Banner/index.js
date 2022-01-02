import React from 'react';
import styled from 'styled-components';

import BannerImg from '../../assets/airline-banner.jpg';
import SearchPanel from '../SearchPanel';

const BannerHolder = styled.div`
  position: relative;
  background: ${({ background }) => background || '#F9F9FA'};
  height: 650px;
  overflow: hidden;
`;
const BannerContent = styled.div`
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  max-width: 900px;
  margin: 5px auto;
  z-index: 10;
`;
const BannerCaption = styled.div`
  position: relative;
  margin: 15px 0 50px;
`;
const OverlayBackground = styled.div`
  background: rgb(0 0 0 / 20%);
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Banner = () => {
  return (
    <div className='bannerSection'>
      <BannerHolder className='bannerImg'>
        <BannerContent>
          <BannerCaption>
            <h1 className='captionText'>Travel to our destination in style</h1>
          </BannerCaption>
          <SearchPanel />
        </BannerContent>
        <OverlayBackground />
        <img src={BannerImg} alt='airline banner' />
      </BannerHolder>
    </div>
  );
};

export default Banner;
