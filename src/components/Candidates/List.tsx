import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import Candidate from "../../types/candidate";
import candidates from "../../data/dummy.json";

export default function CandidatesList() {
  return (
    <div className="flex flex-grow flex-col gap-5 overflow-y-auto rounded-lg bg-white p-5">
      <ListHeader />
      {candidates.map((item: Candidate) => (
        <ListItem key={item.id} candidate={item} />
      ))}
    </div>
  );
}
