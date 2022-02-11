import { BigDecimal } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ADDRESS_LOCK = '0xffffffffffffffffffffffffffffffffffffffff'

export const FACTORY_ADDRESS = '0xd9bfe9979e9ca4b2fe84ba5d4cf963bbcb376974'

export const ETH_PRICING_POOLS = '0x9de8e8c5658262cf2dd79646ac96b383d027bb8c'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('4000')

// minimum liquidity for price to get tracked
export let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('13') // default is 2

export const WETH_ADDRESS = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'
export const DAI_ADDRESS = '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1'
export const USDC_ADDRESS = '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8'
export const USDT_ADDRESS = '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9'

export const KNC_ADDRESS = '0x0000000000000000000000000000000000000000'
export const KNC_NAME = 'Kyber Network'
export const KNC_SYMBOL = 'KNC'

export const KNCL_ADDRESS = '0x0000000000000000000000000000000000000000'
export const KNCL_NAME = 'Kyber Network Legacy'
export const KNCL_SYMBOL = 'KNCL'

export let FACTORY_BPS = BigDecimal.fromString('10000')

export let NETWORK = 'arbitrum-one'
