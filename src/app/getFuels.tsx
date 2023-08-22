import {Fuel} from "@/app/Fuel";

export async function getFuels() {
    const res = await fetch('http://localhost:5000/fuels', {next: {revalidate: 10, tags: ['fuels']}})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json() as unknown as Fuel[]
}