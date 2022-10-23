async function fetchData() {


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': '71cfc1ff80msh0add4a6f3cf2155p10dfe9jsn78c144345fd9',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
    };
    
  const res = await fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
  const joke = await res.json();

  alert(joke.value);

        
}

fetchData();