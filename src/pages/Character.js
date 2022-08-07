import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, React } from 'react';
import Comic from "./Comic";
import Panel from "../components/panel/Panel";

const Character = () => {
    const { characterId } = useParams();

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //Avec un tableau vide en deuxième argument
        // La fonction useEffect ne sera déclenchée qu'une fois fois, au chargement du composant
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://marvelorion2022.herokuapp.com/character/${characterId}`);
                setData(response.data);
                console.log(response.data);
                setIsLoading(false);

            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [characterId]);

    console.log(characterId);

    return (
        <div className="page product">
            {isLoading === true ? (
                <h1>En cours de chargement</h1>
            ) : (
                <>
                    <Panel
                        name={data.name}
                        description={data.description}
                        img={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                    />
                    <Comic />
                </>
            )}
        </div>);
};

export default Character;
