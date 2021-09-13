import styles from '../../styles/card.module.css';

export default function Card(props) {

    return (
        <div className={styles.card}>
            <div className="card-header">
                <h3>{props.title}</h3>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}
