import { useEffect, useState } from "react";
import Button from "../button/Button";
import { FiHeart } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

import "./_dogcard.scss";

export default function DogCard() {
    const [dogs, setDogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:4000/dogs")
            .then((response) => response.json())
            .then((result) => setDogs(result))
            .finally(() => setIsLoading(false));
    }, []);

    console.log("dogs: ", dogs);

    return isLoading ? (
        <p>Is loading</p>
    ) : (
        <>
            {dogs.map((dog) => (
                <div className="dog__card" key={dog.id}>
                    <div className="dog__img">
                        <img src={dog.image} alt="" />
                    </div>
                    <div className="dog__content">
                        <div className="dog__breed">
                            <h2>{dog.breed}</h2>
                            <Button icon={<FiHeart />} />
                        </div>
                        <div className="dog__location">
                            <p><span><FiMapPin size='.756rem'/></span>{dog.location}</p>
                        </div>
                        <div className="dog__short-description">
                            <p>{dog.short_description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
