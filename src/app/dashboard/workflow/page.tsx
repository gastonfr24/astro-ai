'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCallback, useState } from 'react';
import ReactFlow, { Background, Controls, MiniMap, Viewport, addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import '@/styles/flow.css';
import { useTheme } from 'next-themes'
import CounterNode from "@/components/workflow/ai-node";

const nodeTypes = {
  counterNode: CounterNode,
};

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Hello' },
    type: 'counterNode',
  },
  {
    id: '2',
    position: { x: 100, y: 100 },
    data: { label: 'World', initialCount: 1 },
    type: 'counterNode',
  },
];

const initialEdges = [{ id: '1-2', source: '1', target: '2' }];


function Page() {
  const { theme } = useTheme()
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // Nodes Control
  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );

  // Connections
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  // Create Connections
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const defaultViewport: Viewport = { x: 10, y: 15, zoom: 1.2 };
  return (
    <section className='w-ful -mt-16 flex'>
          <div className='h-screen w-full pt-16'>
          <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultViewport={defaultViewport}
        // fitView
      >
        <Background />
        <Controls />
        <MiniMap pannable zoomable maskColor='060606'/>
      </ReactFlow>
    </div>
    <div className='sm:w-64 lg:w-96 h-screen bg-new-black pt-16'>
    <Tabs defaultValue="node" className="w-full">
      <TabsList className='w-full bg-new-black'>
        <TabsTrigger value="node">Node</TabsTrigger>
        <TabsTrigger value="settings">Workflow</TabsTrigger>
      </TabsList>
      <TabsContent value="node" className='p-4'>Make changes to your account here.</TabsContent>
      <TabsContent value="settings" className='p-4'>Change your password here.</TabsContent>
    </Tabs>
    </div>
    </section>
  )
}

export default Page