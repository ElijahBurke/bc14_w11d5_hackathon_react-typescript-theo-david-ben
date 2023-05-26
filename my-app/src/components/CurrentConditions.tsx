import { currentConditionsData } from "../App";

interface CurrentConditionsProps {
    weatherData: currentConditionsData;
}

const CurrentConditions: React.FC<CurrentConditionsProps> = ({
    weatherData,
}) => {
    return <div className="current-conditions">Current Conditions</div>;
};

export default CurrentConditions;

// function CurrentConditions(props: CurrentConditionsProps) {

//   return (
//     <div className="current-conditions">Current Conditions</div>
//   )
// }

// export default CurrentConditions
