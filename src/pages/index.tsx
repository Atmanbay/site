import Header from "@/components/about/Header";
import SideProjects from "@/components/about/SideProjects";
import WorkExperiences from "@/components/about/WorkExperiences";

export default function Index() {
  return (
    <div className="h-full flex flex-col justify-start max-w-lg m-auto gap-14 my-10">
      <Header />
      <WorkExperiences />
      <SideProjects />
    </div>
  );
}
