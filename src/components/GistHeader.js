import React from 'react'
import styled from 'styled-components';
import Octicon from 'react-octicon'
import PropTypes from 'prop-types';
import LabelIcon from './LabelIcon';

const Container = styled.div`
flex-direction:row;
display:flex;
flex:1;
color:#126ed8;
font-weight:bold;
width:100%`;

const NameContainer = styled.a`
justify-content: flex-start;
align-items: center;
display: flex;
flex:6;
flex-direction: row;
gap: 5px;
text-decoration: none;

`;
const NameText = styled.div`
border-radius: 4px;
display:flex;
font-size:14px;
flex-direction:row;
`;
const Image = styled.img`
border-radius:50px;
height:35px;
width:35px
`;
const InfoContainer = styled.div`
flex:4.5;
display:flex;
justify-content:space-between;
flex-direction:row;
gap:10px;

`;

const GistHeader = ({owner,file,comments_url,git_pull_url,url,forks_url,html_url}) => {
    const {avatar_url,login} = owner;
    const {files_items} =file
    return (
        <Container>
            <NameContainer href={url}>
                <Image src={avatar_url} />
                <NameText>{login}</NameText>
            </NameContainer>
            <InfoContainer>
                <LabelIcon
                name={'code'} Url={html_url} Txt={`${files_items.length} files`}
                />
                <LabelIcon name={'repo-forked'} Url={forks_url} Txt="Fork"/>
                <LabelIcon name={'comment'} Url={comments_url} Txt={"Comment"}/>
            <LabelIcon name={'repo-pull'} Url={git_pull_url} Txt={"Pull"}/>
            </InfoContainer>
        </Container>

    )
}

GistHeader.propTypes = {
    owner: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
    }).isRequired,
    file: PropTypes.shape({
      files_items: PropTypes.array.isRequired,
    }).isRequired,
    comments_url: PropTypes.string.isRequired,
    git_pull_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    forks_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  };
export default GistHeader;