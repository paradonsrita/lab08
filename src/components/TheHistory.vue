<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";

</script>

<template>
  
  
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template  #heading>
        <img src="https://ih1.redbubble.net/image.964581270.6433/st,small,507x507-pad,600x600,f8f8f8.jpg" width="25" height="25"/> BTC History
      </template>
  
      The history of bitcoin started with its invention and implementation by Satoshi Nakamoto, who integrated many existing ideas from the cryptography community
      <br><a href="https://en.wikipedia.org/wiki/History_of_bitcoin" 
      target="_blank" rel="noopener" style="font-size:x-large">source</a>

    </WelcomeItem>
  
    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading> <img src="https://ae01.alicdn.com/kf/HTB1RTrloInI8KJjSsziq6z8QpXaQ/4000-4x4-ethereum-cryptocurrency-FS17.jpg" width="25" height="25"/> ETH History</template>
  
      Ethereum was conceived in 2013 by programmer Vitalik Buterin.[5] Additional founders of Ethereum included Gavin Wood, Charles Hoskinson, Anthony Di Iorio and Joseph Lubin.[6] In 2014, development work began and was crowdfunded, and the network went live on 30 July 2015.[7] Ethereum allows anyone to deploy permanent and immutable decentralized applications onto it, with which users can interact.[8] Decentralized finance (DeFi) applications provide a broad array of financial services without the need for typical financial intermediaries like brokerages, exchanges, or banks, such as allowing cryptocurrency users to borrow against their holdings or lend them out for interest.[9][10] Ethereum also allows users to create and exchange NFTs, which are unique tokens representing ownership of an associated asset or privilege, as recognized by any number of institutions. Additionally, many other cryptocurrencies utilize the ERC-20 token standard on top of the Ethereum blockchain and have utilized the platform for initial coin offerings.
      
      <br><a href="https://en.wikipedia.org/wiki/Ethereum" 
      target="_blank" rel="noopener" style="font-size:x-large">source</a>
    </WelcomeItem>
  
    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading> <img src="https://i0.wp.com/cryptoshopper.store/wp-content/uploads/2019/03/45752-12.jpg?fit=1200%2C1200&ssl=1" width="25" height="25"/> XRP History</template>
  
      In 2011, three engineers—David Schwartz, Jed McCaleb, and Arthur Britto—began developing the XRP Ledger (XRPL). Fascinated by Bitcoin, they set out to create a better version that improved upon its limitations—with the goal of creating a digital asset that was more sustainable and built specifically for payments.
  The XRP Ledger first launched in June 2012. Shortly thereafter, they were joined by Chris Larsen, and the group started the Company NewCoin in September 2012 (quickly renamed OpenCoin and now named Ripple).
  
  The XRPL founders gifted 80 billion XRP, the platform’s native currency, to the company. Ripple has since put the majority in escrow.
  <br><a href="https://xrpl.org/history.html" 
  target="_blank" rel="noopener" style="font-size:x-large">source</a>  
    
    </WelcomeItem>
  


  </template>