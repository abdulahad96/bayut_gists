import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Container = styled.div`
flex-direction:row;
display:flex;
flex:0.5;
width:100%;
color:#8c8e8f;
justify-content: flex-start;
gap:10px;
`;


const DateContainer = styled.div`

display: flex;
flex-direction: row;
font-size:10px;
font-weight:bold;
`;

const convertDateString = (Datestring)=>{
  const date = new Date(Datestring);
  const day = date.getDate();
  const month = date.getMonth() + 1; 
  const year = date.getFullYear();
  
return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  
 }
const DateInfoContainer = ({updated_at,created_at}) => {
    return (
        <Container>
          <DateContainer>
            Created at: {convertDateString(created_at)}
            </DateContainer> 
          <DateContainer>
            Updated At: {convertDateString(updated_at)}
            </DateContainer> 
        </Container>

    )
}
DateInfoContainer.propTypes={
  updated_at:PropTypes.string.isRequired,
  created_at:PropTypes.string.isRequired,
}
export default DateInfoContainer;