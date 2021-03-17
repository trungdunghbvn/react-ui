const enableDocs = !parseInt(process.env.STORYBOOK_DISABLE_DOCS || '0', 10);

module.exports = {
  "stories": [
    "../stories/*.stories.mdx",
    "../stories/stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    {name: '@storybook/addon-essentials', options: {docs: enableDocs}},
    '@storybook/addon-a11y',
    '@storybook/addon-contexts',
    '@storybook/addon-knobs',
  ],
  webpackFinal: (config) => {

    // Shrink ray only strips hashes when comparing filenames with this format.
    // Without this there will be lots of "add 1 file and removed 1 file" notices.
    config.output.filename = '[name]-[hash].js';

    const extraRules = [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            query: {
              sourceMap: false,
              importLoaders: 1,
              modules: {
                localIdentName: '[name]-[local]_[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ];
    config.module.rules = [
      // Strip out existing rules that apply to md files
      ...config.module.rules.filter(
        (rule) => rule.test.toString() !== '/\\.md$/',
      ),
      ...extraRules,
    ];
    return config;
  },
}
