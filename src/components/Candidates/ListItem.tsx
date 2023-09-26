import { Candidate } from "../../types/candidate";

interface ListItemPropType {
  candidate: Candidate;
}
export default function ListItem({ candidate }: ListItemPropType) {
  return (
    <>
      <div className="flex items-center gap-8">
        <input type="checkbox" />
        <span className="avatar !h-20 !w-20 !text-2xl font-bold">AS</span>
        <div>
          <p className="text-xl font-semibold">{candidate.name}</p>
          <p>{candidate.location}</p>
          <p className="text-sm font-light">{candidate.degree}</p>
          <p className="text-xs text-primary">{candidate.hash}</p>
          <div className=" flex gap-1">
            {candidate.tags.map((tag) => (
              <p key={tag} className="list">
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-divider" />
    </>
  );
}
