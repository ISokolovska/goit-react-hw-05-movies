import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { getMovieCasts } from 'services/Api';
import { Loader } from 'components/Loader/Loader';
import { CastCharacter, CastName, CastsInfo } from './Styled';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieCasts = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieCasts(movieId);
        console.log(data);
        setCasts(() => data.cast);
      } catch (err) {
        Notiflix.Notify.failure(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCasts(movieId);
  }, [movieId]);

  return (
    <CastsInfo>
      {isLoading === true && <Loader />}
      <h2>Cast</h2>
      {casts && (
        <div>
          {casts && casts.length > 0 && (
            <ul casts={casts}>
              {casts.map(cast => {
                return (
                  <li key={cast.id}>
                    <img
                      src={
                        cast.profile_path
                          ? 'https://image.tmdb.org/t/p/w500/' +
                            cast.profile_path
                          : 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
                      }
                      alt={cast.name}
                      width="170"
                      height="250"
                    />
                    <CastName>{cast.name}</CastName>
                    <CastCharacter>
                      <b>Character:</b> {cast.character}
                    </CastCharacter>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </CastsInfo>
  );
};

export default Cast;
