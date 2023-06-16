import React from "react";
import { useTranslation } from "react-i18next";
import listIcon from "../../../../../utils/constants/iconConstant";
import { Box, Button } from "@mui/material";
export type Properties = {
  [key: string]: any;
};

type Props = {
  properties?: Properties;
};

const ListProperties: React.FC<Props> = ({ properties }) => {
  const [isExtendProds, setIsExtendProds] = React.useState<boolean>(false);
  const [listProperties, setListProperties] = React.useState<
    { label: string; icon?: any }[]
  >([]);
  const { t } = useTranslation("detail");

  const listProdsDetail = React.useMemo(() => {
    if (properties) {
      const keys = Object.keys(properties);
      const filteredKeys = keys.filter((x) => properties?.[x] === true);
      const array = filteredKeys.map((k) => ({
        label: t(k),
        icon: listIcon[k],
      }));
      return array;
    }
  }, [properties, t]);

  React.useEffect(() => {
    if (listProdsDetail && listProdsDetail?.length) {
      setListProperties(listProdsDetail.slice(0, 6));
    }
  }, [listProdsDetail]);

  return (
    <div>
      {listProperties?.length && (
        <Box>
          <Box className="text-content-12 text-brand-1 font-bold">
            {t("prods_in_this")}
          </Box>
          <Box className="flex flex-wrap mt-2 gap-2 items-center">
            {listProperties?.map((item, index) => (
              <Box
                key={index}
                className="flex flex-col justify-center items-center max-w-[77px] w-full"
              >
                <Box className="!text-icon">{item.icon}</Box>
                <Box
                  className="text-content-12 text-center"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                  }}
                >
                  {item.label}
                </Box>
              </Box>
            ))}
            {!isExtendProds &&
              listProdsDetail?.length !== listProperties.length && (
                <Button
                  className="!rounded-full !bg-[#F9D8D3] !text-brand-1 !font-bold !text-content-12 !w-[40px] !min-w-0 h-10"
                  onClick={() => {
                    setIsExtendProds(true);
                    setListProperties(listProdsDetail || []);
                  }}
                >
                  {"+" +
                    (listProdsDetail?.length &&
                      listProdsDetail?.length - listProperties.length)}
                </Button>
              )}
          </Box>
        </Box>
      )}
    </div>
  );
};

export default ListProperties;
