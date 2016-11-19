"""File contains methods for converting the docx list to a javascript array."""
import docx
import json

SOURCE_FILE = "sibling_quotes.docx"
DEST_FILE = "./dest/sibling_quotes.txt"


def build_list(source, dest):
    """Open docx file, and copy paragraphs into a javascript array."""
    doc = docx.Document(source)
    quote_strings = []

    for quote in doc.paragraphs:
        if len(quote.text) > 0:
            quote_strings.append(quote.text)

    new_file = open(dest, 'w')
    new_file.write(json.dumps(quote_strings[6:]))
    new_file.close()

    print("%d quotes extracted" % len(quote_strings[6:]))


build_list(SOURCE_FILE, DEST_FILE)
