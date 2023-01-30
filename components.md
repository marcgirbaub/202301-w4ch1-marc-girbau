# Data

## Data layer

- list of gentlemen

- gentleman:

  - id
  - name
  - status
  - profession
  - twitter
  - picture
  - alternativeText
  - selected

## Data modifications

- toggle selected property of gentlemen
- select all gentlemen
- delete a gentleman

# Components

## App

- Contains the list of gentlemen
- Contains the select all gentlemen function
- Contains the toggle selected property function
- Contains de delete gentleman function

- Sends the number of gentlemen pointing to Info
- Sends the gentleman to Gentleman
- Sends the function to toggle to Gentleman
- Sends the function to delete to Gentleman
- Sends the select all function to Button

## Info

- Receives the number of gentlemen pointing
- Displays the number of gentlemen pointing

## Button

- Receives the select all gentlemen function

## Gentleman

- Receives a gentleman
- Receives the function to delete gentleman
- Receives the function to toggle the selected property
