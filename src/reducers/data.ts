import portfolio from '../assets/info.json';

export interface PortfolioData {
    personal_info: {
        firstnames: string;
        lastnames: string;
        fullname: string;
        email: string;
        phone: string;
        location: {
            city: string;
            country: string;
        };
        social_links: {
            name: string;
            url: string;
        }[];
    };
    roles: string[];
    about_me: string;
    skills: string[];
    education: {
        degree: string;
        institution: string;
        year: string;
    }[];
    experience: {
        position: string;
        company: string;
        duration: string;
        responsibilities: string[];
    }[];
    projects?: {
        name: string;
        description: string;
        technologies: string[];
        link: string;
    }[];
}

export class DataService {
    private static instance: DataService;
    private portfolioData: PortfolioData;

    private constructor() {
        this.portfolioData = portfolio as PortfolioData;
    }

    public static getInstance(): DataService {
        if (!DataService.instance) {
            DataService.instance = new DataService();
        }
        return DataService.instance;
    }

    public getAllData(): PortfolioData {
        return this.portfolioData;
    }
}

export const dataService = DataService.getInstance();

export { portfolio };
export default dataService;