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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // adding for retieving captions
    const [captions, setCaptions] = useState({});

    var keepResults="";
    const [resContent, setRes] = useState('');
    const [imgSrc, setImg] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const advanceImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgSrc.length);
      };

      const fetchCaptions =  (imagePath) => {
        if (!imagePath) {
            console.log("no path");
            return;
        }
    
        try {
            let s = `http://127.0.0.1:5000/getCaption?parameter=${imagePath}`;
            fetch(s)
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching the caption:', error);
            });

        } catch (error) {
            console.log("error", error);
        }
    };
      
      const searchImg = () => {

        let searchName = document.getElementById("searchHere").value;
      
        let translateSearchLink = `http://orosulli.pythonanywhere.com/?translate=${searchName}`;
        
        fetch(translateSearchLink)
        .then((res) => res.json())
        .then((data) => {

            let translatedString = JSON.stringify(data);
            let messyStringFixSoon = translatedString.replace("{", "").replace("}", "").replace(',','').replace(":","").replaceAll('"',"").replace("input","");
            console.log(messyStringFixSoon);

            let searchLink = `http://127.0.0.1:5000/search_frontend?parameter=${messyStringFixSoon}`;

            fetch(searchLink)
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
                const validImages = data.file.slice(0, 4).map(img => img.replace("public/", "/"));
                console.log(validImages);
                setImg(validImages);
                setSelectedImage(null); // Reset selected image on new search
            })
            .catch(error => {
                console.error('Error fetching the images:', error);
                setErrorMsg('Failed to load images.');
            });


        })     
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

    const handleImageSelect = (src) => {
        setSelectedImage(src); // Update state to selected image
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };
   
    return (
        <div
        className='container'
        style={{
            
            backgroundImage: 'url(https://images.unsplash.com/photo-1508311603478-ce574376c3cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        }}>
            <h1 className='title' style={{color: 'white'}}>Search</h1>
            {errorMsg && <p className='error-msg'>{errorMsg}</p>}
            
            <div className='click-to-search'>
            </div>
    
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <button data-testid="searchButton" onClick={event => searchImg()} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none', padding: '5px' }}>
            <img src="https://www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png" style={{ width: '24px', height: '24px', verticalAlign: 'middle' }} />
            </button>
            <input type="text" id="searchHere" style={{ borderRadius: '24px', width: '350px', padding: '10px', fontSize: '16px', border: '1px solid #dfe1e5', outline: 'none', paddingLeft: '40px' }} data-testid="searchHere" placeholder="  Search..." />
            </div>
            <p id="id1" style={{ whiteSpace: 'pre-line' }}>{resContent}</p>
    
            {/* Grid view */}
            <div className="grid-container" style={{ display: selectedImage ? 'none' : 'grid' }}>
                {imgSrc.map((src, index) => (
                    <div key={index} className="grid-item" onClick={() => handleImageSelect(src)}>
                        <img src={src} alt={`Search result ${index + 1}`} />
                    </div>
                ))}
            </div>
    
            {/* Expanded image view */}
            {selectedImage && (
                <div className="expanded-image-viewer" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Expanded view" />
                    <p>{fetchCaptions(selectedImage)}</p>
                </div>
            )}
    
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
