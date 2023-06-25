import { GistContext } from "../context"

const MockProvider = ({ childeren }) => {
    const getUserGist = async () => {
        const res = await Promise.resolve(jest.fn())
    }

    const list = {

        url: "https://api.github.com/gists/f691b3fc6a507980a4b5a2fbca2b1498",
        forks_url: "https://api.github.com/gists/f691b3fc6a507980a4b5a2fbca2b1498/forks",
        commits_url: "https://api.github.com/gists/f691b3fc6a507980a4b5a2fbca2b1498/commits",
        id: "f691b3fc6a507980a4b5a2fbca2b1498",
        git_pull_url: "https://gist.github.com/f691b3fc6a507980a4b5a2fbca2b1498.git",
        git_push_url: "https://gist.github.com/f691b3fc6a507980a4b5a2fbca2b1498.git",
        html_url: "https://gist.github.com/danbahrami/f691b3fc6a507980a4b5a2fbca2b1498",
        files: {
            "resume.json": {
                filename: "resume.json",
                type: "application/json",
                language: "JSON",
                raw_url: "https://gist.githubusercontent.com/danbahrami/f691b3fc6a507980a4b5a2fbca2b1498/raw/6292ab1d5c7e58bc09f5d00eb970a66cfa329769/resume.json",
                size: 11202
            }
        },
        public: true,
        created_at: "2023-06-25T09:51:54Z",
        updated_at: "2023-06-25T09:51:54Z",
        description: "Test",
        comments: 0,
        user: null,
        comments_url: "https://api.github.com/gists/f691b3fc6a507980a4b5a2fbca2b1498/comments",
        owner: {
            login: "danbahrami",
            avatar_url: "https://avatars.githubusercontent.com/u/6588325?v=4",
        },
        truncated: false

    }
    return (
        <GistContext.Provider value={{ publicGist: [list], getPublicGist: getUserGist, userGists: [list], getUserGist: getUserGist }}>
            {childeren}
        </GistContext.Provider>
    )
}
export default MockProvider