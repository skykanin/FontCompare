# font-api

A small Clojure api designed to handle user votes for the different fonts.

## Endpoints
This API exposes three endpoints

- GET `/list` - Retrieves the unsorted list over all fonts including their Ids and total votes
- GET `/vote/create` - Retrieves two fonts to vote on
- POST `/vote/register` - Send the font id to increment the total tally of. Returns a success status message

