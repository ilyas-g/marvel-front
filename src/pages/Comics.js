import { useState, useEffect, React } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Comics() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //Avec un tableau vide en deuxième argument
        // La fonction useEffect ne sera déclenchée qu'une fois fois, au chargement du composant
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/comics");
                setData(response.data);
                setIsLoading(false);
                console.log(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            {isLoading === true ? (
                <h1>En cours de chargement</h1>
            ) : (
                <div className="container">
                    <div className="row">
                        {data.results.map((comic, index) => {
                            const imgSrc = comic.thumbnail.path + '.' + comic.thumbnail.extension;
                            return (
                                <div className="col-md-3" key={index}>
                                    <img className="character" src={imgSrc} alt={comic.title} />
                                    {/* <p><Link to={`/comics/${comic._id}`}>{comic.title}</Link></p> */}
                                    <p>{comic.title}</p>

                                    <p>{comic.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
