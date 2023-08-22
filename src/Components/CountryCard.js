

import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CountryCard(props) {
  return (
    <Card sx={{ width: 260 , height: 275}}>
      <CardMedia
        component="img"
        alt={props.country}
        height="140"
        image={props.flagUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         CAPITAL: {props.capital}
        </Typography>
      </CardContent>
    </Card>
  );
}