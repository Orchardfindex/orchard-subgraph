import { BigDecimal } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ADDRESS_LOCK = '0xffffffffffffffffffffffffffffffffffffffff'

export const FACTORY_ADDRESS = '0x8A366547C188412c93F2c5bdc776c8f0745545a7'

export const ETH_PRICING_POOLS = '0x50d0b724a034940dc370294e2d6b379dae77f925'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('1')

// minimum liquidity for price to get tracked
export let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0') // default is 2

export const WRAPPED_NATIVE_ADDRESS = '0xd00ae08403b9bbb9124bb305c09058e32c39a48c'
export const DAI_ADDRESS = '0xe50c0f38a1890db49d64ac1c4a5b4fe2f02f819d'
export const USDC_ADDRESS = '0x5973774202e8b0ad563a69d502bb0e670e7d00dd'
export const USDT_ADDRESS = '0xbd1eeaf651aeb210106e1c1afb3bc41c388ee577'
export const WETH_ADDRESS = ''

export const KNC_ADDRESS = '0xCb76B1948F65132F2e52eD681FD26935c9E206F2'
export const KNC_NAME = 'NUS Money'
export const KNC_SYMBOL = 'NUSMoney'

export const KNCL_ADDRESS = '0x57BBDeeBeF0949a669E6BEdBa63b2EDd2fb9D6f7'
export const KNCL_NAME = 'SPROUT Index'
export const KNCL_SYMBOL = 'SPROUT'

export let FACTORY_BPS = BigDecimal.fromString('10000')

export let NETWORK = 'fuji'
