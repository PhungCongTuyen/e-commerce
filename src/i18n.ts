import i18n from "i18next";
import {initReactI18next} from "react-i18next"
import HOME_EN from "./locales/en/home.json";
import NAVBAR_EN from "./locales/en/navbar.json"
import FOOTER_EN from "./locales/en/footer.json"
import DETAIL_EN from "./locales/en/detail.json"

import HOME_VN from "./locales/vn/home.json";
import NAVBAR_VN from "./locales/vn/navbar.json"
import FOOTER_VN from "./locales/vn/footer.json"
import DETAIL_VN from "./locales/vn/detail.json"

import HOME_CN from "./locales/cn/home.json";
import NAVBAR_CN from "./locales/cn/navbar.json"
import FOOTER_CN from "./locales/cn/footer.json"
import DETAIL_CN from "./locales/cn/detail.json"

import LanguageDetector from 'i18next-browser-languagedetector';
import localStorageService from './services/localStorageService'

export enum LangPropsEnum {
    'VIE' = 'vn',
    'ENG' = 'en',
    'CN' = 'cn'
  }

const resources = {
    en: {
        home: HOME_EN,
        navbar: NAVBAR_EN,
        footer: FOOTER_EN,
        detail: DETAIL_EN
    },
    vn: {
        home: HOME_VN,
        navbar: NAVBAR_VN,
        footer: FOOTER_VN,
        detail: DETAIL_VN
    },
    cn: {
      home: HOME_CN,
      navbar: NAVBAR_CN,
      footer: FOOTER_CN,
      detail: DETAIL_CN
  }
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: localStorageService.getLocalStorage('i18nextLng') || LangPropsEnum.VIE,
    resources: resources,
    fallbackLng: LangPropsEnum.VIE,
    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
  })

export default i18n
