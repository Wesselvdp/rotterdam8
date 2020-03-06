const removeConsolePlugin = []

// We want to remove console logs from Live but not QA/Staging
if (process.env.NODE_ENV === 'production' && process.env.VUE_APP_MODE !== 'staging') {
  removeConsolePlugin.push("transform-remove-console")
} 


// Todo: Configure deployer fto work with builder 

// console.log(process)
module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins: removeConsolePlugin,
};