import { defaultAbiCoder } from '@ethersproject/abi';
import { BytesLike, HexString, concat, compare } from './bytes';
import { sha256 } from "./sha256";

export type LeafHash<T> = (leaf: T) => HexString;
export type NodeHash = (left: BytesLike, right: BytesLike) => HexString;

export function standardLeafHash<T extends any[]>(types: string[], value: T): HexString {
  return sha256(sha256(defaultAbiCoder.encode(types, value)));
}

export function standardNodeHash(a: BytesLike, b: BytesLike): HexString {
  return sha256(concat([a, b].sort(compare)));
}
