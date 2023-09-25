import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Searchbar from "./components/Searchbar";
import FiltersMenu from "./components/FiltersMenu";

export default function App() {
  return (
    <div className="flex h-screen w-screen bg-background">
      <Sidebar />
      <div className="flex w-full flex-col gap-5">
        <Topbar />
        <div className="flex flex-col justify-between">
          <div className="flex  flex-col gap-5 px-5">
            <Searchbar></Searchbar>
            <FiltersMenu></FiltersMenu>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
