import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/co_potrebujete_vedet_o_ehds">
            Začněte s EHDS za 5 minut ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Vítejte na ${siteConfig.title}`}
      description="Ask-EHDS - Váš průvodce Evropským prostorem pro zdravotní data">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <h2>Nejnovější dokumenty</h2>
              <ul>
                <li><Link to="/docs/co_potrebujete_vedet_o_ehds">Co potřebujete vědět o EHDS</Link></li>
                <li><Link to="/docs/podpora_pokroku_ve_zdravotnictvi">Podpora pokroku ve zdravotnictví</Link></li>
                <li><Link to="/docs/technicke_aspekty_ehds">Technické aspekty EHDS</Link></li>
                <li><Link to="/docs/bezpecnost_a_ochrana_dat_v_ehds">Bezpečnost a ochrana dat v EHDS</Link></li>
                <li><Link to="/docs/implementace_ehds_v_cr">Implementace EHDS v ČR</Link></li>
                <li><Link to="/docs/ehds_a_ceske_zdravotnictvi">EHDS a české zdravotnictví</Link></li>
              </ul>
            </div>
            <div className="col col--6">
              <h2>Poslední příspěvky na blogu</h2>
              <ul>
                <li><Link to="/blog/ehds-v-ceskem-zdravotnictvi">EHDS a jeho dopad na české zdravotnictví</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}