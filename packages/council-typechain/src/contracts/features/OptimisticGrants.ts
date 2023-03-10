/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface OptimisticGrantsInterface extends utils.Interface {
  functions: {
    "claim(address)": FunctionFragment;
    "configureGrant(address,uint128,uint128)": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "grants(address)": FunctionFragment;
    "solvency()": FunctionFragment;
    "token()": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claim"
      | "claim(address)"
      | "configureGrant"
      | "configureGrant(address,uint128,uint128)"
      | "deposit"
      | "deposit(uint256)"
      | "grants"
      | "grants(address)"
      | "solvency"
      | "solvency()"
      | "token"
      | "token()"
      | "withdraw"
      | "withdraw(uint256,address)",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claim",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "claim(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "configureGrant",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "configureGrant(address,uint128,uint128)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "deposit(uint256)",
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "grants",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "grants(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: "solvency", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "solvency()",
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(functionFragment: "token()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(uint256,address)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claim(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureGrant",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureGrant(address,uint128,uint128)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deposit(uint256)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "grants", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "grants(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "solvency", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "solvency()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(uint256,address)",
    data: BytesLike,
  ): Result;

  events: {};
}

export interface OptimisticGrants extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OptimisticGrantsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claim(
      _destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "claim(address)"(
      _destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    configureGrant(
      _owner: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "configureGrant(address,uint128,uint128)"(
      _owner: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "deposit(uint256)"(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    grants(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; expiration: BigNumber }
    >;

    "grants(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; expiration: BigNumber }
    >;

    solvency(overrides?: CallOverrides): Promise<[BigNumber]>;

    "solvency()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "withdraw(uint256,address)"(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  claim(
    _destination: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "claim(address)"(
    _destination: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  configureGrant(
    _owner: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _expiration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "configureGrant(address,uint128,uint128)"(
    _owner: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _expiration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  deposit(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "deposit(uint256)"(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  grants(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; expiration: BigNumber }
  >;

  "grants(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; expiration: BigNumber }
  >;

  solvency(overrides?: CallOverrides): Promise<BigNumber>;

  "solvency()"(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  withdraw(
    _amount: PromiseOrValue<BigNumberish>,
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "withdraw(uint256,address)"(
    _amount: PromiseOrValue<BigNumberish>,
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    claim(
      _destination: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "claim(address)"(
      _destination: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    configureGrant(
      _owner: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "configureGrant(address,uint128,uint128)"(
      _owner: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "deposit(uint256)"(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    grants(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; expiration: BigNumber }
    >;

    "grants(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; expiration: BigNumber }
    >;

    solvency(overrides?: CallOverrides): Promise<BigNumber>;

    "solvency()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "withdraw(uint256,address)"(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    claim(
      _destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "claim(address)"(
      _destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    configureGrant(
      _owner: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "configureGrant(address,uint128,uint128)"(
      _owner: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "deposit(uint256)"(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    grants(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "grants(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    solvency(overrides?: CallOverrides): Promise<BigNumber>;

    "solvency()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "withdraw(uint256,address)"(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      _destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "claim(address)"(
      _destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    configureGrant(
      _owner: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "configureGrant(address,uint128,uint128)"(
      _owner: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "deposit(uint256)"(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    grants(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "grants(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    solvency(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "solvency()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256,address)"(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
