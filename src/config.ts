import icon from "../src/assets/icon.png";

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
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "Arkapravo Das",
    job: "product engineer",
    started: "2022-05-09",
    stack: "FORTRAN",
    hobby: "just chilling",
    projectLink: "https://github.com/raiden076?tab=repositories",
  },
  socials: {
    twitter: "https://twitter.com/arkaprav0",
    github: "https://github.com/raiden076",
  },
  projects: {
    "SalesUP Worflows": {
      url: "#",
      tags: ["jotai/atom", "react", "nextjs", "cloudflare"],
    },
    Linux: {
      url: "https://github.com/torvalds/linux",
      tags: ["c", "kernel", "unix", "os"],
    },
  },
  og: {
    image: icon.src,
  },
};
