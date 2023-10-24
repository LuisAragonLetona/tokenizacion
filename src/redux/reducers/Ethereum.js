import {
    LOAD_WEB3_SUCCESS,
    LOAD_WEB3_FAIL,
    LOAD_BLOCKCHAIN_DATA_SUCCESS,
    LOAD_BLOCKCHAIN_DATA_FAIL,
    LOAD_TOKENMALL_CONTRACT_SUCCESS,
    LOAD_TOKENMALL_CONTRACT_FAIL,
    LOAD_NFT_TOTALSUPPLY_SUCCESS,
    LOAD_NFT_TOTALSUPPLY_FAIL,
    LOAD_TOKENMALL_NFTS_SUCCESS,
    LOAD_TOKENMALL_NFTS_FAIL
} from '../actions/Types'

const initialState = {
    web3: null,
    blockchain: null,
    tokenmall: null,
    totalSupply: null,
    nfts: null
}

export default function ethereum(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_BLOCKCHAIN_DATA_SUCCESS:
            return {
                ...state,
                blockchain: payload
            }
        case LOAD_TOKENMALL_CONTRACT_SUCCESS:
            return {
                ...state,
                tokenmall: payload
            }
        case LOAD_NFT_TOTALSUPPLY_SUCCESS:
            return {
                ...state,
                totalSupply: payload
            }
        case LOAD_TOKENMALL_NFTS_SUCCESS:
            return {
                ...state,
                nfts: payload
            }
        case LOAD_WEB3_SUCCESS:
            return {
                ...state,
                web3: payload
            }
        case LOAD_BLOCKCHAIN_DATA_FAIL:
            return {
                ...state,
                blockchain: null
            }
        case LOAD_TOKENMALL_CONTRACT_FAIL:
            return {
                ...state,
                tokenmall: null
            }
        case LOAD_NFT_TOTALSUPPLY_FAIL:
            return {
                ...state,
                totalSupply: null
            }
        case LOAD_TOKENMALL_NFTS_FAIL:
            return {
                ...state,
                nfts: null
            }
        case LOAD_WEB3_FAIL:
            return {
                ...state,
                web3: null
            }
        default:
            return state
    }
}