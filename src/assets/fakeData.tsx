import { assets } from "./assets";

const portifolio_items = [
  {
    name: 'BTC',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    price: '$37.800,000',
    estimate: '$130.000,00',
    return: '243,92%',
    invest: 'R$5.000,00',
    alocation: '40%',
    final_balance: 'R$3.076,92',
    risk: 0,
    url: 'https://coinmarketcap.com/pt-br/currencies/bitcoin/'
  },
  {
    name: 'ETH',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    price: '$2.100,00',
    estimate: '$14.000,00',
    return: '566,67%',
    invest: 'R$4.000,00',
    alocation: '30%',
    final_balance: 'R$3.076,92',
    risk: 0,
    url: 'https://coinmarketcap.com/pt-br/currencies/etherium/'
  },
  {
    name: 'BTC',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    price: '$37.800,000',
    estimate: '$100,00',
    return: '243,92%',
    invest: 'R$4.000,00',
    alocation: '40%',
    final_balance: 'R$3.076,92',
    risk: 0,
    url: 'https://coinmarketcap.com/pt-br/currencies/bitcoin/'
  },
  {
    name: 'DOT',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
    price: '$5,00',
    estimate: '$100,00',
    return: '1900,00%',
    invest: 'R$300,00',
    alocation: '3%',
    final_balance: 'R$3.076,92',
    risk: 0,
    url: 'https://coinmarketcap.com/pt-br/currencies/polkadot/'
  },
  {
    name: 'LINK',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png',
    price: '$13,00',
    estimate: '$100,00',
    return: '669,23%',
    invest: 'R$4.000,00',
    alocation: '3%',
    final_balance: 'R$3.076,92',
    risk: 0,
    url: 'https://coinmarketcap.com/pt-br/currencies/link/'
  },
  {
    name: 'ETH',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', price: '$2.100,00', estimate: '$100,00', return: '566,67%', invest: 'R$4.000,00', alocation: '30%', final_balance: 'R$13.756,61', risk: 0, url: 'https://coinmarketcap.com/pt-br/currencies/etherium/'
  },
  { name: 'ETH', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', price: '$2.100,00', estimate: '$100,00', return: '566,67%', invest: 'R$4.000,00', alocation: '30%',  final_balance: 'R$13.756,61',risk: 1, url: 'https://coinmarketcap.com/pt-br/currencies/etherium/' },
  { name: 'BTC', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', price: '$37.800,000', estimate: '$100,00', return: '566,67%', invest: 'R$4.000,00', alocation: '40%',  final_balance: 'R$3.076,92',risk: 1, url: 'https://coinmarketcap.com/pt-br/currencies/bitcoin/' },
  { name: 'ETH', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', price: '$2.100,00', estimate: '$100,00', return: '566,67%', invest: 'R$4.000,00', alocation: '30%',  final_balance: 'R$13.756,61',risk: 1, url: 'https://coinmarketcap.com/pt-br/currencies/etherium/' },
  { name: 'BTC', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', price: '$37.800,000', estimate: '$100,00', return: '566,67%', invest: 'R$4.000,00', alocation: '40%',  final_balance: 'R$3.076,92',risk: 1, url: 'https://coinmarketcap.com/pt-br/currencies/bitcoin/' },
  { name: 'ETH', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', price: '$2.100,00', estimate: '$100,00', return: '566,67%', invest: 'R$4.000,00', alocation: '30%',  final_balance: 'R$13.756,61',risk: 1, url: 'https://coinmarketcap.com/pt-br/currencies/etherium/' },
  { name: 'BTC', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', price: '$37.800,000', estimate: '$100,00', return: '566,67%', invest: 'R$4.000,00', alocation: '40%',  final_balance: 'R$3.076,92',risk: 2, url: 'https://coinmarketcap.com/pt-br/currencies/bitcoin/' },
  { name: 'ETH', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', price: '$2.100,00', estimate: '$100,00', return: '566,67%', invest: 'R$4.000,00', alocation: '30%',  final_balance: 'R$13.756,61',risk: 2, url: 'https://coinmarketcap.com/pt-br/currencies/etherium/' },
  { name: 'BTC', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', price: '$37.800,000', estimate: '$100,00', return: '566,67%', invest: 'R$4.000,00', alocation: '40%',  final_balance: 'R$3.076,92',risk: 2, url: 'https://coinmarketcap.com/pt-br/currencies/bitcoin/' },
  { name: 'ETH', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', price: '$2.100,00', estimate: '$100,00', return: '566,67%', invest: 'R$4.000,00', alocation: '30%',  final_balance: 'R$13.756,61',risk: 2, url: 'https://coinmarketcap.com/pt-br/currencies/etherium/' },
  { name: 'BTC', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', price: '$37.800,000', estimate: '$100,00', return: '566,67%', invest: 'R$4.000,00', alocation: '40%',  final_balance: 'R$3.076,92',risk: 2, url: 'https://coinmarketcap.com/pt-br/currencies/bitcoin/' },
  { name: 'ETH', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', price: '$2.100,00', estimate: '$100,00', return: '566,67%', invest: 'R$4.000,00', alocation: '30%',  final_balance: 'R$13.756,61',risk: 2, url: 'https://coinmarketcap.com/pt-br/currencies/etherium/' },
];

const highlights_items = [
  { name: 'Bitcoin', symbol: 'BTC', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', sparkline: assets.spkLine_down1, url: 'https://coinmarketcap.com/pt-br/currencies/bitcoin/' },
  { name: 'Ethereum', symbol: 'ETH', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', sparkline: assets.spkLine_down2, url: 'https://coinmarketcap.com/pt-br/currencies/ethereum/' },
  { name: 'Polkadot', symbol: 'DOT', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png', sparkline: assets.spkLine_up1, url: 'https://coinmarketcap.com/pt-br/currencies/polkadot-new/' },
  { name: 'Chainlink', symbol: 'LINK', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png', sparkline: assets.spkLine_up2, url: 'https://coinmarketcap.com/pt-br/currencies/chainlink/' },
  { name: 'Bitcoin', symbol: 'BTC', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', sparkline: assets.spkLine_down1, url: 'https://coinmarketcap.com/pt-br/currencies/bitcoin/' },
  { name: 'Ethereum', symbol: 'ETH', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', sparkline: assets.spkLine_down2, url: 'https://coinmarketcap.com/pt-br/currencies/ethereum/' },
  { name: 'Polkadot', symbol: 'DOT', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png', sparkline: assets.spkLine_up1, url: 'https://coinmarketcap.com/pt-br/currencies/polkadot-new/' },
  { name: 'Chainlink', symbol: 'LINK', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png', sparkline: assets.spkLine_up2, url: 'https://coinmarketcap.com/pt-br/currencies/chainlink/' },
];

const analysis_items = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    decr: 'Bitcoin é uma criptomoeda descentralizada e de código aberto e também a criptomoeda mais conhecida.',
    general: 'Bitcoin é a pioneira das criptomoedas descentralizadas, criada em 2008 por um autor anônimo ou grupo sob o pseudônimo Satoshi Nakamoto e lançada como software de código aberto em 2009. Sua proposta é ser uma moeda digital que permite transações diretas entre duas partes sem intermediários como bancos.',
    main_features: [
      'Descentralização: Funciona em uma rede peer-to-peer, sem uma entidade central controlando as transações.',
      'Escassez: Oferta limitada a 21 milhões de bitcoins.',
      'Imutabilidade: Transações registradas no blockchain são permanentes e irreversíveis.',
      'Segurança: Utiliza o algoritmo de consenso Proof-of-Work (PoW) para garantir a robustez da rede contra ataques.'
    ],
    tech_aspects: [
      'Blockchain: Livro-razão público que registra todas as transações.',
      'Escassez: Oferta limitada a 21 milhões de bitcoins.',
      'Imutabilidade: Transações registradas no blockchain são permanentes e irreversíveis.',
      'Segurança: Utiliza o algoritmo de consenso Proof-of-Work (PoW) para garantir a robustez da rede contra ataques.'
    ],
    predictions: {
      short: {
        year: 2025,
        price: 'Entre $100,000 e $150,000 USD (R$ 480,000 e R$ 720,000)',
        reasons: 'Adoção institucional crescente, regulação favorável e escassez decorrente do halving.'
      },
      long: {
        year: 2030,
        price: 'Entre $200,000 e $500,000 USD (R$ 960,000 e R$ 2,400,000)',
        reasons: 'Crescimento da aceitação global como reserva de valor, melhorias em tecnologias de segunda camada como a Lightning Network e maior integração financeira global.'
      }
    },
    hist_max: 'Aproximadamente $69,000 USD (R$ 331,200).'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    decr: 'Ethereum é uma criptomoeda descentralizada e de código aberto e também a segunda criptomoeda mais conhecida.',
    general: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis iaculis, vulputate diam sed, elementum eros. Curabitur lacus leo, laoreet sit amet laoreet sed, eleifend non erat. In dignissim diam ante, non tincidunt mauris efficitur at. ',
    main_features: [
      'Blockchain: Livro-razão público que registra todas as transações.',
      'Imutabilidade: Transações registradas no blockchain são permanentes e irreversíveis.',
      'Segurança: Utiliza o algoritmo de consenso Proof-of-Work (PoW) para garantir a robustez da rede contra ataques.'
    ],
    tech_aspects: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis iaculis, vulputate diam sed, elementum eros. Curabitur lacus leo, laoreet sit amet laoreet sed, eleifend non erat.',
    ],
    predictions: {
      short: {
        year: 2026,
        price: 'Entre $100,000 e $150,000 USD (R$ 480,000 e R$ 720,000)',
        reasons: 'Adoção institucional crescente, regulação favorável e escassez decorrente do halving.'
      },
      long: {
        year: 2031,
        price: 'Entre $200,000 e $500,000 USD (R$ 960,000 e R$ 2,400,000)',
        reasons: 'Crescimento da aceitação global como reserva de valor, melhorias em tecnologias de segunda camada como a Lightning Network e maior integração financeira global.'
      }
    },
    hist_max: 'Aproximadamente $69,000 USD (R$ 331,200).'
  }
]

const reports_items = [
  {
    date: new Date('04/15/2024'),
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis iaculis, vulputate diam sed, elementum eros. Curabitur lacus leo, laoreet sit amet laoreet sed, eleifend non erat. In dignissim diam ante, non tincidunt mauris efficitur at.',
    file: 'relatorio.2024.pdf'
  },
  {
    date: new Date('05/15/2024'),
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis iaculis, vulputate diam sed, elementum eros. Curabitur lacus leo, laoreet sit amet laoreet sed, eleifend non erat. In dignissim diam ante, non tincidunt mauris efficitur at.',
    file: 'relatorio.2024.pdf'
  },
  {
    date: new Date('06/18/2024'),
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis iaculis, vulputate diam sed, elementum eros. Curabitur lacus leo, laoreet sit amet laoreet sed, eleifend non erat. In dignissim diam ante, non tincidunt mauris efficitur at.',
    file: 'relatorio.2024.pdf'
  },
  {
    date: new Date('07/19/2024'),
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis iaculis, vulputate diam sed, elementum eros. Curabitur lacus leo, laoreet sit amet laoreet sed, eleifend non erat. In dignissim diam ante, non tincidunt mauris efficitur at.',
    file: 'relatorio.2024.pdf'
  },
];

export const fakedata = {
  portifolio_items,
  highlights_items,
  analysis_items,
  reports_items
}