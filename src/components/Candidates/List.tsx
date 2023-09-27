import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import Candidate from "../../types/candidate";
import candidatesData from "../../data/dummy.json";
import { useState, useEffect } from "react";
import useSearchQuery from "../../hooks/useSearchQuery";

export default function CandidatesList() {
  const { searchQuery } = useSearchQuery();
  const [candidates, setCandidates] = useState<Candidate[]>(candidatesData);

  useEffect(() => {
    setCandidates(() => {
      return candidatesData.filter((item) => {
        if (searchQuery === "") {
          return item;
        }
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
    });
  }, [searchQuery]);

  return (
    <div className="flex flex-grow flex-col gap-5 overflow-y-auto rounded-lg bg-white p-5">
      <ListHeader />
      {candidates.map((item: Candidate) => (
        <ListItem key={item.id} candidate={item} />
      ))}
    </div>
  );
}
