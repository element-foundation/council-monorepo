/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  NonVotingVault,
  NonVotingVaultInterface,
} from "../../../../contracts/vaults/NonvotingVault.sol/NonVotingVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "contract ILockingVault",
        name: "_lockingVault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "deauthorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "isAuthorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockingVault",
    outputs: [
      {
        internalType: "contract ILockingVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620012b2380380620012b2833981016040819052620000349162000580565b600080546001600160a01b0319163317905562000051826200012d565b600280546001600160a01b0319166001600160a01b03831690811790915560408051637e062a3560e11b815290516000929163fc0c546a91600480830192602092919082900301818787803b158015620000aa57600080fd5b505af1158015620000bf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e59190620005e7565b606081901b6001600160601b03191660805260025490915062000124906001600160a01b038084169116600019620001a2602090811b6200055317901c565b505050620006be565b6000546001600160a01b03163314620001805760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b60448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b801580620002305750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015620001f357600080fd5b505afa15801562000208573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200022e919062000606565b155b620002a45760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840162000177565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620002fc9185916200030116565b505050565b60006200035d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316620003df60201b6200074d179092919060201c565b805190915015620002fc57808060200190518101906200037e9190620005be565b620002fc5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840162000177565b6060620003f08484600085620003f8565b949350505050565b6060824710156200045b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840162000177565b600080866001600160a01b031685876040516200047991906200061f565b60006040518083038185875af1925050503d8060008114620004b8576040519150601f19603f3d011682016040523d82523d6000602084013e620004bd565b606091505b509092509050620004d187838387620004dc565b979650505050505050565b606083156200054d57825162000545576001600160a01b0385163b620005455760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640162000177565b5081620003f0565b620003f08383815115620005645781518083602001fd5b8060405162461bcd60e51b81526004016200017791906200063d565b6000806040838503121562000593578182fd5b8251620005a081620006a5565b6020840151909250620005b381620006a5565b809150509250929050565b600060208284031215620005d0578081fd5b81518015158114620005e0578182fd5b9392505050565b600060208284031215620005f9578081fd5b8151620005e081620006a5565b60006020828403121562000618578081fd5b5051919050565b600082516200063381846020870162000672565b9190910192915050565b60006020825282518060208401526200065e81604085016020870162000672565b601f01601f19169190910160400192915050565b60005b838110156200068f57818101518382015260200162000675565b838111156200069f576000848401525b50505050565b6001600160a01b0381168114620006bb57600080fd5b50565b60805160601c610bce620006e46000396000818161019701526102d60152610bce6000f3fe608060405234801561001057600080fd5b50600436106100a25760003560e01c8063b6a5d7de11610076578063d2a043451161005b578063d2a0434514610172578063fc0c546a14610192578063fe9fbb80146101b9576100a2565b8063b6a5d7de1461012c578063b91816111461013f576100a2565b8062f714ce146100a757806313af4035146100bc57806327c97fa5146100cf5780638da5cb5b146100e2575b600080fd5b6100ba6100b5366004610ad0565b6101cc565b005b6100ba6100ca366004610a77565b610303565b6100ba6100dd366004610a77565b6103b1565b6000546101029073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100ba61013a366004610a77565b610464565b61016261014d366004610a77565b60016020526000908152604090205460ff1681565b6040519015158152602001610123565b6002546101029073ffffffffffffffffffffffffffffffffffffffff1681565b6101027f000000000000000000000000000000000000000000000000000000000000000081565b6101626101c7366004610a77565b610524565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102385760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064015b60405180910390fd5b6002546040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690632e1a7d4d90602401600060405180830381600087803b1580156102a457600080fd5b505af11580156102b8573d6000803e3d6000fd5b506102ff92505073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690508284610764565b5050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461036a5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161022f565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104185760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161022f565b73ffffffffffffffffffffffffffffffffffffffff16600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104cb5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161022f565b6105218173ffffffffffffffffffffffffffffffffffffffff16600090815260016020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169091179055565b50565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205460ff165b919050565b80158061060257506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156105c857600080fd5b505afa1580156105dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106009190610ab8565b155b6106745760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161022f565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107489084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526107ba565b505050565b606061075c84846000856108ac565b949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107489084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016106c6565b600061081c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661074d9092919063ffffffff16565b805190915015610748578080602001905181019061083a9190610a98565b6107485760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161022f565b6060824710156109245760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161022f565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161094d9190610afb565b60006040518083038185875af1925050503d806000811461098a576040519150601f19603f3d011682016040523d82523d6000602084013e61098f565b606091505b50915091506109a0878383876109ab565b979650505050505050565b60608315610a24578251610a1d5773ffffffffffffffffffffffffffffffffffffffff85163b610a1d5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161022f565b508161075c565b61075c8383815115610a395781518083602001fd5b8060405162461bcd60e51b815260040161022f9190610b17565b803573ffffffffffffffffffffffffffffffffffffffff8116811461054e57600080fd5b600060208284031215610a88578081fd5b610a9182610a53565b9392505050565b600060208284031215610aa9578081fd5b81518015158114610a91578182fd5b600060208284031215610ac9578081fd5b5051919050565b60008060408385031215610ae2578081fd5b82359150610af260208401610a53565b90509250929050565b60008251610b0d818460208701610b68565b9190910192915050565b6000602082528251806020840152610b36816040850160208701610b68565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60005b83811015610b83578181015183820152602001610b6b565b83811115610b92576000848401525b5050505056fea2646970667358221220c1e9240256cb1b9715ac2ed4920f2cd4bf66ea59786a4d41835cae3875b1f93a64736f6c63430008030033";

type NonVotingVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NonVotingVaultConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NonVotingVault__factory extends ContractFactory {
  constructor(...args: NonVotingVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _lockingVault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<NonVotingVault> {
    return super.deploy(
      _owner,
      _lockingVault,
      overrides || {},
    ) as Promise<NonVotingVault>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _lockingVault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, _lockingVault, overrides || {});
  }
  override attach(address: string): NonVotingVault {
    return super.attach(address) as NonVotingVault;
  }
  override connect(signer: Signer): NonVotingVault__factory {
    return super.connect(signer) as NonVotingVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NonVotingVaultInterface {
    return new utils.Interface(_abi) as NonVotingVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): NonVotingVault {
    return new Contract(address, _abi, signerOrProvider) as NonVotingVault;
  }
}