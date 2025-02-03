import {useCreateMutation, useGetListQuery} from "./feature/superhero/superhero.ts";
import {SuperheroForm} from "./feature/superhero/SuperheroForm.tsx";
import {SuperheroCard} from "./feature/superhero/SuperheroCard.tsx";
import {ApiError, CreateSuperheroDto} from "./feature/superhero/types.ts";
import {useEffect} from "react";

function App() {

    const { data: superHeroes } = useGetListQuery();
    const [create, createResult] = useCreateMutation();

    const handleFormSubmit = async (newSuperhero: CreateSuperheroDto) => {
        await create(newSuperhero);
    };

    useEffect(() => {
        if (createResult.isSuccess) {
            alert('Superhero created!');
            return;
        }
        if(createResult.isError && ('data' in createResult.error)) {
            alert((createResult.error.data as ApiError).message[0]);
        }

    }, [createResult]);

    return (
        <div>
            <SuperheroForm onSubmit={handleFormSubmit} />
            <div>
                {superHeroes?.map((superhero) => (
                    <SuperheroCard key={superhero.id} superhero={superhero} />
                ))}
            </div>
        </div>
    );
}

export default App
