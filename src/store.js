import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            book: {},
            isModalShow: false
        }
    },
    mutations: {
        currentBook(currentBook) {
            state.book = currentBook;
        },
        showModal(show) {
            state.isModalShow = show;
        }
    }
});
export default store;