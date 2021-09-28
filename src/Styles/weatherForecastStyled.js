import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin: 30px auto;
width: 420px;
border: 1px solid #de6042;
border-radius: 10px;
overflow: hidden;
box-shadow: 2px 5px 20px 1px #444;
`;

export const Raws = styled.div`
display: flex;
min-height: 20px;
`;

export const Column = styled.div`
padding: 5px;
box-sizing: border-box;
`;

export const Overview = styled.div`
width: 50%;
text-align: center;
display: inline-block;
float: left;
z-index: 2;
position: relative;
border: 1px solid blue;
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
border: 1px solid orange;
`;
