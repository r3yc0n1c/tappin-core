import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { encodeURL } from '@solana/pay';
import BigNumber from 'bignumber.js';


const reference = new Keypair().publicKey;
const label = 'Escrow Contract';
const message = 'Funding Escrow Contract';
const memo = 'Solana Pay Public Memo';


const GenerateURL = async ({ body, set, log }) => {
    try {
        const { destinationWallet, cost } = body;

        const recipient = new PublicKey(destinationWallet);
        const amount = new BigNumber(cost);

        const url: URL = encodeURL({ recipient, amount, reference, label, message, memo });
        // console.log('Payment request link:', url);

        set.status = 201;
        return url;
    } catch (err) {
        log.error(err);
        set.status = 500;
        return { message: "Internal Server Error" };
    }
};


export default {
    GenerateURL
};
