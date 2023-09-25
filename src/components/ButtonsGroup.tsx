import { Icon } from "@iconify/react";

export default function ButtonsGroup() {
  return (
    <div className="flex gap-5">
      <button className="text-button-fill">
        <Icon icon="ci:tag-outline" />
      </button>
      <button className="text-button-fill text-error">
        <Icon icon="ci:user-close" />
      </button>
      <button className="text-button-fill">
        <Icon icon="ci:user-check" />
      </button>
      <button className="text-button-fill">
        <Icon icon="ci:user-voice" />
      </button>
      <button className="text-button-fill">
        <Icon icon="ci:mail" />
      </button>
    </div>
  );
}
