import { Handle, NodeProps, Position } from 'reactflow';
import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { GptIcon, HuggingFaceIcon } from '@/icons/chatbots';
 
export type CounterData = {
  initialCount?: number;
};
 
export default function CounterNode(props: NodeProps<CounterData>) {
 
  return (
    <>
     <Card>
          <CardContent className="py-4">
            <div className='flex'>
            <GptIcon className="my-1" />
            <HuggingFaceIcon className="my-1" />
            </div>
            <div className="justify-start flex items-center">
              <div>
                <h1>My First Pipeline</h1>
                <p className="text-sm text-muted-foreground">
                  This is a example of Chatbot Pipeline
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
     <Handle type="target" isConnectable position={Position.Top} className='!w-2.5 !h-2.5'/>
    <Handle type="source"  isConnectable position={Position.Bottom} className='!w-2.5 !h-2.5'/>
    {/* <Handle type="target" isConnectable  position={Position.Left} className='!w-2.5 !h-2.5'/>
    <Handle type="target" isConnectable position={Position.Right} className='!w-2.5 !h-2.5'/> */}
    </>
  );
}