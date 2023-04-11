import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Filter } from "@/model/artwork";
import theme from "@/styles/theme";
import XIcon from "../icons/common/XIcon";

export type SearchFilterPropertyType =
  | "uploadDateType"
  | "schoolGrade"
  | "sortType"
  | "sortDirectionType"
  | "artworkType";

interface RadioProps {
  id: string;
  label: string;
  name: SearchFilterPropertyType;
  value?: string;
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
  checkBoxPropertyId: string;
  setCheckBoxPropertyId: Dispatch<SetStateAction<string>>;
}

export default function CheckBoxText({
  id,
  label,
  name,
  value,
  filter,
  setFilter,
  checkBoxPropertyId,
  setCheckBoxPropertyId,
  ...props
}: RadioProps) {
  const isChecked = checkBoxPropertyId === id;
  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (checkBoxPropertyId === id) {
      setCheckBoxPropertyId("");
      setFilter((prev) => ({ ...prev, [name]: undefined }));
      return;
    }
    setCheckBoxPropertyId(id);
    setFilter((prev) => {
      if (name === "sortType" && event.target.value === "ALL")
        return { ...prev, [name]: undefined };
      return { ...prev, [name]: event.target.value };
    });
  };

  return (
    <CheckBoxTextWrapper>
      <CheckBoxInput
        type="checkbox"
        name={name}
        id={id}
        value={value}
        checked={isChecked}
        onChange={handleFilterChange}
        {...props}
      />
      <CheckBoxLabel htmlFor={id} isChecked={isChecked}>
        {label}
        {isChecked && <XIcon />}
      </CheckBoxLabel>
    </CheckBoxTextWrapper>
  );
}

const CheckBoxTextWrapper = styled.div`
  display: flex;
  align-items: start;
  user-select: none;
  cursor: pointer;
`;

const CheckBoxInput = styled.input`
  appearance: none;
`;

const CheckBoxLabel = styled.label<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 0.625rem;
  color: ${(props) => (props.isChecked ? theme.orange["500"] : theme.black)};
  gap: 0.375rem;
  svg {
    width: 12px;
    height: 12px;
  }
`;
