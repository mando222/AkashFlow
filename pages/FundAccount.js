import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function FundAccount() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Deploy an App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <a href='/GUISetup'>
                    <p>&larr; Go Back</p>
                </a>
                <h1>
                    Fund Your Account
                </h1>

                <p>
                    Follow the steps below to get tokens in your wallet:<br/>
                    1. To get tokens take a look at the supported exchanges here https://akash.network/token<br/>
                    2. Once you have tokens in your exchange you can transfer them to the wallet address provided in the tool<br/>
                    3. Click on the address in the tool to copy it.  <br/>
                    4. From the exchange find the send token or export tokens button.<br/>  It may be slightly different depending on the echnage you used.<br/>
                    5. Paste in your address and send the tokens
                </p>

                <div className={styles.grid}>
                    <a href="/GUICreateCert" className={styles.card}>
                        <h2>Success &rarr;</h2>
                        <p>I purchased tokens and they are in my wallet</p>
                    </a>

                    <a href="/Help" className={styles.card}>
                        <h2>Uh Oh!&rarr;</h2>
                        <p>I ran into an issue</p>
                    </a>
                </div>
            </main>
        </div>
    );
}