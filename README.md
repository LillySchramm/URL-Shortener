- [URL-Shortener](#url-shortener)
  - [API](#api)

# URL-Shortener

A simple URL-Shortener using Typescript and [MongoDB](https://eps-dev.net/JxyzzT).
## API

| Method | Endpoint            | Description                                 | Example Request                                                                                                                                                                             |
| ------ | ------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET`  | `eps-dev.net/`      | Redirects to an set frontend URL            | `curl --request GET --url https://eps-dev.net/`                                                                                                                                             |
| `GET`  | `eps-dev.net/stats` | Shows a small information about the backend | `curl --request GET --url https://eps-dev.net/stats`                                                                                                                                        |
| `GET`  | `eps-dev.net/:id`   | Redirects to the URL behind the id          | `curl --request GET --url https://eps-dev.net/xZjUiW`                                                                                                                                       |
| `POST` | `eps-dev.net/add`   | Generates an shortened URL                  | `curl --request POST   --url https://eps-dev.net/add   --header 'Content-Type: application/json'   --data '{"url": "https://gitlab.eps-dev.de/Elias/url-shortener"}'` |
