import React from 'react'
import Slider from 'react-slick'
import MovieCardComponent from './moviecards'
import './css/slider.css'
import './css/dots.scss'
import {Link} from 'react-router-dom'

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", transform: "scale(1.5,1.5)"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block",  transform: "scale(1.5,1.5)" }}
            onClick={onClick}
        />
    );
}

const SimpleSlider = (props) => {

    let getGenresName = () => {
        props.movies.sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });
        let genre = props.movies.map((elem, i) => <div className="genreSliderBox" key={i}>
                <h2 className="genreTitle"> {elem.name}</h2>
                <Slider className="carsoule" {...settings}>
                    {getMoviesByGenre(elem.data)}
                </Slider>
            </div>
        );
        return genre
    };

    let getMoviesByGenre = (data) => {
        return data.map((mov) => <div className="slideBox" key={mov.id}>
            <Link to={`/movie/${mov.id}`} key={mov.id} style={{textDecoration: 'none'}}>
                <MovieCardComponent movie={mov}/>
            </Link>
        </div>)
    }

    const settings = {
        focusOnSelect: true,
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows: true,
        responsive: [
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 910,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            ,
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }
        ]
    };
    console.log("Movie props", props.movies);
    return (
        <div className="genreSliderContainer">
            {getGenresName()}
        </div>
    );
}

export default SimpleSlider
