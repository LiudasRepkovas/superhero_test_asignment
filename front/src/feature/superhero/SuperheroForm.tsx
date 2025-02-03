import {Box, Button, TextField} from "@mui/material";
import {ApiError, CreateSuperheroDto} from "./types.ts";
import {useEffect, useState} from "react";
import {useCreateMutation} from "./SuperheroApi.ts";

interface SuperheroFormProps {}

export const SuperheroForm: React.FC<SuperheroFormProps> = () => {
    const [name, setName] = useState('');
    const [superpower, setSuperpower] = useState('');
    const [humility, setHumility] = useState('1');
    const [create, createResult] = useCreateMutation();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const newSuperhero: CreateSuperheroDto = { name, superpower, humility: +humility };

        await create(newSuperhero);

    };

    useEffect(() => {
        if (createResult.isSuccess) {
            alert('Superhero created!');
            setName('');
            setSuperpower('');
            setHumility('1');
            return;
        }
        if(createResult.isError && ('data' in createResult.error)) {
            alert((createResult.error.data as ApiError).message[0]);
        }

    }, [createResult]);

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <TextField
                label="Superpower"
                value={superpower}
                onChange={(e) => setSuperpower(e.target.value)}
                required
            />
            <TextField
                label="Humility"
                value={humility}
                type="number"
                onChange={(e) => setHumility(e.target.value)}
                required
            />
            <Button sx={{
                marginBottom: 5
            }} type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
};