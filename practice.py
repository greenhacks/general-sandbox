import csv 

def print_csv_data(filename):
    """Print CSV data"""
    with open (filename, 'r') as csv_file: # open filename with read permissions
        reader = csv.reader(csv_file) # make a reader variable
        for row in reader: # loop through the reader variable
            print(', '.join(row)) # use the join method to print each row, separated by a comma
    csv_file.close() # close the file

