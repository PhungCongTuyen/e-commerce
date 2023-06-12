import React from "react";
import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FilterAltOutlined, Search } from "@mui/icons-material";

const FilterForRent = () => {
  const { t } = useTranslation("home");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  const listAutocomplete = [
    {
      name: "area",
      label: t("area"),
      options: [],
      placeholder: t("area_placeholder"),
    },
    {
      name: "type",
      label: t("type"),
      options: [],
      placeholder: t("type_placeholder"),
    },
    {
      name: "time-stay",
      label: t("time_stay"),
      options: [],
      placeholder: t("time_stay_placeholder"),
    },
  ];

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-3 items-end"
    >
      <Box>
        <Box className="text-black-1 text-content-14 font-bold mb-1">
          {t("quick_search")}
        </Box>
        <TextField
          placeholder={t("search_placeholder") || ""}
          name="search"
          InputProps={{
            endAdornment: <Search className="text-icon" />,
            style: { borderRadius: "12px" },
            sx: {
              input: {
                padding: "12.5px 14px",
                fontSize: "14px",
              },
              "input::placeholder": { fontStyle: "italic" },
            },
          }}
        />
      </Box>
      {listAutocomplete.map((item, index) => (
        <Box key={index}>
          <Box className="text-black-1 text-content-14 font-bold mb-1">
            {item.label}
          </Box>
          <Autocomplete
            disablePortal
            className="w-[188px]"
            options={item.options}
            sx={{
              "& .MuiInputBase-root": {
                padding: "5px 14px",
                borderRadius: "12px",
              },
              "input::placeholder": { fontStyle: "italic", fontSize: "14px" },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                name={item.name}
                placeholder={item.placeholder}
              />
            )}
          />
        </Box>
      ))}
      <Button type="submit" className="h-12 !bg-brand-1 w-[90px] !rounded-xl">
        <Search className="text-white" />
      </Button>
      <Button
        type="button"
        className="h-12 !bg-[#F9D8D3] !border-brand-1 !text-brand-1 !normal-case !font-bold !text-content-12 !rounded-xl"
        variant="outlined"
        startIcon={<FilterAltOutlined />}
      >
        {t("special_search")}
      </Button>
    </Box>
  );
};

export default FilterForRent;
