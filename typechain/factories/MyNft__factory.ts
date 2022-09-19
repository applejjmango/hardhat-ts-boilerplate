/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MyNft, MyNftInterface } from "../MyNft";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002985380380620029858339818101604052810190620000379190620002ca565b81818160009080519060200190620000519291906200007d565b5080600190805190602001906200006a9291906200007d565b50505060006006819055505050620003b3565b8280546200008b906200037e565b90600052602060002090601f016020900481019282620000af5760008555620000fb565b82601f10620000ca57805160ff1916838001178555620000fb565b82800160010185558215620000fb579182015b82811115620000fa578251825591602001919060010190620000dd565b5b5090506200010a91906200010e565b5090565b5b80821115620001295760008160009055506001016200010f565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000196826200014b565b810181811067ffffffffffffffff82111715620001b857620001b76200015c565b5b80604052505050565b6000620001cd6200012d565b9050620001db82826200018b565b919050565b600067ffffffffffffffff821115620001fe57620001fd6200015c565b5b62000209826200014b565b9050602081019050919050565b60005b838110156200023657808201518184015260208101905062000219565b8381111562000246576000848401525b50505050565b6000620002636200025d84620001e0565b620001c1565b90508281526020810184848401111562000282576200028162000146565b5b6200028f84828562000216565b509392505050565b600082601f830112620002af57620002ae62000141565b5b8151620002c18482602086016200024c565b91505092915050565b60008060408385031215620002e457620002e362000137565b5b600083015167ffffffffffffffff8111156200030557620003046200013c565b5b620003138582860162000297565b925050602083015167ffffffffffffffff8111156200033757620003366200013c565b5b620003458582860162000297565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200039757607f821691505b602082108103620003ad57620003ac6200034f565b5b50919050565b6125c280620003c36000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063c87b56dd11610066578063c87b56dd14610282578063d082e381146102b2578063d85d3d27146102d0578063e985e9c5146102ec576100f5565b806370a08231146101fc57806395d89b411461022c578063a22cb4651461024a578063b88d4fde14610266576100f5565b8063095ea7b3116100d3578063095ea7b31461017857806323b872dd1461019457806342842e0e146101b05780636352211e146101cc576100f5565b806301ffc9a7146100fa57806306fdde031461012a578063081812fc14610148575b600080fd5b610114600480360381019061010f91906116c7565b61031c565b604051610121919061170f565b60405180910390f35b6101326103fe565b60405161013f91906117c3565b60405180910390f35b610162600480360381019061015d919061181b565b610490565b60405161016f9190611889565b60405180910390f35b610192600480360381019061018d91906118d0565b6104d6565b005b6101ae60048036038101906101a99190611910565b6105ed565b005b6101ca60048036038101906101c59190611910565b61064d565b005b6101e660048036038101906101e1919061181b565b61066d565b6040516101f39190611889565b60405180910390f35b61021660048036038101906102119190611963565b61071e565b604051610223919061199f565b60405180910390f35b6102346107d5565b60405161024191906117c3565b60405180910390f35b610264600480360381019061025f91906119e6565b610867565b005b610280600480360381019061027b9190611b5b565b61087d565b005b61029c6004803603810190610297919061181b565b6108df565b6040516102a991906117c3565b60405180910390f35b6102ba6109cc565b6040516102c7919061199f565b60405180910390f35b6102ea60048036038101906102e59190611c7f565b6109d2565b005b61030660048036038101906103019190611cc8565b610a05565b604051610313919061170f565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103e757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103f757506103f682610a99565b5b9050919050565b60606000805461040d90611d37565b80601f016020809104026020016040519081016040528092919081815260200182805461043990611d37565b80156104865780601f1061045b57610100808354040283529160200191610486565b820191906000526020600020905b81548152906001019060200180831161046957829003601f168201915b5050505050905090565b600061049b82610b03565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104e18261066d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610551576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054890611dda565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610570610b4e565b73ffffffffffffffffffffffffffffffffffffffff16148061059f575061059e81610599610b4e565b610a05565b5b6105de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d590611e6c565b60405180910390fd5b6105e88383610b56565b505050565b6105fe6105f8610b4e565b82610c0f565b61063d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063490611efe565b60405180910390fd5b610648838383610ca4565b505050565b6106688383836040518060200160405280600081525061087d565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610715576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070c90611f6a565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361078e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078590611ffc565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107e490611d37565b80601f016020809104026020016040519081016040528092919081815260200182805461081090611d37565b801561085d5780601f106108325761010080835404028352916020019161085d565b820191906000526020600020905b81548152906001019060200180831161084057829003601f168201915b5050505050905090565b610879610872610b4e565b8383610f0a565b5050565b61088e610888610b4e565b83610c0f565b6108cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c490611efe565b60405180910390fd5b6108d984848484611076565b50505050565b60606108ea826110d2565b610929576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109209061208e565b60405180910390fd5b60076000838152602001908152602001600020805461094790611d37565b80601f016020809104026020016040519081016040528092919081815260200182805461097390611d37565b80156109c05780601f10610995576101008083540402835291602001916109c0565b820191906000526020600020905b8154815290600101906020018083116109a357829003601f168201915b50505050509050919050565b60065481565b6109de3360065461113e565b6109ea6006548261115c565b600660008154809291906109fd906120dd565b919050555050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610b0c816110d2565b610b4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4290611f6a565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610bc98361066d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c1b8361066d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c5d5750610c5c8185610a05565b5b80610c9b57508373ffffffffffffffffffffffffffffffffffffffff16610c8384610490565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610cc48261066d565b73ffffffffffffffffffffffffffffffffffffffff1614610d1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1190612197565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8090612229565b60405180910390fd5b610d948383836111d0565b610d9f600082610b56565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610def9190612249565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e46919061227d565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610f058383836111d5565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610f78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6f9061231f565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611069919061170f565b60405180910390a3505050565b611081848484610ca4565b61108d848484846111da565b6110cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c3906123b1565b60405180910390fd5b50505050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611158828260405180602001604052806000815250611361565b5050565b611165826110d2565b6111a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119b9061208e565b60405180910390fd5b806007600084815260200190815260200160002090805190602001906111cb9291906115b8565b505050565b505050565b505050565b60006111fb8473ffffffffffffffffffffffffffffffffffffffff166113bc565b15611354578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611224610b4e565b8786866040518563ffffffff1660e01b81526004016112469493929190612426565b6020604051808303816000875af192505050801561128257506040513d601f19601f8201168201806040525081019061127f9190612487565b60015b611304573d80600081146112b2576040519150601f19603f3d011682016040523d82523d6000602084013e6112b7565b606091505b5060008151036112fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112f3906123b1565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611359565b600190505b949350505050565b61136b83836113df565b61137860008484846111da565b6113b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ae906123b1565b60405180910390fd5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361144e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161144590612500565b60405180910390fd5b611457816110d2565b15611497576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148e9061256c565b60405180910390fd5b6114a3600083836111d0565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114f3919061227d565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46115b4600083836111d5565b5050565b8280546115c490611d37565b90600052602060002090601f0160209004810192826115e6576000855561162d565b82601f106115ff57805160ff191683800117855561162d565b8280016001018555821561162d579182015b8281111561162c578251825591602001919060010190611611565b5b50905061163a919061163e565b5090565b5b8082111561165757600081600090555060010161163f565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6116a48161166f565b81146116af57600080fd5b50565b6000813590506116c18161169b565b92915050565b6000602082840312156116dd576116dc611665565b5b60006116eb848285016116b2565b91505092915050565b60008115159050919050565b611709816116f4565b82525050565b60006020820190506117246000830184611700565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611764578082015181840152602081019050611749565b83811115611773576000848401525b50505050565b6000601f19601f8301169050919050565b60006117958261172a565b61179f8185611735565b93506117af818560208601611746565b6117b881611779565b840191505092915050565b600060208201905081810360008301526117dd818461178a565b905092915050565b6000819050919050565b6117f8816117e5565b811461180357600080fd5b50565b600081359050611815816117ef565b92915050565b60006020828403121561183157611830611665565b5b600061183f84828501611806565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061187382611848565b9050919050565b61188381611868565b82525050565b600060208201905061189e600083018461187a565b92915050565b6118ad81611868565b81146118b857600080fd5b50565b6000813590506118ca816118a4565b92915050565b600080604083850312156118e7576118e6611665565b5b60006118f5858286016118bb565b925050602061190685828601611806565b9150509250929050565b60008060006060848603121561192957611928611665565b5b6000611937868287016118bb565b9350506020611948868287016118bb565b925050604061195986828701611806565b9150509250925092565b60006020828403121561197957611978611665565b5b6000611987848285016118bb565b91505092915050565b611999816117e5565b82525050565b60006020820190506119b46000830184611990565b92915050565b6119c3816116f4565b81146119ce57600080fd5b50565b6000813590506119e0816119ba565b92915050565b600080604083850312156119fd576119fc611665565b5b6000611a0b858286016118bb565b9250506020611a1c858286016119d1565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611a6882611779565b810181811067ffffffffffffffff82111715611a8757611a86611a30565b5b80604052505050565b6000611a9a61165b565b9050611aa68282611a5f565b919050565b600067ffffffffffffffff821115611ac657611ac5611a30565b5b611acf82611779565b9050602081019050919050565b82818337600083830152505050565b6000611afe611af984611aab565b611a90565b905082815260208101848484011115611b1a57611b19611a2b565b5b611b25848285611adc565b509392505050565b600082601f830112611b4257611b41611a26565b5b8135611b52848260208601611aeb565b91505092915050565b60008060008060808587031215611b7557611b74611665565b5b6000611b83878288016118bb565b9450506020611b94878288016118bb565b9350506040611ba587828801611806565b925050606085013567ffffffffffffffff811115611bc657611bc561166a565b5b611bd287828801611b2d565b91505092959194509250565b600067ffffffffffffffff821115611bf957611bf8611a30565b5b611c0282611779565b9050602081019050919050565b6000611c22611c1d84611bde565b611a90565b905082815260208101848484011115611c3e57611c3d611a2b565b5b611c49848285611adc565b509392505050565b600082601f830112611c6657611c65611a26565b5b8135611c76848260208601611c0f565b91505092915050565b600060208284031215611c9557611c94611665565b5b600082013567ffffffffffffffff811115611cb357611cb261166a565b5b611cbf84828501611c51565b91505092915050565b60008060408385031215611cdf57611cde611665565b5b6000611ced858286016118bb565b9250506020611cfe858286016118bb565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611d4f57607f821691505b602082108103611d6257611d61611d08565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611dc4602183611735565b9150611dcf82611d68565b604082019050919050565b60006020820190508181036000830152611df381611db7565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000611e56603e83611735565b9150611e6182611dfa565b604082019050919050565b60006020820190508181036000830152611e8581611e49565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000611ee8602e83611735565b9150611ef382611e8c565b604082019050919050565b60006020820190508181036000830152611f1781611edb565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611f54601883611735565b9150611f5f82611f1e565b602082019050919050565b60006020820190508181036000830152611f8381611f47565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000611fe6602983611735565b9150611ff182611f8a565b604082019050919050565b6000602082019050818103600083015261201581611fd9565b9050919050565b7f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612078602c83611735565b91506120838261201c565b604082019050919050565b600060208201905081810360008301526120a78161206b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006120e8826117e5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361211a576121196120ae565b5b600182019050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612181602583611735565b915061218c82612125565b604082019050919050565b600060208201905081810360008301526121b081612174565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612213602483611735565b915061221e826121b7565b604082019050919050565b6000602082019050818103600083015261224281612206565b9050919050565b6000612254826117e5565b915061225f836117e5565b925082821015612272576122716120ae565b5b828203905092915050565b6000612288826117e5565b9150612293836117e5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156122c8576122c76120ae565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612309601983611735565b9150612314826122d3565b602082019050919050565b60006020820190508181036000830152612338816122fc565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061239b603283611735565b91506123a68261233f565b604082019050919050565b600060208201905081810360008301526123ca8161238e565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006123f8826123d1565b61240281856123dc565b9350612412818560208601611746565b61241b81611779565b840191505092915050565b600060808201905061243b600083018761187a565b612448602083018661187a565b6124556040830185611990565b818103606083015261246781846123ed565b905095945050505050565b6000815190506124818161169b565b92915050565b60006020828403121561249d5761249c611665565b5b60006124ab84828501612472565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006124ea602083611735565b91506124f5826124b4565b602082019050919050565b60006020820190508181036000830152612519816124dd565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612556601c83611735565b915061256182612520565b602082019050919050565b6000602082019050818103600083015261258581612549565b905091905056fea264697066735822122051c0634c86767366ca02cf251e1cc588901ed5d83b4c9532fc9c9dfdb85c7dc564736f6c634300080d0033";

type MyNftConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyNftConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyNft__factory extends ContractFactory {
  constructor(...args: MyNftConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MyNft";
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MyNft> {
    return super.deploy(name, symbol, overrides || {}) as Promise<MyNft>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): MyNft {
    return super.attach(address) as MyNft;
  }
  connect(signer: Signer): MyNft__factory {
    return super.connect(signer) as MyNft__factory;
  }
  static readonly contractName: "MyNft";
  public readonly contractName: "MyNft";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyNftInterface {
    return new utils.Interface(_abi) as MyNftInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MyNft {
    return new Contract(address, _abi, signerOrProvider) as MyNft;
  }
}
