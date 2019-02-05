import {elements} from './base';
export const getInput = () => elements.searchInput.value;
export const clearInput =() => {
    elements.searchInput.value = '';
}
export const clearList = () => {
    elements.movieList.innerHTML ="";
}
export const renderMovie = movie => {
    let newhtml;
    const html = '<div class="movie-img"><img src="%img%" alt=""></div><div class="movie-description"><div class="movie__title">%title%</div><div class="movie__country"><div class="description-label">Type</div><span class="country">%type%</span></div><div class="movie__gen"><div class="description-label">Genre</div><span class="gen">%genre%</span></div><div class="movie__run-time"><div class="description-label">Runtime</div><span class="run-time">%runtime%</span></div><div class="movie__IMBD"><div class="description-label">IMDB</div><span class="imbd">%imdb%</span></div><div class="movie__awards"><div class="description-label">Actors</div><span class="awards">%actors%</span></div><divclass="movie__year"><div class="description-label">Year</div><span class="year">%year%</span></div></div><movie class="movie-footer">%plot%.</movie></div>'
    if(movie.Poster === 'N/A'){
        movie.Poster ='https://csr.dot.ca.gov/images/imgnotavail.jpg';
    }
    if(movie.Type === 'N/A'){
       movie.Type = '-';
    } 
    if(movie.Type === 'N/A'){
        movie.Type = '-';
    }
    if(movie.Genre === 'N/A'){
        movie.Genre = '-';
    }
    if(movie.Runtime === 'N/A'){
        movie.Runtime = '-';
    }
    if(movie.imdbRating === 'N/A'){
        movie.imdbRating = '-';
    }
    if(movie.Actors === 'N/A'){
        movie.Actors = '-';
    }
    if(movie.Year === 'N/A'){
        movie.Year = '-';
    }
    if(movie.Plot === 'N/A'){
        movie.Plot = 'No description available';
    }            
    newhtml = html.replace('%title%', movie.Title);
    newhtml = newhtml.replace('%img%', movie.Poster);
    newhtml = newhtml.replace('%type%', movie.Type);
    newhtml = newhtml.replace('%genre%', movie.Genre);
    newhtml = newhtml.replace('%runtime%', movie.Runtime);
    newhtml = newhtml.replace('%imdb%', movie.imdbRating);
    newhtml = newhtml.replace('%actors%', movie.Actors);
    newhtml = newhtml.replace('%year%', movie.Year);
    newhtml = newhtml.replace('%plot%', movie.Plot);
    
    elements.movieList.insertAdjacentHTML('beforeend', newhtml);
}
export const renderMovie2 = function(){
    const html = '<div><h1 class="error">The movie was not found! Please, be sure that you type the correct name of the movie!</h1></div>'
    elements.movieList.insertAdjacentHTML('beforeend', html);
}