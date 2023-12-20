// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: fusionchain/treasury/wallet.proto

package types

import (
	fmt "fmt"
	proto "github.com/cosmos/gogoproto/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// WalletType specifies the Layer 1 blockchain that this wallet will be used
// for.
type WalletType int32

const (
	// The wallet type is missing (all wallets will be derived)
	WalletType_WALLET_TYPE_UNSPECIFIED WalletType = 0
	// The wallet type for native Fusion chain cosmos accounts (not ERC-20 QRDO
	// tokens)
	WalletType_WALLET_TYPE_FUSION WalletType = 1
	// The wallet type for mainnet ETH and its ERC-20 tokens (including non-native
	// QRDO)
	WalletType_WALLET_TYPE_ETH WalletType = 2
)

var WalletType_name = map[int32]string{
	0: "WALLET_TYPE_UNSPECIFIED",
	1: "WALLET_TYPE_FUSION",
	2: "WALLET_TYPE_ETH",
}

var WalletType_value = map[string]int32{
	"WALLET_TYPE_UNSPECIFIED": 0,
	"WALLET_TYPE_FUSION":      1,
	"WALLET_TYPE_ETH":         2,
}

func (x WalletType) String() string {
	return proto.EnumName(WalletType_name, int32(x))
}

func (WalletType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_51fb94234f9ffc53, []int{0}
}

func init() {
	proto.RegisterEnum("fusionchain.treasury.WalletType", WalletType_name, WalletType_value)
}

func init() { proto.RegisterFile("fusionchain/treasury/wallet.proto", fileDescriptor_51fb94234f9ffc53) }

var fileDescriptor_51fb94234f9ffc53 = []byte{
	// 194 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x4c, 0x2b, 0x2d, 0xce,
	0xcc, 0xcf, 0x4b, 0xce, 0x48, 0xcc, 0xcc, 0xd3, 0x2f, 0x29, 0x4a, 0x4d, 0x2c, 0x2e, 0x2d, 0xaa,
	0xd4, 0x2f, 0x4f, 0xcc, 0xc9, 0x49, 0x2d, 0xd1, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x41,
	0x52, 0xa2, 0x07, 0x53, 0xa2, 0x15, 0xc6, 0xc5, 0x15, 0x0e, 0x56, 0x15, 0x52, 0x59, 0x90, 0x2a,
	0x24, 0xcd, 0x25, 0x1e, 0xee, 0xe8, 0xe3, 0xe3, 0x1a, 0x12, 0x1f, 0x12, 0x19, 0xe0, 0x1a, 0x1f,
	0xea, 0x17, 0x1c, 0xe0, 0xea, 0xec, 0xe9, 0xe6, 0xe9, 0xea, 0x22, 0xc0, 0x20, 0x24, 0xc6, 0x25,
	0x84, 0x2c, 0xe9, 0x16, 0x1a, 0xec, 0xe9, 0xef, 0x27, 0xc0, 0x28, 0x24, 0xcc, 0xc5, 0x8f, 0x2c,
	0xee, 0x1a, 0xe2, 0x21, 0xc0, 0xe4, 0xe4, 0x7e, 0xe2, 0x91, 0x1c, 0xe3, 0x85, 0x47, 0x72, 0x8c,
	0x0f, 0x1e, 0xc9, 0x31, 0x4e, 0x78, 0x2c, 0xc7, 0x70, 0xe1, 0xb1, 0x1c, 0xc3, 0x8d, 0xc7, 0x72,
	0x0c, 0x51, 0xba, 0xe9, 0x99, 0x25, 0x19, 0xa5, 0x49, 0x7a, 0xc9, 0xf9, 0xb9, 0xfa, 0x85, 0x45,
	0xa9, 0x29, 0xf9, 0xfa, 0xc8, 0x6e, 0xaf, 0x40, 0xb8, 0xbe, 0xa4, 0xb2, 0x20, 0xb5, 0x38, 0x89,
	0x0d, 0xec, 0x7a, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0xb8, 0xe3, 0xa0, 0x5a, 0xe2, 0x00,
	0x00, 0x00,
}
