import React from 'react';
import {Image} from 'react-bootstrap'
import {Glyphicon, Col, Grid, Row} from 'react-bootstrap'
import ModalVideo from 'react-modal-video'
import MovieCardComponent from './moviecards'
import {URL_IMG, IMG_LOGO_S_SIZE} from "../constants/constants"
import {Link} from 'react-router-dom'
import './css/movie.css'

class MovieInfo extends React.Component {
    constructor() {//Can have a state due to that it only handles local state about a image...
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({isOpen: true})
    }

    getVideo() {
        if (this.props.trailer.length > 0) {
            return (<div className="player">
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.trailer[0].key}
                            onClose={() => this.setState({isOpen: false})}/>
                <Glyphicon className="playIcon" glyph={'play-circle'} onClick={this.openModal}/>
            </div>);
        } else {
            return (<h2>Sorry No Trailer Available!</h2>)
        }
    }

    getImages() {
        let temp = (
            <div>
                <div className="poster">
                    <Image className="pos loading"
                           src={"https://image.tmdb.org/t/p/w780" + this.props.movie.backdrop_path}
                           responsive/>
                    <div className="ghd">
                        <MovieCardComponent className="picture" movie={this.props.movie}/>
                    </div>
                    {this.getVideo()}
                </div>
            </div>

        );
        return temp;
    }

    getMovieInfo() {
        let info = (
            <div>
                <div className="icons"><Glyphicon
                    glyph={'star'}/>{this.props.movie.vote_average} &nbsp;
                    <Glyphicon
                        glyph={'heart'}/> {this.props.movie.vote_count} &nbsp;<Glyphicon
                        glyph={'calendar'}/> {this.props.movie.release_date} </div>
                <h3 className="fs"> Info: {<p>{this.props.movie.overview}</p>} </h3>
                <h3 className="fs"> Genres: {<div>{this.getMovieGenres()}</div>}</h3>
            </div>
        );
        return info;
    }

    getMovieGenres() {
        let genres = this.props.movie.genres.map((genre) => (<h6 key={genre.id}>{genre.name}</h6>))
        return genres;
    }

    getCast() {
        let cast = this.props.castList.slice(0, 5).map((actor) =>
            (<Col xs={4} sm={3} md={2} key={actor.cast_id}>
                <Link to={`/cast/${actor.id}`} key={actor.id}>
                    <div>
                        <Image className="loading" src={URL_IMG + IMG_LOGO_S_SIZE + actor.profile_path} responsive
                               circle/>
                        <h3 className="fs"> Character: {<p>{actor.character}</p>} </h3>
                        <h3 className="fs"> Name: {<p>{actor.name}</p>} </h3>
                    </div>
                </Link>
            </Col>))
        return cast;
    }

    getSimilarMovies() {
        let temp = this.props.similarMovies.slice(0, 5).map((movie) =>
            <Col xs={4} sm={3} md={2} key={movie.id}>
                <MovieCardComponent className="picture" movie={movie}/>
                <h3 className="fs"> Movie: {<p>{movie.original_title}</p>} </h3>
            </Col>
        );
        return temp;
    }

    render() {
        const movie = this.props.movie;

        return (
            <div className="tests">
                <div>{this.getImages()}</div>
                <div>
                    <Grid fluid={true}>
                        <Row>
                            <h1>{movie.title}</h1>
                            <div>{this.getMovieInfo()}</div>
                        </Row>
                        <Row>
                            <h1>Cast Members:</h1>
                            {this.getCast()}
                        </Row>
                        <Row>
                            <h1>Movies That You May Like:</h1>
                            {this.getSimilarMovies()}
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default MovieInfo;
