import React from 'react';
import { render } from '@testing-library/react';
import GistHeader from '../components/GistHeader';

describe('GistHeader', () => {
    const   owner= {
        login: "danbahrami",
        avatar_url: "https://avatars.githubusercontent.com/u/6588325?v=4",
        }
        const url = "https://avatars.githubusercontent.com/u/6588325?v=4";
      const html_url="https://avatars.githubusercontent.com/u/6588325?v=4";
     const git_pull_url="https://avatars.githubusercontent.com/u/6588325?v=4"
     const forks_url="https://avatars.githubusercontent.com/u/6588325?v=4"
     const comments_url = "https://avatars.githubusercontent.com/u/6588325?v=4"
      const  file={files:{
            "resume.json": {
                 filename: "resume.json",
                 type: "application/json",
                 language: "JSON",
                 raw_url: "https://gist.githubusercontent.com/danbahrami/f691b3fc6a507980a4b5a2fbca2b1498/raw/6292ab1d5c7e58bc09f5d00eb970a66cfa329769/resume.json",
                 size: 11202
             }
         } , files_items:['resume.json']}
    
  test('renders Gistheader correctly', () => {
    const output = render(
        <GistHeader
        owner={owner}
        url = {url}
        html_url={html_url}
        git_pull_url={git_pull_url}
        forks_url={forks_url}
        file={file}
        comments_url={comments_url}
    />
    );
    expect(output).toMatchSnapshot();
  });

});
