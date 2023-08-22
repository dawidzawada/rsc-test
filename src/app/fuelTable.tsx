import styles from './fuelTable.module.css';
import {UpdateFuelInput} from "@/app/updateFuelInput";
import {getFuels} from "@/app/getFuels";

export const FuelTable = async () => {
  const data = await getFuels()

  if(!data){
    return (
        <div>
          No posts
        </div>
    )
  }
  console.log('Render - Server component - <FuelTable />', data);
  return (
    <div className={styles.tableContainer}>
      {data.map(fuel => {
        return (
            <div key={fuel.id} className={styles.fuelRow}>
              <div className={styles.fuelPriceContainer}>
                <div className={styles.fuelName} style={{backgroundColor: fuel.color}}>{fuel.name}</div>
                <div className={styles.fuelPrice}>{fuel.price.toFixed(2)}</div>
              </div>
              <UpdateFuelInput fuel={fuel} />
            </div>
        )
      })}
    </div>
  )
}

export default FuelTable;
