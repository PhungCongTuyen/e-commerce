import { useTranslation } from "react-i18next"

type ObjRating = {
    [key: string]: string
}

const RatingLabel = (value: string) => {
    const { t } = useTranslation("detail")

    const objRating: ObjRating = {
        "0": t("really_awful"),
        "0.5": t("pretty_awful"),
        "1": t('awful'),
        "1.5": t("really_bad"),
        "2": t("pretty_bad"),
        "2.5": t('bad'), 
        "3": t("normal"),
        "3.5": t("pretty_good"),
        "4": t('good'),
        "4.5": t("pretty_happy"),
        "5": t('happy'),
    }

    const label = objRating[value] ? objRating[value] : null

    return label
}

export default RatingLabel