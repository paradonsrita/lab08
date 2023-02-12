<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template  #heading>
      <img src="https://ih1.redbubble.net/image.964581270.6433/st,small,507x507-pad,600x600,f8f8f8.jpg" width="25" height="25"/> BTC History</template>

    The history of bitcoin started with its invention and implementation by Satoshi Nakamoto, who integrated many existing ideas from the cryptography community
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading> <img src="https://ae01.alicdn.com/kf/HTB1RTrloInI8KJjSsziq6z8QpXaQ/4000-4x4-ethereum-cryptocurrency-FS17.jpg" width="25" height="25"/> ETH History</template>

    Ethereum was conceived in 2013 by programmer Vitalik Buterin.[5] Additional founders of Ethereum included Gavin Wood, Charles Hoskinson, Anthony Di Iorio and Joseph Lubin.[6] In 2014, development work began and was crowdfunded, and the network went live on 30 July 2015.[7] Ethereum allows anyone to deploy permanent and immutable decentralized applications onto it, with which users can interact.[8] Decentralized finance (DeFi) applications provide a broad array of financial services without the need for typical financial intermediaries like brokerages, exchanges, or banks, such as allowing cryptocurrency users to borrow against their holdings or lend them out for interest.[9][10] Ethereum also allows users to create and exchange NFTs, which are unique tokens representing ownership of an associated asset or privilege, as recognized by any number of institutions. Additionally, many other cryptocurrencies utilize the ERC-20 token standard on top of the Ethereum blockchain and have utilized the platform for initial coin offerings.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading> <img src="https://i0.wp.com/cryptoshopper.store/wp-content/uploads/2019/03/45752-12.jpg?fit=1200%2C1200&ssl=1" width="25" height="25"/> XRP History</template>

    In 2011, three engineers—David Schwartz, Jed McCaleb, and Arthur Britto—began developing the XRP Ledger (XRPL). Fascinated by Bitcoin, they set out to create a better version that improved upon its limitations—with the goal of creating a digital asset that was more sustainable and built specifically for payments.
The XRP Ledger first launched in June 2012. Shortly thereafter, they were joined by Chris Larsen, and the group started the Company NewCoin in September 2012 (quickly renamed OpenCoin and now named Ripple).

The XRPL founders gifted 80 billion XRP, the platform’s native currency, to the company. Ripple has since put the majority in escrow.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading><img src="https://ih1.redbubble.net/image.2829033624.6259/st,small,507x507-pad,600x600,f8f8f8.jpg" width="25" height="25"/> BNB History</template>

    Binance Coin (BNB) is a cryptocurrency that can be used to trade and pay fees on the Binance cryptocurrency exchange. The Binance Exchange is the largest cryptocurrency exchange in the world as of January 2018, facilitating more than 1.4 million transactions per second. Binance Coin was created in July 2017 and initially worked on the ethereum blockchain with the token ERC-20 before it became the native currency of Binance’s own blockchain, the Binance Chain.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading><img src="https://ih1.redbubble.net/image.3060122498.1724/st,small,507x507-pad,600x600,f8f8f8.jpg" width="25" height="25"/> USDT History</template>

    Founded in July 2014 by Brock Pierce, Craig Sellars, and Reeve Collins, Tether (USDT), originally known as "Realcoin", is a cryptocurrency commonly known as a “stablecoin” that aims to keep a fixed 1:1 exchange ratio with the U.S. dollar. Tether was one of the earliest stablecoins created, built upon Mastercoin (Omni), which was a protocol layer for Bitcoin that introduced the stablecoin concept to the world in 2012. Tether pioneered what is now known as a fiat-collateralized stablecoin model, and is now the most widely used stablecoin today.

Tether was created as an attempt to solve two major issues with existing cryptocurrencies: high volatility and convertibility between fiat currencies and cryptocurrencies. To address these perceived issues Tether created a cryptocurrency that is fully backed 1:1 by deposits of U.S. dollars held at banks. On Ethereum, USDT tokens are represented as ERC-20 tokens, while on Bitcoin, Tether utilizes the Omni layer, to represent USDT tokens. While the tokens themselves operate in a decentralized network, Hong Kong based Tether Ltd is solely responsible for creating and redeeming tokens as well as maintaining the 1:1 deposit backing.

Exchanges have been the primary users of USDT as an alternative to fiat currencies, reducing or eliminating the need to maintain outside banking relationships. Notable exchanges that utilize the token include Bitfinex, Bittrex, Binance, Coinbase, Kraken, Huobi, Poloniex, Liquid.io, Gate.io, and OKEx. Tether Ltd shares many executives and has strong ties with Hong Kong based Bitfinex with both sharing the same parent organization iFinex Inc.

Since its founding in 2014, Tether has been the subject of ongoing controversydue to the failure of Tether to provided audited financial statements proving it has adequate reserves backing USDT. Historically Tether has failed to disclose its banking relationships, only recently announcing its banking partners in November 2018 to quell rumors about its solvency raised by associated crypto exchange, Bitfinex.

In March 2019, Tether updated its disclosure statement claiming that its tokens are no longer backed 100% by U.S. dollar deposits. Tether is instead now backed 100% backed by reserves, which include traditional currency and cash equivalents and, from time to time, other assets and receivables from loans made by Tether to third parties, which may include affiliated entities.
  </WelcomeItem>
</template>