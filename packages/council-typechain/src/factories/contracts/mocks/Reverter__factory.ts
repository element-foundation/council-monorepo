/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Reverter,
  ReverterInterface,
} from "../../../contracts/mocks/Reverter";

const _abi = [
  {
    inputs: [],
    name: "fail",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50606b80601d6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063a9cc471814602d575b600080fd5b60336028565b00fea2646970667358221220e86cd5c1c53d8c524aeed297debfcea6c0bc28b83b76d7703c1f3c78aa6cd71a64736f6c63430008030033";

type ReverterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReverterConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Reverter__factory extends ContractFactory {
  constructor(...args: ReverterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<Reverter> {
    return super.deploy(overrides || {}) as Promise<Reverter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Reverter {
    return super.attach(address) as Reverter;
  }
  override connect(signer: Signer): Reverter__factory {
    return super.connect(signer) as Reverter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReverterInterface {
    return new utils.Interface(_abi) as ReverterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): Reverter {
    return new Contract(address, _abi, signerOrProvider) as Reverter;
  }
}
