import React, { useRef, useState, useEffect} from 'react';
import { Button, Form } from 'react-bootstrap';
import './fileUpload.css';
import './searchBar.css'

// added for HTTP Request from React to Flask


// class App extends React.Component { 
//     constructor(props) {
//             super(props);
//             this.state = {apiResponse: ""};
//         }
// if I include the above and get rid of the App(), the constants would have to be declared outside of the component
    function App() {
    
    const searchInput = useRef(null);
    const [searchResults, setSearchResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState('en'); // Default language is English



    // added for HTTP Request from React to Flask
    // const callAPI = () => {
    //     fetch("http://127.0.0.1:5000/search") //address for running on local device
    //     .then(res => res.text())
    //     .then(res => this.setState({ apiResponse: res}));
    // };

    var keepResults="";
    const [resContent, setRes] = useState('');
    //const [imgSrc, setImg] = useState('');
    const [imgSrc, setImg] = useState([]);

    // const searchImg = () => {
    //     let searchName = document.getElementById("searchHere").value;
    //     let searchLink = "http://127.0.0.1:5000/search_frontend?parameter=${"+searchName+"}";
    //     fetch(searchLink)
    //     .then((result) =>result.json()
    //     .then((data) => {
    //             //the data
    //             keepResults = data[0]+",\n"+data[1]+",\n"+data[3];
    //             setRes(keepResults);
    //             setImg(data[0].replace("public/","/"));
    //             console.log(data[1],data[2]);
    //         })
    //     );
    // };
    const searchImg = () => {
        let searchName = document.getElementById("searchHere").value;
        let searchLink = `http://127.0.0.1:5000/search_frontend?parameter=${searchName}`;
        fetch(searchLink)
        .then((result) => result.json())
        .then((data) => {
            const validImages = data
                .slice(0, 4)
                .map(img => img.replace("public/", "/"))
                .filter(src => src.trim() !== ""); // Filter out empty or invalid paths
            setImg(validImages);
        })
        .catch(error => {
            console.error('Error fetching the images:', error);
            setErrorMsg('Failed to load images.');
        });
    };
    
    

    // Simulating search results (replace this with actual search logic)
    const performSearch = (query, currentPage, lang) => {
        setErrorMsg('');
        setLoading(true);

        // Simulating an asynchronous delay (replace this with actual async logic if needed)
        setTimeout(() => {
            // Simulated search results
            const resultsPerPage = 5;
            const totalResults = 20;
            const startIdx = (currentPage - 1) * resultsPerPage;
            const endIdx = startIdx + resultsPerPage;

            const searchResults = Array.from({ length: totalResults }, (_, index) => ({
                id: index + 1,
                title: `Result ${index + 1}`,
                snippet: `Snippet for result ${index + 1}`,
            })).slice(startIdx, endIdx);

            console.log("here")
            console.log(searchResults[0]);

            setSearchResults(searchResults);
            setTotalPages(Math.ceil(totalResults / resultsPerPage));
            setLoading(false);
        }, 1000); // Simulated delay of 1 second
    };

    const resetSearch = () => {
        setPage(1);
        performSearch(searchInput.current.value, 1, language);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        resetSearch();
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };
    
    // added for HTTP Request from React to Flask
    // const componentDidMount = () => {
    //     this.callAPI();
    // };

    
    // render() { do we need render?
    return (
        <div
        className = 'container'
        style ={{
            display : 'flex',
            backgroundImage : 'url(https://images.unsplash.com/photo-1508311603478-ce574376c3cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize : 'cover',
            alignItems : 'center',
            minHeight : '100vh',
            justifyContent : 'center',
            flexDirection : 'column',
        }}>
            <h1 className='title' style ={{color : 'white'}}>Search</h1>
            {errorMsg && <p className='error-msg'>{errorMsg}</p>}
            
            <div className='click-to-search'>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="text" id="searchHere" style= {{borderRadius: '10px' , width: '250px', padding: '5px' }} data-testid="searchHere"/>
            <button onClick={event => searchImg()} style ={{borderRadius:'10px', backgroundColor: 'lightblue', color: 'white', fontSize: '20px' }}>🔍</button>
            </div>
            {/* <p id="id1" style={{ whiteSpace: 'pre-line' }}>{resContent}</p>
            <img src={imgSrc}/>
             */}
            <div className="grid-container">
            {imgSrc.map((src, index) => {
            if (src) { // Render only if src is truthy
            return (
                <div key={index} className="grid-item">
                    <img src={src} alt={`Search Result ${index + 1}`} />
                </div>
              );
            }
             return null; // Otherwise, render nothing
            })}
            </div>


            {/* {imgSrc.map((src, index) => (
            <img key={index} src={src} alt={`Search Result ${index + 1}`} />
            ))} */}
 
            {/*added for HTTP request from React to Flask*/}
            {/* <div className="App">
                <header className = "App-header">
                    <p>{this.state.apiResponse}</p>
                </header>
            </div> */}

            {loading ? (
                <p className='loading'>Searching...</p>
            ) : (
                <>
                    <div className='search-results'>
                        {searchResults.map((result) => (
                            <div key={result.id} className='result'>
                                <h3>{result.title}</h3>
                                <p>{result.snippet}</p>
                            </div>
                        ))}
                    </div>
                    <div className='buttons'>
                        {page > 1 && (
                            <Button onClick={() => setPage(page - 1)}>Previous</Button>
                        )}
                        {page < totalPages && (
                            <Button onClick={() => setPage(page + 1)}>Next</Button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}


export default App;

