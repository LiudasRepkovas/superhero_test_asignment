import {Card, CardContent, Typography} from "@mui/material";
import {SuperheroDto} from "./types.ts";

export const SuperheroCard = ({ superhero }: {
    superhero: SuperheroDto
}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {superhero.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Superpower: {superhero.superpower}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Humility: {superhero.humility}
                </Typography>
            </CardContent>
        </Card>
    )
}