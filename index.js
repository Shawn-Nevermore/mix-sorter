export const mixSorter = key => (a, b) => {
  let _a = a[key].match(/^(.*?)(\d*)$/);
  let _b = b[key].match(/^(.*?)(\d*)$/);
  if (_a[1] === _b[1]) {
    return parseInt(_a[2] || 0) - parseInt(_b[2] || 0);
  } else {
    return _a[1].localeCompare(_b[1]);
  }
}
