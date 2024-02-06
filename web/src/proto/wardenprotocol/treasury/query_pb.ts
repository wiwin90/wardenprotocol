// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file wardenprotocol/treasury/query.proto (package wardenprotocol.treasury, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Key, KeyRequest, KeyRequestStatus } from "./key_pb.js";
import { WalletType } from "./wallet_pb.js";
import { SignRequest, SignRequestStatus, SignTransactionRequest } from "./signature_pb.js";

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message wardenprotocol.treasury.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message wardenprotocol.treasury.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: wardenprotocol.treasury.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QueryKeyRequestsRequest
 */
export class QueryKeyRequestsRequest extends Message<QueryKeyRequestsRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  /**
   * @generated from field: string keychain_addr = 2;
   */
  keychainAddr = "";

  /**
   * Optional
   *
   * @generated from field: wardenprotocol.treasury.KeyRequestStatus status = 3;
   */
  status = KeyRequestStatus.UNSPECIFIED;

  /**
   * @generated from field: string space_addr = 4;
   */
  spaceAddr = "";

  constructor(data?: PartialMessage<QueryKeyRequestsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QueryKeyRequestsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
    { no: 2, name: "keychain_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(KeyRequestStatus) },
    { no: 4, name: "space_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryKeyRequestsRequest {
    return new QueryKeyRequestsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryKeyRequestsRequest {
    return new QueryKeyRequestsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryKeyRequestsRequest {
    return new QueryKeyRequestsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryKeyRequestsRequest | PlainMessage<QueryKeyRequestsRequest> | undefined, b: QueryKeyRequestsRequest | PlainMessage<QueryKeyRequestsRequest> | undefined): boolean {
    return proto3.util.equals(QueryKeyRequestsRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QueryKeyRequestsResponse
 */
export class QueryKeyRequestsResponse extends Message<QueryKeyRequestsResponse> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 1;
   */
  pagination?: PageResponse;

  /**
   * @generated from field: repeated wardenprotocol.treasury.KeyRequest key_requests = 2;
   */
  keyRequests: KeyRequest[] = [];

  constructor(data?: PartialMessage<QueryKeyRequestsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QueryKeyRequestsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageResponse },
    { no: 2, name: "key_requests", kind: "message", T: KeyRequest, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryKeyRequestsResponse {
    return new QueryKeyRequestsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryKeyRequestsResponse {
    return new QueryKeyRequestsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryKeyRequestsResponse {
    return new QueryKeyRequestsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryKeyRequestsResponse | PlainMessage<QueryKeyRequestsResponse> | undefined, b: QueryKeyRequestsResponse | PlainMessage<QueryKeyRequestsResponse> | undefined): boolean {
    return proto3.util.equals(QueryKeyRequestsResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QueryKeyRequestByIdRequest
 */
export class QueryKeyRequestByIdRequest extends Message<QueryKeyRequestByIdRequest> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<QueryKeyRequestByIdRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QueryKeyRequestByIdRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryKeyRequestByIdRequest {
    return new QueryKeyRequestByIdRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryKeyRequestByIdRequest {
    return new QueryKeyRequestByIdRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryKeyRequestByIdRequest {
    return new QueryKeyRequestByIdRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryKeyRequestByIdRequest | PlainMessage<QueryKeyRequestByIdRequest> | undefined, b: QueryKeyRequestByIdRequest | PlainMessage<QueryKeyRequestByIdRequest> | undefined): boolean {
    return proto3.util.equals(QueryKeyRequestByIdRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QueryKeyRequestByIdResponse
 */
export class QueryKeyRequestByIdResponse extends Message<QueryKeyRequestByIdResponse> {
  /**
   * @generated from field: wardenprotocol.treasury.KeyRequest key_request = 1;
   */
  keyRequest?: KeyRequest;

  constructor(data?: PartialMessage<QueryKeyRequestByIdResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QueryKeyRequestByIdResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key_request", kind: "message", T: KeyRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryKeyRequestByIdResponse {
    return new QueryKeyRequestByIdResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryKeyRequestByIdResponse {
    return new QueryKeyRequestByIdResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryKeyRequestByIdResponse {
    return new QueryKeyRequestByIdResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryKeyRequestByIdResponse | PlainMessage<QueryKeyRequestByIdResponse> | undefined, b: QueryKeyRequestByIdResponse | PlainMessage<QueryKeyRequestByIdResponse> | undefined): boolean {
    return proto3.util.equals(QueryKeyRequestByIdResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QueryKeysRequest
 */
export class QueryKeysRequest extends Message<QueryKeysRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  /**
   * Optional
   *
   * @generated from field: string space_addr = 2;
   */
  spaceAddr = "";

  /**
   * Optional
   *
   * @generated from field: wardenprotocol.treasury.WalletType type = 3;
   */
  type = WalletType.UNSPECIFIED;

  /**
   * Optional
   *
   * @generated from field: uint64 key_id = 4;
   */
  keyId = protoInt64.zero;

  constructor(data?: PartialMessage<QueryKeysRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QueryKeysRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
    { no: 2, name: "space_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(WalletType) },
    { no: 4, name: "key_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryKeysRequest {
    return new QueryKeysRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryKeysRequest {
    return new QueryKeysRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryKeysRequest {
    return new QueryKeysRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryKeysRequest | PlainMessage<QueryKeysRequest> | undefined, b: QueryKeysRequest | PlainMessage<QueryKeysRequest> | undefined): boolean {
    return proto3.util.equals(QueryKeysRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QueryKeysResponse
 */
export class QueryKeysResponse extends Message<QueryKeysResponse> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 1;
   */
  pagination?: PageResponse;

  /**
   * @generated from field: repeated wardenprotocol.treasury.KeyResponse keys = 2;
   */
  keys: KeyResponse[] = [];

  constructor(data?: PartialMessage<QueryKeysResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QueryKeysResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageResponse },
    { no: 2, name: "keys", kind: "message", T: KeyResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryKeysResponse {
    return new QueryKeysResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryKeysResponse {
    return new QueryKeysResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryKeysResponse {
    return new QueryKeysResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryKeysResponse | PlainMessage<QueryKeysResponse> | undefined, b: QueryKeysResponse | PlainMessage<QueryKeysResponse> | undefined): boolean {
    return proto3.util.equals(QueryKeysResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.KeyResponse
 */
export class KeyResponse extends Message<KeyResponse> {
  /**
   * @generated from field: wardenprotocol.treasury.Key key = 1;
   */
  key?: Key;

  /**
   * @generated from field: repeated wardenprotocol.treasury.WalletKeyResponse wallets = 2;
   */
  wallets: WalletKeyResponse[] = [];

  constructor(data?: PartialMessage<KeyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.KeyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "message", T: Key },
    { no: 2, name: "wallets", kind: "message", T: WalletKeyResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KeyResponse {
    return new KeyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KeyResponse {
    return new KeyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KeyResponse {
    return new KeyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: KeyResponse | PlainMessage<KeyResponse> | undefined, b: KeyResponse | PlainMessage<KeyResponse> | undefined): boolean {
    return proto3.util.equals(KeyResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.WalletKeyResponse
 */
export class WalletKeyResponse extends Message<WalletKeyResponse> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: wardenprotocol.treasury.WalletType type = 2;
   */
  type = WalletType.UNSPECIFIED;

  constructor(data?: PartialMessage<WalletKeyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.WalletKeyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(WalletType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WalletKeyResponse {
    return new WalletKeyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WalletKeyResponse {
    return new WalletKeyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WalletKeyResponse {
    return new WalletKeyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: WalletKeyResponse | PlainMessage<WalletKeyResponse> | undefined, b: WalletKeyResponse | PlainMessage<WalletKeyResponse> | undefined): boolean {
    return proto3.util.equals(WalletKeyResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QuerySignatureRequestsRequest
 */
export class QuerySignatureRequestsRequest extends Message<QuerySignatureRequestsRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  /**
   * @generated from field: string keychain_addr = 2;
   */
  keychainAddr = "";

  /**
   * Optional
   *
   * @generated from field: wardenprotocol.treasury.SignRequestStatus status = 3;
   */
  status = SignRequestStatus.UNSPECIFIED;

  constructor(data?: PartialMessage<QuerySignatureRequestsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QuerySignatureRequestsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
    { no: 2, name: "keychain_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(SignRequestStatus) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySignatureRequestsRequest {
    return new QuerySignatureRequestsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySignatureRequestsRequest {
    return new QuerySignatureRequestsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySignatureRequestsRequest {
    return new QuerySignatureRequestsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySignatureRequestsRequest | PlainMessage<QuerySignatureRequestsRequest> | undefined, b: QuerySignatureRequestsRequest | PlainMessage<QuerySignatureRequestsRequest> | undefined): boolean {
    return proto3.util.equals(QuerySignatureRequestsRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QuerySignatureRequestsResponse
 */
export class QuerySignatureRequestsResponse extends Message<QuerySignatureRequestsResponse> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 1;
   */
  pagination?: PageResponse;

  /**
   * @generated from field: repeated wardenprotocol.treasury.SignRequest sign_requests = 2;
   */
  signRequests: SignRequest[] = [];

  constructor(data?: PartialMessage<QuerySignatureRequestsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QuerySignatureRequestsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageResponse },
    { no: 2, name: "sign_requests", kind: "message", T: SignRequest, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySignatureRequestsResponse {
    return new QuerySignatureRequestsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySignatureRequestsResponse {
    return new QuerySignatureRequestsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySignatureRequestsResponse {
    return new QuerySignatureRequestsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySignatureRequestsResponse | PlainMessage<QuerySignatureRequestsResponse> | undefined, b: QuerySignatureRequestsResponse | PlainMessage<QuerySignatureRequestsResponse> | undefined): boolean {
    return proto3.util.equals(QuerySignatureRequestsResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QuerySignatureRequestByIdRequest
 */
export class QuerySignatureRequestByIdRequest extends Message<QuerySignatureRequestByIdRequest> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<QuerySignatureRequestByIdRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QuerySignatureRequestByIdRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySignatureRequestByIdRequest {
    return new QuerySignatureRequestByIdRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySignatureRequestByIdRequest {
    return new QuerySignatureRequestByIdRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySignatureRequestByIdRequest {
    return new QuerySignatureRequestByIdRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySignatureRequestByIdRequest | PlainMessage<QuerySignatureRequestByIdRequest> | undefined, b: QuerySignatureRequestByIdRequest | PlainMessage<QuerySignatureRequestByIdRequest> | undefined): boolean {
    return proto3.util.equals(QuerySignatureRequestByIdRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QuerySignatureRequestByIdResponse
 */
export class QuerySignatureRequestByIdResponse extends Message<QuerySignatureRequestByIdResponse> {
  /**
   * @generated from field: wardenprotocol.treasury.SignRequest sign_request = 1;
   */
  signRequest?: SignRequest;

  constructor(data?: PartialMessage<QuerySignatureRequestByIdResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QuerySignatureRequestByIdResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sign_request", kind: "message", T: SignRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySignatureRequestByIdResponse {
    return new QuerySignatureRequestByIdResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySignatureRequestByIdResponse {
    return new QuerySignatureRequestByIdResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySignatureRequestByIdResponse {
    return new QuerySignatureRequestByIdResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySignatureRequestByIdResponse | PlainMessage<QuerySignatureRequestByIdResponse> | undefined, b: QuerySignatureRequestByIdResponse | PlainMessage<QuerySignatureRequestByIdResponse> | undefined): boolean {
    return proto3.util.equals(QuerySignatureRequestByIdResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QuerySignTransactionRequestsRequest
 */
export class QuerySignTransactionRequestsRequest extends Message<QuerySignTransactionRequestsRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  /**
   * @generated from field: wardenprotocol.treasury.WalletType wallet_type = 2;
   */
  walletType = WalletType.UNSPECIFIED;

  /**
   * @generated from field: uint64 key_id = 3;
   */
  keyId = protoInt64.zero;

  /**
   * Optional
   *
   * @generated from field: wardenprotocol.treasury.SignRequestStatus status = 4;
   */
  status = SignRequestStatus.UNSPECIFIED;

  constructor(data?: PartialMessage<QuerySignTransactionRequestsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QuerySignTransactionRequestsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
    { no: 2, name: "wallet_type", kind: "enum", T: proto3.getEnumType(WalletType) },
    { no: 3, name: "key_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(SignRequestStatus) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySignTransactionRequestsRequest {
    return new QuerySignTransactionRequestsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySignTransactionRequestsRequest {
    return new QuerySignTransactionRequestsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySignTransactionRequestsRequest {
    return new QuerySignTransactionRequestsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySignTransactionRequestsRequest | PlainMessage<QuerySignTransactionRequestsRequest> | undefined, b: QuerySignTransactionRequestsRequest | PlainMessage<QuerySignTransactionRequestsRequest> | undefined): boolean {
    return proto3.util.equals(QuerySignTransactionRequestsRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.SignTransactionRequestResponse
 */
export class SignTransactionRequestResponse extends Message<SignTransactionRequestResponse> {
  /**
   * @generated from field: wardenprotocol.treasury.SignTransactionRequest sign_transaction_request = 1;
   */
  signTransactionRequest?: SignTransactionRequest;

  /**
   * @generated from field: wardenprotocol.treasury.SignRequest sign_request = 2;
   */
  signRequest?: SignRequest;

  constructor(data?: PartialMessage<SignTransactionRequestResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.SignTransactionRequestResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sign_transaction_request", kind: "message", T: SignTransactionRequest },
    { no: 2, name: "sign_request", kind: "message", T: SignRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignTransactionRequestResponse {
    return new SignTransactionRequestResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignTransactionRequestResponse {
    return new SignTransactionRequestResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignTransactionRequestResponse {
    return new SignTransactionRequestResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SignTransactionRequestResponse | PlainMessage<SignTransactionRequestResponse> | undefined, b: SignTransactionRequestResponse | PlainMessage<SignTransactionRequestResponse> | undefined): boolean {
    return proto3.util.equals(SignTransactionRequestResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QuerySignTransactionRequestsResponse
 */
export class QuerySignTransactionRequestsResponse extends Message<QuerySignTransactionRequestsResponse> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 1;
   */
  pagination?: PageResponse;

  /**
   * @generated from field: repeated wardenprotocol.treasury.SignTransactionRequestResponse sign_transaction_requests = 2;
   */
  signTransactionRequests: SignTransactionRequestResponse[] = [];

  constructor(data?: PartialMessage<QuerySignTransactionRequestsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QuerySignTransactionRequestsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageResponse },
    { no: 2, name: "sign_transaction_requests", kind: "message", T: SignTransactionRequestResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySignTransactionRequestsResponse {
    return new QuerySignTransactionRequestsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySignTransactionRequestsResponse {
    return new QuerySignTransactionRequestsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySignTransactionRequestsResponse {
    return new QuerySignTransactionRequestsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySignTransactionRequestsResponse | PlainMessage<QuerySignTransactionRequestsResponse> | undefined, b: QuerySignTransactionRequestsResponse | PlainMessage<QuerySignTransactionRequestsResponse> | undefined): boolean {
    return proto3.util.equals(QuerySignTransactionRequestsResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QuerySignTransactionRequestByIdRequest
 */
export class QuerySignTransactionRequestByIdRequest extends Message<QuerySignTransactionRequestByIdRequest> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<QuerySignTransactionRequestByIdRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QuerySignTransactionRequestByIdRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySignTransactionRequestByIdRequest {
    return new QuerySignTransactionRequestByIdRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySignTransactionRequestByIdRequest {
    return new QuerySignTransactionRequestByIdRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySignTransactionRequestByIdRequest {
    return new QuerySignTransactionRequestByIdRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySignTransactionRequestByIdRequest | PlainMessage<QuerySignTransactionRequestByIdRequest> | undefined, b: QuerySignTransactionRequestByIdRequest | PlainMessage<QuerySignTransactionRequestByIdRequest> | undefined): boolean {
    return proto3.util.equals(QuerySignTransactionRequestByIdRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.QuerySignTransactionRequestByIdResponse
 */
export class QuerySignTransactionRequestByIdResponse extends Message<QuerySignTransactionRequestByIdResponse> {
  /**
   * @generated from field: wardenprotocol.treasury.SignTransactionRequest sign_transaction_request = 1;
   */
  signTransactionRequest?: SignTransactionRequest;

  constructor(data?: PartialMessage<QuerySignTransactionRequestByIdResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.QuerySignTransactionRequestByIdResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sign_transaction_request", kind: "message", T: SignTransactionRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySignTransactionRequestByIdResponse {
    return new QuerySignTransactionRequestByIdResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySignTransactionRequestByIdResponse {
    return new QuerySignTransactionRequestByIdResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySignTransactionRequestByIdResponse {
    return new QuerySignTransactionRequestByIdResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySignTransactionRequestByIdResponse | PlainMessage<QuerySignTransactionRequestByIdResponse> | undefined, b: QuerySignTransactionRequestByIdResponse | PlainMessage<QuerySignTransactionRequestByIdResponse> | undefined): boolean {
    return proto3.util.equals(QuerySignTransactionRequestByIdResponse, a, b);
  }
}
