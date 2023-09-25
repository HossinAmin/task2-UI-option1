export default function ListHeader() {
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <h2>247 Candidates</h2>
        </div>
        <div className="flex items-center gap-2">
          <h2>Qualified</h2>
          <span className="h-[1rem] w-[2px] rounded-full bg-[#F3F3F4]" />

          <p>Task</p>
          <span className="circle-shape">25</span>
          <span className="h-[1rem] w-[2px] rounded-full bg-[#F3F3F4]" />

          <p>Disqualified</p>
          <span className="circle-shape">78</span>
        </div>
      </div>
      <div className="bg-divider h-[1px] w-full" />
    </>
  );
}
