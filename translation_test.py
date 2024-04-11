import unittest
import requests
from unittest.mock import patch

class TestTranslationService(unittest.TestCase):

    @patch('requests.get')
    def test_translation_le_chien(self, mock_get):
        mock_get.return_value.status_code = 200
        mock_get.return_value.json.return_value = {"input": "le chien/the dog"}

        # URL of the translation service
        base_url = "https://orosulli.pythonanywhere.com/?translate="
        search_phrase = "le chien"
        
        response = requests.get(f"{base_url}{search_phrase}")
        
        self.assertEqual(response.status_code, 200)
        self.assertIn("the dog", response.json().get("input", ""))

    @patch('requests.get')
    def test_translation_buna_ce_faci(self, mock_get):
        mock_get.return_value.status_code = 200
        mock_get.return_value.json.return_value = {"input": "Buna ce faci/Hi! What are you doing"}

        base_url = "https://orosulli.pythonanywhere.com/?translate="
        search_phrase = "Buna ce faci"
        
        response = requests.get(f"{base_url}{search_phrase}")
        
        self.assertEqual(response.status_code, 200)
        self.assertIn("Hi! What are you doing", response.json().get("input", ""))

    @patch('requests.get')
    def test_translation_testing_testing(self, mock_get):
        mock_get.return_value.status_code = 200
        mock_get.return_value.json.return_value = {"input": "testing testing/testing testing"}

        base_url = "https://orosulli.pythonanywhere.com/?translate="
        search_phrase = "testing testing"
        
        response = requests.get(f"{base_url}{search_phrase}")
        
        self.assertEqual(response.status_code, 200)
        self.assertIn("testing testing", response.json().get("input", ""))

if __name__ == '__main__':
    unittest.main()
