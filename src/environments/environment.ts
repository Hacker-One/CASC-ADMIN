// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const baseURL: String = '';

export const environment = {
  production: false,
  hmr: false,
  apiURl: {
    getSysMenus: baseURL + 'system/sysmenus/user',
    saveDirectory: baseURL + 'system/resource/sysmenu',
    saveLink: baseURL + 'system/resource/syslink',
    getMenuNohome: baseURL + 'system/sysmenus/nohome',
    getAccountList: baseURL + 'system/sysusers?currentNum=1&pagePerNum=100',
    getRoleList: baseURL + 'system/sysroles?currentNum=1&pagePerNum=100',
    getMenuTree: baseURL + 'system/syspermission',
    addRole: baseURL + 'system/sysrole',
    saveUserRole: baseURL + 'system/sysuser',
  }
};
