import styles from '../../styles/card.module.css';


export default function Card({ color, gridColumn, gridRow, image }) {

    return (
        <div className={styles.grid}> 
        <div className={styles.active} >
            <div className="card-header">
                
                <h3>Aqui</h3>
            </div>
            <div className="card-body">
                
            </div>
        </div>
        </div>
    );
}
