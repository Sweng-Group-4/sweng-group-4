import unittest
from search import get_filenames, retrieve_matches
from unittest.mock import patch, MagicMock
import os

#test 1: Tests get_filenames returns the images in the directory
class TestGetFilenames(unittest.TestCase):
    @patch('search.glob.glob') 
    def test_get_filenames(self, mock_images):
        mock_images.return_value = ['Test/Animals/Dog.jpg', 'Test/Animals/Cat.jpg', 'Test/Animals/Donkey'] 
        files = get_filenames()
        self.assertEqual(len(files), 3)
        self.assertIn('Test/Animals/Dog.jpg', files)
#test 2: test retrieve matches        
class TestRetrieveMatches(unittest.TestCase):
#test 2.1: Tests no hits
    def empty_hits(self):
        hits = []
        expected_list = []
        self.assertEqual(retrieve_matches(hits), expected_list)
#test 2.2: Tests non-empty hits
    def non_empty_hits(self):
        hits = [{'payload': {'filepath': 'Test/Animals/Dog.jpg'}},
                {'payload': {'filepath': 'Test/Animals/Cat.jpg'}}]
        expected_list = ['Test/Animals/Dog.jpg', 'Test/Animals/Cat.jpg']
        self.assertEqual(retrieve_matches(hits), expected_list)
    
if __name__ == '__main__':
    unittest.main()