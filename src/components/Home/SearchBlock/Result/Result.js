// Dependencies
import React from 'react';

// Styles
import styles from './Result.module.css';


const Result = ({ hasResults }) => {
    return hasResults ? (
        <section className={styles.ResultWrapper}>
            <h1>Resultado</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque dolore autem, voluptate,
                reiciendis tenetur dignissimos totam eum nobis inventore architecto aliquid quo rerum accusamus labore
                voluptatum magnam! Accusamus, id quisquam. Excepturi, quisquam eligendi magni quia maxime expedita quae
                et quod alias, molestiae blanditiis consequatur dolorum incidunt optio iste culpa. Quia, ut obcaecati
                hic debitis, nemo eligendi nesciunt similique itaque earum sequi suscipit maiores esse sunt voluptatem
                impedit modi, cum perspiciatis blanditiis beatae laborum. Nostrum iure dolores laborum reprehenderit
                itaque culpa, facere exercitationem tempore explicabo repellat excepturi incidunt eligendi distinctio
                mollitia corporis ducimus suscipit quod quibusdam, officiis quaerat ab laudantium.
            </p>


            <footer>
                <section className={styles.Warning}>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, et.</span>
                </section>
            </footer>
        </section>
    ) : (
        <div className={styles.NoResultImageWrapper}>
            <img src="./images/no-result.png" width='500px' />
        </div>
    )
}

export default Result;