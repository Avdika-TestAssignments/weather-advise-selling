import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
clear: both;
margin: 30px auto;
width: 420px;
border: 1px solid #de6042;
border-radius: 10px;
overflow: hidden;
box-shadow: 2px 5px 20px 1px #444;
`;

export const Days = styled.div`
display: flex;
clear: both;
`;

export const Content = styled.div`
position: relative;
overflow: hidden;
color: #fff;
background: #E06B4F;
height: 120px;

&:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.3;
  background-image: url("https://nunnz.files.wordpress.com/2013/11/4.jpg");
  background-repeat: no-repeat;
  background-position: 0 63%;
  background-size: cover;
  }
`;

export const Overview = styled.div`
width: 50%;
text-align: center;
display: inline-block;
float: left;
z-index: 2;
position: relative;
`;

export const Icon = styled.div`
width: 50%;
z-index: 2;
text-align: center;
float: left;
font-size: 50px;
text-align: center;
margin-top: 0.5em;
position: relative;
vertical-align: middle;
`;
