export async function askMessage(prompt) {
    let data = {
        message: prompt,
    };

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    return await fetch("http://localhost:3001/api/prompt", options)
        .then((response) => response.json())
        .then((data) => data.answer)
        .catch((err) => {
            console.error(`There was an error to the console: ${err}`);
        });
}
