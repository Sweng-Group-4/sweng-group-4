import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function App() {
    const searchInput = useRef(null);
    const [searchResults, setSearchResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState('en'); // Default language is English

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

    return (
        <div className='container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <h1 className='title'>Image Search Engine</h1>
            {errorMsg && <p className='error-msg'>{errorMsg}</p>}
            <div className='search-section'>
                <Form onSubmit={handleSearch}>
                    <Form.Control
                        type='search'
                        placeholder='Type something to search...'
                        className='search-input'
                        ref={searchInput}
                        style={{ width: '400px', height: '50px', fontSize: '18px', color: 'black' }}
                    />
                </Form>
            </div>
            <div className='language-section'>
                <select value={language} onChange={handleLanguageChange} style={{ width: '400px', height: '50px', fontSize: '18px', marginBottom: '20px' }}>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    {/* Add more language options as needed */}
                </select>
            </div>
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
