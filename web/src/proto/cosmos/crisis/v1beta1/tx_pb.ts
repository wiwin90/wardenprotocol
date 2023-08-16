// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file cosmos/crisis/v1beta1/tx.proto (package cosmos.crisis.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * MsgVerifyInvariant represents a message to verify a particular invariance.
 *
 * @generated from message cosmos.crisis.v1beta1.MsgVerifyInvariant
 */
export class MsgVerifyInvariant extends Message<MsgVerifyInvariant> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string invariant_module_name = 2;
   */
  invariantModuleName = "";

  /**
   * @generated from field: string invariant_route = 3;
   */
  invariantRoute = "";

  constructor(data?: PartialMessage<MsgVerifyInvariant>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.crisis.v1beta1.MsgVerifyInvariant";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "invariant_module_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "invariant_route", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVerifyInvariant {
    return new MsgVerifyInvariant().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVerifyInvariant {
    return new MsgVerifyInvariant().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVerifyInvariant {
    return new MsgVerifyInvariant().fromJsonString(jsonString, options);
  }

  static equals(a: MsgVerifyInvariant | PlainMessage<MsgVerifyInvariant> | undefined, b: MsgVerifyInvariant | PlainMessage<MsgVerifyInvariant> | undefined): boolean {
    return proto3.util.equals(MsgVerifyInvariant, a, b);
  }
}

/**
 * MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type.
 *
 * @generated from message cosmos.crisis.v1beta1.MsgVerifyInvariantResponse
 */
export class MsgVerifyInvariantResponse extends Message<MsgVerifyInvariantResponse> {
  constructor(data?: PartialMessage<MsgVerifyInvariantResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.crisis.v1beta1.MsgVerifyInvariantResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVerifyInvariantResponse {
    return new MsgVerifyInvariantResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVerifyInvariantResponse {
    return new MsgVerifyInvariantResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVerifyInvariantResponse {
    return new MsgVerifyInvariantResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgVerifyInvariantResponse | PlainMessage<MsgVerifyInvariantResponse> | undefined, b: MsgVerifyInvariantResponse | PlainMessage<MsgVerifyInvariantResponse> | undefined): boolean {
    return proto3.util.equals(MsgVerifyInvariantResponse, a, b);
  }
}
