export function getJokes() {
    let dadJokeOrNormalJoke = Math.floor(Math.random() * 2);

    let options = {
        method: "GET",
        headers: {
            "X-Api-Key": "NaFDPlJ/ZuYfdE1eM8Br1Q==uKnzIfRqAkR5Ocj6",
        },
        contentType: "application/json",
    };

    return fetch(
        `https://api.api-ninjas.com/v1/${
            dadJokeOrNormalJoke ? "jokes" : "dadjokes"
        }?limit=1`,
        options
    )
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
}
