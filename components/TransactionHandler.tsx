'use client';
import { useWriteContract } from 'wagmi';
import { encodeFunctionData, parseAbi } from 'viem';
type TransactionHandlerProps = {
  difyResponse: {
    metadata: {
      intent_data: {
        calldata: string;
        target: `0x${string}`;
      };
    };
  };
};

export function TransactionHandler({ difyResponse }: TransactionHandlerProps) {
  const { writeContract } = useWriteContract();

  const handleSign = () => {
    const { calldata, target } = difyResponse.metadata.intent_data;
    const abi = parseAbi([
        'function swap(address tokenIn, address tokenOut, uint256 amountIn)'
    ]);
    // writeContract({
    //   address: target,
    //   abi: abi,
    //   functionName: 'executeIntent', // 你的 EIP-712 包装函数
    //   args: [calldata],
    // });
  };

  return <button onClick={handleSign}>确认链上意图</button>;
}