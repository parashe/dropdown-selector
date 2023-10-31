

import { Index } from "./MultiselectDropdown/index.tsx";

import { ParentDropDownselect } from "./DropdownSingle";

export default function Home() {
  return (
    <div className="container mx-auto flex justify-center">
      <Index />
      <ParentDropDownselect />
    </div>
  );
}
