import Movie from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';
const state = {};
const controlSearch = async () => {
    const query = searchView.getInput();
    if(query){
        state.search = new Movie(query);
        searchView.clearInput();
        searchView.clearList();
        await state.search.getMovie();
        if(state.search.result.Response === 'False'){
            searchView.renderMovie2();
        }else {
            searchView.renderMovie(state.search.result);
        }
        console.log(state.search);   
    }
}
elements.searchBtn.addEventListener("click", () => {
    controlSearch();
})
document.addEventListener("keypress", (e) => {
    if(e.keyCode ===13) {
        controlSearch();
    }
})