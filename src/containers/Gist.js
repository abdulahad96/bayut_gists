import React, { useEffect } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Octicon from 'react-octicon'
import GistHeader from '../components/GistHeader';
import DateInfoContainer from '../components/DateInfoContainer';
const GistWrapper = styled.div`
border-bottom: 2px solid #ccc;
  height: 180px;
  display:flex;
  gap:3px;
  width:50%;
  flex-direction:column;
`;
const Description = styled.div`
display:flex;
font-weight:12px;
font-weight:bold;
color:#727475;
flex:0.5;
width:100%`;
const FileTxt = styled.div`
display:flex;
font-weight:9px;
font-weight:semi-bold;
flex:1;
width:100%`;
const FileContainers = styled.div`
flex-direction:row;
display:flex;
color:#126ed8;
width:100%;
justify-content:flex-start;
margin-bottom:2px;
align-self: flex-start;
gap:8px;
`;

const FileView = styled.a`
flex-direction:row;
display:flex;
align-self: flex-end;
color:#126ed8;

 text-decoration: none;
`;


const Gist = ({ gist }) => {
    const { owner, created_at, updated_at, description, files, comments_url, url, forks_url, html_url, git_pull_url } = gist
    const files_items = Object.entries(files)
    const getDescription = (description)=> description ? (description.split(' ').length > 15 ? description.split(' ').slice(0, 30).join(' ') + '....' : description) :''

    return (
        <GistWrapper>
            <GistHeader
                owner={owner}
                url = {url}
                html_url={html_url}
                git_pull_url={git_pull_url}
                forks_url={forks_url}
                file={{ files, files_items}}
                comments_url={comments_url}
            />
            <DateInfoContainer updated_at={updated_at} created_at={created_at} />
            <Description>
                {getDescription(description)}
            </Description>
            <FileContainers>
                {files_items.map(([key, value]) => {
                    return (
                        <FileView href={value.raw_url}>
                            <Octicon name="file" />
                            <FileTxt>{key}</FileTxt>
                        </FileView>
                    )
                })
                }
            </FileContainers>
        </GistWrapper>
    )
}
Gist.propTypes = {
    gist: PropTypes.shape({
      owner: PropTypes.object.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
      description: PropTypes.string,
      files: PropTypes.object.isRequired,
      comments_url: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      forks_url: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      git_pull_url: PropTypes.string.isRequired,
    }).isRequired,
  };
export default Gist
