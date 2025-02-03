import {Box, Button, TextField} from "@mui/material";
import {CreateSuperheroDto} from "./types.ts";
import {useState} from "react";

interface SuperheroFormProps {
    onSubmit?: (newSuperhero: CreateSuperheroDto) => Promise<void>;
}

export const SuperheroForm: React.FC<SuperheroFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [superpower, setSuperpower] = useState('');
    const [humility, setHumility] = useState(0);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const newSuperhero: CreateSuperheroDto = { name, superpower, humility };
        if (onSubmit) {
            await onSubmit(newSuperhero);
        }
        setName('');
        setSuperpower('');
        setHumility(0);
    };

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
                onChange={(e) => setHumility(+e.target.value)}
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