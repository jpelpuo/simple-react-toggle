import React, {useState} from 'react';
import './ToggleSwitch.css';
import styled from 'styled-components';

const ToggleContainer = styled.label`
  position: relative;
  width: 2rem;
  height: 1rem;
  display:inline-block;

  >input{
    display: none;
  }
`

const ToggleSlider = styled.span`
  position: absolute;
  cursor:pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ddd;
  transition: 0.4s;
  border-radius: 1rem;

  &:before{
    position: absolute;
    content: '';
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    transition: 0.2s;
    background-color: #999;
  }
  &:after{
    content: 'Hey'
  }
`

const SliderInput = styled.input`
  &:checked + ${ToggleSlider}{
    background-clor: red;
    &:before{
      transform: translateX(1rem);
      background-color: white;
    }
  }
`

function ToggleSwitch() {
  return (
    <ToggleContainer className="ToggleSwitch">
      <SliderInput type="checkbox"/>
      <ToggleSlider/>
    </ToggleContainer>
  );
}

export default ToggleSwitch;
