import icon from "../src/assets/icon-av.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
    projectLink: string;
  };
  socials: {
    [name: string]: string;
  };
  experience: {
    title: string;
    company: string;
    companyUrl?: string;
    tagline: string;
    projects: string[];
    stack: string[];
  }[];
  education: {
    title: string;
    institute: string;
    instituteUrl?: string;
    started: string;
    score: string;
  }[]
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "Arkapravo Das",
    job: "product engineer",
    started: "2022-05-09",
    stack: "TypeScript, Fullstack web",
    hobby: "playing guitar, Cyberpunk themes and Pikachu 👀",
    projectLink: "https://github.com/raiden076?tab=repositories",
  },
  socials: {
    github: "https://github.com/raiden076",
    X: "https://x.com/arkaprav0",
  },
  experience: [
    {
      title: "ML/Solutions Engineer",
      company: "HuEx",
      companyUrl: "https://www.huex.ai/",
      tagline: "I delivered ~ 400% speedup using some python scripts as an intern, and I was hired as ML/Solutions Engineer",
      projects: ["Drive thru automation using whisper ASR", "Google Maps review-manage-respond automation Pipeline"],
      stack: ["Python", "Flask", "pytorch", "Docker", "AWS"],
    },
    {
      title: "Product Engineer",
      company: "SalesUp",
      companyUrl: "https://salesup.club/",
      tagline: "I was hired as a Product Engineer, working as a fullstack developer",
      projects: ["Created a lead generator frontend", "Created custom oidc/oauth server for custom auth requirements", "Created a Chatgpt plugin integrating with existing backend"],
      stack: ["typescript", "react", "nodejs", "nextjs", "docker", "OAuth", "OIDC", "gpt_store"],
    },
  ],
  education: [
    {
      title: "Bachelor of Science (BS) in Data Science and Applications",
      institute: "IIT Madras",
      instituteUrl: "https://study.iitm.ac.in/",
      started: "2022-05",
      score: "8.7/10"
    },
    {
      title: "Higher Secondary",
      institute: "Rahara Ramakrishna Mission, High School",
      instituteUrl: "https://www.rkmissionrahara.org/",
      started: "2018-05",
      score: "85.6%"
    },
    {
      title: "Secondary",
      institute: "Rahara Ramakrishna Mission",
      instituteUrl: "https://www.rkmissionrahara.org/",
      started: "2008-05",
      score: "93%"
    },

  ],
  og: {
    image: icon.src,
  },
};
