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
                <>
                    {data.results.map((comic, index) => {
                        const imgSrc = comic.thumbnail.path + '.' + comic.thumbnail.extension;
                        return (
                            <div key={index}>
                                <p><Link to={`/comic/${comic._id}`}>{comic.name}</Link></p>

                                <p>{comic.description}</p>
                                <img src={imgSrc} alt={comic.name} />
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
}
