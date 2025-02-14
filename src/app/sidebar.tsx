import { Button } from "@/components/ui/button";
import { BarChart2, ChevronDown, Dumbbell, Plus, Search } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-[240px] border-r border-[#EAECF0] flex flex-col bg-[#FCFCFD]">
      <div className="p-3 border-b border-[#EAECF0]">
        <div className="flex items-center gap-2 mb-3 px-1">
          <div className="w-10 h-10 rounded-full bg-black">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="rounded-full p-[.8px]"
            />
          </div>
          <div className="flex items-center">
            <span className="text-[13px] font-medium text-[#101828]">
              Rafie's pages
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 -ml-1 hover:bg-transparent"
            >
              <ChevronDown className="w-3.5 h-3.5 text-[#667085]" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-2 top-1/2 transform -translate-y-1/2 text-[#667085]" />
          <input
            type="text"
            placeholder="Press '/' to search"
            className="w-full pl-8 h-[30px] rounded-md border border-[#D0D5DD] bg-white px-3 py-1 text-[11px] placeholder:text-[#667085] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D0D5DD]"
          />
        </div>
      </div>
      <div className="flex-1 overflow-auto py-3">
        <div className="space-y-6 px-3">
          <div>
            <div className="flex items-center justify-between mb-1 px-1">
              <span className="text-[11px] font-semibold text-[#667085]">
                Personal Task
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 hover:bg-[#F2F4F7]"
              >
                <Plus className="w-3.5 h-3.5 text-[#667085]" />
              </Button>
            </div>
            <div className="space-y-0.5">
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
                Personal Task
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                Daily project
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                Monthly shopping
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
              >
                <Dumbbell className="w-3.5 h-3.5 mr-2 text-[#667085]" />
                Daily workout
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                Personal Task
              </Button>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1 px-1">
              <span className="text-[11px] font-semibold text-[#667085]">
                Team project
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 hover:bg-[#F2F4F7]"
              >
                <Plus className="w-3.5 h-3.5 text-[#667085]" />
              </Button>
            </div>
            <div className="space-y-0.5">
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2" />
                Design Project
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal bg-[#EEF4FF] text-[#444CE7] hover:bg-[#EEF4FF]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#444CE7] mr-2" />
                Weekly Design Goals
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2" />
                Business goals
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-2" />
                Client brief
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                Banana UI/UX
              </Button>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1 px-1">
              <span className="text-[11px] font-semibold text-[#667085]">
                Other
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 hover:bg-[#F2F4F7]"
              >
                <Plus className="w-3.5 h-3.5 text-[#667085]" />
              </Button>
            </div>
            <div className="space-y-0.5">
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
              >
                <BarChart2 className="w-3.5 h-3.5 mr-2 text-[#667085]" />
                Task distribution
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
              >
                <BarChart2 className="w-3.5 h-3.5 mr-2 text-[#667085]" />
                Income graph
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2" />
                Team Goals
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                Internal Team
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 border-t border-[#EAECF0]">
        <Button
          variant="ghost"
          className="w-full justify-start h-[26px] text-[13px] font-normal text-[#344054] hover:bg-[#F2F4F7]"
        >
          <Plus className="w-3.5 h-3.5 mr-2 text-[#667085]" />
          New workspace
        </Button>
      </div>
    </div>
  );
}
