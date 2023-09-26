import CandidatesList from "./components/Candidates/List";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Searchbar from "./components/Searchbar";
import FiltersMenu from "./components/FiltersMenu";

export default function App() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      <div className="flex w-full flex-col gap-5 px-10">
        <Topbar />
        <div className="flex  justify-between gap-5">
          <div className="flex flex-col gap-5">
            <Searchbar />
            <FiltersMenu />
          </div>
          <CandidatesList />
        </div>
      </div>
    </div>
  );
}
