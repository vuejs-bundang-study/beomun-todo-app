export default {
  getTitle(state) {
    return (state.title).toUpperCase();
  },
  getItems(state) {
    return (state.items);
  },
  getImgSrc(state) {
    return (state.imgSrc);
  },
  getChkVisible(state) {
    return (state.chkVisible);
  }
}
