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
      <ToolingIcon />
    </template>
    <template  #heading>
      <img src="data:image/jpeg;base64,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" width="25" height="25"/>
      About Bitcoin
    </template>
  
    Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for the work done to verify transactions and can be purchased on several exchanges.

Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto.


It has since become the most well-known cryptocurrency in the world. Its popularity has inspired the development of many other cryptocurrencies. These competitors either attempt to replace it as a payment system or are used as utility or security tokens in other blockchains and emerging financial technologies.

Learn more about the cryptocurrency that started it all—the history behind it, how it works, how to get it
  
  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template  #heading>
      <img src="https://ih1.redbubble.net/image.964581270.6433/st,small,507x507-pad,600x600,f8f8f8.jpg" width="25" height="25"/> BTC History
    </template>

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