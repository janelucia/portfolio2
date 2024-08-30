export type Commit = {
    html_url: string;
    commit: {
        message: string;
        committer: {
            date: string;
        };
    };
    repository: {
        html_url: string;
        name: string;
        owner: {
            html_url: string;
            login: string;
        };
    };
    committer: {
        login: string;
        avatar_url: string;
        html_url: string;
    };
};

export type Commits = {
    items: Commit[];
};
