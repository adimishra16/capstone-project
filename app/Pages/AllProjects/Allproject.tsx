import AllProjectsSection from "./Componets/AllProjectSection";
import ProjectsHeader from "./Componets/ProjectHeader";
import ProjectsSubHeader from "./Componets/ProjectSubHeader";
import StatsRightSideBar from "./Componets/StateRightBar";
function AllProjects() {
  return (
    <div className="bg-slate-50 w-full min-h-screen flex">
      <AllProjectsArea />
      {/* Project side bar we are going to add */}
      <StatsRightSideBar/>

    </div>
  );
}

function AllProjectsArea() {
  return (
    <div className="w-[78%] max-lg:w-full p-10 max-sm:p-7 max-sm:pt-9 flex flex-col gap-3">
      {/* Search bar and the add project button */}
      <ProjectsHeader />
      {/* My Projects Title and the add button */}
      <ProjectsSubHeader />
      <AllProjectsSection/>
    </div>
  );
}

export default AllProjects;
