import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Bot, Wallet, Workflow } from "lucide-react"


function Page() {
  return (
    <section className='w-full p-8'>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
      <Card>
  <CardHeader>
    <CardTitle className="text-sm flex justify-between">
      <h1>Providers</h1>
      <span><Bot className="w-5 h-5 text-muted-foreground"/></span>
    </CardTitle>
  </CardHeader>
  <CardContent className="text-3xl font-bold">
    <p>4</p>
  </CardContent>
  <CardFooter className="text-xs text-muted-foreground">
    <p>+20.1% from last month</p>
  </CardFooter>
</Card>
      <Card>
  <CardHeader>
    <CardTitle className="text-sm flex justify-between">
      <h1>Pipelines</h1>
      <span><Workflow className="w-5 h-5 text-muted-foreground"/></span>
    </CardTitle>
  </CardHeader>
  <CardContent className="text-3xl font-bold">
    <p>7</p>
  </CardContent>
  <CardFooter className="text-xs text-muted-foreground">
    <p>+20.1% from last month</p>
  </CardFooter>
</Card>
      <Card>
  <CardHeader>
    <CardTitle className="text-sm flex justify-between">
      <h1>Expenses</h1>
      <span><Wallet className="w-5 h-5 text-muted-foreground"/></span>
    </CardTitle>
  </CardHeader>
  <CardContent className="text-3xl font-bold">
    <p>$ 12,3</p>
  </CardContent>
  <CardFooter className="text-xs text-muted-foreground">
    <p>+20.1% from last month</p>
  </CardFooter>
</Card>
      <Card>
  <CardHeader>
    <CardTitle className="text-sm flex justify-between">
      <h1>Providers</h1>
      <span><Workflow className="w-5 h-5 text-muted-foreground"/></span>
    </CardTitle>
  </CardHeader>
  <CardContent className="text-3xl font-bold">
    <p>4</p>
  </CardContent>
  <CardFooter className="text-xs text-muted-foreground">
    <p>+20.1% from last month</p>
  </CardFooter>
</Card>
      </div>
    </section>
  )
}

export default Page