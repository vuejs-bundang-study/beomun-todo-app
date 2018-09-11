export default {
  getMessage(state) {
    return (state.msg).toUpperCase();
  },
  getCount(state) {
    return state.count;
  }
}
