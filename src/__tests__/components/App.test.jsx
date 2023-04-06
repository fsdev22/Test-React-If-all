import { describe, it, expect } from "vitest";
import App from "../../App";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../test-utils/testSetup";
import exText from "../../i18n/en";
import noText from "../../i18n/no";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: { ...exText },
  no: { ...noText },
};

const options = {
  // order and from where user language should be detected
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ...resources,
    },
  });
describe("Starter Test", () => {
  it("shows app page", () => {
    renderWithProviders(<App />);
    expect(screen.getAllByText(/Sign/i)).toBeDefined();
  });
});
