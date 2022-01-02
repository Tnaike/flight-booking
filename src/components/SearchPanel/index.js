import React from 'react';
import styled from 'styled-components';
import './style.css';

import Departure from '../../assets/takeoff-the-plane.png';
import Arrival from '../../assets/plane-landing.png';

const SearchContainer = styled.div`
  position: relative;
  font-family: 'Poppins', sans-serif;
  max-width: 100%;
  margin: 10px auto;
  z-index: 1;
`;
const SearchContent = styled.div`
  position relative; 
  background-color: rgba(35, 43, 56, 0.75);
  padding: 20px 25px;
  border-top: 3px solid #d9062f;
`;
const GroupRadioButton = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const GroupInputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || 'null'};
`;

const SearchPanel = () => {
  return (
    <SearchContainer>
      <div className='search-wrap'>
        <div className='search-tab-container'>
          <ul>
            <li className='searchTab active-tab'>Booking</li>
            <li className='searchTab'>Check-in</li>
            <li className='searchTab'>Flight Status</li>
          </ul>
        </div>
        <SearchContent className='search-tab-content'>
          <GroupRadioButton>
            <div className='custom-radio'>
              <input
                type='radio'
                id='roundTrip'
                value='roundTrip'
                name='customRadio'
                class='custom-control-input'
                checked
              />
              <label class='custom-control-label' for='roundTrip'>
                Round trip
              </label>
            </div>
            <div className='custom-radio'>
              <input
                type='radio'
                id='oneWay'
                value='oneWay'
                name='customRadio'
                class='custom-control-input'
              />
              <label class='custom-control-label' for='oneWay'>
                One way
              </label>
            </div>
          </GroupRadioButton>
          <GroupInputField justify='space-around'>
            <div class='input-group mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-icon'>
                  <img src={Departure} alt='departure' />
                </span>
              </div>
              <input
                type='text'
                class='form-control p-l-0'
                placeholder='From'
              />
            </div>
            <div class='input-group mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-icon'>
                  <img src={Arrival} alt='arrival' />
                </span>
              </div>
              <input type='text' class='form-control p-l-0' placeholder='To' />
            </div>
            <div class='input-group mb-3'>
              <input type='date' class='form-control' placeholder='From' />
            </div>
            <div class='input-group mb-3'>
              <input type='date' class='form-control' placeholder='To' />
            </div>
          </GroupInputField>
          <GroupInputField justify='space-start'>
            <div class='input-group mb-3'>
              <input
                type='text'
                class='form-control'
                placeholder='Passengers'
              />
            </div>
            <div class='input-group mb-3'>
              <input
                type='text'
                class='form-control'
                placeholder='Promo code'
              />
            </div>
            <div class='submitWrap mb-3'>
              <input
                type='submit'
                class='btn-submit bg-danger'
                value='Search Flight'
              />
            </div>
          </GroupInputField>
        </SearchContent>
      </div>
    </SearchContainer>
  );
};

export default SearchPanel;
