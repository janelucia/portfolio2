type General = {
    icon: string;
    info: string;
};

type Education = {
    program: string;
    institution: string;
    period: string;
    grade?: string;
    details: string[];
};

type Work = {
    position: string;
    company: string;
    period: string;
    details: string[];
};

type Skills = {
    name: string;
    icon: string;
    url: string;
};

type Contact = {
    [key: string]: {
        icon: string;
        url: string;
    };
};

type Project = {
    name: string;
    description: string;
    currentState: string;
    image: string;
    githubUrl: string;
    liveUrl: string;
};
