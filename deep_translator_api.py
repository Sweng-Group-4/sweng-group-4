from deep_translator import GoogleTranslator

def translate_text(text, target_lang='fr'):
    """
    Translate text to the target language using Google Translator.

    :param text: The text to translate.
    :param target_lang: The target language code (default is French 'fr').
    :return: The translated text.
    """
    translator = GoogleTranslator(source='auto', target=target_lang)
    translated_text = translator.translate(text)
    return translated_text

if __name__ == "__main__":
    text_to_translate = "Hello, how are you today?"
    translated_text = translate_text(text_to_translate, 'fr')
    print(f"Original text: {text_to_translate}")
    print(f"Translated text: {translated_text}")