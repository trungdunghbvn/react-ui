
const Core = {
  getUrlParams(params) {
    let v = window.location.search.match(
      new RegExp('(?:[?&]' + params + '=)([^&]+)')
    );
    return v ? v[1] : undefined;
  }
};

export default Core;
