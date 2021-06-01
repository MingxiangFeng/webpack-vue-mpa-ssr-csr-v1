module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        // Options
      },
    ],
    [
      "autoprefixer",
      {
        // Options
      }
    ],
    [
      'postcss-px-to-viewport',
      {
        unitToConvert: 'px',
        viewportWidth: 750,
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        // 不需要转vw的页面
        exclude: [
          /src\/detail/,
        ],
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 568
      }
    ]
  ],
}