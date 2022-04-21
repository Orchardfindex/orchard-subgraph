import { BigDecimal } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ADDRESS_LOCK = '0xffffffffffffffffffffffffffffffffffffffff'

export const FACTORY_ADDRESS = '0xB61271d05D13A29e6379E18D533f6c1B110d46Db'

export const ETH_PRICING_POOLS = '0x967a889dbf977dd9c7b79bf422f5fa50294e56fd|0x2235d9ea40ab77f6ec88ae71634781e1b2bcc9d9|0x209d9e4cd05ff6f6aa6abe65c92ef76df36001a6'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('1')

// minimum liquidity for price to get tracked
export let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0') // default is 2

export const WRAPPED_NATIVE_ADDRESS = '0x9c3c9283d3e44854697cd22d3faa240cfb032889'
export const DAI_ADDRESS = '0x5e2de02472ac02736b43054f095837725a5870ef'
export const USDC_ADDRESS = '0x2cec76b26a8d96bf3072d34a01bb3a4ede7c06be'
export const USDT_ADDRESS = '0x064b91bda6d178dfe03835de9450bfe78201c43f'
export const WETH_ADDRESS = ''

export const KNC_ADDRESS = '0xfd1f9381cb641dc76fe8087dbcf8ea84a2c77cbe'
export const KNC_NAME = 'Kyber Network'
export const KNC_SYMBOL = 'KNC'

export const KNCL_ADDRESS = '0xdd974d5c2e2928dea5f71b9825b8b646686bd200'
export const KNCL_NAME = 'Kyber Network Legacy'
export const KNCL_SYMBOL = 'KNCL'

export let FACTORY_BPS = BigDecimal.fromString('10000')

export let NETWORK = 'mumbai'
