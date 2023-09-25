import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <div className="flex h-screen w-screen bg-background">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Topbar />
      </div>
    </div>
  );
}
