import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Learn',
        Svg: require('@site/static/img/learn.svg').default,
        description: <>记录自己的所学</>
    },
    {
        title: 'Think',
        Svg: require('@site/static/img/think.svg').default,
        description: <>记录自己的所想</>
    },
    {
        title: 'Collect',
        Svg: require('@site/static/img/collect.svg').default,
        description: <>记录自己的收藏</>
    }
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className='text--center'>
                <Svg className={styles.featureSvg} role='img' />
            </div>
            <div className='text--center padding-horiz--md'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className='container'>
                <div className='row'>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
