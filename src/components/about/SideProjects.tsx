import { FiArrowUpRight } from "react-icons/fi";

type Project = {
  date: string;
  name: string;
  description: string;
  url?: string;
  skills: string[];
};

const projects: Project[] = [
  {
    date: "Ongoing",
    name: "Dukebot",
    description:
      "Discord.js bot written in TypeScript using the discord.js library. Named after my dog. Has the ability to play sound clips, conduct trivia games, interact with the OpenAI API, and more.",
    url: "https://github.com/Atmanbay/dukebot",
    skills: ["TS", "Docker"],
  },
  {
    date: "Ongoing",
    name: "Gare",
    description: "A 2D pixel roguelike game written using the Godot engine",
    skills: ["Godot", "GDScript"],
  },
  {
    date: "2023",
    name: "Super Tic-Tac-Toe",
    description:
      "Super Tic-Tac-Toe hosted on this site that allows the user to change their name, icon, and color. Also has undo and reset buttons.",
    url: "./tic-tac-toe",
    skills: ["TS", "Tailwind"],
  },
];

function SideProject({ project }: { project: Project }) {
  return (
    <div className="flex flex-row">
      <div className="text-smoky/75 basis-1/5">{project.date}</div>
      <div className="grid grid-cols-1 gap-2 basis-4/5">
        <div className="text-smoky">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              className="flex flex-row items-center gap-1 hover:underline hover:decoration-solid"
            >
              <div>{project.name}</div>
              <FiArrowUpRight />
            </a>
          ) : (
            <>{project.name}</>
          )}
        </div>
        <div className="text-smoky/75">{project.description}</div>
        <div className="text-smoky/60">{project.skills.join(" • ")}</div>
      </div>
    </div>
  );
}

export default function SideProjects() {
  const renderProjects = () => {
    return projects.map((project) => {
      return <SideProject project={project} />;
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="text-lg tracking-wide">Projects</div>
      <div className="grid grid-cols-1 gap-8">{renderProjects()}</div>
    </div>
  );
}
