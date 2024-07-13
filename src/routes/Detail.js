import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detailMovies, setDetailMovies] = useState([]);
  const { id } = useParams()
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

    setDetailMovies(json.data.movie);
    setLoading(false);
  }
  console.log(detailMovies)
  useEffect(() => {
    getMovie();
  }, [])

  return <div className={style.container}>
    {loading ? <h1>Loading...</h1> : <div className={style.flex}>
      <img src={detailMovies.large_cover_image} alt="coverImage" />
      <article className={style.article}>
        <h2>{detailMovies.title}</h2>
        <p>{detailMovies.description_intro}</p>
        <p>평점: {detailMovies.rating}</p>
        <p>개봉일: {detailMovies.year}년</p>
        <p>runtime: {detailMovies.runtime}</p>
        <p>
          장르: {detailMovies.genres.map((genres) => (<span> {genres}</span>))}
        </p>
      </article>
    </div>}
  </div>;
}

export default Detail;