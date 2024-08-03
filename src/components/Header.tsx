import { Bell, Mail, Settings, Share } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
function Header() {
  return (
    <header className="sticky top-0 z-10 justify-between flex h-[80px] items-center gap-1 border-b bg-background px-4">
      <Input className="max-w-[250px] bg-[#1F2029]" placeholder="Search" />
      <div className="flex gap-x-2">
        <Button
          size="sm"
          className="ml-auto w-[50px] bg-[#1F2029] h-[50px] gap-1.5 text-sm rounded-full"
        >
          <Settings color="#d7d7d7" />
        </Button>
        <Button
          size="sm"
          className="ml-auto w-[50px] bg-[#1F2029] h-[50px] gap-1.5 text-sm  rounded-full"
        >
          <Mail color="#d7d7d7" />
        </Button>
        <Button
          size="sm"
          className="ml-auto w-[50px] bg-[#1F2029] h-[50px] gap-1.5 text-sm  rounded-full"
        >
          <Bell color="#d7d7d7" />
        </Button>

        <Avatar className="ml-auto w-[50px] bg-[#1F2029] h-[50px] gap-1.5 text-sm  rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default Header