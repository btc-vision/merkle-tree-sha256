import { arrayify, BytesLike } from "@ethersproject/bytes";
import crypto from "crypto";
function _sha256(data: Uint8Array): string {
  const sha256 = crypto.createHash('sha256');
  sha256.update(data);

  return sha256.digest('hex');
}

export function sha256(data: BytesLike): string {
  return '0x' + _sha256(arrayify(data));
}
