
import TheraphySuggestions from './TheraphySuggestions';
import DailySuggestions from './DailySuggestions';
import CurrentDate from './CurrentDate';
import Buttons from '../Buttons/Buttons';


export default function Dashboard() {
  console.log("DOES IT GO TO THIS PAGE?");
  return (
    <>
      <CurrentDate/>
       <DailySuggestions/>
       <TheraphySuggestions/>
    </>
  );
}
