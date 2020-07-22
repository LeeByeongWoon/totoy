import React from 'react';
import styled, { keyframes } from 'styled-components';
import oc from 'open-color';

const FormAnimation = keyframes`
100%{
    transform: rotate(360deg);
}
`
const DotAnimation = keyframes`
    80%, 100% { 
        transform: rotate(360deg); 
        } 
`
const DotBefore = keyframes`
  50% {
    transform: scale(0.4); 
  } 
  100%, 0% {
    transform: scale(1.0); 
  } 
`

const Loading = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(33,37,41,0.5);
    display: flex;
    justify-content: center;
    align-items:center;
    *{
        opacity:1;
    }
`
const Form = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  animation: ${FormAnimation} 2.5s infinite linear both;
`
const Dot = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  color: transparent;
  left: 0;
  top: 0; 
  animation: ${DotAnimation} 2.0s infinite ease-in-out both;
  ::before{
        content: '';
        display: block;
        width: 25%;
        height: 25%;
        background-color: ${oc.white};
        border-radius: 100%;
        animation: ${DotBefore} 2.0s infinite ease-in-out both; 
    }
  :nth-child(1){
    animation-delay: -1.1s;
    ::before{
        animation-delay: -1.1s; 
        background: ${oc.grape[3]}
    }
  }  
  :nth-child(2){
    animation-delay: -1.0s;
    ::before{
        animation-delay: -1.0s; 
        background: ${oc.indigo[3]}
    }
  }  
  :nth-child(3){
    animation-delay: -0.9s;
    ::before{
        animation-delay: -0.9s; 
        background: ${oc.cyan[3]}
    }
  }  
  :nth-child(4){
    animation-delay: -0.8s;
    ::before{
        animation-delay: -0.8s; 
        background: ${oc.pink[3]}
    }
  }  
  :nth-child(5){
    animation-delay: -0.7s;
    ::before{
        animation-delay: -0.7s; 
        background: ${oc.lime[3]}
    }
  }  
  :nth-child(6){
    animation-delay: -0.6s;
    ::before{
        animation-delay: -0.6s; 
        background: ${oc.yellow[3]}
    }
  }  
`;
const repeat = [0, 1, 2, 3, 4, 5]
function LoadingForm() {
  return (
    <Loading>
      <Form>
        {repeat.map((aar, index) => (<Dot key={index}>{aar}</Dot>))}
      </Form>
    </Loading>
  )
}

export default LoadingForm;