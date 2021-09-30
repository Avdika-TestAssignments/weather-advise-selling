import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin: 30px auto;
width: 96%;
max-width: 420px;
border: 1px solid #1b3a79;
border-radius: 10px;
overflow: hidden;
box-shadow: 2px 5px 20px 1px #444;
`;

export const Raws = styled.div`
display: flex;
min-height: 20px;
`;

export const Column = styled.div.attrs({
  className: "dayName"
})`
padding: 5px;
box-sizing: border-box;

&.dayName{
  width: 92px;
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

export const Icon = styled.img`
width: 40px;
height: auto;
position: relative;
vertical-align: middle;
`;
