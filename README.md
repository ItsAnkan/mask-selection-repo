# MASK SELECTION API INTEGRATION TASK

The data format is

```json
[{
  "name": "Ergo Proxy",
  "year": 2006,
  "episodes": 23,
  "description": "In a futuristic ..."
 },
 {
  "name": "Samurai Champloo",
  "year": 2004,
  "episodes": 26,
  "description": "In Edo-era Japan..."
 },
 /* ... */
]
```

The API path is `https://test.kgpmask.club/get-anime` and it will accept a POST request

For filters, you can send a `{ "year": 2010 }` as a body parameter, and it'll return all animes released after or during the provided year.

Happy Coding!
