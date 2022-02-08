import { BigDecimal } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ADDRESS_LOCK = '0xffffffffffffffffffffffffffffffffffffffff'

export const FACTORY_ADDRESS = '0x570797C68C6D060503b2CfcBe5780205057010D5'

export const ETH_PRICING_POOLS = '0x8d040883136957c264c4cf51a8ea9b8dfb19eee7'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0') // default is 2

export const WETH_ADDRESS = '0x93D51226c4C3c265ca0c2F6420fa4c6A9151c09e'
export const DAI_ADDRESS = '0x340eefA7154BF23e328F59E936568607841FE027'
export const USDC_ADDRESS = '0xB4BbD0250618917b3679578C58f6440A227C8c03'
export const USDT_ADDRESS = '0x41a56c30b881296859FB4db30Eb9a639B473619B'

export const KNC_ADDRESS = '0x7596961744096D12eFa3CfA58d1D30EDd82BD396'
export const KNC_NAME = 'Kyber Network'
export const KNC_SYMBOL = 'KNC'

export const KNCL_ADDRESS = '0x0000000000000000000000000000000000000000'
export const KNCL_NAME = 'Kyber Network Legacy'
export const KNCL_SYMBOL = 'KNCL'

export let FACTORY_BPS = BigDecimal.fromString('10000')

export let NETWORK = 'arbitrum-rinkeby'
