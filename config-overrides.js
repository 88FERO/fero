const {override, fixBabelImports, addLessLoader} = require('customize-cra');
const paths = require('react-scripts/config/paths');
const path = require('path')

paths.appBuild = path.resolve(paths.appBuild,'../docs')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#4e73df'},
    }),
);