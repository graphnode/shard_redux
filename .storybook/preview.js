
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'shard',
    values: [
      { name: 'shard', value: '#2c313d' },
      { name: 'light', value: '#f8f8f8' },
      { name: 'dark',  value: '#333333' },
    ],
  },
}