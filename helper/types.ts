export type About = {
    general: Array<{ icon: string; info: string }>;
    education: Array<{
        program: string;
        institution: string;
        period: string;
        grade?: string;
        details: string[];
    }>;
    work: Array<{
        position: string;
        company: string;
        period: string;
        details: string[];
    }>;
    skills: Array<{
        name: string;
        icon: string;
        url: string;
    }>;
    contact: Array<{
        platform: string;
        icon: string;
        url: string;
    }>;
}

export type Project = {
    name: string;
    description: string;
    image: string;
    githubUrl: string;
    liveUrl: string;
}
