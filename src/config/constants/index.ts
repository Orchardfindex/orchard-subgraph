import { BigDecimal } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ADDRESS_LOCK = '0xffffffffffffffffffffffffffffffffffffffff'

export const FACTORY_ADDRESS = '0x9d4ffbf49cc21372c2115ae4c155a1e5c0aacf36'

export const ETH_PRICING_POOLS = '0x5d140cc47a97695390bcbc5b90468b00c6edbb1c'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0') // default is 2

export const WETH_ADDRESS = '0xb47e6a5f8b33b3f17603c83a0535a9dcd7e32681'
export const DAI_ADDRESS = '0x340eefa7154bf23e328f59e936568607841fe027'
export const USDC_ADDRESS = '0xB4bbd0250618917b3679578c58f6440a227c8c03'
export const USDT_ADDRESS = '0x41a56c30b881296859fb4db30eb9a639b473619b'

export const KNC_ADDRESS = '0x7596961744096d12efa3Cfa58d1d30edd82bd396'
export const KNC_NAME = 'Kyber Network'
export const KNC_SYMBOL = 'KNC'

export const KNCL_ADDRESS = '0x0000000000000000000000000000000000000000'
export const KNCL_NAME = 'Kyber Network Legacy'
export const KNCL_SYMBOL = 'KNCL'

export let FACTORY_BPS = BigDecimal.fromString('10000')

export let NETWORK = 'arbitrum-rinkeby'
