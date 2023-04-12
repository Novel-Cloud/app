import styled from "styled-components";
import { Dispatch, SetStateAction, useReducer, useState } from "react";
import { Filter } from "@/model/artwork";
import FilterIcon from "../icons/common/FilterIcon";
import CheckBoxText from "../atoms/CheckBoxText";
import TagListView from "./TagListView";

interface FilterViewProps {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}

const enum PropertyEnum {
  DATE_AN_HOUR_AGO = "AN_HOUR_AGO",
  DATE_TODAY = "TODAY",
  DATE_THIS_WEEK = "THIS_WEEK",
  DATE_THIS_MONTH = "THIS_MONTH",
  DATE_THIS_YEAR = "THIS_YEAR",
  ARTWORK_NOVEL = "NOVEL",
  ARTWORK_ILLUSTRATION = "ILLUSTRATION",
  ARTWORK_MANGA = "MANGA",
  SORT_UPLOAD_DATE = "UPLOAD_DATE",
  SORT_VIEWS = "VIEWS",
  SORT_LIKES = "LIKES",
}

export default function FilterView({ filter, setFilter }: FilterViewProps) {
  const [isOpen, toggleOpen] = useReducer((state) => !state, false);
  const [uploadDatePropertyId, setUploadDatePropertyId] = useState("");
  const [theme, setTheme] = useState("");
  const [sortTypePropertyId, setSortTypePropertyId] = useState("");

  const datePropertyList = [
    {
      id: PropertyEnum.DATE_AN_HOUR_AGO,
      label: "지난 1시간",
      value: PropertyEnum.DATE_AN_HOUR_AGO,
    },
    {
      id: PropertyEnum.DATE_TODAY,
      label: "오늘",
      value: PropertyEnum.DATE_TODAY,
    },
    {
      id: PropertyEnum.DATE_THIS_WEEK,
      label: "이번 주",
      value: PropertyEnum.DATE_THIS_WEEK,
    },
    {
      id: PropertyEnum.DATE_THIS_MONTH,
      label: "이번 달",
      value: PropertyEnum.DATE_THIS_MONTH,
    },
    {
      id: PropertyEnum.DATE_THIS_YEAR,
      label: "올해",
      value: PropertyEnum.DATE_THIS_YEAR,
    },
  ];

  const sortTypePropertyList = [
    {
      id: PropertyEnum.SORT_UPLOAD_DATE,
      label: "업로드순",
      value: PropertyEnum.SORT_UPLOAD_DATE,
    },
    {
      id: PropertyEnum.SORT_LIKES,
      label: "좋아요순",
      value: PropertyEnum.SORT_LIKES,
    },
    {
      id: PropertyEnum.SORT_VIEWS,
      label: "조회수순",
      value: PropertyEnum.SORT_VIEWS,
    },
  ];

  const themeList = [
    {
      id: PropertyEnum.ARTWORK_ILLUSTRATION,
      label: "그림",
      value: PropertyEnum.ARTWORK_ILLUSTRATION,
    },
    {
      id: PropertyEnum.ARTWORK_NOVEL,
      label: "소설",
      value: PropertyEnum.ARTWORK_NOVEL,
    },
    {
      id: PropertyEnum.ARTWORK_MANGA,
      label: "만화",
      value: PropertyEnum.ARTWORK_MANGA,
    },
  ];

  return (
    <FilterWrapper>
      <FilterButtonWrapper onClick={toggleOpen}>
        <FilterIcon />
        <span>필터</span>
      </FilterButtonWrapper>

      <TagListWrapper>
        <h2>Tag List</h2>
        <TagListView filter={filter} setFilter={setFilter} />
      </TagListWrapper>

      {isOpen && (
        <div>
          <FilterContentWrapper>
            <div>
              <h2>업로드 날짜</h2>
              <FilterLine />
              {datePropertyList.map(({ id, label, value }) => (
                <CheckBoxText
                  name="uploadDateType"
                  key={id}
                  id={id}
                  label={label}
                  value={value}
                  filter={filter}
                  setFilter={setFilter}
                  checkBoxPropertyId={uploadDatePropertyId}
                  setCheckBoxPropertyId={setUploadDatePropertyId}
                />
              ))}
            </div>
            <div>
              <h2>정렬기준</h2>
              <FilterLine />
              {sortTypePropertyList.map(({ id, label, value }) => (
                <CheckBoxText
                  name="sortType"
                  key={id}
                  id={id}
                  label={label}
                  value={value}
                  filter={filter}
                  setFilter={setFilter}
                  checkBoxPropertyId={sortTypePropertyId}
                  setCheckBoxPropertyId={setSortTypePropertyId}
                />
              ))}
            </div>
            <div>
              <h2>장르</h2>
              <FilterLine />
              {themeList.map(({ id, label, value }) => (
                <CheckBoxText
                  name="artworkType"
                  key={id}
                  id={id}
                  label={label}
                  value={value}
                  filter={filter}
                  setFilter={setFilter}
                  checkBoxPropertyId={theme}
                  setCheckBoxPropertyId={setTheme}
                />
              ))}
            </div>
          </FilterContentWrapper>
        </div>
      )}
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  margin-left: 7rem;
  margin-top: 3rem;
`;

const FilterButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
`;

const FilterContentWrapper = styled.div`
  display: flex;
  margin: 32px 0;
  gap: 48px;
`;

const FilterLine = styled.hr`
  margin: 10px 0;
  color: white;
  width: 200px;
`;

const TagListWrapper = styled.div`
  margin: 24px 0;
  h2 {
    font-family: "CookieRun-Regular";
  }
`;
