import React, { useContext } from 'react';
import BlockType from '@interfaces/BlockType';

type BlockContextType = {
  addNewBlockAtIndex: (
    block: BlockType,
    idx: number,
    onCreateCallback?: (block: BlockType) => void,
  ) => void;
  setBlocks: (blocks: BlockType[]) => void;
  setEditingBlock: (data: {
    upstreamBlocks: {
      block: BlockType;
      values: BlockType[];
    };
  }) => void;
  setRunningBlocks: (blocks: BlockType[]) => void;
  setSelectedBlock: (block: BlockType) => void;
};

const BlockContext = React.createContext<BlockContextType>({
  addNewBlockAtIndex: null,
  setBlocks: null,
  setEditingBlock: null,
  setRunningBlocks: null,
  setSelectedBlock: null,
});

export const useBlockContext = () => useContext(BlockContext);

export default BlockContext;
