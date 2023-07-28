package client

import (
	"context"

	"github.com/cosmos/cosmos-sdk/types/query"
	"gitlab.qredo.com/qrdochain/fusionchain/x/treasury/types"
	"google.golang.org/grpc"
)

// TreasuryQueryClient is the client for the treasury module.
type TreasuryQueryClient struct {
	client types.QueryClient
}

func NewTreasuryClient(c *grpc.ClientConn) *TreasuryQueryClient {
	return &TreasuryQueryClient{
		client: types.NewQueryClient(c),
	}
}

func (t *TreasuryQueryClient) PendingKeyRequests(ctx context.Context, page *query.PageRequest, keyringID uint64) ([]*types.KeyRequest, error) {
	res, err := t.client.KeyRequests(ctx, &types.QueryKeyRequestsRequest{
		Pagination: page,
		KeyringId:  keyringID,
		XStatus: &types.QueryKeyRequestsRequest_Status{
			Status: types.KeyRequestStatus_KEY_REQUEST_STATUS_PENDING,
		},
	})
	if err != nil {
		return nil, err
	}

	return res.KeyRequests, nil
}

func (t *TreasuryQueryClient) GetKeyRequest(ctx context.Context, requestID uint64) (*types.KeyRequest, error) {
	res, err := t.client.KeyRequestById(ctx, &types.QueryKeyRequestByIdRequest{
		Id: requestID,
	})
	if err != nil {
		return nil, err
	}

	return res.KeyRequest, nil
}

func (t *TreasuryQueryClient) PendingSignatureRequests(ctx context.Context, keyringID uint64) ([]*types.SignRequest, error) {
	res, err := t.client.SignatureRequests(ctx, &types.QuerySignatureRequestsRequest{
		Pagination: &query.PageRequest{
			Limit: 10,
		},
		KeyringId: keyringID,
		XStatus: &types.QuerySignatureRequestsRequest_Status{
			Status: types.SignRequestStatus_SIGN_REQUEST_STATUS_PENDING,
		},
	})
	if err != nil {
		return nil, err
	}

	return res.SignRequests, nil
}

func (t *TreasuryQueryClient) GetSignatureRequest(ctx context.Context, requestID uint64) (*types.SignRequest, error) {
	res, err := t.client.SignatureRequestById(ctx, &types.QuerySignatureRequestByIdRequest{
		Id: requestID,
	})
	if err != nil {
		return nil, err
	}

	return res.SignRequest, nil
}

func (t *TreasuryQueryClient) SignedTransactions(ctx context.Context, pagination *query.PageRequest, walletType types.WalletType) (*types.QuerySignTransactionRequestsResponse, error) {
	res, err := t.client.SignTransactionRequests(ctx, &types.QuerySignTransactionRequestsRequest{
		Pagination: pagination,
		WalletType: walletType,
		XStatus: &types.QuerySignTransactionRequestsRequest_Status{
			Status: types.SignRequestStatus_SIGN_REQUEST_STATUS_FULFILLED,
		},
	})
	if err != nil {
		return nil, err
	}

	return res, nil
}
