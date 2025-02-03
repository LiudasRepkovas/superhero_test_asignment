import {useGetListQuery} from "./feature/superhero/superhero.ts";
import {SuperheroForm} from "./feature/superhero/SuperheroForm.tsx";
import {SuperheroCard} from "./feature/superhero/SuperheroCard.tsx";


function App() {

    const { data: superHeroes } = useGetListQuery();

    return (
        <div>
            <SuperheroForm/>
            <div>
                {superHeroes?.map((superhero) => (
                    <SuperheroCard key={superhero.id} superhero={superhero} />
                ))}
            </div>
        </div>
    );
}

export default App
