import styles from '../../styles/card.module.css';

export default function Card({ color, gridColumn, gridRow, image }) {
    
    console.log(gridColumn, gridRow);
    return (
        <div className={styles.active} style={{gridRow: `${gridRow}`, gridColumn: `${gridColumn}`}} >
            <div className="card-header">
                <h3>Aqui</h3>
            </div>
            <div className="card-body">
                <img alt=""/>
            </div>
        </div>
    );
}
