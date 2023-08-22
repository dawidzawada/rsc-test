'use client'

import {useState} from "react";
import {updateFuel} from "@/app/updateFuel";
import {Fuel} from "@/app/Fuel";
import styles from './updateFuelInput.module.css'

interface Props {
    fuel: Fuel;
}

export const UpdateFuelInput = ({ fuel }: Props) => {
    const [price, setPrice] = useState<number>(fuel.price);
    const [color, setColor] = useState<string>(fuel.color);

    const action = async () => {
        await updateFuel(fuel.id, color, price)
    }
    console.log('Render - Client component - <UpdateFuelInput />')
    return (
        <form action={action} className={styles.container}>
            <input type="color" className={styles.colorInput} value={color} onChange={(e) => setColor(e.target.value)} />
            <input type={'number'} className={styles.priceInput} min={0} max={10} step="0.01" value={price} onChange={(e) => setPrice(+e.target.value)} />
            <input type={'submit'} className={styles.button} value={'Update'} />
        </form>
    )
}
