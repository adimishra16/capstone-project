import SideBar from "./components/Sidebar";
import AllProjects from "./Pages/AllProjects/Allproject";
import AllTaskContainer from "./Pages/AllTasks/AllTask"
export default function Home() {
  return (
    <div className="flex w-full h-screen poppins">
      <SideBar/>
      {/* {/* <SideBar /> */}
      {/* <AllProjects />  */}
      <AllTaskContainer/>
    </div>
  );
}
