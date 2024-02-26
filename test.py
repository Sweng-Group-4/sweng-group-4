import unittest
from unittest.mock import patch
from deep_translator_api import translate_text  # Import translation function from deep_translator_api.py file

class TestTranslateText(unittest.TestCase):

    @patch('deep_translator_api.GoogleTranslator')
    def test_translation(self, mock_translator):
        # Set up the mock translator
        mock_instance = mock_translator.return_value
        mock_instance.translate.return_value = "Bonjour"  # Mock translation result

        # Test case 1
        input_text = "Hello"
        expected_output = "Bonjour"
        output = translate_text(input_text)

        # Assert
        self.assertEqual(output, expected_output)

    @patch('deep_translator_api.GoogleTranslator')
    def test_target_language(self, mock_translator):
        # Set up the mock translator
        mock_instance = mock_translator.return_value
        mock_instance.translate.return_value = "I went to the shop"  # Mock translation result

        # Test case
        input_text = "Chuaigh me go dti an siopa"
        target_lang = 'ir'  # Irish
        translate_text(input_text, target_lang=target_lang)

        # Assert
        mock_translator.assert_called_with(source='auto', target=target_lang)

    @patch('deep_translator_api.GoogleTranslator')
    def test_source_language(self, mock_translator):
        # Set up the mock translator
        mock_instance = mock_translator.return_value
        mock_instance.translate.return_value = "dog"  # Mock translation result

        # Test case
        input_text = "câine"
        source_lang = 'en'  
        translate_text(input_text,source_lang)

        # Assert
        mock_translator.assert_called_with(source="auto", target='en')

    @patch('deep_translator_api.GoogleTranslator')
    def test_both_languages(self, mock_translator):
        # Set up the mock translator
        mock_instance = mock_translator.return_value
        mock_instance.translate.return_value = "Bonjour"  # Mock translation result

        # Test case
        input_text = "Bonjour"
        target_lang = 'en'  # French
        translate_text(input_text,target_lang)

        # Assert
        mock_translator.assert_called_with(source='auto', target=target_lang)

if __name__ == '__main__':
    unittest.main()
