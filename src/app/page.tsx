import { Button } from "@/components/ui/button"
import { TaskTable } from "./task-table"
import { Sidebar } from "./sidebar"
import { LayoutGrid, Calendar, Table2, Plus, Search, Filter, MoreHorizontal } from "lucide-react"

export default function Page() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="px-8 py-6">
            <div className="">
                <img src="https://images.unsplash.com/photo-1739477021967-e14dc3938e56?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-[6rem] rounded-xl object-cover" />
            </div>
          <div className="flex items-center justify-between mb-5 mt-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl">
                👨
              </div>
              <h1 className="text-[30px] font-title2 font-bold text-[#101828]">Weekly design goals</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                <div className="w-[26px] h-[26px] rounded-full border-2 border-white bg-[#F2F4F7]" />
                <div className="w-[26px] h-[26px] rounded-full border-2 border-white bg-[#F2F4F7]" />
                <div className="w-[26px] h-[26px] rounded-full border-2 border-white bg-[#F2F4F7]" />
                <Button
                  variant="outline"
                  size="sm"
                  className="h-[26px] text-[11px] font-medium px-[6px] ml-1 rounded-full border-[#D0D5DD]"
                >
                  +5
                </Button>
              </div>
              <Button
                size="sm"
                className="h-[26px] px-3 text-[11px] font-medium bg-[#444CE7] hover:bg-[#444CE7]/90 rounded"
              >
                Share
              </Button>
            </div>
          </div>


        {/* Part of the breadcrumbs  */}
          <div className="flex items-center gap-2 text-[11px] text-[#475467] mb-6">
            <span>All Task</span>
            <span>/</span>
            <span>Design project</span>
            <span>/</span>
            <span className="text-[#101828] font-medium">Weekly design goals</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-[30px] text-[11px] font-medium px-3 text-[#344054] border-[#D0D5DD]"
              >
                <LayoutGrid className="w-3.5 h-3.5 mr-1.5" />
                Board view
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-[30px] text-[11px] font-medium px-3 bg-[#F9FAFB] border-[#D0D5DD] text-[#101828]"
              >
                <Table2 className="w-3.5 h-3.5 mr-1.5" />
                Table view
                <span className="ml-1.5 px-1.5 py-0.5 rounded bg-[#F2F4F7] text-[10px] font-medium text-[#475467]">
                  23 Task
                </span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-[30px] text-[11px] font-medium px-3 text-[#344054] border-[#D0D5DD]"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                Calendar view
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-[30px] text-[11px] font-medium text-[#444CE7] hover:bg-transparent hover:text-[#444CE7]"
              >
                <Plus className="w-3.5 h-3.5 mr-1.5" />
                Add view
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2 top-1/2 transform -translate-y-1/2 text-[#667085]" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-8 h-[30px] w-[180px] rounded-md border border-[#D0D5DD] bg-white px-3 py-1 text-[11px] placeholder:text-[#667085] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D0D5DD]"
                />
              </div>
              <Button variant="outline" size="icon" className="h-[30px] w-[30px] border-[#D0D5DD]">
                <Filter className="w-3.5 h-3.5 text-[#667085]" />
              </Button>
              <Button variant="outline" size="icon" className="h-[30px] w-[30px] border-[#D0D5DD]">
                <MoreHorizontal className="w-3.5 h-3.5 text-[#667085]" />
              </Button>
            </div>
          </div>

          <TaskTable />
        </div>
      </main>
    </div>
  )
}
