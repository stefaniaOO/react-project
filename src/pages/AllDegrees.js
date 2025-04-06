import react, {useState, useEffect} from 'react'; //import react and useState, useEffect hooks

function AllDegrees() // This is a functional component that fetches and displays all degrees
{
  const [degree, setDegrees] = useState([]); //usestate takes in two arguments variable name, function namen and initial value of variable
  //in this case degrees is the variable name and setDegrees is the function name and initial value is empty array
  //useState is a hook that allows you to add state to functional components


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/degree/") //fetching data from the API endpoint
    .then(response => response.json()) //converting the response to json
    .then(degree => setDegrees(degree)) }, []);//setting the degrees state to the data fetched from the API

    return(
      <div className="AllDegrees">
        <h1> List of all degrees please!</h1>
        <div>
          {degree.map((degree, index) => ( //mapping through the degrees array and returning a div for each degree
            <div key={index}> {/*using index as key for each degree */}
              <p>{degree.shortcode}</p>  {/*displaying the shortcode of the degree */} 
              </div>
          ))}
            
        </div>
          </div>
    );
}

export default AllDegrees;