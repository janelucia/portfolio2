export type General = {
    icon: string;
    info: string;
};

export type Education = {
    program: string;
    institution: string;
    period: string;
    grade?: string;
    details: string[];
};

export type Work = {
    position: string;
    company: string;
    period: string;
    details: string[];
};

export type Skills = {
    name: string;
    icon: string;
    url: string;
};

export type Contact = {
    [key: string]:{
    icon: string;
    url: string;
    }
};

export type Project = {
    name: string;
    description: string;
    currentState: string;
    image: string;
    githubUrl: string;
    liveUrl: string;
};
