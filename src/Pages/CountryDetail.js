
import { useEffect,useState } from 'react';
import { useParams}  from 'react-router-dom';
import { getCountryDetail } from '../Services/Constant';
import {Box, Typography, styled} from '@mui/material';


const Cname = styled(Typography)`
   color: black;
   font-size: 24px;
   font-weight: 400;
`
const Wrapper = styled(Box)`
   text-align: center;
`
const Crapper = styled('div')`
   background-image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Whole_world_-_land_and_oceans_12000.jpg";
   height: 700px;
`


const Photo = styled('img')`
    padding-top: 75px;
    width: 400px;
    height: 250px;
`

const All = styled(Typography)`
   font-size: 15px;
   font-family: Georgia;
   font-weight: 600px;
   color: grey;
`

export default function CountryDetail(props) {
     const { countryCode } = useParams();
     const [detail,setDetail] = useState ([]);

     useEffect(()=> {
          getCountryDetail(countryCode).then((result)=> {
                const d=result.data;
                console.log("d", d);
                setDetail(d)
        })
     }, [countryCode])

     
    return (
          <Crapper>
            {
                  detail.map(country=>(
                     <Wrapper>
                      <div> 
                     <Photo src={country.flags?.png} alt={country.name}/>
                     </div> 
                     <div>
                     <Cname>{country.name.common}</Cname>
                     <All>CAPITAL: {country.capital}</All>
                     <All>POPULATION: {country.population}</All>
                     <All>REGION: {country.region}</All>
                     <All>SUBREGION: {country.subregion}</All>
                     <All>CONTINENTS: {country.continents}</All>
                     <All>TIMEZONE: {country.timezones}</All>
                     </div>
                     </Wrapper> 
                  ))
            }
            </Crapper>
    )
}