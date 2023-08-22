'use server'

import axios from "axios";
import {revalidateTag} from "next/cache";

export async function updateFuel(id: number, color: string, price: number) {
    await axios.patch(`http://localhost:5000/fuels/${id}`, {color, price})
    revalidateTag('fuels')
}