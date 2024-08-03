import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import {
  Triangle,
  SquareTerminal,
  Bot,
  Code2,
  Book,
  Settings2,
  LifeBuoy,
  SquareUser,
  HomeIcon,
  SquareKanban,
  ClipboardList,
  PanelLeftOpen,
  ShoppingBag,
  LogOut,
} from "lucide-react";
import { Button } from "./ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
function Sidebar() {
  return (
    <TooltipProvider>
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle className="size-5 fill-foreground" />
          </Button>
        </div>
        <nav className="grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg bg-muted bg-[#7695FD]"
                aria-label="Playground"
              >
                <HomeIcon className="size-5 " />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Models"
              >
                <SquareKanban />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="API"
              >
                <ClipboardList />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Documentation"
              >
                <PanelLeftOpen />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Settings"
              >
                <ShoppingBag />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}></TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Help"
              >
                <LogOut />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
            </TooltipContent>
          </Tooltip>
       
        </nav>
      </aside>
    </TooltipProvider>
  );
}

export default Sidebar;
