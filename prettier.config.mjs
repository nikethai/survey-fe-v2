/** @type {import("prettier").Config} */
const config = {
  // printWith: 120,
  singleQuote: false,
  semi: true,
  jsxSingleQuote: false,
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  plugins: ["prettier-plugin-tailwindcss"],
};
export default config;
