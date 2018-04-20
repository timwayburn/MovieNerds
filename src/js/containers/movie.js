import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    getMovieByMovieID, getTrailerByMovieID, getCastByMovieID, getSimilarMovies,
    resetSelectedValues, updateMovieList, updateCastList
} from '../actions';
import {Loader} from '../../loader/loader'
import MovieInfo from '../components/movieInfo';
import SearchBar from './searchBar';
import MoviesByGenres from './moviesByGenres';

class Movie extends Component {

    componentDidMount() {
        console.log("Check param id", this.props.match.params.id);
        this.load(this.props.match.params.id);

    }

    componentWillReceiveProps(nextProps) {
        console.log("Compenent Update");
        console.log("Previous params id length", nextProps.match.params.id);
        console.log("New value: length", this.props.match.params.id);
        if (nextProps.match.params.id && this.props.match.params.id !== nextProps.match.params.id) {
            console.log("Update kan göras");
            this.props.resetGenreValue();
            this.props.updateCastList();
            this.props.updateMovieList();
            this.load(nextProps.match.params.id);
        }
    }

    load(paramsID) {
        const id = paramsID;
        this.props.getSimilarMovies(id).then(()=>this.props.getTrailerByMovieID(id).then(()=>this.props.getMovieByMovieID(id).then(()=>this.props.getCastByMovieID(id) )))
    }


    render() {
        console.log("Render");
        console.log("Render");
        console.log("Selector value:", this.props.castList);
        let movieID = this.props.movieInfo.movieInfo.id;
        const de =  (this.props.castList!==undefined &&this.props.castList.length>0 && this.props.movieInfo.movieInfo.id!==undefined) ?
            (<MovieInfo movie={this.props.movieInfo.movieInfo} trailer={this.props.trailer}
                        castList={this.props.castList} similarMovies={this.props.similarMovies} user={this.props.auth.user} userUID={this.props.auth.userUID}/>)
            : (Loader());
        return (<div>
            <SearchBar/>
            {this.props.selector.value.length > 0 ?
                <MoviesByGenres/>
                :
                de
            }
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        selector: state.selections,
        movieInfo: state.movieInfo,
        trailer: state.trailer.movieInfo,
        castList: state.castList.movieInfo,
        similarMovies: state.similarMovies.movieInfo,
        auth: state.auth
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getMovieByMovieID: getMovieByMovieID,
        getTrailerByMovieID: getTrailerByMovieID,
        getCastByMovieID: getCastByMovieID,
        getSimilarMovies: getSimilarMovies,
        resetGenreValue: resetSelectedValues,
        updateMovieList: updateMovieList,
        updateCastList: updateCastList
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Movie);