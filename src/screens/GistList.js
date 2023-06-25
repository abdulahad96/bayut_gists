import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import Gist from '../containers/Gist'
import { getPublicGists } from '../services/gistService';
import { GistContext } from '../context';

const GistListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height:100%;
  width:100%;
  align-items:center;
  `;
  const Warning = styled.div`
  display: flex;
  flex-direction: column;
  height:100%;
  width:100%;
  align-items:center;
  `;
  
const GistList = () => {
  const { publicGist, userGists } = useContext(GistContext)

  return (
    <GistListWrapper>
      {
        !userGists && publicGist?.map((v, i) => {
          return <Gist key={v.id} gist={v} />
        })
      }
      {userGists && userGists?.map((v, i) => {
        return <Gist key={v.id} gist={v} />
      })}

      {(!userGists && !publicGist) && <>
      <Warning>NO Data Found</Warning>
      </>}
    </GistListWrapper>

  )
}

export default GistList
