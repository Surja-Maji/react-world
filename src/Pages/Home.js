import CountryCard from "../Components/CountryCard";
import './Home.css';
import { useEffect, useState } from "react";
import { getAllCountries } from "../Services/Constant";
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Toolbar } from "@mui/material";

function Home() {
   const [coutriesList, setCoutriesList] = useState([]);
   const [filterCountriesList, setFilterCountriesList] = useState ([]);
   const [region, setRegion] = useState('');
   const [countryName, setCountryName]= useState('');

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountryName(event.target.value);
  };

   useEffect(() => {
      getAllCountries().then((result)=> {
        const coutries= result.data;
        setCoutriesList(coutries);
        setFilterCountriesList(coutries);
        console.log("coutries", coutries)
      });
   }, []);
   
   useEffect(()=> {
        console.log("region or country:" ,region, countryName);
        if(region==='' && countryName==='') setFilterCountriesList(coutriesList);
        else
        {
          let filterCountries = coutriesList;
          if(region.length) 
          {
           filterCountries = filterCountries.filter(country=> {
           if(country.region===region)
           return true;
           return false;
        });
      }
      if(countryName.length) {
      filterCountries = filterCountries.filter(country=> {
        const lowerCaseName = country.name.common.toLowerCase();
        if(lowerCaseName.includes(countryName.toLowerCase()))
        return true;
        return false;
     });
    }
        setFilterCountriesList(filterCountries);
      }
   }, [region, coutriesList,countryName]);

  return (
    <div>
      <div className="all">
        <div className="search">
      <TextField id="outlined-basic" label="search by country" variant="outlined" 
        onChange={handleCountryChange}
        value={countryName}
      />
      </div>
      <div className="filter">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={region}
          label="region"
          onChange={handleRegionChange}
        >
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'Americas'}>Americas</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
          <MenuItem value={'Asia'}>Asia</MenuItem>
          <MenuItem value={'Oceania'}>Oceania</MenuItem>
        </Select>
      </FormControl> 
      </div>
      </div>
      <div className='country-card-wrapper'>
        {
          filterCountriesList.map(country=> (
            <Link 
            to={`/countries/${country.name.common}`}
            style={{textDecoration: 'none'}}
            > 
               <CountryCard 
                  name={country.name.common}
                  capital={country.capital}
                  population={country.population}
                  flagUrl={country.flags.png}
             />
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Home;