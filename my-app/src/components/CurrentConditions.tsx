import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


interface CurrentConditionsProps {
  weatherData: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    description: string;
    icon: string;
    name: string;
  };
}

const CurrentConditions: React.FC<CurrentConditionsProps> = ({ weatherData }: any) => {
  const { temp, feels_like, temp_min, temp_max, pressure, humidity, description, icon, name } = weatherData;


    console.log(weatherData)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='icon' variant="top" src={`http://openweathermap.org/img/w/${icon}.png`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Temp: <span>{Math.floor(temp)}</span>˚</ListGroup.Item>
        <ListGroup.Item>Humidity: <span>{humidity}</span>%</ListGroup.Item>
        <ListGroup.Item>Feels like: <span>{Math.floor(feels_like)}</span></ListGroup.Item>
        <ListGroup.Item>Pressure: <span>{pressure}</span> hPa</ListGroup.Item>
        <ListGroup.Item>Min temp: <span>{Math.floor(temp_min)}</span>˚</ListGroup.Item>
        <ListGroup.Item>Max temp: <span>{Math.floor(temp_max)}</span>˚</ListGroup.Item>
      </ListGroup>
      <Card.Body>

      </Card.Body>
    </Card>
  );
}

export default CurrentConditions
