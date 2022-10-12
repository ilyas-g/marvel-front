import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Card from '../components/card/Card.tsx';
import Pagination from '../components/pagination/Pagination.tsx';

function Characters() {
    const [data, setData] = useState<{[key: string]: any}>({});
    const [isLoading, setIsLoading] = useState(true);
    const [pageMax, setPageMax] = useState(0);
    const [page, setpage] = useState(1)
    // const { page } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://marvelorion2022.herokuapp.com/characters?page=${page}`);
                setData(response.data);
                setPageMax(Math.ceil(Number(response.data) / 100));
                setIsLoading(false);
                console.log(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [page]);

    return (
        <div className="App">
            {isLoading === true ? (
                <h1>En cours de chargement</h1>
            ) : (
                <>
                    {/* <Pagination /> */}

                    {page !== 1 && <Link to={`/characters/${page}`} onClick={() => {setpage(page - 1);}}>Prev </Link>}
                    {/* <strong>{page}</strong> */}
                    <Link to={`/characters/${page}`} onClick={() => {setpage(page + 1);}}>Next</Link>

                    <div className="container content-grid">
                        {data.results.map((character, index) => {
                            const imgSrc = character.thumbnail.path + '.' + character.thumbnail.extension;
                            return (
                                <>
                                    <div className="col grid" key={index}>
                                        <Card
                                            imgSrc={imgSrc}
                                            name={character.name}
                                            description={character.description}
                                            toChara={`/character/${character._id}`}
                                            toComics={`/comics/${character._id}`}
                                        />
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    {page !== 1 && <Link to={`/characters/${page}`} onClick={() => {setpage(page - 1);}}>Prev </Link>}
                    {/* <strong>{page}</strong> */}
                    <Link to={`/characters/${page}`} onClick={() => {setpage(page + 1);}}>Next</Link>
                </>
            )}
        </div>
    );
}

export default Characters;
