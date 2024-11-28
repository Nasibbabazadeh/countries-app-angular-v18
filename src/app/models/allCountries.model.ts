
type TName = {
    common: string
    official: string
    TNativeName: TEng
}
type TEng = {
    official: string
    common: string
}
type TSHP = {
    name: string
    symbol: string
}

type TIid = {
    root: string
    suffixies: string[]
}
type TFlag = {
    png: string
    svg: string
}

export interface IAllCountries {
    name: TName
    tld: string[]
    cca2: string
    ccn3: string
    cca3: string
    independent: boolean
    status: string
    unMember: boolean
    currencies: TSHP
    iid: TIid
    capital: string[]
    altSpellings: string[]
    region: string
    languages: any
    translations: any
    latIng: number[]
    landlocked: boolean
    area: number
    demonyms: any
    population: number
    continents: string[]
    flags: TFlag
}