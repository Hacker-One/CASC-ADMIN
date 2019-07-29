// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const baseURL: String = 'http://192.168.10.111:8085/';

export const environment = {
  production: false,
  hmr: false,
  apiURl: {
    getSysMenus: baseURL + 'system/sysmenus/user',
    saveDirectory: baseURL + 'system/resource/sysmenu',
  }
};
