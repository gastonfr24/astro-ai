import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, Wallet, Workflow } from "lucide-react";
import { GptIcon, HuggingFaceIcon } from "@/icons/chatbots";
import { Switch } from "@/components/ui/switch";

function Page() {
  return (
    <section className="w-full p-8">
      <h1 className="pb-4 text-xl font-semibold">Summary</h1>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex justify-between">
              <h1>Providers</h1>
              <span>
                <Bot className="w-5 h-5 text-muted-foreground" />
              </span>
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
              <span>
                <Workflow className="w-5 h-5 text-muted-foreground" />
              </span>
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
              <span>
                <Wallet className="w-5 h-5 text-muted-foreground" />
              </span>
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
              <span>
                <Workflow className="w-5 h-5 text-muted-foreground" />
              </span>
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
      <h1 className="pb-4 pt-8 text-xl font-semibold">Pipelines</h1>
      <div className="flex flex-col gap-4">
        <Card>
          <CardContent className="py-4">
            <GptIcon className="my-1" />
            <div className="justify-between flex items-center">
              <div>
                <h1>My First Pipeline</h1>
                <p className="text-sm text-muted-foreground">
                  This is a example of Chatbot Pipeline
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-xs">
                </span>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <div className="flex gap-2 items-center">
            <GptIcon className="my-1" />
            <HuggingFaceIcon className="my-1" />
            </div>
            <div className="justify-between flex items-center">
              <div>
                <h1>My First Pipeline</h1>
                <p className="text-sm text-muted-foreground">
                  This is a example of Chatbot Pipeline
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-xs">
                </span>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Page;
