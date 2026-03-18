export async function fetchData(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch places');
    const data = await res.json();
    return data.places;
}

export async function updateUserPlaces(places) {
    const res = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (!res.ok) throw new Error('Failed to fetch places');

    const data = await res.json();
    return data.message;
}