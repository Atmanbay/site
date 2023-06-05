import { FiArrowUpRight } from "react-icons/fi";

type Job = {
  startDate: string;
  endDate: string;
  title: string;
  companyName?: string;
  companySite?: string;
  description: string;
  skills: string[];
};

const jobs: Job[] = [
  {
    startDate: "2022",
    endDate: "now",
    title: "Hiatus",
    description:
      "I've spent the last year focusing on myself, my side projects, and my baking. I've baked for a wedding and multiple bake fairs, ran two Dungeons and Dragons campaigns, and worked on various side projects. Now, I am eager to tackle new challenges and seek new employment opportunities.",
    skills: ["Baking", "DMing"],
  },
  {
    startDate: "2021",
    endDate: "2022",
    title: "Full-Stack Engineer",
    companyName: "Freelance",
    description:
      "Coordinated with multiple artists on NFT drops, creating the Next front-end and Solidity smart contract as the lone developer. Communicated directly with end-users to debug any issues they encountered.",
    skills: ["Next", "React", "Node.js", "TS", "Solidity", "Tailwind"],
  },
  {
    startDate: "2020",
    endDate: "2021",
    title: "Full-Stack Engineer",
    companyName: "EdSights",
    companySite: "https://www.edsights.io/",
    description:
      "Full-stack development with a Vue.js frontend and Django backend. Collaborated with internal and external engineer and product teams to develop and deploy requested features in a timely manner. Was first internal dev hire, had a major say in processes and future engineer hires.",
    skills: ["Vue", "Python", "Django", "AWS"],
  },
  {
    startDate: "2019",
    endDate: "2020",
    title: "Full-Stack Engineer",
    companyName: "Medumo",
    companySite:
      "https://www.usa.philips.com/healthcare/resources/landing/patient-navigation",
    description:
      "Coordinated with product and sales to add requested features to C# codebase. Optimized SQL and C# to prepare for a 5x spike in usage.",
    skills: ["C#", "SQL", "Terraform", "Azure"],
  },
  {
    startDate: "2017",
    endDate: "2019",
    title: "Full-Stack Engineer",
    companyName: "Spectra Media Group",
    description:
      "Designed and developed mobile- and user-friendly internal tools using Ember.js and Feathers. Maintained PHP code for Diet.com, a nutrition website with 200k+ visitors per month.",
    skills: ["Ember", "Feathers", "Express", "PHP", "C#", "Bootstrap"],
  },
  {
    startDate: "2014",
    endDate: "2017",
    title: "Software Engineer",
    companyName: "eMoney Advisor",
    companySite: "https://emoneyadvisor.com/",
    description:
      "Created, modified, and debugged C# code designed to scrape data from the sites of financial institutions. Wrote SQL scripts to correct issues with production data. Assisted coworkers with C#, problem solving, and debugging techniques.",
    skills: ["C#", "SQL"],
  },
];

function WorkExperience({ job }: { job: Job }) {
  return (
    <div className="flex flex-row">
      <div className="text-smoky/75 basis-1/5">
        {job.startDate} - {job.endDate}
      </div>
      <div className="grid grid-cols-1 gap-2 basis-4/5">
        <div className="text-smoky">
          {job.companySite ? (
            <a
              href={job.companySite}
              target="_blank"
              className="flex flex-row items-center gap-1 hover:underline hover:decoration-solid"
            >
              <div>
                {`${job.title}${
                  job.companyName ? ` • ${job.companyName}` : ""
                }`}
              </div>
              <FiArrowUpRight />
            </a>
          ) : (
            <>
              {`${job.title}${job.companyName ? ` • ${job.companyName}` : ""}`}
            </>
          )}
        </div>
        <div className="text-smoky/75">{job.description}</div>
        <div className="text-smoky/60">{job.skills.join(" • ")}</div>
      </div>
    </div>
  );
}

export default function WorkExperiences() {
  const renderWorkExperiences = () => {
    return jobs.map((job) => {
      return <WorkExperience job={job} />;
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="text-lg tracking-wide">Work</div>
      <div className="grid grid-cols-1 gap-8">{renderWorkExperiences()}</div>
    </div>
  );
}
