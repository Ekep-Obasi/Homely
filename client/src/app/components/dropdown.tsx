import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface dropDownProps {
  label?: string;
  placeholder?: string | React.ReactNode;
  options: string[];
  styles?: string;
}

export function DropDown(props: dropDownProps) {
  return (
    <Select>
      <SelectTrigger className={props.styles}>
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {props.options?.map((option) => (
            <SelectItem
              key={option.toLocaleLowerCase()}
              value={option.toLocaleLowerCase()}
            >
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
