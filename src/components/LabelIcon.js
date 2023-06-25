import React from 'react'
import styled from 'styled-components';
import Octicon from 'react-octicon'


const LabelIconContainer = styled.a`
flex:1;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
gap:5px;
text-decoration: none;
color:#126ed8;

`
const LabelText = styled.div`
display:flex;

font-size:9px;
`;

const LabelIcon = ({ name, Txt, Url }) => {
    return (
        <LabelIconContainer href={Url}>
            <Octicon name={name} />
            <LabelText>{Txt}</LabelText>
        </LabelIconContainer>


    )
}
export default LabelIcon;