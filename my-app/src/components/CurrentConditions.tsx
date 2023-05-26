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
      <Card.Img variant="top" src={`http://openweathermap.org/img/w/${icon}.png`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{temp}</ListGroup.Item>
        <ListGroup.Item>{humidity}</ListGroup.Item>
        <ListGroup.Item>{feels_like}</ListGroup.Item>
        <ListGroup.Item>{pressure}</ListGroup.Item>
        <ListGroup.Item>{temp_min}</ListGroup.Item>
        <ListGroup.Item>{temp_max}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CurrentConditions
