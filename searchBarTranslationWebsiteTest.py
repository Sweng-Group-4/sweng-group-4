import requests



def test_translation():
    # URL of the translation service
    base_url = "https://orosulli.pythonanywhere.com/?translate="
    search_phrase = "le chien"
    
    # Make the request to the translation service
    response = requests.get(f"{base_url}{search_phrase}")
    
    # Assert that the response status code is 200 (OK)
    assert response.status_code == 200, "Expected status code 200, got {response.status_code}"
    
    # Parse the JSON response
    data = response.json()
    
    # Check if the response has the expected translation
    expected_translation = "the dog"
    translated_text = data.get("input", "")
    assert expected_translation in translated_text, f"Expected '{expected_translation}' in response, got '{translated_text}'"

def test_translation_2():
    # URL of the translation service
    base_url = "https://orosulli.pythonanywhere.com/?translate="
    search_phrase = "Buna ce faci"
    
    # Make the request to the translation service
    response = requests.get(f"{base_url}{search_phrase}")
    
    # Assert that the response status code is 200 (OK)
    assert response.status_code == 200, "Expected status code 200, got {response.status_code}"
    
    # Parse the JSON response
    data = response.json()
    
    # Check if the response has the expected translation
    expected_translation = "Hi! What are you doing"
    translated_text = data.get("input", "")
    assert expected_translation in translated_text, f"Expected '{expected_translation}' in response, got '{translated_text}'"

    
def test_translation_3():
    # URL of the translation service
    base_url = "https://orosulli.pythonanywhere.com/?translate="
    search_phrase = "testing testing"
    
    # Make the request to the translation service
    response = requests.get(f"{base_url}{search_phrase}")
    
    # Assert that the response status code is 200 (OK)
    assert response.status_code == 200, "Expected status code 200, got {response.status_code}"
    
    # Parse the JSON response
    data = response.json()
    
    # Check if the response has the expected translation
    expected_translation = "testing testing"
    translated_text = data.get("input", "")
    assert expected_translation in translated_text, f"Expected '{expected_translation}' in response, got '{translated_text}'"




    
